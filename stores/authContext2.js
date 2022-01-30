import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { userService } from "../services/userService";


const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false
})

export const AuthContextProvider = ({children}) => {
    const router  = useRouter()
    const [user, setUser] = useState(null)
    const [authReady, setAuthReady] = useState(false)

    useEffect(() =>{

        // on initial load - run authCheck

        authCheck(router.asPath)

        // on route change start - hide page content by setting authorized to false

        const hideContent = () => setAuthReady(false)
        
        router.events.on('routeChangeStart', hideContent);

        router.events.on('routeChangeComplete', authCheck);




        //unregister events
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

        
    }, [])
    
    function authCheck(url){
        //redirect to login page if accessing a private page

        setUser(userService.userValue);

        const publicPaths = ['account/login', 'account/register'];
        const path  = url.split('?')[0];
        if(!userService.userValue && !publicPaths){
            setAuthReady(false)
            router.push({
                pathname: 'account/login',
                query: { returnUrl : router.asPath}
            })
        }else{
            setAuthReady(true);
        }
    }


    const login = () => {
        userService.login();
    }

    const logout = () =>{
        userService.logout();
    }

    const context = { user, login, logout, authReady }

    return(
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;