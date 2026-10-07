import { UserRole, prisma } from "@/lib/prisma";
import { getSessionTokenFromCookies, verifySessionToken } from "@/lib/session";
import { apiError } from "@/lib/response";
import { sanitizeUser } from "@/lib/validation";

export type SafeUser = ReturnType<typeof sanitizeUser>;

/**
 * Retrieves the currently authenticated user from session cookies.
 * Returns null if not authenticated or user no longer exists.
 */
export async function getCurrentUser() {
  const token = await getSessionTokenFromCookies();
  if (!token) return null;

  const payload = verifySessionToken(token);
  if (!payload) return null;

  try {
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        bloodType: true,
        location: true,
        isAvailable: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return user;
  } catch (error) {
    console.error("Error retrieving current user:", error);
    return null;
  }
}

/**
 * Enforces that the request is authenticated.
 * Returns `{ user, errorResponse: null }` on success,
 * or `{ user: null, errorResponse: NextResponse }` with 401 on failure.
 */
export async function requireAuth() {
  const user = await getCurrentUser();
  if (!user) {
    return {
      user: null,
      errorResponse: apiError("Authentication required. Please log in.", 401),
    };
  }

  return {
    user,
    errorResponse: null,
  };
}

/**
 * Enforces that the request is authenticated AND has one of the allowed roles.
 * Returns `{ user, errorResponse: null }` on success,
 * 401 if unauthenticated, or 403 if authenticated but unauthorized.
 */
export async function requireRole(allowedRoles: UserRole | UserRole[]) {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) {
    return { user: null, errorResponse };
  }

  const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];

  if (!roles.includes(user.role)) {
    return {
      user: null,
      errorResponse: apiError(
        "Forbidden: You do not have permission to access this resource.",
        403
      ),
    };
  }

  return {
    user,
    errorResponse: null,
  };
}
