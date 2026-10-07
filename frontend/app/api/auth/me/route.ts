import { getCurrentUser } from "@/lib/auth";
import { apiError, apiSuccess } from "@/lib/response";

export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return apiError("Authentication required.", 401);
    }

    return apiSuccess({
      user,
    });
  } catch (error) {
    console.error("Auth me error:", error);
    return apiError("An unexpected server error occurred.", 500);
  }
}
