import React, { useState } from "react";
import classes from "./ImageSlider.module.css";

export const ImageSlider = ({ slides }) => {
  const [CurrentIndex, setCurrentIndex] = useState(1);

  // const [SlidePositionLeftCss, setSlidePositionLeft] = useState(second)
  // const [SlidePositionRightCss, setSlidePositionRightCss] = useState(second)
  // const [SlidePositionSelectedCss, setSlidePositionSelectedCss] = useState(second)

  // let CssArray = [
  //   SlidePositionLeftCss,
  //   SlidePositionRightCss,
  //   SlidePositionSelectedCss,
  // ]



  // const [slidesContent, setSlidesContent] = useState(
   
  //   slides.map((element, index) => {
  //     if (CurrentIndex === index){
  //       return (
  //         <div
  //           className={`${classes.slide} ${classes.selected}`}
  //           style={{ backgroundImage: `url(${element.url})` }}
  //         ></div>
  //       );
  //     }
  //     if (CurrentIndex > index) {
  //       return (
  //         <div
  //           className={`${classes.slide} ${classes.left_slide} ${classes.support_slide}`}
  //           style={{ backgroundImage: `url(${element.url})` }}
  //         ></div>
  //       );
  //     }
  //     if (CurrentIndex === 0 && index === slides.length - 1) {
  //       return (
  //         <div
  //           className={`${classes.slide} ${classes.left_slide} ${classes.support_slide}`}
  //           style={{ backgroundImage: `url(${element.url})` }}
  //         ></div>
  //       );
  //     }
  //     if (CurrentIndex < index) {
  //       return (
  //         <div
  //           className={`${classes.slide} ${classes.right_slide} ${classes.support_slide}`}
  //           style={{ backgroundImage: `url(${element.url})` }}
  //         ></div>
  //       );
  //     }
      
      
  //   })
  // );

  const slideClickLeftHandler = () => {
    slideMovement(true);
  };

  const slideClickRightHandler = () => {
    slideMovement(false);
  };

  const slideMovement = (movement) => {
    
  };
  return (
    <div className={classes.slide_styles_container}>
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

      {/* {slidesContent} */}

      {/* 
      <div
        className={`${LeftSlideCss} ${classes.slide}`}
        style={{ backgroundImage: `url(${slides[getIndex("left")].url})` }}
      >
        <div className={classes.gradient_darker}></div>
      </div>
      <div
        className={`${SelectedSlideCss} ${classes.slide}`}
        style={{ backgroundImage: `url(${slides[getIndex()].url})` }}
      >
        <div className={classes.gradient}></div>
      </div>
      <div
        className={`${RightSlideCss} ${classes.slide}`}
        style={{ backgroundImage: `url(${slides[getIndex("right")].url})` }}
      >
        <div className={classes.gradient_darker}></div>
      </div> */}

      {/* slide helper */}
      {/* <div
          className={`${RightSlideCssHelper} ${classes.slide}`}
          style={{ backgroundImage: `url(${slides[getIndex("right_helper")].url})` }}
        >
          <div className={classes.gradient_darker}></div>
        </div> */}
      {/* slide helper */}
    </div>
  );
};
