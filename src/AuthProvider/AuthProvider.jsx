/* eslint-disable no-unused-vars */ 
import React, { createContext, useEffect } from 'react'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider();
const gitHubAuth = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    setLoading(true);
   return signOut(auth);
    
  }
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuth);
  }
  const gitHubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubAuth);
  }
  const updateUserProfile = (user, name, photoUrl) => {
    return updateProfile(user, {
      displayName: name,
       photoURL: photoUrl
    }).then(() => {
      // console.log("done")
    }).catch((error) => {
     console.log(error)
    });

  }
  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) =>{
      // console.log('logged in user inside auth state observer', loggedUser)
      setUser(loggedUser);
      setLoading(false);
    })

    return () =>{
      unsubscribe();
    }
  },[])
  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loading,
    googleSignIn,
    gitHubSignIn,
    updateUserProfile

}
  return (
    <AuthContext.Provider value={authInfo}>
    {children}
</AuthContext.Provider>
  )
}

export default AuthProvider

