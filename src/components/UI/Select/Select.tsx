import React from "react";
import styles from "./Select.module.scss";
const Select = () => {
  return (
    <div>
      <select className={styles.select}>
        <option disabled value="1">
          Сортировать по
        </option>
        <option value="2">По популярности</option>
        <option value="3">По цене: сначала дешевые</option>
        <option value="3">По цене: сначала дорогие</option>
      </select>
    </div>
  );
};

export default Select;
