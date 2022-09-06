import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import { HeaderCopy } from "./HeaderCopy/HeaderCopy";

export const Header = props => {
  // https://stackoverflow.com/questions/32667847/get-divs-offsettop-positions-in-react
  // https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

  const [brandMenuCss, setBrandMenuCss] = useState(`${classes.brand_menu}`);

  const [HeaderGhostCss, setHeaderGhostCss] = useState();


  let loginBtnText = "Login"

  if(props.UserDetails){
    loginBtnText = "Log out | " + props.UserDetails.username
  }


  const CheckIfSticky = () => {
    if(window.pageYOffset >= 64){
      setBrandMenuCss(`${classes.brand_menu} ${classes.sticky}`);
      setHeaderGhostCss(`${classes.header_ghost}`);
    } else {
      setBrandMenuCss(`${classes.brand_menu}`);
      setHeaderGhostCss();
    }
  };
  useEffect(() => {
    const handleScroll = event => {
      CheckIfSticky()
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  const back = () => {
    navigate(-1)
  }

  return (
    <header>
      <div className={HeaderGhostCss}></div>
      <nav className={brandMenuCss}>
        <div className={classes.left}>
          <div onClick={back}><p>Back</p></div>
          <div className={classes.decor}></div>
        </div>
        <div className={classes.right}>
          <HeaderCopy />
          <p className={classes.login_btn} onClick={props.showLoginHandler}>{loginBtnText}</p>
        </div>
      </nav>
    </header>
  );
};

// <a href="https://www.flaticon.com/free-icons/planet" title="planet icons">Planet icons created by lutfix - Flaticon</a>
