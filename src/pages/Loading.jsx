import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import "../styles/Loading.css";

export function Loading() {
  const { isLoading } = useContext(LoginContext);
  if (isLoading) {
    return (
      <div className="loader">
        <div className="loader_wheel"></div>
      </div>
    );
  } else {
    return <div className="loader_off"></div>;
  }
}
