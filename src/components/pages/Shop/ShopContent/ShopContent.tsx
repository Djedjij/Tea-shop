import React from "react";
import styles from "./ShopContent.module.scss";
import ShoppingCardUI from "../../../UI/ShoppingCardUI/ShoppingCardUI";
import FilterPrice from "../../../UI/FilterPrice/FilterPrice";
import ShopCategories from "./ShopCategories/ShopCategories";
const ShopContent = () => {
  return (
    <div className={styles.wrapper}>
      <ShoppingCardUI />
      <FilterPrice />
      <ShopCategories />
    </div>
  );
};

export default ShopContent;
