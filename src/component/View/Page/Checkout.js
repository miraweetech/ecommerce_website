import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Css/Checkout.css";
import { setField } from "../../../Redux/Reducers/CheckoutSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const checkoutState = useSelector((state) => state.checkout);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setField({ field: name, value }));
  };

  return (
    <>
      <div className="checkout-container">
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

          <h2>Delivery</h2>
          <div className="delivery-form">
            <select
              name="country"
              className="input-field"
              value={checkoutState.country}
              onChange={handleChange}
            >
              <option value="india">Country/Region</option>
            </select>
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
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={checkoutState.phone}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <h2>Payment</h2>
          <div className="delivery-form">
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
      </div>
    </>
  );
};

export default Checkout;
