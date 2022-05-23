import {createContext, useContext} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import {auth, provider, collection, addDoc, getDocs, query, Timestamp, db } from "../firebase";

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
    const getmessages= async () => {
        const message= []
        const q = query(collection(db, "collectionMessages"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        message.push({
            id:doc.id,
            ...doc.data()   
        })
        });
        return message;
    }
    const addMessages= async (message, author) => {
        const docRef = await addDoc(collection(db, "collectionMessages"), {
            message,
            date: Timestamp.fromDate(new Date()),
            author,
        });
    return docRef.id
    }

    return (
        <authContext.Provider value={{singup, login, google, getmessages, addMessages}}>{children}</authContext.Provider>
    );
}
