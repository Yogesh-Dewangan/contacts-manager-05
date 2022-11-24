import React,{useState} from "react";
import "./SignIn.css"
import {useNavigate} from 'react-router-dom'
import { useAPI } from "./Context";


const SignUp=()=>{
    const navigate=useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: "",
        confirm_password: "",
      });

      const handleChange=(e)=>{
        setLogin((curr)=>({...curr,[e.target.name]:e.target.value}))
      };

      const {signUpUser}=useAPI();
      const UserLogin=()=>{
        signUpUser(login)
      };

      return(

        <div className="login-page">
            <h1>Logo</h1>
            <p>create a new account</p>
            <div className="login-container">
                <form onSubmit={(e)=>{e.preventDefault()}}>
                    
                    <input
                        onChange={(e)=>handleChange(e)}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="abc@xyz"
                    />

                    <input
                        onChange={(e) => handleChange(e)}
                        type="password"
                        name="password"
                        className="password"
                        placeholder="Password"
                    />

                    <input
                        onChange={(e) => handleChange(e)}
                        type="password"
                        name="confirm_password"
                        className="password"
                        placeholder="Confirm Password"
                    />

                    <div className="signUpbtnContainer">
                        <button className="signup" onClick={UserLogin}>
                            Sign Up
                        </button>
                        <button className="signup signinAnkit" onClick={() => navigate("/")}>
                            Sign In
                        </button>
                    </div>
                </form>

            </div>

        </div>
      )


}