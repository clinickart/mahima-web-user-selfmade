import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
// import { authLogin } from "../services/apiFunctions";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      // const response = await authLogin({
      //   data: credentials,
      //   setIsLoading: setLoading,
      // });

      // if (response) {
      //   const token = response?.accessToken;
      //   const userData = response?.data;

      //   setUser(userData);
      //   localStorage.setItem("token", token);
      //   localStorage.setItem("user", JSON.stringify(userData));

      //   if (token) {
      //     navigate("/dashboard");
      //   }
      // }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    setUser(null);

    localStorage.clear();

    navigate("/");
  };

  const isAuthenticated = !!user || !!localStorage.getItem("token");

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loading, isAuthenticated:true }}
    >
      {children}
    </AuthContext.Provider>
  );
};
