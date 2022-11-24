import React ,{useState,useContext,createContext} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const APIContext = createContext();

export function APIContextProvider({ children }) {

    const URL="abc@xyz.com/"
    const navigate = useNavigate();
    const signUpUrl=`${URL}register`;
    const loginUrl=`${URL}login`
    const [userEmail, setUserEmail] = useState("");

    const config = {
        headers: {
          token: localStorage.getItem("token"),
        },
      };

    const signUpUser=(userData)=>{
        try{
            axios
            .post(signUpUrl,userData)
            .then((res)=>{
                console.log(res)
                navigate("/")
            }).catch((err)=>{
                console.log(err);
                windows.alert("Failed Registration");
            })
        }

        catch (error) {
            window.alert(error.message);
          }
    }

    const loginUser=(loginData)=>{
        axios
            .post(loginUrl,loginData)
            .then((res)=>{
                const token=res.data.token;
                localStorage.setItem("token",token)
                localStorage.setItem("email",loginData.email);
                navigate("/mainContactsPage")
                // document.location.reload();
                setUserEmail(loginData.email);

            }).catch((err)=>{
                console.log(err)
                windows.alert("Invalid Credentials . Try Again")
            })

            return(
                <APIContext.Provider
                value={{
                    signUpUser,
                    loginUser,
                    userEmail
                }}
                >

                   {children} 
                </APIContext.Provider>
            )
    }
}
    export function useAPI(){
        const context=useContext(APIContext)
        return context
    }


