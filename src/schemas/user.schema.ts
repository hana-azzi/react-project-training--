
import type { User } from "../types/user.types";

export function isValidUser(user: User): boolean {
  return (
    user.id > 0 &&
    user.name.trim().length > 0 &&
    user.email.includes("@")
  );
}
