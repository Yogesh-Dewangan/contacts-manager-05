import React, { useEffect, useState } from "react";
import "./SignIn.css"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { SessionUtils } from "./SessionUtils";

const SignUp = () => {
    const [login, setLogin] = useState({
        email: "",
        password: "",
        confirm_password: "",
    });
    const {ifSessionExist} = SessionUtils();
    const navigate = useNavigate();

    useEffect(() => {
        ifSessionExist('/contact')
    }, [])

    const handleChange = (e) => {
        setLogin((curr) => ({ ...curr, [e.target.name]: e.target.value }))
    };

    const URL = "http://localhost:5000/v1"
    const signUpUrl = `${URL}/signup`;
    const signUpUser = async () => {

            // axios.post(signUpUrl, userData)
            await fetch(signUpUrl, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(login)
            })
                .then(res => res.json())
                .then((res) => {
                    // alert(res.data.message);
                    // navigate("/")
                    if(res.status === "Success") {
                        alert(res.message);
                        navigate('/');
                    } else {
                        if(res.status === 'Failed') {
                            alert(res.message);
                        } else {
                            if (res.errors[0].param === 'username') {
                                alert('Username has to be email id of user')
                            } else if (res.errors[0].param === 'password') {
                                alert('password length must be atleast 6 and atmost 16')
                            } else {
                                alert(res.error);
                            }
                        }
                    }
                })
                .catch((err) => {
                    console.log('err', err);
                    // alert(err);
                })
    }
    //   const {signUpUser}= context(); //useAPI();
    const UserLogin = () => {
        signUpUser(login)
    };
    return (
        <div className="login-page">
            <h1>Logo</h1>
            <p>create a new account</p>
            <div className="login-container">
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <input
                        onChange={(e) => handleChange(e)}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="abc@xyz"
                        value={login.email}
                    />
                    <input
                        onChange={(e) => handleChange(e)}
                        type="password"
                        name="password"
                        className="password"
                        placeholder="Password"
                        value={login.password}
                    />
                    <input
                        onChange={(e) => handleChange(e)}
                        type="password"
                        name="confirm_password"
                        className="password"
                        placeholder="Confirm Password"
                        value={login.confirm_password}
                    />
                    <div className="signUpbtnContainer">
                        <button onClick={UserLogin} className="signup">
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
export default SignUp