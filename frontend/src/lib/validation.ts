import { BloodType } from "@/generated/prisma/enums";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: unknown): email is string {
  if (typeof email !== "string") return false;
  const trimmed = email.trim();
  return trimmed.length > 3 && trimmed.length <= 254 && EMAIL_REGEX.test(trimmed);
}

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function isValidPassword(password: unknown): password is string {
  if (typeof password !== "string") return false;
  return password.length >= 6 && password.length <= 128;
}

export function normalizeBloodType(input: unknown): BloodType | null {
  if (typeof input !== "string" || !input.trim()) return null;
  const cleaned = input.trim().toUpperCase();

  const map: Record<string, BloodType> = {
    "O+": BloodType.O_POSITIVE,
    "O-": BloodType.O_NEGATIVE,
    "A+": BloodType.A_POSITIVE,
    "A-": BloodType.A_NEGATIVE,
    "B+": BloodType.B_POSITIVE,
    "B-": BloodType.B_NEGATIVE,
    "AB+": BloodType.AB_POSITIVE,
    "AB-": BloodType.AB_NEGATIVE,
    "O_POSITIVE": BloodType.O_POSITIVE,
    "O_NEGATIVE": BloodType.O_NEGATIVE,
    "A_POSITIVE": BloodType.A_POSITIVE,
    "A_NEGATIVE": BloodType.A_NEGATIVE,
    "B_POSITIVE": BloodType.B_POSITIVE,
    "B_NEGATIVE": BloodType.B_NEGATIVE,
    "AB_POSITIVE": BloodType.AB_POSITIVE,
    "AB_NEGATIVE": BloodType.AB_NEGATIVE,
  };

  return map[cleaned] ?? null;
}

export function isValidPublicRole(role: unknown): role is "DONOR" | "RECIPIENT" {
  return role === "DONOR" || role === "RECIPIENT";
}

export function sanitizeUser<T extends { password?: string }>(user: T): Omit<T, "password"> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...safeUser } = user;
  return safeUser;
}
