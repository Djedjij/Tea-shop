import React from "react";

import GreenButton from "../../../UI/Buttons/GreenButton/GreenButton";
import { motion } from "framer-motion";
import styles from "./MainAdvestiring.module.scss";
const MainAdvestiring = () => {
  const cardsAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.4, duration: 0.6 },
    }),
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}
      className={styles.bigWrapper}
    >
      <div className={styles.wrapper}>
        <motion.div
          custom={1}
          variants={cardsAnimation}
          className={styles.advestiring}
        >
          <h1>Откройте для себя вкус японского чая</h1>
          <p>
            Наслаждайтесь утонченным вкусом Японского чая, который привносит в
            вашу жизнь чувство спокойствия и гармонии. Отборные листья и древние
            традиции производства обеспечивают чай из Японии неповторимым вкусом
            и ароматом.
          </p>
          <GreenButton text={"Посмотреть коллекцию"} link="/products" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MainAdvestiring;
