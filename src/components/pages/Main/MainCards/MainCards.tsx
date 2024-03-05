import React from "react";
import styles from "./MainCards.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cardsAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.3 },
    ease: "easeOut",
  }),
};

const MainCards = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={styles.mainCardsWrapper}
    >
      <motion.div
        custom={1}
        variants={cardsAnimation}
        className={styles.mainCards}
      >
        <div className={styles.mainCard1}>
          <div className={styles.mainCardBorder}>
            <Link to="/shop">
              Соберите свой <br /> чай
            </Link>
          </div>
        </div>
        <div className={styles.mainCard2}>
          <div className={styles.mainCardBorder}>
            <Link to="/shop">
              Посетите наш <br /> магазин
            </Link>
          </div>
        </div>
        <div className={styles.mainCard3}>
          <div className={styles.mainCardBorder}>
            <Link className={styles.cardLink} to="/shop">
              Купите лучший <br />
              подарок
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MainCards;
