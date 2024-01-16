import React from "react";
import styles from "./Shop.categories.module.scss";
import { mainPageCategories } from "../../../../../utils/consts";
const ShopCategories = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Категории</h3>
      <ul className={styles.categories}>
        {mainPageCategories.map((category) => (
          <li key={category.name}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShopCategories;
