import React from "react";
import styles from "./VerticalTeaCard.module.scss";
import GreyButton from "../../Buttons/GreyButton/GreyButton";

interface VerticalTeaCardProps {
  name: string;
  img: string;
  price: number;
  desc?: string;
}

const VerticalTeaCard: React.FC<VerticalTeaCardProps> = (props) => {
  return (
    <div className={styles.verticalCard}>
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.price}.00 p</p>
      <GreyButton text="В корзину" />
    </div>
  );
};

export default VerticalTeaCard;
