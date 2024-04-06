import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useGlobelContext } from "../Context/ProductContext";
import { Fade } from "react-awesome-reveal";

function MenuCarousel() {
  const { price, cart, cartAdded, count } = useGlobelContext();

  const [product, setProduct] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    LoadProduct();
    setLoading(false);
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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
    <Fade direction="left" duration={1000} delay={200}  distance="20px" cascade>
    <div><h3>Menu</h3></div>


      <div className="container mt-5">
      <Carousel responsive={responsive}>
        {product.map((t, index) => (
            <div
              className="card shadow m-2  "
              style={{ width: "18rem" }}
              key={index}
            >
              <img src={t.strCategoryThumb} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{t.strCategory}</h5>
              </div>
            </div>
          ))}
        
      </Carousel>
      </div>
      </Fade>
    </>
  );
}

export default MenuCarousel;
