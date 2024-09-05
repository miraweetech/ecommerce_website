import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Css/headerCss.css";
import { showCart } from "../../Redux/Reducers/CartSlice";
import Cart from "../View/Page/Cart/Cart";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isCartVisible = useSelector((state) => state.cart.showCart);

  const handleLogin = () => {
    navigate("/signin");
  };

  const handleMyCart = () => {
    dispatch(showCart());
  };

  return (
    <>
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
              <i className="fa fa-search" aria-hidden="true"></i>
            </li>
            <button onClick={handleMyCart}>My Cart</button>
          </ul>
        </div>
      </div>
      {isCartVisible && <Cart />}
    </>
  );
};

export default Header;
