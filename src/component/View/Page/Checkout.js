import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Css/Checkout.css";
import { hideCheckout, setField } from "../../../Redux/Reducers/CheckoutSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const checkoutState = useSelector((state) => state.checkout);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setField({ field: name, value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleCloseCheckout = () => {
    dispatch(hideCheckout());
  };

  const handleConfirmOrder = () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Order confirmed! Thank you for your purchase.");
      dispatch(hideCheckout());
    }
  };

  const validateFields = () => {
    const newErrors = {};
    if (!checkoutState.email) newErrors.email = "please enter your email";
    if (!checkoutState.lastName)
      newErrors.lastName = "please enter your lastname";
    if (!checkoutState.address) newErrors.address = "please enter your address";
    if (!checkoutState.city) newErrors.city = "please enter your city";
    if (!checkoutState.state) newErrors.state = "please enter your state";
    if (!checkoutState.zip) newErrors.zip = "please enter your zip";
    if (!checkoutState.phone)
      newErrors.phone = "please enter your phone number";
    return newErrors;
  };

  return (
    <>
      <div className="checkout-container">
        <div className="cart">
          <h2>Order Now</h2>
          <button
            className="close-btn"
            onClick={handleCloseCheckout}
            aria-label="Close Cart"
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>

        <div className="checkout-container-form">
          <div className="checkout-form">
            <h2>Contact</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={checkoutState.email}
              onChange={handleChange}
              className="input-field"
            />
            {errors.email && <p className="error-message">{errors.email}</p>}

            <input
              type="text"
              name="firstName"
              placeholder="First name (optional)"
              value={checkoutState.firstName}
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={checkoutState.lastName}
              onChange={handleChange}
              className="input-field"
            />
            {errors.lastName && (
              <p className="error-message">{errors.lastName}</p>
            )}

            <input
              type="text"
              name="company"
              placeholder="Company (optional)"
              value={checkoutState.company}
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={checkoutState.address}
              onChange={handleChange}
              className="input-field"
            />
            {errors.address && (
              <p className="error-message">{errors.address}</p>
            )}
            <input
              type="text"
              name="apartment"
              placeholder="Apartment, suite, etc. (optional)"
              value={checkoutState.apartment}
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={checkoutState.city}
              onChange={handleChange}
              className="input-field"
            />
            {errors.city && <p className="error-message">{errors.city}</p>}
            <div className="state-zip-container">
              <input
                type="text"
                name="state"
                placeholder="State"
                value={checkoutState.state}
                onChange={handleChange}
                className="input-field"
              />

              <input
                type="text"
                name="zip"
                placeholder="PIN code"
                value={checkoutState.zip}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="state-zip-container">
              {errors.state && <p className="error-message">{errors.state}</p>}
              {errors.zip && <p className="error-message">{errors.zip}</p>}
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={checkoutState.phone}
              onChange={handleChange}
              className="input-field"
            />
            {errors.phone && <p className="error-message">{errors.phone}</p>}
          </div>

          <div className="delivery-form">
            <h2>Payment</h2>
            <select name="creditCard" className="input-field">
              <option value="creditCard">Credit card</option>
            </select>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card number"
              value={checkoutState.cardNumber}
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="text"
              name="cardName"
              placeholder="Name on card"
              value={checkoutState.cardName}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>

        <div className="checkout-container-order">
          <button onClick={handleConfirmOrder}>Confirm Order</button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
