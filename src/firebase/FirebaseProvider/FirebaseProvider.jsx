import { updateProfile, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.confiq";



export const AuthContex = createContext(null);

const googleProvider = new GoogleAuthProvider();

const FirebaseProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const[loading, setLoading]= useState(true)

    //register
    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //update profile

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }

    //login

    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    //google login

    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider)
    }


    //logOut
    
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('user in on state changed', currentUser);
            setUser(currentUser);
            setLoading(false)
        })

        return ()=>{
            unSubscribe();
        }
    },[])


    const allValues={
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        googleLogin,
        updateUserProfile
    }
    return (
        <AuthContex.Provider value={allValues}>
        {children}
        </AuthContex.Provider>
    );
};

export default FirebaseProvider;