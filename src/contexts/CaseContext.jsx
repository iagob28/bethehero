import { createContext } from "react";
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
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
    });
    return docRef;
  }
  async function deleteCase(id, userId) {
    await deleteDoc(doc(database, `${userId}`, `${id}`));
  }

  return (
    <CasesContext.Provider value={{ createNewCase, deleteCase }}>
      {children}
    </CasesContext.Provider>
  );
}
