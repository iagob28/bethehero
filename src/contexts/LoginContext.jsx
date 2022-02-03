import { createContext, useEffect } from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext({});

export function AuthContext({ children }) {
  const [user, setUser] = useState([]);
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { email, uid } = user;

        if (!email || !uid) {
          throw new Error("Missing information from google account.");
        }
        setUser({
          id: uid,
          email: email,
          cases: [],
        });
        return () => {
          unsubscribe();
        };
      }
    });
  }, []);

  async function createNewUser(email, password) {
    setIsLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        console.log(userCredential.user);
      })
      .catch((error) => console.log(error));
    setIsLoading(false);
  }

  function userSignIn(email, password) {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser({
          id: userCredential.user.uid,
          email: userCredential.user.email,
        });
        history(`/list/${email}`);
      })
      .catch((error) => {
        alert("E-mail or password are incorrect");
        return;
      });
  }

  function userSignOut() {
    signOut(auth)
      .then(() => {
        alert("Your signed out was successful");
        history("/");
      })
      .catch((error) => alert(error));
  }
  return (
    <LoginContext.Provider
      value={{
        user,
        createNewUser,
        auth,
        userSignIn,
        userSignOut,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
