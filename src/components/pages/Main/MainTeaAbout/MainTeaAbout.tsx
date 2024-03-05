import React from "react";
import styles from "./MainTeaAbout.module.scss";
import GreenButton from "../../../UI/Buttons/GreenButton/GreenButton";
import { motion } from "framer-motion";
const MainTeaAbout = () => {
  const cardsAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.6 },
    }),
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}
      className={styles.bigWrapper}
    >
      <motion.div
        variants={cardsAnimation}
        custom={1}
        className={styles.wrapper}
      >
        <h4>Мастер класс</h4>
        <h1>Хотите углубиться в то, что делает каждый сорт чая уникальным?</h1>
        <p>
          На 100% органический, наш прекрасный чай содержит только натуральные
          ингредиенты. Попробуйте их все, выращенные под теплым солнцем и
          ветром.
        </p>
        <GreenButton text="Подробнее" link="/about" />
      </motion.div>
    </motion.div>
  );
};

export default MainTeaAbout;
