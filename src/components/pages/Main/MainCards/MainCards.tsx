import React from "react";
import styles from "./MainCards.module.scss";
import { Link } from "react-router-dom";
const MainCards = () => {
  return (
    <div className={styles.mainCardsWrapper}>
      <div className={styles.mainCards}>
        <div className={styles.mainCard1}>
          <div className={styles.mainCardBorder}>
            <Link to="/products">
              Соберите свой <br /> чай
            </Link>
          </div>
        </div>
        <div className={styles.mainCard2}>
          <div className={styles.mainCardBorder}>
            <Link to="/products">
              Посетите наш <br /> магазин
            </Link>
          </div>
        </div>
        <div className={styles.mainCard3}>
          <div className={styles.mainCardBorder}>
            <Link className={styles.cardLink} to="/products">
              Купите лучший <br />
              подарок
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
