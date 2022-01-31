import { createContext } from "react";
import { useState } from "react";

export const LoginContext = createContext({});

export function AuthContext({ children }) {
  const [users, setUsers] = useState([]);

  function createNewUser(ong, email, whatsApp, city, uf) {
    setUsers((state) => [
      ...state,
      {
        ong: ong,
        email: email,
        whatsApp: whatsApp,
        city: city,
        uf: uf,
        key: ong,
      },
    ]);
  }
  return (
    <LoginContext.Provider value={{ users, createNewUser }}>
      {children}
    </LoginContext.Provider>
  );
}
