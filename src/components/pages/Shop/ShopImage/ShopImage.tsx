import React from "react";
import styles from "./ShopImage.module.scss";
import GreenButton from "../../../UI/Buttons/GreenButton/GreenButton";

const ShopImage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Искусство в каждой чашке чая</h1>
      <h4>Аромат в чашке, вдохновение в каждом глотке</h4>
      <GreenButton text="Подробнее" link="/about" />
    </div>
  );
};

export default ShopImage;
