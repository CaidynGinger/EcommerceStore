import React, { useState } from "react";
import classes from "./DiscountedShips.module.css";

import imageOne from "../../../images/slider/400i_Explore_2_092021.jpg";
import { Button } from "../../../UI/Button/Button";

export const DiscountedShips = () => {
  const [ProductDetails, setProductDetails] = useState([
    {
      id: 1,
      cssClasses: `${classes.card}`,
      properties: {
        selected: true,
        image: imageOne,
        name: "AVENGER TITAN",
        description: `With its hold modified for maximum 
              cargo space, and its tried and true combat abilities, 
              the Avenger Titan is a light freighter that’s more than 
              capable of handling itself in a fight.        Start your 
              adventure today and launch into the Persistent Universe with 
              your Avenger Titan. Snagging this pack also lets you 
              experience a taste of intense dogfighting and FPS action 
              with two distinct multiplayer game modes: Arena Commander 
              and Star Marine.`,
        discounted: true,
        discountPrice: 30.56,
        price: 45.0,
      },
    },
    {
        id: 2,
        cssClasses: `${classes.card}`,
        properties: {
          selected: true,
          image: imageOne,
          name: "AVENGER TITAN",
          description: `With its hold modified for maximum 
                cargo space, and its tried and true combat abilities, 
                the Avenger Titan is a light freighter that’s more than 
                capable of handling itself in a fight.        Start your 
                adventure today and launch into the Persistent Universe with 
                your Avenger Titan. Snagging this pack also lets you 
                experience a taste of intense dogfighting and FPS action 
                with two distinct multiplayer game modes: Arena Commander 
                and Star Marine.`,
          discounted: true,
          discountPrice: 30.56,
          price: 45.0,
        },
      },
      {
        id: 3,
        cssClasses: `${classes.card}`,
        properties: {
          selected: true,
          image: imageOne,
          name: "AVENGER TITAN",
          description: `With its hold modified for maximum 
                cargo space, and its tried and true combat abilities, 
                the Avenger Titan is a light freighter that’s more than 
                capable of handling itself in a fight.        Start your 
                adventure today and launch into the Persistent Universe with 
                your Avenger Titan. Snagging this pack also lets you 
                experience a taste of intense dogfighting and FPS action 
                with two distinct multiplayer game modes: Arena Commander 
                and Star Marine.`,
          discounted: true,
          discountPrice: 30.56,
          price: 45.0,
        },
      },
  ]);
  return (
    <div className={classes.DiscountedShips}>
      <div className={classes.title_container}>
        <h1>
          <span className={classes.arrows}>❭❭❭</span> Discounted Ships
        </h1>
      </div>
      <div className={classes.card_container}>
        {ProductDetails.map((product) => {
          let discountDisplay = (
            <>
              <p className={classes.discounted}>Discounted!</p>
              <p className={`${classes.old_price} ${classes.price}`}>{`$${Math.round(
                product.properties.price,
                2
              ).toFixed(2)}`}</p>
              <p
                className={`${classes.new_price} ${classes.price}`}
              >{`$${product.properties.discountPrice}`}</p>
            </>
          );
          
          let discountDisplayContent = (
            <>
              {!product.properties.discounted && (
                <p className={classes.price}>{`$${Math.round(
                  product.properties.price,
                  2
                ).toFixed(2)}`}</p>
              )}
              {product.properties.discounted && discountDisplay}
            </>
          );
          
          return (
            <div className={classes.card}>
              <img
                className={classes.product_image}
                src={product.properties.image}
              />
              <h4 className={classes.title}>{product.properties.name}</h4>
              {discountDisplayContent}
              <div className={classes.button}>
                <Button>Add To Cart</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


