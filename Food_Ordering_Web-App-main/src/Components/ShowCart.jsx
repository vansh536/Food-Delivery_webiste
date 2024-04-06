import React, { useState, useEffect } from "react";
import { useGlobelContext } from "../Context/ProductContext";
import { Link, useNavigate } from "react-router-dom";

export default function ShowCart() {
  const { cart, price, incr, quantity, setCart,placeOrder } = useGlobelContext();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const removeProduct = (index) => {
    const dummy = cart.filter((_, i) => i !== index);
    setCart(dummy);
  };

  // Calculate total price using reduce
  const tot = cart.reduce((acc, addedItem) => {
    return acc + price[addedItem.idCategory - 1];
  }, 0);

  return (
    <div className="container-sm border text-center m-2">
      <h2 className="text-bold mt-3 p-3 bg-info bg-opacity-10  border-info  rounded-end ">Cart Page</h2>

      {console.log("cart value is", cart)}

      <table className="table m-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            
            <th scope="col">Prize</th>
            <th scope="col">Cancel</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((addedItem, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img
                  src={addedItem.strCategoryThumb}
                  alt="kuch nahi"
                  style={{ height: "50px" }}
                />
              </td>
              <td>{addedItem.strCategory}</td>
             
              <td>{price[addedItem.idCategory - 1]}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    removeProduct(index);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link className="mx-2 btn btn-outline-danger mb-5" to={"/cartPage"}>
        Back To Home
      </Link>
      <button className="mx-2 btn btn-outline-success mb-5" onClick={placeOrder}>Pay Now</button>
      <button className="mx-2 btn btn-success mb-5">Total Prize: {tot}</button>
      
    </div>
  );
}
