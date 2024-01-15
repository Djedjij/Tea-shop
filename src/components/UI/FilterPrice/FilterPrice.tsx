import React from "react";
import styles from "./FilterPrice.module.scss";

const FilterPrice = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Фильтр по цене</h3>
      <div className={styles.inputs}>
        <input type="range" min={7} max={25} />
        <input
          className={styles.input2}
          type="range"
          min={7}
          max={25}
          value={7}
        />
      </div>
    </div>
  );
};

export default FilterPrice;
