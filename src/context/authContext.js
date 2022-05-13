import {createContext, useContext} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import {auth, provider} from "../firebase";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext);
    if(!context){
        throw new Error("error");
    }
    return context;
};
export function AuthProvider({children}){
    const singup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };  
    const google = () => {
        return signInWithRedirect(auth, provider);
    }   
    return (
        <authContext.Provider value={{singup, login, google}}>{children}</authContext.Provider>
    );
}
