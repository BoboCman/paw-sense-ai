// Define the user type
export type AuthUser = {
  userId: string
  password: string
  fullName: string
  role: string
}

// Predefined list of authorized users
export const AUTHORIZED_USERS: AuthUser[] = [
  {
    userId: "Bob",
    password: "bc1",
    fullName: "Bobby Cee",
    role: "Dog Lover",
  },
  {
    userId: "Trish",
    password: "tc1",
    fullName: "Shosha Booms",
    role: "Pilot User",
  },
  {
    userId: "Natalie",
    password: "nac1",
    fullName: "Natalie Cee",
    role: "Pilot User",
  },
  {
    userId: "Lily",
    password: "llc1",
    fullName: "Lily Cee",
    role: "App Tester",
  },
  {
    userId: "Hannah",
    password: "hlc1",
    fullName: "Hannah Cee",
    role: "App Tester",
  },
  {
    userId: "Julie",
    password: "jac1",
    fullName: "Julie Cee",
    role: "App Tester",
  },
]

// Public paths that don't require authentication
export const PUBLIC_PATHS = ["/login", "/terms", "/privacy", "/cookie-policy"]

