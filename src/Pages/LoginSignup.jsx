import React, { useState } from "react";
import './CSS/LoginSignup.css';



const LoginSignup = () => {
    const [action,setAction] = useState("Sign Up") ;
    return ( 
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{action}</h1>
                <div className="loginsignup-fields">
                    {action ==="Login"?<div></div>:<input type="text" placeholder="Your Name"/>}
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button>Continue</button>
                {action==="Sign Up"?<p className="loginsignup-login">Already have an account?<span onClick={()=>{setAction("Login")}}>Login here</span></p>:<p className="loginsignup-login">Don't have an account?<span onClick={()=>{setAction("Sign Up")}}>SignUp here</span></p>}
                <div className="loginsignup-agree">
                    <input type="checkbox"/>
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
     );
}
export default LoginSignup;