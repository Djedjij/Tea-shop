import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { mainPageCategories } from "../../../../utils/consts";
import styles from "./MainCategories.module.scss";
import GreenButton from "../../../UI/Buttons/GreenButton/GreenButton";
import { Link } from "react-router-dom";
import { fetchFilteredByCategoryTeas } from "../../../../store/redusers/fetchTeas";
import { useAppDispatch } from "../../../../hooks/hooks";
const MainCategories = () => {
  const dispatch = useAppDispatch();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const filterTeas = (categoryName: string) => {
    dispatch(fetchFilteredByCategoryTeas({ title: categoryName }));
  };

  return (
    <div className={styles.wrapper}>
      <h4>Категории</h4>
      <h1>Выберите свой чай</h1>
      <div className={styles.slider}>
        <Slider className={styles.customSlider} {...settings}>
          {mainPageCategories.map((category) => (
            <Link to="/shop" key={category.name}>
              <div
                onClick={() => filterTeas(category.name)}
                className={styles.category}
              >
                <img src={category.img} alt={category.name} />
                <div className={styles.overlayText}>{category.name}</div>
              </div>
            </Link>
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
