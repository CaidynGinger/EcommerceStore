import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../UI/Button/Button";

import classes from "./Product.module.css";

export const Product = (props) => {
  const ProductClickedHandler = () => {
    props.ClickedProductHandler(props.ProductDetails._id);
  };

  const ProductDeleteHandler = () => {
    console.log("del");
  };

  return (
    <tr className={classes.table_item}>
      <td className={classes.first_table_detail}>
        {props.ProductDetails.productDetails.productName}
      </td>
      <td>$ {props.ProductDetails.productDetails.productPrice}</td>
      <td>
        {(props.ProductDetails.productDetails.discounted && "Yes") || "No"}
      </td>
      <td>{props.ProductDetails.stockInventoryDetails.inStock}</td>
      <td>
        {(props.ProductDetails.productDetails.showCaseProduct && "Yes") || "No"}
      </td>
      <td>
        <div className={classes.button_container}>
          <Button onClick={ProductClickedHandler}>Edit</Button>
        </div>
      </td>
      <td>
        <div className={classes.button_container}>
          <Button onClick={ProductDeleteHandler}>Delete</Button>
        </div>
      </td>
    </tr>
  );
};
