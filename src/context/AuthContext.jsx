import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function login(token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken) {
      setUser(decodedToken);
      localStorage.setItem("token", token);
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("token");
  }

  function isLogged() {
    return !!user;
  }

  function isAdmin() {
    return isLogged && user.role === "admin";
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      login(token);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLogged, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
