import React from "react";
import "../Css/HomePage.css";
import o1 from "../image/o1.jpg";
import o2 from "../image/o2.jpg";

const HomePage = () => {
  return (
    <>
      <section className="slider_section">
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>Fast Food Restaurant</h1>
                      <p>
                        Doloremque, itaque aperiam facilis rerum, commodi,
                        temporibus sapiente ad mollitia laborum quam quisquam
                        esse error unde. Tempora ex doloremque, labore, sunt
                        repellat dolore, iste magni quos nihil ducimus libero
                        ipsam.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>Fast Food Restaurant</h1>
                      <p>
                        Doloremque, itaque aperiam facilis rerum, commodi,
                        temporibus sapiente ad mollitia laborum quam quisquam
                        esse error unde. Tempora ex doloremque, labore, sunt
                        repellat dolore, iste magni quos nihil ducimus libero
                        ipsam.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>Fast Food Restaurant</h1>
                      <p>
                        Doloremque, itaque aperiam facilis rerum, commodi,
                        temporibus sapiente ad mollitia laborum quam quisquam
                        esse error unde. Tempora ex doloremque, labore, sunt
                        repellat dolore, iste magni quos nihil ducimus libero
                        ipsam.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <ol className="carousel-indicators">
              <li data-target="#customCarousel1" data-slide-to="0"></li>
              <li
                data-target="#customCarousel1"
                data-slide-to="1"
                className="active"
              ></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>

      <section class="offer_section layout_padding-bottom">
        <div class="offer_container">
          <div class="container ">
            <div class="row">
              <div class="col-md-6  ">
                <div class="box ">
                  <div class="img-box">
                    <img src={o1}></img>
                  </div>
                  <div class="detail-box">
                    <h5>Tasty Thursdays</h5>
                    <h6>
                      <span>20%</span> Off
                    </h6>
                    <button className="btn1">Order Now</button>
                  </div>
                </div>
              </div>

              <div class="col-md-6  ">
                <div class="box ">
                  <div class="img-box">
                    <img src={o2}></img>
                  </div>
                  <div class="detail-box">
                    <h5>Pizza Days</h5>
                    <h6>
                      <span>15%</span> Off
                    </h6>
                    <button className="btn1">Order Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default HomePage;
