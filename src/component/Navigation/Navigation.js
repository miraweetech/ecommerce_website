import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Outlets from "../Outlet/Outlet";
import HomePage from "../View/HomePage";
import SignIn from "../View/Page/SignIn";


const Navigation = () => {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Outlets />}>
            <Route path="" element={<HomePage />} />
          </Route>
          <Route path="/signin" element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
