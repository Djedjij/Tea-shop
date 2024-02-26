import React from "react";
import styles from "./VerticalTeaCard.module.scss";
import GreyButton from "../../Buttons/GreyButton/GreyButton";
import { shopCartAPI } from "../../../../services/shopCartService";
import { Link } from "react-router-dom";

interface VerticalTeaCardProps {
  id: number;
  name: string;
  img: string;
  price: number;
  weight: number;
}

const VerticalTeaCard: React.FC<VerticalTeaCardProps> = (props) => {
  const [postTea] = shopCartAPI.usePostTeaMutation();

  const addInShopCard = async (id: number, weight: number) => {
    postTea({ weight, id });
  };

  return (
    <div className={styles.verticalCard}>
      <img src={props.img} alt={props.name} />
      <Link to={`/shop/${props.id}`}>{props.name}</Link>
      <div className={styles.price}>
        <GreyButton
          onClick={() => addInShopCard(props.id, props.weight)}
          text="В корзину"
        />
        <p>{props.price}.00 p</p>
      </div>
    </div>
  );
};

export default VerticalTeaCard;
