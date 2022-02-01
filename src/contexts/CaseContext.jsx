import { createContext } from "react";
import { collection, addDoc, setDoc } from "firebase/firestore";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

export const CasesContext = createContext({});

export function CaseContext({ children }) {
  const { user } = useAuth();

  async function createNewCase(title, description, donation) {
    const docRef = await addDoc(collection(database, `${user.id}`), {
      title: title,
      description: description,
      donation: donation,
      uid: user.id,
    });
  }
  return (
    <CasesContext.Provider value={{ createNewCase }}>
      {children}
    </CasesContext.Provider>
  );
}
