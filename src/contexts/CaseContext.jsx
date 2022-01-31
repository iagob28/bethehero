import { createContext } from "react";
import { useState } from "react";

export const CasesContext = createContext({});

export function CaseContext({ children }) {
  const [cases, setCases] = useState([]);
  
  function createNewCase(title, description, donation, id) {
    setCases((state) => [
      ...state,
      {
        title: title,
        description: description,
        donation: donation,
        key: id,
      },
    ]);
  }
  return (
    <CasesContext.Provider value={{ cases, createNewCase }}>
      {children}
    </CasesContext.Provider>
  );
}
