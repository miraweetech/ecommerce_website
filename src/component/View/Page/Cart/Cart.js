import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, hideCart } from "../../../../Redux/Reducers/CartSlice";
import "../../../Css/Cart.css";
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

  const handleIncrementItem = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrementItem = (id) => {
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
          <button
            className="close-btn"
            onClick={handleCloseCart}
            aria-label="Close Cart"
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-name">
                <h4>{item.name}</h4>
                <div className="cart-item-quantity">
                  <button onClick={() => handleDecrementItem(item.id)}>-</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => handleIncrementItem(item)}>+</button>
                </div>
              </div>
              <div>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveItem(item.id)}
                  aria-label="Remove Item"
                >
                  <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <p className="cart-item-price">
                  ${Number(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}

        <div className="cart-total">
          <p>Subtotal</p>
          <p>${Number(totalAmount).toFixed(2)}</p>
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
