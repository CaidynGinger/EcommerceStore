import React, { useEffect, useState } from "react";
import classes from "./EditProducts.module.css";
import axios from "axios";
import { Product } from "./UI/Product";
import { ProductForm } from "./UI/ProductForm/ProductForm";
import { Button } from "../../UI/Button/Button";

export const EditProducts = () => {
  const [ProductToEdit, setProductToEdit] = useState();

  const [ProductList, setProductList] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:5000/api/all-products",
      headers: { "Content-Type": "application/json" },
    };
    axios
      .request(options)
      .then(function (response) {
        setProductList(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const ClickedProductHandler = (id) => {
    setProductToEdit(
      ProductList.filter((product) => {
        return product._id === id;
      })
    );
    console.log(ProductToEdit);
  };

  return (
    <div className={classes.edit_product}>
      <div className={classes.table_holder}>
        <div className={classes.button_container}>
          <Button>Add New Product</Button>
        </div>
        <table className={classes.user_table}>
          <thead>
            <tr>
              <th className={classes.first_table_header}>Ship Name</th>
              <th>Product Price</th>
              <th>Discounted</th>
              <th>InStock</th>
              <th>Showcase Product</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ProductList.map((item) => {
              return (
                <Product
                  ClickedProductHandler={ClickedProductHandler}
                  key={item._id}
                  ProductDetails={item}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={classes.product_form}>
        <div className={classes.product_form_2}>
          {ProductToEdit && (
            <ProductForm
              setProductToEdit={setProductToEdit}
              ProductToEdit={ProductToEdit}
            />
          )}
        </div>
      </div>
    </div>
  );
};
