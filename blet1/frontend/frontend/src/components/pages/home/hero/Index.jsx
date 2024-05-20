/** @format */

import React from "react";
import style from "./style.module.scss";

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.container}>
        <div className={style.texts}>
          <h1>Shop With Us</h1>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            assumenda ea quo cupiditate facere deleniti fuga officia.
          </p>
          <div className={style.buttons}>
            <button className={style.shopbtn}>SHOP NOW</button>
            <button className={style.clubbtn}>CLUB MEMBERSHIP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
