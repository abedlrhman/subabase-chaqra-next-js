import { useContext } from "react";
import { AuthContext } from "./authContext";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth most be used within a authContext.Provider");
  }

  return context;
};
