import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

export function useCases() {
  const [cases, setCases] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const getData = async () => {
      // const docRef = await getDocs(collection(database, `${user.id}`));
      const unsub = onSnapshot(collection(database, `${user.id}`), async () => {
        const docRef = await getDocs(collection(database, `${user.id}`));
        const parsedCases = docRef.docs.map((document) => {
          return {
            description: document.data().description,
            title: document.data().title,
            donation: document.data().donation,
            id: document.id,
          };
        });
        setCases(parsedCases);
      });
      return () => {
        unsub();
      };
      // const parsedCases = docRef.docs.map((document) => {
      //   return {
      //     description: document.data().description,
      //     title: document.data().title,
      //     donation: document.data().donation,
      //     id: document.id,
      //   };
      // });
      // setCases(parsedCases);
    };
    return getData();
  }, [user.id]);

  return { cases };
}
