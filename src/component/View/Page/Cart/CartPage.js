import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem, showCart } from "../../../../Redux/Reducers/CartSlice";
import "../../../Css/CartPage.css";

const CartPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const selectedItem = location.state?.item;

  if (!selectedItem) return null;

  const handleAddToCart = () => {
    dispatch(addItem(selectedItem));
    dispatch(showCart());
  };

  return (
    <>
      <div className="detail-view">
        <div className="detail-view-content">
          <div className="cart-container1">
            <div className="cart-container-img">
              <img src={selectedItem.image} alt={selectedItem.name} />
            </div>
            <div className="cart-container-context">
              <h1>{selectedItem.name}</h1>
              <p>{selectedItem.description}</p>
              <h2>${selectedItem.price}</h2>
              <button onClick={handleAddToCart}>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
