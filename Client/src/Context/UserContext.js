import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Component/Firebase/firebase.config'



export const AuthContext = createContext();
const auth = getAuth(app)





const UserContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState();
   
    const [loading, setLoading] = useState(true);

    //1 create user 
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //google sgn In
    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // github 
    const signInWithGithub =()=>{
        return signInWithPopup(auth, githubProvider)
    }

    // 5 Logout 
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // 6 Login with password 
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    

   


    const authInfo = {user, createUser,signInWithGithub, signInWithGoogle,logOut,signIn,loading}  


    useEffect(()=>{
       
       const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        return(()=>{
           
            unSubscribe()
        })
    }, [])


  return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    
    ); 
};

 export default UserContext; 