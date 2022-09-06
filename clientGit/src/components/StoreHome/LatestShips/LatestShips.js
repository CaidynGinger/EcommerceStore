import React, { useState } from "react";
import { HologramCard } from "../../../UI/HologramCard/HologramCard";
import classes from "./LatestShips.module.css";

import imageOne from "../../../images/slider/400i_Explore_2_092021.jpg";
import { Button } from "../../../UI/Button/Button";

export const LatestShips = () => {
  const [ImagesForProductShowOff, setImagesForProductShowOff] = useState([
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
      id: 1,
      cssClasses: `${classes.card}`,
      properties: {
        selected: false,
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
        discounted: false,
        discountPrice: 30.56,
        price: 45.0,
      },
    },
    {
      id: 3,
      cssClasses: `${classes.card}`,
      properties: {
        selected: false,
        image: imageOne,
      },
    },
    {
      id: 4,
      cssClasses: `${classes.card}`,
      properties: {
        selected: false,
        image: imageOne,
      },
    },
  ]);

  const [ProductShowcaseContent, setProductShowcaseContent] = useState(
    ImagesForProductShowOff.map((product) => {
      let productCssClasses = `${product.cssClasses}`;
      let backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(${product.properties.image})`;
      let discountDisplay = (
        <>
          <p className={classes.discounted}>Discounted!</p>
          <p
            className={`${classes.old_price} ${classes.price}`}
          >{`$${Math.round(product.properties.price, 2).toFixed(2)}`}</p>
          <p
            className={`${classes.new_price} ${classes.price}`}
          >{`$${product.properties.discountPrice}`}</p>
        </>
      );
      let cardContent = (
        <div className={classes.card_details}>
          <h4 className={classes.title}>{product.properties.name}</h4>
          <p className={classes.copy}>{product.properties.description}</p>
          {!product.properties.discounted && (
            <p className={classes.price}>{`$${Math.round(
              product.properties.price,
              2
            ).toFixed(2)}`}</p>
          )}
          {product.properties.discounted && discountDisplay}

          {/* {product.properties.discounted && cardContent} */}
          <div className={classes.button_container}>
            <Button>View Ship</Button>
          </div>
        </div>
      );

      if (product.properties.selected) {
        productCssClasses = `${product.cssClasses} ${classes.selected}`;
        backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.0),rgba(0, 0, 0, 0.0)), url(${product.properties.image})`;
      }
      return (
        <div
          key={product.id}
          className={productCssClasses}
          style={{
            backgroundImage: backgroundImage,
          }}
        >
          {product.properties.selected && cardContent}
        </div>
      );
    })
  );
  // background-image: ;
  const slideClickLeftHandler = () => {
    slideMovement(true);
  };

  const slideClickRightHandler = () => {
    slideMovement(false);
  };

  const slideMovement = (movement) => {
    let index = ImagesForProductShowOff.findIndex((item) => {
      return item.properties.selected == true;
    });
    setImagesForProductShowOff((prevState) => {
      // remove selected
      let removeSelected = prevState[index];
      removeSelected = {
        ...removeSelected,
        properties: {
          ...removeSelected.properties,
          selected: false,
        },
      };
      prevState.splice(index, 1, removeSelected);

      // find new selected index
      let newIndexNumber = null;
      if (movement) {
        newIndexNumber = index - 1;
        if (newIndexNumber < 0) {
          newIndexNumber = ImagesForProductShowOff.length - 1;
        }
      } else {
        newIndexNumber = index + 1;
        if (newIndexNumber > ImagesForProductShowOff.length - 1) {
          newIndexNumber = 0;
        }
      }

      // add selected
      let addSelected = prevState[newIndexNumber];
      addSelected = {
        ...addSelected,
        properties: {
          ...addSelected.properties,
          selected: true,
        },
      };
      prevState.splice(newIndexNumber, 1, addSelected);

      // rerender images
      setProductShowcaseContent(
        ImagesForProductShowOff.map((product) => {
          let productCssClasses = `${product.cssClasses}`;
          let backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(${product.properties.image})`;
          let discountDisplay = (
            <>
              <p className={classes.discounted}>Discounted!</p>
              <p
                className={`${classes.old_price} ${classes.price}`}
              >{`$${Math.round(product.properties.price, 2).toFixed(2)}`}</p>
              <p
                className={`${classes.new_price} ${classes.price}`}
              >{`$${product.properties.discountPrice}`}</p>
            </>
          );
          let cardContent = (
            <div className={classes.card_details}>
              <h4 className={classes.title}>{product.properties.name}</h4>
              <p className={classes.copy}>{product.properties.description}</p>
              {!product.properties.discounted && (
                <p className={classes.price}>{`$${Math.round(
                  product.properties.price,
                  2
                ).toFixed(2)}`}</p>
              )}
              {product.properties.discounted && discountDisplay}

              {/* {product.properties.discounted && cardContent} */}
              <div className={classes.button_container}>
                <Button>View Ship</Button>
              </div>
            </div>
          );

          if (product.properties.selected) {
            productCssClasses = `${product.cssClasses} ${classes.selected}`;
            backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.0),rgba(0, 0, 0, 0.0)), url(${product.properties.image})`;
          }
          return (
            <div
              key={product.id}
              className={productCssClasses}
              style={{
                backgroundImage: backgroundImage,
              }}
            >
              {product.properties.selected && cardContent}
            </div>
          );
        })
      );

      return prevState;
    });
  };

  return (
    <div className={classes.latest_ships_card}>
      <div
        onClick={slideClickLeftHandler}
        className={`${classes.left_arrow_styles} ${classes.arrow_style}`}
      >
        ❮
      </div>
      <div
        onClick={slideClickRightHandler}
        className={`${classes.right_arrow_styles} ${classes.arrow_style}`}
      >
        ❯
      </div>
      <div className={classes.title_container}>
        <h1> <span className={classes.arrows}>❭❭❭</span> New Ships For Sale</h1>
      </div>
      {ProductShowcaseContent}
    </div>
  );
};
