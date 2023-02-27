import { useState,  useEffect, createContext } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const AuthContext = createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isNotAdmin, setIsNotAdmin] = useState(true);

  const storeToken = (token, sessionCookie) => {
    localStorage.setItem("authToken", token);
    // localStorage.setItem('sessionCookie', sessionCookie);
    document.cookie = `session=${token}; HttpOnly; SameSite=Strict`;
  };

  const authenticateUser = () => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      axios
        .get(`${API_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          const user = response.data;
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);
          setIsAdmin(user.role === "admin");
          setIsNotAdmin(user.role === "user");
        })
        .catch((error) => {
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
          setIsAdmin(false);
          setIsNotAdmin(false);
        });
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
      setIsAdmin(false);
      setIsNotAdmin(false);
    }
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const logOutUser = () => {
    removeToken();
    authenticateUser();
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        isAdmin,
        isNotAdmin,
        storeToken,
        authenticateUser,
        logOutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { 
  AuthProviderWrapper, 
  AuthContext
 };
