import {createContext, useState, useContext, useEffect} from "react";
import supabase from "../services/Api";

const AuthContext = createContext();

export function AuthContextProvvider({children}){
    const [user,setUser] = useState();


   

    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    return useContext(AuthContext)
}