import React from "react";
import styles from "./VerticalTeaCard.module.scss";
import GreyButton from "../../Buttons/GreyButton/GreyButton";

interface VerticalTeaCardProps {
  name: string;
  img: string;
  price: number;
}

const VerticalTeaCard: React.FC<VerticalTeaCardProps> = (props) => {
  return (
    <div className={styles.verticalCard}>
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <div className={styles.price}>
        <GreyButton text="В корзину" />
        <p>{props.price}.00 p</p>
      </div>
    </div>
  );
};

export default VerticalTeaCard;
