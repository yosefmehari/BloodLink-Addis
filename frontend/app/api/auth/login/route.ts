import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { apiError, apiSuccess } from "@/lib/response";
import { setSessionCookie, signSessionToken } from "@/lib/session";
import { isValidEmail, normalizeEmail } from "@/lib/validation";

export async function POST(req: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return apiError("Invalid JSON request body.", 400);
    }

    if (!body || typeof body !== "object") {
      return apiError("Request body must be an object.", 400);
    }

    const { email, password } = body as Record<string, unknown>;

    // 1. Validate email and password presence
    if (!isValidEmail(email)) {
      return apiError("A valid email address is required.", 400);
    }

    if (!password || typeof password !== "string" || !password.trim()) {
      return apiError("Password is required.", 400);
    }

    const cleanEmail = normalizeEmail(email);

    // 2. Find user by email
    const user = await prisma.user.findUnique({
      where: { email: cleanEmail },
    });

    if (!user) {
      // Use uniform error message to avoid account enumeration
      return apiError("Invalid email or password.", 401);
    }

    // 3. Compare password hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return apiError("Invalid email or password.", 401);
    }

    // 4. Create cryptographically signed session token
    const token = signSessionToken({
      userId: user.id,
      role: user.role,
    });

    // 5. Set secure HTTP-only cookie
    await setSessionCookie(token);

    // 6. Return safe user data
    return apiSuccess({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        bloodType: user.bloodType,
        location: user.location,
        isAvailable: user.isAvailable,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      message: "Login successful.",
    });
  } catch (error) {
    console.error("Login error:", error);
    return apiError("An unexpected server error occurred during login.", 500);
  }
}
