import React from "react";
import { ImageSlider } from "./ImageSlider/ImageSlider";

import image from "../../images/slider/KhartuAl_Magda.jpg";
import image2 from "../../images/slider/400i_Explore_2_092021.jpg";
import image3 from "../../images/slider/ARGO-SRV_PROMO_Cargo_Sm01_CC-Min.jpg";
import image4 from "../../images/slider/Mustang-Omega_v7.jpg";
import image5 from "../../images/slider/Wildfire_render1.jpg";

import classes from "./StoreHome.module.css";
import { StoreHomeHeader } from "./StoreHomeHeader/StoreHomeHeader";
import { LatestShips } from "./LatestShips/LatestShips";
import { Footer } from "../Footer/Footer";
import { DiscountedShips } from "./DiscountedShips/DiscountedShips";

export const StoreHome = (props) => {
  const slides = [
    { url: image, title: "KhartuAl Magda", id: 1 },
    { url: image2, title: "KhartuAl Magda", id: 8 },
    { url: image3, title: "KhartuAl Magda", id: 3 },
    { url: image4, title: "KhartuAl Magda", id: 2 },
    { url: image5, title: "KhartuAl Magda", id: 4 },
  ];

  return (
    <div className={classes.store_home}>
      <div className={classes.image_slider_container}>
        <ImageSlider slides={slides} />
      </div>
      <StoreHomeHeader UserDetails={props.UserDetails}/>
      <LatestShips/>
      <DiscountedShips/>
      <Footer/>
    </div> 
  );
};
