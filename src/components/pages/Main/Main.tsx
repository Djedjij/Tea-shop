import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import GreenButton from "../../UI/Buttons/GreenButton/GreenButton";
import MainCards from "./MainCards/MainCards";
import MainAboutComponent from "./MainAboutComponent/MainAboutComponent";
import MainAdvestiring from "./MainAdvestiring/MainAdvestiring";
import MainCategories from "./MainCategories/MainCategories";
import MainPopular from "./MainPopular.tsx/MainPopular";
import MainInstagram from "./MainInstagram/MainInstagram";
import MainTeaAbout from "./MainTeaAbout/MainTeaAbout";
import { mainSlides } from "../../../utils/consts";
import { motion } from "framer-motion";
const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1 < mainSlides.length ? prev + 1 : 0));
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  const cardsAnimationX = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.8, duration: 0.8 },
      ease: "easeOut",
    }),
  };
  const cardsAnimationY = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.8, duration: 0.8 },
      ease: "easeOut",
    }),
  };
  return (
    <motion.div initial="hidden" animate="visible">
      <div
        className={styles.big_wrapper}
        style={{ backgroundImage: `url(${mainSlides[currentSlide].img})` }}
      >
        <div className={styles.wrapper}>
          <motion.h1
            key={currentSlide}
            custom={1}
            variants={
              currentSlide % 2 === 0 ? cardsAnimationX : cardsAnimationY
            }
            className={styles.main_slogan}
          >
            {mainSlides[currentSlide].text}
          </motion.h1>
          <motion.h4
            key={currentSlide + 1}
            variants={
              currentSlide % 2 === 0 ? cardsAnimationX : cardsAnimationY
            }
            custom={2}
            className={styles.little_slogan}
          >
            Тщательно смешан для создания идеального вкуса
          </motion.h4>
          <GreenButton text="Каталог" link="/shop" />
        </div>
      </div>
      <MainCards />
      <MainAboutComponent />
      <MainCategories />
      <MainAdvestiring />
      <MainPopular />
      <MainTeaAbout />
      <MainInstagram />
    </motion.div>
  );
};

export default Main;
