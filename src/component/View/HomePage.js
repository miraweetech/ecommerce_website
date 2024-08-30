import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Css/HomePage.css";
import o1 from "../image/o1.jpg";
import o2 from "../image/o2.jpg";
import f1 from "../image/f1.png";
import f2 from "../image/f2.png";
import f3 from "../image/f3.png";
import f4 from "../image/f4.png";
import f5 from "../image/f5.png";
import f6 from "../image/f6.png";
import f7 from "../image/f7.png";
import f8 from "../image/f8.png";
import f9 from "../image/f9.png";
import { addItem, showCart } from "../../Redux/Reducers/CartSlice";

const images = { o1, o2 };
const menuItems = [
  {
    id: 1,
    category: "pizza",
    name: "Delicious Pizza",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$20",
    image: f1,
  },
  {
    id: 2,
    category: "burger",
    name: "Delicious Burger",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$15",
    image: f2,
  },
  {
    id: 3,
    category: "pizza",
    name: "Delicious Pizza",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$17",
    image: f3,
  },
  {
    id: 4,
    category: "pasta",
    name: "Delicious Pasta",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$18",
    image: f4,
  },
  {
    id: 5,
    category: "fries",
    name: "French Fries",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$10",
    image: f5,
  },
  {
    id: 6,
    category: "pizza",
    name: "Delicious Pizza",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$15",
    image: f6,
  },
  {
    id: 7,
    category: "burger",
    name: "Tasty Burger",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$12",
    image: f7,
  },
  {
    id: 8,
    category: "burger",
    name: "Tasty Burger",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$14",
    image: f8,
  },
  {
    id: 9,
    category: "pasta",
    name: "Delicious Pasta",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$10",
    image: f9,
  },
];

const HomePage = () => {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.home.offers);

  const handleOrderOnline = () => {
    dispatch(showCart());
  };

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
    dispatch(showCart());
  };

  return (
    <>
      <section className="slider_section">
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {offers.map((offer, index) => (
              <div
                key={offer.id}
                className={`carousel-item ${index === 1 ? "active" : ""}`}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-7 col-lg-6">
                      <div className="detail-box1">
                        <h1>Fast Food Restaurant</h1>
                        <p>
                          Doloremque, itaque aperiam facilis rerum, commodi,
                          temporibus sapiente ad mollitia laborum quam quisquam
                          esse error unde. Tempora ex doloremque, labore, sunt
                          repellat dolore, iste magni quos nihil ducimus libero
                          ipsam.
                        </p>
                        <div className="btn-box">
                          <button className="btn1" onClick={handleOrderOnline}>
                            Order now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="container">
            <ol className="carousel-indicators">
              {offers.map((_, index) => (
                <li
                  key={index}
                  data-target="#customCarousel1"
                  data-slide-to={index}
                  className={index === 1 ? "active" : ""}
                ></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="offer_section layout_padding-bottom">
        <div className="offer_container">
          <div className="container ">
            <div className="row">
              {offers.map((offer) => (
                <div key={offer.id} className="col-md-6">
                  <div className="box1">
                    <div className="img-box1">
                      <img src={images[offer.image]} alt={offer.title} />
                    </div>
                    <div className="detail-box2">
                      <h5>{offer.title}</h5>
                      <h6>
                        <span>{offer.discount}</span> Off
                      </h6>
                      <button className="btn1">Order Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="food_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>

          <ul className="filters_menu">
            <li className="active" data-filter="*">
              All
            </li>
            <li data-filter=".burger">Burger</li>
            <li data-filter=".pizza">Pizza</li>
            <li data-filter=".pasta">Pasta</li>
            <li data-filter=".fries">Fries</li>
          </ul>

          <div className="filters-content">
            <div className="row grid">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className={`col-sm-6 col-lg-4 all ${item.category}`}
                >
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="detail-box">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        <div className="options">
                          <h6>{item.price}</h6>
                          <button
                            className="cart-btn"
                            onClick={() => handleAddToCart(item)}
                          >
                            <i
                              className="fa fa-shopping-cart"
                              aria-hidden="true"
                              style={{ color: "white" }}
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
