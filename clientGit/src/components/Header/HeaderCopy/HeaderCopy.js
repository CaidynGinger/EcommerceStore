import React from "react";
import classes from "./HeaderCopy.module.css";

export const HeaderCopy = () => {
  return (
    <>
      <h4 className={classes.brand_shop_title_shop}>Shop</h4>
      <div className={classes.brand_shop_title_slash}></div>
      <h5 className={classes.brand_shop_title_copy_large}>Ginger Industries</h5>
      <h6 className={classes.brand_shop_title_copy_small}>
        For all interplanetary needs from citizen to company
      </h6>
    </>
  );
};
