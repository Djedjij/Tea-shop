import React from "react";
import styles from "./VerticalTeaCard.module.scss";
import GreyButton from "../../Buttons/GreyButton/GreyButton";
// import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
// import {
//   setShopCart,
//   setTotalCost,
// } from "../../../../store/redusers/shopCardSlice";
import { shopCartAPI } from "../../../../services/shopCartService";

interface VerticalTeaCardProps {
  id: number;
  name: string;
  img: string;
  price: number;
  weight: number;
}

const VerticalTeaCard: React.FC<VerticalTeaCardProps> = (props) => {
  // const dispatch = useAppDispatch();
  // const cartItems = useAppSelector((state) => state.shopCard.shopCart.itemsMap);

  const [postTea] = shopCartAPI.usePostTeaMutation();

  const addInShopCard = async (
    id: number,
    name: string,
    price: number,
    img: string,
    weight: number
  ) => {
    // dispatch(
    //   setShopCart([
    //     ...cartItems,
    //     {
    //       id,
    //       name,
    //       img,
    //       weight: 100,
    //       costByHundredGrams: price,
    //       sum: price,
    //     },
    //   ])
    // );
    // dispatch(setTotalCost());
    postTea({ weight, id });
  };

  return (
    <div className={styles.verticalCard}>
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <div className={styles.price}>
        <GreyButton
          onClick={() =>
            addInShopCard(
              props.id,
              props.name,
              props.price,
              props.img,
              props.weight
            )
          }
          text="В корзину"
        />
        <p>{props.price}.00 p</p>
      </div>
    </div>
  );
};

export default VerticalTeaCard;
