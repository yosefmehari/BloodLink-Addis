import crypto from "crypto";
import { cookies } from "next/headers";

export const SESSION_COOKIE_NAME = "bloodlink_session";
const SESSION_MAX_AGE_SECONDS = 7 * 24 * 60 * 60; // 7 days

function getSessionSecret(): string {
  return (
    process.env.SESSION_SECRET ||
    process.env.NEXTAUTH_SECRET ||
    "bloodlink-addis-production-grade-session-secret-2026-key"
  );
}

export interface SessionPayload {
  userId: string;
  role: string;
  exp: number; // Unix timestamp in seconds
}

/**
 * Creates a cryptographically signed HMAC-SHA256 session token
 */
export function signSessionToken(payload: { userId: string; role: string }): string {
  const secret = getSessionSecret();
  const sessionData: SessionPayload = {
    userId: payload.userId,
    role: payload.role,
    exp: Math.floor(Date.now() / 1000) + SESSION_MAX_AGE_SECONDS,
  };

  const payloadEncoded = Buffer.from(JSON.stringify(sessionData)).toString("base64url");
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payloadEncoded)
    .digest("base64url");

  return `${payloadEncoded}.${signature}`;
}

/**
 * Verifies the token signature, expiration, and returns the payload or null
 */
export function verifySessionToken(token: string | null | undefined): SessionPayload | null {
  if (!token || typeof token !== "string") return null;

  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [payloadEncoded, signature] = parts;
  const secret = getSessionSecret();

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(payloadEncoded)
    .digest("base64url");

  // Constant-time comparison to prevent timing attacks
  const sigBuffer = Buffer.from(signature);
  const expectedSigBuffer = Buffer.from(expectedSignature);

  if (sigBuffer.length !== expectedSigBuffer.length) {
    return null;
  }

  if (!crypto.timingSafeEqual(sigBuffer, expectedSigBuffer)) {
    return null;
  }

  try {
    const jsonStr = Buffer.from(payloadEncoded, "base64url").toString("utf-8");
    const payload = JSON.parse(jsonStr) as SessionPayload;

    const nowSeconds = Math.floor(Date.now() / 1000);
    if (!payload.exp || payload.exp < nowSeconds) {
      return null;
    }

    if (!payload.userId || !payload.role) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

/**
 * Sets the HTTP-only authentication cookie
 */
export async function setSessionCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
}

/**
 * Clears the session cookie on logout
 */
export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
    expires: new Date(0),
  });
}

/**
 * Retrieves the session token from incoming request cookies
 */
export async function getSessionTokenFromCookies(): Promise<string | null> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(SESSION_COOKIE_NAME);
  return cookie?.value ?? null;
}
