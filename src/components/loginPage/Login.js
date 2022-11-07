import React, { useEffect, useState } from "react";
import Navbar from "../Navbar.js";


function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    passWord: "",
  });

  

  
  useEffect(() => {
    checkLoginStatus()
  }, []);

  const checkLoginStatus = () => {
    if(localStorage.getItem("login") == true){
      window.location.href = '/orders'
    }
  }

  const updatePassword = (e) => {
    setLoginDetails((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  console.log(loginDetails);

  const checkCredentials = () => {
    if ( loginDetails.userName == "Ashish" && loginDetails.passWord == "Ashish123"){
      { 
        localStorage.setItem('login',true)
        window.location.href = "/orders";
      }
    }
    alert("Login Successful");
  };

  return (
    <>
      <Navbar />
      <section id="loginBox">
        <h1> Sign in</h1>
        <label htmlFor="Username">
          <input
            type="text"
            placeholder="Enter User :- Ashish"
            id="userName"
            name="userName"
            onChange={(e) => updatePassword(e)}
          />
        </label>{" "}
        <br />
        <label htmlFor="Password">
          <input
            type="text"
            placeholder="Enter Password :- Ashish123"
            id="userName"
            name="passWord"
            onChange={(e) => updatePassword(e)}
          />
        </label>{" "}
        <br />
        <button id="LoginBtn" onClick={() => checkCredentials()}>
          {" "}
          Login{" "}
        </button>
      </section>
    </>
  );
}

export default Login;
