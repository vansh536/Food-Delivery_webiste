import React, { useEffect, useState } from "react";
import { useGlobelContext } from "../Context/ProductContext";

function Profile() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  
   const [userData, setUserData] = useState(null);
   var storedData=null;
  // useEffect to fetch user data from localStorage when the component mounts
  useEffect(() => {
     storedData = localStorage.getItem('user');
    // if (storedData) {
    //   // Parse the stored data (assuming it's in JSON format)
    //   const parsedData = JSON.parse(storedData);
    //   console.log(parsedData)
    //   setUserData(parsedData);
    //   console.log("usedata is",userData)
    // }
  }, []);
  const { imageURL,loginData, setImageURL, name,email, setName, setEmail, setData } =
  useGlobelContext();
  // const { given_name, email, picture } = loginData;
  const defaultImageURL =
    "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png";
    
  // Check if the user is logged in
  if (!loginData) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          Please log in to view your profile.
        </div>
      </div>
    );
  }
  return (
    <>
      
      <div className="card text-bg-dark overflow-hidden mx-auto my-auto d-flex align-items-center justify-content-center mt-3" style={{ width: "70%", height: "200px" ,borderRadius:"20px"}}>
      
        <img
          src="https://b.zmtcdn.com/data/cover_images/f2d3bc8a1e014f087487d77ab14fa9161548143122.jpeg?output-format=webp"
          className="card-img "
          style={{ width: "100%", height: "100%", objectFit: "cover",filter: "brightness(40%)" }}
          alt="..."
        />
        <div className="card-img-overlay d-flex  align-items-center ">
          <img src={imageURL ? imageURL : defaultImageURL} className="rounded-circle mx-2 h-28" style={{}}/>
          <h1 className="mx-3 text-uppercase">HELLO, {storedData}</h1>
        
      </div>
      </div>

      <div className="mt-4">
        <h3>Order History</h3>
        {/* Add a section for displaying order history if needed */}
        <p>No orders yet.</p>
      </div>
      
    </>
  );
}

export default Profile;
