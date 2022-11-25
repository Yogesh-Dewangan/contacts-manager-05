import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAPI } from './Context'
import './SignIn.css'

const SignIn=()=>{
    const [login ,setLogin]=useState({
        email:"",
        password:""
    });

    const {loginUser} = useAPI();

    const handleChange = (e) => {
        setLogin((curr) => ({ ...curr, [e.target.name]: e.target.value }));
      };
      const UserLogin = () => {
        loginUser(login);
      };

    return(
        <div className='login-page'>
            <h1>Logo</h1>
            <p>Enter your credentials to access your account</p>
            <div className='login-container'>
                <form onSubmit={(e)=>e.preventDefault()}>
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

export default SignIn;