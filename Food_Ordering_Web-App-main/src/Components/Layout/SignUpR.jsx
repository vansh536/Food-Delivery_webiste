import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import GoogleButton from "react-google-button";
import { useGlobelContext } from "../../Context/ProductContext";
import { auth, provider } from "./FirebaseConfig";

function Signup() {
  const{googleSignOutButton}=useGlobelContext()
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [banda,setBanda]=useState(null);
  const navigate = useNavigate();

  const eventHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const submithandler = () => {
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(async (res) => {
        const user = res.user;
        //   await updateProfile(user, {
        //     displayName: values.name,
        //   });
        setSubmitButtonDisabled(false);
        console.log(user);
        navigate("/login");
      })
      .catch((err) => {
        //   setSubmitButtonDisabled(false);
        setSubmitButtonDisabled(false);
        console.log("erroris... ", err);
        setErrorMsg(`${err.message} or Invalid Email`);
      });

    console.log(user);

    setUser({
      name: "",
      phone: "",
      email: "",
      password: "",
    });
  };

  const googleSignButton = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      localStorage.setItem("token", result.user.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      // navigate("/wellcome");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center mt-4">
    <div className="bg-white p-6 shadow mt-6 rounded-lg " style={{ width: "35rem" }}>
    <h1 className='text-2xl m-3 font-bold'>Sign Up</h1>
        <div className="form-floating mb-3 ">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Enter Name"
            value={user.name}
            name="name"
            onChange={eventHandler}
          />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Enter Phone no."
            value={user.phone}
            name="phone"
            onChange={eventHandler}
          />
          <label htmlFor="floatingInput">Phone</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={user.email}
            name="email"
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
            name="password"
            onChange={eventHandler}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <span style={{ color: "red" }}>{errorMsg}</span>
        <div className="mt-4 flex justify-around">
        <GoogleButton className="" onClick={googleSignButton} />
          <button
            type="button"
            className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold  p-3 rounded"
            disabled={submitButtonDisabled}
            onClick={submithandler}
          >
            Sign Up
          </button>

        </div>
        <hr className="mt-4 mb-2"/>
        <span className=" text-center  text-sm hover:underline cursor-pointer mt-2" onClick={()=>{      navigate("/login")}}>
        Already have an account? <span className="text-blue-700 hover:text-red-600">  Sign In</span></span>
      </div>
    </div>
  );
}

export default Signup;
{/*  Custome Buttom For Sign In with Google


  const handleGoogleSignIn=()=>{
    signInWithPopup(auth, provider).then((result)=>{
      const user = result.user;
      console.log(user);
      setBanda(user)
    }).catch((err)=>{
      console.log(err);
    })
  }

return(
 {banda?(
          <>
            <button className='btn btn-secondary btn-md'
              onClick={handleLogout}>
              LOGOUT
            </button>
            <h3>Welcome {user.displayName}</h3>
            <p>{banda.email}</p>
            <div className='photo'>
              <img src={banda.photoURL} alt="dp" referrerPolicy='no-referrer'/>
            </div>
          </>
        ):(
          <button className='btn btn-danger btn-md'
            onClick={handleGoogleSignIn}>
            Sign In With Google
          </button>  
        )} 
)

*/}