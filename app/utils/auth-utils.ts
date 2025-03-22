import { AUTHORIZED_USERS, type AuthUser } from "../config/auth-config"

// Type for the authenticated user info stored in localStorage
export type AuthenticatedUser = Omit<AuthUser, "password">

// Key used for localStorage
const AUTH_STORAGE_KEY = "pawsense_auth_user"

/**
 * Authenticate a user with userId and password
 */
export function authenticateUser(userId: string, password: string): AuthenticatedUser | null {
  const user = AUTHORIZED_USERS.find((u) => u.userId === userId && u.password === password)

  if (!user) return null

  // Create a user object without the password
  const authenticatedUser: AuthenticatedUser = {
    userId: user.userId,
    fullName: user.fullName,
    role: user.role,
  }

  // Store in localStorage
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authenticatedUser))

  return authenticatedUser
}

/**
 * Get the current authenticated user from localStorage
 */
export function getCurrentUser(): AuthenticatedUser | null {
  if (typeof window === "undefined") return null

  const storedUser = localStorage.getItem(AUTH_STORAGE_KEY)
  if (!storedUser) return null

  try {
    return JSON.parse(storedUser) as AuthenticatedUser
  } catch (error) {
    console.error("Failed to parse stored user data", error)
    return null
  }
}

/**
 * Log out the current user
 */
export function logoutUser(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(AUTH_STORAGE_KEY)
}

/**
 * Check if a path is public (doesn't require authentication)
 */
export function isPublicPath(path: string): boolean {
  return ["/login", "/terms", "/privacy", "/cookie-policy"].includes(path)
}

