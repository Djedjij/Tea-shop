import React, { Suspense } from "react";
import styles from "./ShopContent.module.scss";
// import ShopCartUI from "../../../UI/ShopCartUI/ShopCartUI";
import FilterPrice from "../../../UI/FilterPrice/FilterPrice";
import ShopCategories from "./ShopCategories/ShopCategories";

const LazyShopCartUI = React.lazy(
  () => import("../../../UI/ShopCartUI/ShopCartUI")
);
const ShopContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sticky}>
        <Suspense fallback={<div>...загрузка</div>}>
          <LazyShopCartUI />
        </Suspense>
        <FilterPrice />
        <ShopCategories />
      </div>
    </div>
  );
};

export default ShopContent;
