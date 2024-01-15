import React from "react";
import styles from "./MainPopular.module.scss";
import { popularTea } from "../../../../utils/consts";
import VerticalTeaCard from "../../../UI/TeaCards/VerticalTeaCard/VerticalTeaCard";
import GreenButton from "../../../UI/Buttons/GreenButton/GreenButton";

const MainPopular = () => {
  return (
    <div className={styles.wrapper}>
      <h4>Магазин</h4>
      <h1>Популярное сейчас</h1>
      <div className={styles.verticalCards}>
        {popularTea.map((tea) => (
          <VerticalTeaCard
            key={tea.img}
            name={tea.name}
            img={tea.img}
            price={tea.price}
          />
        ))}
      </div>
      <GreenButton text="Больше товаров" link="/products" />
    </div>
  );
};

export default MainPopular;
