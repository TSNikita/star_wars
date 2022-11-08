import React from "react";
import { NavLink } from "react-router-dom";

import "typeface-karla";

import { Header } from "../../components";

import Banner from "../../assets/images/BannerComplete.png";

import "./styles.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home_banner">
        <div className="home_text">
          <h1>Find all your favorite character</h1>

          <h2>
            You can find out all the information about your favorite characters
          </h2>

          <NavLink to="characters">
            <button className="home_button"> See more...</button>
          </NavLink>
        </div>

        <div className="home_img">
          <img src={Banner} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Home;
