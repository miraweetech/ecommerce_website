import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Outlets from "../Outlet/Outlet";
import HomePage from "../View/HomePage";
import SignIn from "../View/Page/SignIn";
import CartPage from "../View/Page/Cart/CartPage";

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Outlets />}>
            <Route path="" element={<HomePage />} />
            <Route path="/cartpage" element={<CartPage/>}/>
          </Route>
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
