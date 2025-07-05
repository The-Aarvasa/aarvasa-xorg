// context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 🔥 NEW

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if(!token){
         setUser(null);
          setLoading(false); 
      return; 
    }

      const res = await axios.get(`http://localhost:5000/api/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });

      setUser(res.data.user);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      localStorage.removeItem("accessToken");
      setUser(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
