import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

export function useAuth() {
  const value = useContext(LoginContext);
  return value;
}
