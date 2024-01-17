import React from "react";
import styles from "./HorizontalTeaCard.module.scss";
import GreyButton from "../../Buttons/GreyButton/GreyButton";

interface HorizontalTeaCardProps {
  name: string;
  img: string;
  price: number;
  desc?: string;
}

const HorizontalTeaCard: React.FC<HorizontalTeaCardProps> = (props) => {
  return (
    <div className={styles.horizontalCard}>
      <img src={props.img} alt={props.name} />
      <div className={styles.description}>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <p>{props.price}.00 p</p>
        <div className={styles.button}>
          <GreyButton text="В корзину" />
        </div>
      </div>
    </div>
  );
};

export default HorizontalTeaCard;
