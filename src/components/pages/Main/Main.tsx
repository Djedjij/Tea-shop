import React from "react";
import styles from "./Main.module.scss";
import GreenButton from "../../UI/GreenButton/GreenButton";

import MainCards from "./MainCards/MainCards";
import MainAboutComponent from "./MainAboutComponent/MainAboutComponent";
import MainAdvestiring from "./MainAdvestiring/MainAdvestiring";
import MainCategories from "./MainCategories/MainCategories";
import MainPopular from "./MainPopular.tsx/MainPopular";
import MainInstagram from "./MainInstagram/MainInstagram";

const Main = () => {
  return (
    <div>
      <div className={styles.big_wrapper}>
        <div className={styles.wrapper}>
          <h1 className={styles.main_slogan}>
            Каждый чай собран
            <br /> с любовью.
          </h1>
          <h4 className={styles.little_slogan}>
            Тщательно смешан для создания идеального вкуса
          </h4>
          <GreenButton text="Каталог" link="/products" />
        </div>
      </div>
      <MainCards />
      <MainAboutComponent />
      <MainCategories />
      <MainAdvestiring />
      <MainPopular />
      <MainInstagram />
    </div>
  );
};

export default Main;
