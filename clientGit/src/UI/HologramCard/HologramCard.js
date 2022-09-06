import React, { useEffect, useState } from "react";

import image from "../../images/Product/store_small.jpeg";

import classes from "./HologramCard.module.css";

export const HologramCard = (props) => {
  const [sideLightCss, setSideLightCss] = useState(`${classes.sidelight}`);

  return (
    <div className={classes.card_container}>
      {/* <div className={sideLightCss}></div> */}
      <div className={classes.detail_holder}>
        <div className={classes.image_container}>
          <img className={classes.image} src={image} />
        </div>
      </div>
    </div>
  );
};
