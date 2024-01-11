import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { mainPageCategories } from "../../../../utils/consts";
import styles from "./MainCategories.module.scss";
import GreenButton from "../../../UI/GreenButton/GreenButton";
const MainCategories = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className={styles.wrapper}>
      <h4>Категории</h4>
      <h1>Выберите свой чай</h1>
      <div className={styles.slider}>
        <Slider className={styles.customSlider} {...settings}>
          {mainPageCategories.map((category) => (
            <div className={styles.category} key={category.name}>
              <img src={category.img} alt={category.name} />
              <div className={styles.overlayText}>{category.name}</div>
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.buttonWrap}>
        <GreenButton text="Купить сейчас" link="/products" />
      </div>
    </div>
  );
};

export default MainCategories;
