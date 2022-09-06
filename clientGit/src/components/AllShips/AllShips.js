import React, { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "../Footer/Footer";
import { ImageSlider } from "../StoreHome/ImageSlider/ImageSlider";

import image3 from "../../images/slider/ARGO-SRV_PROMO_Cargo_Sm01_CC-Min.jpg";

import classes from "./AllShips.module.css";
import { Button } from "../../UI/Button/Button";
import { Link } from "react-router-dom";

export const AllShips = () => {
  const options = {
    method: "GET",
    url: "http://localhost:5000/api/all-products",
    headers: { "Content-Type": "application/json" },
  };

  const [AllShipsDetailsList, setAllShipsDetailsList] = useState([]);

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setAllShipsDetailsList(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  let content = AllShipsDetailsList.map((item) => {
    console.log(item);
    return (
      <Link className={classes.ship_link} key={item._id} to={`/ship-view/${item._id}`}>
        <div  className={classes.ship_card}>
          <div className={classes.btn_container}>
            <p className={classes.btn_text}>View Specs and options ❯</p>
            <div className={classes.arrow}></div>
          </div>
          <div
            className={classes.copy}
            style={{ backgroundImage: `url(${image3})` }}
          >
            <div className={classes.decor}></div>
            <h4>{item.productDetails.productName}</h4>
            <div className={classes.button_main_container}>
              <div className={classes.button_container}>
                <Button>View Specs</Button>
              </div>
            </div>
          </div>
          <div className={classes.details}>
            <p>
              Height / Meters{" "}
              <span>{item.productDetails.model.measurements.height}</span>
            </p>
            <p>
              Length / Meters{" "}
              <span>{item.productDetails.model.measurements.length}</span>
            </p>
            <p>
              Mass / Kg{" "}
              <span>{item.productDetails.model.measurements.mass}</span>
            </p>
            <p>
              Manufacturer <span>{item.productDetails.manufacture}</span>
            </p>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div className={classes.store_home}>
      <div className={classes.image_slider_container}>
        <ImageSlider />
      </div>
      <div className={classes.all_ships_container}>{content}</div>
      <Footer />
    </div>
  );
};
