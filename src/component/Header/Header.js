// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import "../Css/headerCss.css";
// import { setUser, addToCart } from "../../Redux/Reducers/headerSlice";

// const Header = () => {
//   const user = useSelector((state) => state.header.user);
//   const cart = useSelector((state) => state.header.cart);
//   const dispatch = useDispatch();

//   const handleLogin = () => {
//     dispatch(setUser("John Doe"));
//   };

//   const handleAddToCart = () => {
//     dispatch(addToCart({ id: 1, name: "Sample Item" }));
//   };

//   return (
//     <div className="container-fluid">
//       <div className="logo">
//         <p>Feane</p>
//       </div>
//       <div className="logo">
//         <ul>
//           <li>home</li>
//           <li>menu</li>
//           <li>about</li>
//           <li>booktable</li>
//         </ul>
//       </div>
//       <div className="logo">
//         <ul>
//           <li>
//             <i
//               className="fa fa-user"
//               aria-hidden="true"
//               onClick={handleLogin}
//             ></i>
//           </li>
//           <li>
//             <i
//               className="fa fa-shopping-cart"
//               aria-hidden="true"
//               onClick={handleAddToCart}
//             ></i>
//           </li>
//           <li>
//             <i className="fa fa-search" aria-hidden="true"></i>
//           </li>
//           <button>Order Online</button>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Css/headerCss.css";
import { setUser, addToCart } from "../../Redux/Reducers/headerSlice";

const Header = () => {
  const user = useSelector((state) => state.header.user);
  const cart = useSelector((state) => state.header.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    dispatch(setUser("John Doe"));
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ id: 1, name: "Sample Item" }));
  };

  const handleOrderOnline = () => {
    navigate("/order-online"); // Navigate to Order Online page
  };

  return (
    <div className="container-fluid">
      <div className="logo">
        <p>Feane</p>
      </div>
      <div className="logo">
        <ul>
          <li>home</li>
          <li>menu</li>
          <li>about</li>
          <li>booktable</li>
        </ul>
      </div>
      <div className="logo">
        <ul>
          <li>
            <i
              className="fa fa-user"
              aria-hidden="true"
              onClick={handleLogin}
            ></i>
          </li>
          <li>
            <i
              className="fa fa-shopping-cart"
              aria-hidden="true"
              onClick={handleAddToCart}
            ></i>
          </li>
          <li>
            <i className="fa fa-search" aria-hidden="true"></i>
          </li>
          <button onClick={handleOrderOnline}>Order Online</button> {/* Add onClick */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
