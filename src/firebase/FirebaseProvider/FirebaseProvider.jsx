import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.confiq";



export const AuthContex = createContext(null);

const FirebaseProvider = ({children}) => {
    const [user, setUser]= useState(null);

    //register
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }


    //login

    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }


    //logOut
    
    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('user in on state changed', currentUser);
            setUser(currentUser);
        })

        return ()=>{
            unSubscribe();
        }
    },[])


    const allValues={
        user,
        createUser,
        logOut,
        signIn
    }
    return (
        <AuthContex.Provider value={allValues}>
        {children}
        </AuthContex.Provider>
    );
};

export default FirebaseProvider;