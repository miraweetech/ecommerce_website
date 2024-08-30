import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  hideCart,
} from "../../../../Redux/Reducers/CartSlice";
import "../../../Css/CartPage.css";
import Checkout from "../Checkout";
import { showCheckout } from "../../../../Redux/Reducers/CheckoutSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const isVisibleCheckout = useSelector((state) => state.checkout.showCheckout);

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleCloseCart = () => {
    dispatch(hideCart());
  };

  const handleOrderNow = () => {
    dispatch(showCheckout()); 
  };

  return (
    <>
      <div className="cart-container">
        <div className="cart">
          <h2>In Your Cart</h2>
          <button onClick={handleCloseCart}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-img">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cart-item-name">
              <h4>{item.name}</h4>
              <p onClick={() => handleRemoveItem(item.id)}>+</p>
            </div>
            <div>
              <p className="cart-item-price">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}

        <div className="cart-total">
          <p>Subtotal</p>
          <p>${totalAmount.toFixed(2)}</p>
        </div>
        <button className="order-btn" onClick={handleOrderNow}>
          Order Now
        </button>
      </div>
      {isVisibleCheckout && <Checkout />}
    </>
  );
};

export default Cart;

