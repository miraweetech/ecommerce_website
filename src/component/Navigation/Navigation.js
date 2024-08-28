import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Outlets from "../Outlet/Outlet";
import HomePage from "../View/HomePage";

const Navigation = () => {
  console.log("hello ");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Outlets />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
