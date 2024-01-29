import React from "react";
import styles from "./VerticalTeaCard.module.scss";
import GreyButton from "../../Buttons/GreyButton/GreyButton";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import {
  setShopCard,
  setTotalCost,
} from "../../../../store/redusers/shopCardSlice";

interface VerticalTeaCardProps {
  id: number;
  name: string;
  img: string;
  price: number;
}

const VerticalTeaCard: React.FC<VerticalTeaCardProps> = (props) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.shopCard.shopCard.itemsMap);
  let totalCost = useAppSelector((state) => state.shopCard.shopCard.totalCost);

  const addInShopCard = (
    id: number,
    title: string,
    price: number,
    img: string
  ) => {
    dispatch(
      setShopCard([
        ...cartItems,
        {
          id,
          title,
          img,
          quantity: 1,
          costByHundredGrams: price,
        },
      ])
    );
    dispatch(setTotalCost(totalCost + price));
  };

  return (
    <div className={styles.verticalCard}>
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <div className={styles.price}>
        <GreyButton
          onClick={() =>
            addInShopCard(props.id, props.name, props.price, props.img)
          }
          text="В корзину"
        />
        <p>{props.price}.00 p</p>
      </div>
    </div>
  );
};

export default VerticalTeaCard;
