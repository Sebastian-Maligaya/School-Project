import React, { createContext, useContext, useState } from "react";
import { findAccountByEmail } from "../data/accounts";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = sessionStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  function login(email, password) {
    const account = findAccountByEmail(email);
    if (!account) return { success: false, message: "Account not found" };
    if (account.password !== password)
      return { success: false, message: "Incorrect password" };

    setUser(account);
    sessionStorage.setItem("currentUser", JSON.stringify(account));
    return { success: true, user: account };
  }

  function logout() {
    setUser(null);
    sessionStorage.removeItem("currentUser");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
