import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Outlets from "../Outlet/Outlet";
import HomePage from "../View/HomePage";
import AddToCart from "../View/addToCart";
import SignIn from "../View/Page/SignIn";



const Navigation = () => {
  console.log("hello ");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Outlets />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
          <Route path="/order-online" element={<AddToCart/>} />
          <Route path="/signin" element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
