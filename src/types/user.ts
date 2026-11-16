export interface UserProfile {
  id: string | number;
  name: string;
  phone: string;
  email?: string;
  role: "customer" | "technician" | "admin";
  city?: string;
  createdAt: string;
}

export interface AuthState {
  user: UserProfile | null;
  token: string | null;
  isAuthenticated: boolean;
}
