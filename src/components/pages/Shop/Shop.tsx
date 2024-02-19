import React from "react";
import ShopImage from "./ShopImage/ShopImage";
import ShopContent from "./ShopContent/ShopContent";
import styles from "./Shop.module.scss";
import ShopTea from "./ShopTea/ShopTea";
import LocatePanel from "../../UI/LocatePahel/LocatePanel";
import TeaListEmpty from "./TeaList/TeaListEmpty";

const Shop = () => {
  return (
    <div>
      <LocatePanel />
      <ShopImage />
      <div className={styles.wrapperContent}>
        <ShopContent />
        <ShopTea />
      </div>
    </div>
  );
};

export default Shop;
