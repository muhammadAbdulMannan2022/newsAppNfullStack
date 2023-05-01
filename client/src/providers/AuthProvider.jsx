import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth State changed");
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const signUpWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error, "error in google signup");
      });
  };
  const registerWithEmailePassword = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("user created");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "error in auth => register line 44");
      });
  };
  const loginWithEmailPass = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("user log in seccessful");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.masage, "err in auth => login line 54");
      });
  };
  const signupWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("user sign out successfull");
      })
      .catch((err) => console.log(err));
  };
  const authInfo = {
    user,
    loading,
    signUpWithGoogle,
    logOut,
    registerWithEmailePassword,
    loginWithEmailPass,
    signupWithGithub,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
