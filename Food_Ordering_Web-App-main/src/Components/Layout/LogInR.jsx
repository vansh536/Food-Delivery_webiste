import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {  signInWithEmailAndPassword } from 'firebase/auth';

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import GoogleButton from "react-google-button";
import { useGlobelContext } from '../../Context/ProductContext';
import { auth, provider } from './FirebaseConfig';


function LogIn() {


    const [errorMsg, setErrorMsg] = useState("");
    const[user,setUser]=useState({        
        email:"",
        password:""
    })

    const {imageURL,setImageURL, name,email,setName,setEmail,setData}=useGlobelContext();
    const navigate = useNavigate();
    
  
  
   const eventHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const submithandlerlogin=()=>{
    signInWithEmailAndPassword(auth,user.email, user.password)
    .then((userCredential) => {
      
      // Signed in
      var user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", user);
      console.log("Tokennn",user.accessToken)
      console.log("User Detalis...",user)

      // console.log("name ==",user.displayName)
      console.log("this is ....",userCredential.user.email)
      let a=userCredential.user.email
      setEmail(a)
      console.log("email is ",email)
      navigate("/profile");
      
      // ...
    })
    .catch((err) => {
        setErrorMsg(`${err.message} or Invalid Email/Password`);
    });

    setUser({
        email:"",
        password:""
    })
    
  }
  const googleSignButton = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("iMAGE",result._tokenResponse.photoUrl);
      localStorage.setItem("token", result.user.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      let na=result.user.displayName
      setEmail(result.user.email);
      console.log(email)
      setName(na);
      console.log(name)
      setImageURL(result._tokenResponse.photoUrl)
      // setData({...data,name: na})
      
      
      navigate("/profile");
      // console.log("this is data ..",data)
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="container d-flex justify-content-center mt-4 ">
  <div className="bg-white p-6 shadow mt-6 rounded-lg " style={{ width: "35rem" }}>
    <h1 className='text-2xl m-3 font-bold'>Sign In</h1>
     
      <div className="form-floating mb-3  ">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={user.email}
          name='email'
          onChange={eventHandler}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={user.password}
          name='password'
          onChange={eventHandler}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <hr className="mt-4 mb-2"/>
      <span style={{color:'red'}}>
      {errorMsg}
      </span>
      <div className='flex justify-around my-3'>
      <GoogleButton className="w-full" onClick={googleSignButton} />
      <button type="button" className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={submithandlerlogin}>
      Log In
    </button>
    </div>
    <hr className="mt-2 mb-2"/>
     <div className="flex justify-around">
     <span className="text-blue-600 text-center  text-sm hover:underline cursor-pointer mt-2" onClick={()=>{      navigate("/forgotPass")}}>Forgate Password?</span>
     <span className="text-blue-600 text-center  text-sm hover:underline cursor-pointer mt-2" onClick={()=>{      navigate("/signup")}}>Create New Account</span>
   {/*<Link to={"/"} className="btn btn-danger">
     Cancle
  </Link>*/}
     </div>
    </div>
  </div>
  )
}

export default LogIn