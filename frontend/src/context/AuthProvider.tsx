import { useState, type ReactNode } from "react";
import api from "../services/api";
import axios from "axios";
import {
  AuthContext,
  type RegisterData,
  type User,
} from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (data: RegisterData) => {
    setLoading(true);
    setError(null);

    try {
      await api.post("/api/auth/register", data);
    } catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    setError(
      error.response?.data?.message ||
        "Unable to create your account."
    );
  } else {
    setError("Something went wrong.");
  }

  throw error;
} finally {
      setLoading(false);
    }
  };

  const verifyEmail = async (email: string, code: string) => {
  setLoading(true);
  setError(null);

  try {
    const response = await api.post("/api/auth/verify-email", {
      email,
      code,
    });

    const { token, user } = response.data;

    localStorage.setItem("token", token);

    setCurrentUser(user);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      setError(
        error.response?.data?.message ||
          "Invalid or expired verification code."
      );
    } else {
      setError("Something went wrong.");
    }

    throw error;
  } finally {
    setLoading(false);
  }
};

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        verifyEmail,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};