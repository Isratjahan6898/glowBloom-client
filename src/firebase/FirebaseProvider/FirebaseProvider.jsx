import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.confiq";



export const AuthContex = createContext(null);

const FirebaseProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const[loading, setLoading]= useState(true)

    //register
    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    //login

    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
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
        createUser,
        logOut,
        signIn,
        loading
    }
    return (
        <AuthContex.Provider value={allValues}>
        {children}
        </AuthContex.Provider>
    );
};

export default FirebaseProvider;