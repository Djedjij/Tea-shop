import React, { useEffect } from "react";
import ShopImage from "./ShopImage/ShopImage";
import ShopContent from "./ShopContent/ShopContent";
import styles from "./Shop.module.scss";
import ShopTea from "./ShopTea/ShopTea";
import LocatePanel from "../../UI/LocatePahel/LocatePanel";
import { fetchUuid } from "../../../store/redusers/fetchShopCart";
import { setUuid } from "../../../store/redusers/shopCartSlice";
import { useAppDispatch } from "../../../hooks/hooks";

const Shop = () => {
  const dispatch = useAppDispatch();

  const fetchUuidData = async () => {
    const uuid = localStorage.getItem("uuid");
    if (uuid) {
      dispatch(setUuid(uuid));
    } else {
      dispatch(fetchUuid());
    }
  };
  useEffect(() => {
    fetchUuidData();
  });

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
