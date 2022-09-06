import React, { useState } from "react";
import { Button } from "../../../../UI/Button/Button";
import { Input } from "../../../../UI/Input/Input";

import classes from "./ProductForm.module.css";

export const ProductForm = (props) => {
  const product = props.ProductToEdit[0];
  console.log(product);
  const [FormDetails, setFormDetails] = useState({
    productName: product.productDetails.productName,
    productPrice: "",
    discounted: "",
    discountedAmount: "",
    inStock: "",
    manufacture: "",
    overview: "",
    focus: "",
    length: "",
    beam: "",
    height: "",
    size: "",
    mass: "",
    showCaseProduct: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onSaveProduct = (e) => {
    e.preventDefault();
    props.setProductToEdit();
  };

  return (
    <form onSubmit={onSaveProduct}>
      <h1 className={classes.form_title}>Edit product</h1>
      <div className={classes.input_container}>
        <Input
          type="string"
          label="Product Name"
          name="productName"
          value={FormDetails.productName}
          onChange={handleInputChange}
        />
      </div>
      <div className={classes.input_container}>
        <Input
          type="text"
          label="Product Name"
          name="productName"
          value={FormDetails.productName}
          onChange={handleInputChange}
        />
      </div>
    <br/>
    <div className={classes.btn_container}>
    <Button>Save</Button>

    </div>
    </form>
  );
};

// {
// 	"productName": "THE HURRICANE",
// 	"productPrice": 80.50,
// 	" discounted": false,
// 	"discountedAmount": 0,
// 	"inStock": 56,
// 	"manufacture": "Anvil Aerospace",
//    "overview": "Big things do come in small packages: the Hurricane is a fighting spacecraft that packs a deadly punch into a slight fuselage. The spacecraft compensates for its lack of creature comforts with its powerful armament - six guns capable of blasting their way through nearly anything. Hurricane pilots have yet to find an enemy shield they can't knock down.",
// 	"focus": "Heavy Fighter",
// 	"length": "22.0",
// 	"beam": "14.5",
// 	"height": "6.0",
// 	"size": "Small",
// 	"mass": "86.454",
// 	"showCaseProduct": true
// }
