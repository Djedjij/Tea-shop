import React from "react";
import styles from "./MainInstagram.module.scss";
import { instagramImages } from "../../../../utils/consts";
import GreenButton from "../../../UI/GreenButton/GreenButton";

const MainInstagram = () => {
  return (
    <div className={styles.bigWrapper}>
      <div className={styles.wrapper}>
        <h4>Инстаграм лента</h4>
        <div className={styles.pictures}>
          {instagramImages.map((picture) => (
            <img key={picture.img} src={picture.img} alt={picture.name} />
          ))}
        </div>
      </div>
      <GreenButton text="Подписаться" link="/" />
    </div>
  );
};

export default MainInstagram;
