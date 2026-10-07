import { apiSuccess } from "@/lib/response";
import { clearSessionCookie } from "@/lib/session";

export async function POST() {
  try {
    await clearSessionCookie();
    return apiSuccess({
      message: "Logged out successfully.",
    });
  } catch (error) {
    console.error("Logout error:", error);
    // Even if clearing fails, ensure a safe response
    return apiSuccess({
      message: "Logged out.",
    });
  }
}
