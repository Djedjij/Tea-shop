import React from "react";
import styles from "./ShopContent.module.scss";
import ShoppingCardUI from "../../../UI/ShoppingCardUI/ShoppingCardUI";
import FilterPrice from "../../../UI/FilterPrice/FilterPrice";
import ShopCategories from "./ShopCategories/ShopCategories";
const ShopContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sticky}>
        <ShoppingCardUI />
        <FilterPrice />
        <ShopCategories />
      </div>
    </div>
  );
};

export default ShopContent;
