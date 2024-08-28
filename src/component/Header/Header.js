import React from "react";
import "../Css/headerCss.css";

const Header = () => {
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
            <li><i class="fa fa-user" aria-hidden="true"></i></li>
            <li><i class="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i class="fa fa-search" aria-hidden="true"></i></li>
            <button>Order Online</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
