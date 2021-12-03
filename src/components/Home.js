import React, { useState } from 'react';

import Card from "./Card.js";
import { Product } from "./Product";
import { Client } from "./Client";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import "../style.css";

const Home = () => {
  const [item, setitem] = useState(Product);
  const [client, setClient] = useState(Client);


  return (

    <>
      <div className="main">

        <Navbar />


        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner main_car">
            <div className="carousel-item active">
              <img className="d-block w-100 slider_img" src="image/bp.jpg" alt="First slide" />

            </div>

            <div className="carousel-item">
              <img className="d-block w-100 slider_img" src="image/org_back.jpg" alt="Second slide" />

            </div>
            <div className="carousel-item">
              <img className="d-block w-100 slider_img" src="image/covid_bacg.jpg" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="content">
          <div className="item">
            <div className="content_text">
              <i className="fas fa-truck"></i>
              <h2>Free Delivery</h2>
              <p>Free delivery on all your Orders</p>
            </div>
            <div className="content_text">
              <i className="fas fa-sync"></i>
              <h2>Return Policy</h2>
              <p>We offer seamless and easy return policy</p>
            </div>
            <div className="content_text">
              <i className="fas fa-headphones"></i>
              <h2>24/7 Support</h2>
              <p>Customers services available at all times </p>
            </div>
            <div className="content_text">
              <i className="fab fa-amazon-pay"></i>
              <h2>Secure Payment</h2>
              <p>Pay Securely with Debit/Credit cards or UPI</p>
            </div>
          </div>

        </div>
        <div className="covid">
          <div className="covid_product">
            <img src="image/Banner.png" alt="covid" />
          </div>
        </div>
        <div className="card_info">
          {
            item.map((element) => {
              return <Card
                title={element.title}
                img={element.img}
              />
            })
          }

        </div>




        <div className="testi_head">
          <h1>What Our Client Say About Us</h1>
        </div>
        <div className="client_info">
          {
            Client.map((element) => {
              return <Card
                title={element.Description}
                img={element.img}
              />
            })
          }
        </div>
      </div>

      <Footer />

    </>
  )

}

export default Home;