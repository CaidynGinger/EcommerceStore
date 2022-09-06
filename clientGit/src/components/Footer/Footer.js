import React from "react";
import classes from "./Footer.module.css";

import ImageOne from "../../images/Company logos/AEGIS_DYNAMICS_WHITE.png";
import ImageTwo from "../../images/Company logos/ANVIL_AEROSPACE_WHITE.png";
import ImageThree from "../../images/Company logos/AOPOA_WHITE.png";
import ImageFour from "../../images/Company logos/ARGO_ASTRONAUTICS_WHITE.png";
import ImageFive from "../../images/Company logos/BANU_WHITE.png";
import ImageSix from "../../images/Company logos/CONSOLIDATED_OUTLAND_WHITE.png";
import ImageSeven from "../../images/Company logos/CRUSADER_INDUSTRIES_WHITE.png";
import ImageEight from "../../images/Company logos/DRAKE_INTERPLANETARY_WHITE.png";
import ImageNine from "../../images/Company logos/KRUGER_INTERGALACTIC_WHITE.png";
import ImageTen from "../../images/Company logos/MISC_WHITE.png";
import ImageEleven from "../../images/Company logos/ORIGIN_JUMPWORKS_WHITE.png";
import ImageTwelve from "../../images/Company logos/TUMBRIL_WHITE.png";

export const Footer = () => {
  let companyLogos = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive, ImageSix, ImageSeven, ImageEight, ImageNine, ImageTen, ImageEleven, ImageTwelve];
  return (
    <div className={classes.footer}>
      {/* <h4>Site Links</h4>
      <ul>
        <li>Home</li>
        <li>All ships</li>
      </ul> */}
      <ul className={classes.logo_container}>
        {companyLogos.map((logo, index) => {
          return (
            <li className={classes.logo} key={index}>
              <img src={logo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
