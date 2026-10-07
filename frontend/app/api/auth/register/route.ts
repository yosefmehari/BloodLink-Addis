import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { UserRole, prisma } from "@/lib/prisma";
import { apiError, apiSuccess } from "@/lib/response";
import {
  isValidEmail,
  isValidPassword,
  isValidPublicRole,
  normalizeBloodType,
  normalizeEmail,
} from "@/lib/validation";

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

    const { name, email, password, role, phone, bloodType, location } = body as Record<
      string,
      unknown
    >;

    // 1. Validate name
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return apiError("Full name is required (minimum 2 characters).", 400);
    }

    // 2. Validate email
    if (!isValidEmail(email)) {
      return apiError("A valid email address is required.", 400);
    }
    const cleanEmail = normalizeEmail(email);

    // 3. Validate password
    if (!isValidPassword(password)) {
      return apiError("Password is required and must be at least 6 characters long.", 400);
    }

    // 4. Validate role (Public registration allows ONLY DONOR or RECIPIENT; ADMIN is explicitly rejected)
    if (!role || typeof role !== "string") {
      return apiError("Role is required.", 400);
    }
    const roleUpper = role.trim().toUpperCase();
    if (roleUpper === "ADMIN") {
      return apiError("Administrator accounts cannot be created publicly.", 400);
    }
    if (!isValidPublicRole(roleUpper)) {
      return apiError("Invalid role. Allowed roles for public registration are DONOR and RECIPIENT.", 400);
    }

    // 5. Optional bloodType validation
    let cleanBloodType = null;
    if (bloodType !== undefined && bloodType !== null && bloodType !== "") {
      cleanBloodType = normalizeBloodType(bloodType);
      if (!cleanBloodType) {
        return apiError("Invalid blood type provided.", 400);
      }
    }

    // 6. Check duplicate email
    const existingUser = await prisma.user.findUnique({
      where: { email: cleanEmail },
      select: { id: true },
    });

    if (existingUser) {
      return apiError("An account with this email address already exists.", 409);
    }

    // 7. Hash password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // 8. Create user in database
    const newUser = await prisma.user.create({
      data: {
        name: name.trim(),
        email: cleanEmail,
        password: hashedPassword,
        role: roleUpper as UserRole,
        phone: typeof phone === "string" && phone.trim() ? phone.trim() : null,
        bloodType: cleanBloodType,
        location: typeof location === "string" && location.trim() ? location.trim() : null,
        isAvailable: roleUpper === "DONOR",
      },
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

    return apiSuccess(
      {
        user: newUser,
        message: "Registration successful.",
      },
      201
    );
  } catch (error) {
    console.error("Registration error:", error);
    return apiError("An unexpected server error occurred during registration.", 500);
  }
}
