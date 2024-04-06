import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGlobelContext } from "../Context/ProductContext";
import { ClipLoader } from 'react-spinners';


function CartPage() {
  

  const {price,cart,cartAdded,count}=useGlobelContext();
    
  const [product, setProduct] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    LoadProduct();
    setLoading(false)
  }, []);
  const LoadProduct = async () => {
    const responce = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    // setProduct(responce.data.categories)
    setProduct(responce.data.categories);
    
    // // setProduct(res)
    console.log(product);
    // console.log(product);
    // console.log(responce.data);
  };
  return (
    <>
    <h1>Cart Page </h1> 
    {loading ? (
      <div>
      <h2>Loading....</h2>
      <ClipLoader color="#de1818" loading={loading} size={100} />
      </div>
    ) : (      
      <div className="d-flex flex-row flex-wrap justify-content-around">
        {product.map((t, index) => (
          <div
            className="card shadow m-2 "
            style={{ width: "18rem"}}
            key={index}
          >
            <img src={t.strCategoryThumb} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{t.strCategory}</h5>
              <p
                className="card-text "
                style={{
                  maxHeight: "100px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {t.strCategoryDescription}
              </p>
              <div className="d-flex justify-content-around">
                <h6 >₹{price[index]}</h6>
                <a href="#" className="btn btn-primary" onClick={()=>{cartAdded(product[index])}}>
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>      
    )}
    </>
  );
}

export default CartPage;
