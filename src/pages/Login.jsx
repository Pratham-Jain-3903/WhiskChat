import React from "react";
// import Add from "../images/addProfilePic.png";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate from React Router
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth"

const Login = () => {

    const [err, setErr] = useState(false);
    const navigate = useNavigate(); // Initialize the navigate function
  
    const handleSubmit = async (e) => {
      e.preventDefault();
     
      const email = e.target[0].value;
      const password = e.target[1].value;
    
      if ( !email || !password) { return alert('Please fill all fields');}
  
      try {
        await signInWithEmailAndPassword(auth, email, password)
        navigate("/")
      } 
      catch (error) {
        console.error("Error while registering:", error);
        setErr("Couldn't register you! Please refresh to try again.");
      }
    };
return(
  <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">WhiskChat</span>
      <span className="title">Login</span>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder=" Registered Email id" />
        <input type="password" placeholder="Password" />
        <button>Sign in</button>
        {err && <span>Soemthing went wrong</span>}
      </form>
      <p>You don't have an account <Link to ="/register">Login</Link></p>
    </div>
  </div>
);
}

export default Login;
