import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  
  const [data,setData]=useState({
    name:"",
    email:"",
    imageURL:"",

  })
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[imageURL,setImageURL]=useState("");

  let navigate = useNavigate();

  // const BASE_URL = "https://foododeringwebappserver-production.up.railway.app/";
  
  const BASE_URL = "http://localhost:8080/";

  var [price, setPrice] = useState([
    23, 40, 50, 15, 60, 80, 50, 30, 83, 48, 23, 10, 58, 900,
  ]);
  const [cart, setCart] = useState([]);

  const [quantity, setQuantity] = useState([
    23, 40, 50, 15, 60, 80, 50, 30, 83, 48, 23, 10, 58, 900,
  ]);
  const [loginData, setLoginData] = useState({});
  const [count, setCount] = useState(0);

  const cartAdded = (i) => {
    console.log(i);
    cart.push(i);
    console.log("cart:", cart);
    setCart(cart);

    setCount(count + 1);
  };
  const [user, setUser] = useState({});

  const placeOrder = () => {
    // const isLogedIn = localStorage.getItem("isLogedIn");
    const token = localStorage.getItem("token");
      // console.log(isLogedIn)
    if (token) {
      navigate("/CartForm");
    } else {
      
      toast.success("Please Log in..!", {
        position: "top-center",
        autoClose: 2000,
        onClose: () => {
          // Navigate to cartPage after the toast is closed
          navigate("/login");
        },
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        price,
        setPrice,
        setQuantity,
        cart,
        cartAdded,
        BASE_URL,
        count,
        quantity,
        setCart,
        placeOrder,
        loginData,
        setLoginData,
        name,
        email,
        setEmail,
        setName,
        setData,
        setImageURL,
        imageURL,
        user,
        setUser,
      }}
    >
      {children}
      <ToastContainer />
    </AppContext.Provider>
  );
};

// costom hook
const useGlobelContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useGlobelContext };
