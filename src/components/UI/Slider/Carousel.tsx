import React from "react";
import Slider from "./Slider";
import SliderTrack from "./SliderTrack/SliderTrack";
import styles from "./Carousel.module.scss";
const Carousel = (props: any) => {
  return (
    <div className={styles.wrapper}>
      <SliderTrack images={props.images} />
      <Slider images={props.images} />
    </div>
  );
};

export default Carousel;
