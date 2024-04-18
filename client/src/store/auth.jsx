import { createContext,useContext, useState } from "react"
import { useEffect } from "react"

export const AuthContext=createContext()

export const AuthProvider=({children})=>{
        const [token,setToken]=useState(
            localStorage.getItem("token")
        )

        const [user,setUser]=useState();

        //logout ni upper rakhavu
        const storeTokenInLS=(serverToken)=>{
            
            //refresh logout 
            setToken(serverToken)
            return localStorage.setItem('token',serverToken);
        }

        const LogoutUser=()=>{
            setToken("");
            return localStorage.removeItem("token")
        }

        let isLoggedIn=!!token
        console.log("isLoggedIn",isLoggedIn)

        //JWT Authentication - to get the currently logged in user
        const userAuthentication= async ()=>{
            try {
                const response = await fetch("http://localhost:5000/user", {
                    method: "GET",
                    headers: {
                      'Authorization': 'Bearer ' + token
                    //   Authorization: `Bearer ${token}`
                    }
                  });

                //   console.log(response);
                  
                if(response.ok){
                    const data =await response.json();
                    // setUser(data)
                    // console.log(data);
                       setUser(data.userData)
                    console.log(data.userData);
                }

            } catch (error) {
                res.status(401).json({ "user fetch error" : error})
            }           
        }
        useEffect(()=>{
            userAuthentication();
        },[]);

        return(
            //value = function pass
            <AuthContext.Provider value={{user,isLoggedIn,storeTokenInLS,LogoutUser}}>
                {children}
            </AuthContext.Provider>
        )
}

export const useAuth=()=>{
    // return useContext(AuthContext)

    const useContextValue=useContext(AuthContext);
    if(!useContextValue){
        throw new Error("userAuth used outside the provider")
    }

    return useContextValue;
}

// const {storeTokenInLS}=useAuth();
// storeTokenInLS("token",res_data.token)