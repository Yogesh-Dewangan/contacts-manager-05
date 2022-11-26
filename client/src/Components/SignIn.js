import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { context } from './Context'
import './SignIn.css'
import axios from "axios"

const SignIn = () => {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const [userEmail, setUserEmail] = useState("");

    const URL = "http://localhost:5000/v1"
    const loginUrl = `${URL}/signin`

    const navigate = useNavigate();

    const loginUser = (loginData) => {
        axios
            .post(loginUrl, loginData)
            .then((res) => {
                const token = res.data.token;
                localStorage.setItem("token", token)
                localStorage.setItem("email", loginData.email);
                // navigate("/mainContactsPage")
                // document.location.reload();
                setUserEmail(loginData.email);

            }).catch((err) => {
                console.log(err)
                alert("Invalid Credentials . Try Again")
            })
    }

    // const {loginUser} = context(); //useAPI();

    const handleChange = (e) => {
        setLogin((curr) => ({ ...curr, [e.target.name]: e.target.value }));
    };
    const UserLogin = () => {
        loginUser(login);
        navigate("/contact")

    };

    return (
        <div className='login-page'>
            <h1>Logo</h1>
            <p>Enter your credentials to access your account</p>
            <div className='login-container'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        onChange={(e) => handleChange(e)}
                        type="email"
                        name="email"
                        className="email"
                    />

                    <input
                        onChange={(e) => handleChange(e)}
                        type="password"
                        name="password"
                        className="password"
                        placeholder="Password"
                    />

                    <button onClick={UserLogin} className="signIn">
                        Sign In
                    </button>


                </form>
                <Link id="signup" to="/signup">Sign Up</Link>
            </div>

        </div>
    )
}

export default SignIn