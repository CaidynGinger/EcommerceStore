import React, { useEffect, useRef, useState } from "react";
import classes from "./StoreHomeHeader.module.css";
import { Routes, Route, Link } from "react-router-dom";

export const StoreHomeHeader = (props) => {
  console.log(props);
  const BrandMenuStoreHeader = useRef();
  const [BrandMenuStoreHeaderCss, setBrandMenuStoreHeaderCss] = useState();
  const [sticky_spacingCss, setSticky_spacingCss] = useState();

  const CheckIfSticky2 = () => {
    if (window.pageYOffset >= 634 - 64 + 120) {
      setBrandMenuStoreHeaderCss(`${classes.sticky}`);
      setSticky_spacingCss(`${classes.sticky_spacing}`);
    } else {
      setBrandMenuStoreHeaderCss(`${classes.brand_menu_store_main}`);
      setSticky_spacingCss();
    }
  };
  //   https://bobbyhadz.com/blog/react-onscroll
  useEffect(() => {
    const handleScroll = (event) => {
      CheckIfSticky2();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let linkContent = (
    <li>
      <Link className={classes.main_link_a} to="/all-ships">
        <p className={classes.main_link}>See all ships</p>
      </Link>
    </li>
  );

  if (props.UserDetails) {
    linkContent = (
      <>
        <li>
          <Link className={classes.main_link_a} to="/all-ships">
            <p className={classes.main_link}>See all ships</p>
          </Link>
        </li>
        <li>
          <Link className={classes.main_link_a} to="/orders">
            <p className={classes.main_link}>Orders</p>
          </Link>
        </li>
        <li>
          <Link className={classes.main_link_a} to="/edit-products">
            <p className={classes.main_link}>Edit Products</p>
          </Link>
        </li>
      </>
    );
  }

  return (
    <>
      <div className={sticky_spacingCss}></div>
      <header ref={BrandMenuStoreHeader} className={BrandMenuStoreHeaderCss}>
        <nav className={classes.brand_menu}>
          <div className={classes.left}>
            <div className={`${classes.decor} ${classes.decor_left}`}></div>
          </div>
          <div className={classes.main}>
            <ul>
              <li>
                <p className={classes.main_link_main}>Store Home</p>
              </li>
              {linkContent}
            </ul>
          </div>
          <div className={classes.right}>
            <div className={`${classes.decor} ${classes.decor_right}`}></div>
          </div>
        </nav>
      </header>
    </>
  );
};
