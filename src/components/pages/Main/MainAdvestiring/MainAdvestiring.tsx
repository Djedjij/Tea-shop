import React from "react";
import styles from "./MainAdvestiring.module.scss";
import GreenButton from "../../../UI/Buttons/GreenButton/GreenButton";
const MainAdvestiring = () => {
  return (
    <div className={styles.bigWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.advestiring}>
          <h1>Откройте для себя вкус японского чая</h1>
          <p>
            Наслаждайтесь утонченным вкусом Японского чая, который привносит в
            вашу жизнь чувство спокойствия и гармонии. Отборные листья и древние
            традиции производства обеспечивают чай из Японии неповторимым вкусом
            и ароматом.
          </p>
          <GreenButton text={"Посмотреть коллекцию"} link="/products" />
        </div>
      </div>
    </div>
  );
};

export default MainAdvestiring;
