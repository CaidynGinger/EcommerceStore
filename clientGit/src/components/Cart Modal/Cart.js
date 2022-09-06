import React, { useState } from "react";

import classes from "./Cart.module.css";

export const Cart = () => {
  const [ShowCart, setShowCart] = useState(false);
  const [ShowCartCss, setShowCartCss] = useState(
    `${classes.cart_modal_background}`
  );

  const [ShowCartDetailsCss, setShowCartDetailsCss] = useState(
    `${classes.cart_container}`
  );

  const ShowCartHandler = () => {
    setShowCart((prevState) => !prevState);
    if (ShowCart) {
      setShowCartCss(`${classes.cart_modal_background} ${classes.cart_modal_background_show}`);
      setShowCartDetailsCss(`${classes.cart_container} ${classes.show_cart}`);
    } else {
      setShowCartCss(`${classes.cart_modal_background}`);
      setShowCartDetailsCss(`${classes.cart_container}`);
    }
  };
  return (
    <>
      <div onClick={ShowCartHandler} className={ShowCartCss}>
        
      </div>
      <div className={ShowCartDetailsCss}>
            <h1>Your Cart</h1>
          {/* <div className={classes.product_list}></div>
          <div className={classes.brake_down}></div> */}
        </div>
      <div onClick={ShowCartHandler} className={classes.cart_btn}>
        <div className={classes.badge}>
          <p className={classes.badge_text}>4</p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Cart</title>
          <circle
            cx="176"
            cy="416"
            r="16"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <circle
            cx="400"
            cy="416"
            r="16"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M48 80h64l48 272h256"
          />
          <path
            d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
        </svg>
      </div>
    </>
  );
};
