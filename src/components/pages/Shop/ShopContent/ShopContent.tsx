import React from "react";
import styles from "./ShopContent.module.scss";
import ShoppingCardUI from "../../../UI/ShoppingCardUI/ShoppingCardUI";
import FilterPrice from "../../../UI/FilterPrice/FilterPrice";
const ShopContent = () => {
  return (
    <div className={styles.wrapper}>
      <ShoppingCardUI />
      <FilterPrice />
    </div>
  );
};

export default ShopContent;
