import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/supabase";
import color from "../constants/colors";

const GlobalContext = createContext();

export const useUserContext = () => useContext(GlobalContext);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize as null instead of an empty string
  const [authId, setAuthId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [databaseError, setDatabaseError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      // Fetch user only if authId is set
      try {
        if (authId) {
          const { data, error } = await getCurrentUser(authId);
          if (data) {
            setUser(data);
          } else {
            setUser(null);
            setDatabaseError(error);
          }
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
      }
    };
    fetchUser();
  }, [authId, user]);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        authId,
        setAuthId,
        isLoading,
        setIsLoading,
        color,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default UserContext;
