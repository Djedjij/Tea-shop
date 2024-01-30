import React from "react";
import styles from "./ShopContent.module.scss";
import ShopCartUI from "../../../UI/ShopCartUI/ShopCartUI";
import FilterPrice from "../../../UI/FilterPrice/FilterPrice";
import ShopCategories from "./ShopCategories/ShopCategories";
const ShopContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sticky}>
        <ShopCartUI />
        <FilterPrice />
        <ShopCategories />
      </div>
    </div>
  );
};

export default ShopContent;
