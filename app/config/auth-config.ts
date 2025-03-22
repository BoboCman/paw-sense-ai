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
    userId: "trainer1",
    password: "pawsense123",
    fullName: "Alex Johnson",
    role: "Dog Trainer",
  },
  {
    userId: "owner2",
    password: "doggy456",
    fullName: "Sarah Williams",
    role: "Dog Owner",
  },
  {
    userId: "vet3",
    password: "petcare789",
    fullName: "Dr. Michael Chen",
    role: "Veterinarian",
  },
  {
    userId: "admin",
    password: "admin1234",
    fullName: "Admin User",
    role: "Administrator",
  },
  {
    userId: "demo",
    password: "demo2023",
    fullName: "Demo User",
    role: "Demo Account",
  },
]

// Public paths that don't require authentication
export const PUBLIC_PATHS = ["/login", "/terms", "/privacy", "/cookie-policy"]

