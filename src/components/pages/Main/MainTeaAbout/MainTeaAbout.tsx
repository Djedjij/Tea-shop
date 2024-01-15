import React from "react";
import styles from "./MainTeaAbout.module.scss";
import GreenButton from "../../../UI/Buttons/GreenButton/GreenButton";
const MainTeaAbout = () => {
  return (
    <div className={styles.bigWrapper}>
      <div className={styles.wrapper}>
        <h4>Мастер класс</h4>
        <h1>Хотите углубиться в то, что делает каждый сорт чая уникальным?</h1>
        <p>
          На 100% органический, наш прекрасный чай содержит только натуральные
          ингредиенты. Попробуйте их все, выращенные под теплым солнцем и
          ветром.
        </p>
        <GreenButton text="Подробнее" link="/about" />
      </div>
    </div>
  );
};

export default MainTeaAbout;
