import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

export function useCases() {
  const [cases, setCases] = useState([]);
  const { user } = useAuth();

  useEffect(async () => {
    const docRef = await getDocs(collection(database, `${user.id}`));
    docRef.forEach((cards) => {
      const casesValue = cards.data();
      setCases((state) => [...state, casesValue]);
    });
  }, []);

  return { cases };
}
