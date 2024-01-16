import React from "react";
import { popularTea } from "../../../../utils/consts";
import VerticalTeaCard from "../../../UI/TeaCards/VerticalTeaCard/VerticalTeaCard";
import styles from "./ShopTea.module.scss";
import GridButtons from "../../../UI/Buttons/GridButtons/GridButton";
import Select from "../../../UI/Select/Select";

const ShopTea = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        <GridButtons />
        <Select />
      </div>
      <div className={styles.tea}>
        {popularTea.map((tea) => (
          <div className={styles.teaCard} key={tea.name}>
            <VerticalTeaCard name={tea.name} img={tea.img} price={tea.price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopTea;
