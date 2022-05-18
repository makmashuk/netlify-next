import { createContext, useEffect, useState } from "react";
import  netlifyIdentity  from "netlify-identity-widget";

const AuthContext = createContext({
    user: null,
    login:()=>{ },
    logout:()=>{ },
    authState : false
    
})

const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);

    const login = ()=>{
        netlifyIdentity.open();
    }
    const providerValue = {
        user,
        login
    }

    useEffect(()=>{

        netlifyIdentity.init();

        netlifyIdentity.on("login",(user)=>{
            setUser(user);
        })
    },[])
    return (
        <>
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
            
        </>
    )
}
export {AuthContext, AuthProvider};