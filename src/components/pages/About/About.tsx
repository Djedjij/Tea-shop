import React from "react";
import styles from "./About.module.scss";
import MainAboutComponent from "../Main/MainAboutComponent/MainAboutComponent";
import LocatePanel from "../../UI/LocatePahel/LocatePanel";
import MainInstagram from "../Main/MainInstagram/MainInstagram";
import { motion } from "framer-motion";
const About = () => {
  const xPlusAnimation = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.4, duration: 0.5 },
    }),
  };
  const xMinusAnimation = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.4, duration: 0.5 },
    }),
  };
  return (
    <div>
      <LocatePanel />
      <div className={styles.logo}>
        <div className={styles.logoName}>
          <img className={styles.logoImg} src="/images/logo/logo2.svg" alt="" />
          <div className={styles.logoHeader}>
            <h2>Magic Tea</h2>
            <h4>Tea & teaware co.</h4>
          </div>
        </div>
        <h3>Компания с многолетней историей</h3>
      </div>
      <MainAboutComponent />
      <motion.div
        className={styles.firstBlock}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <div className={styles.blockWrapper}>
          <motion.p
            variants={xPlusAnimation}
            custom={1}
            className={styles.blockText}
          >
            Наш магазин специализируется на продаже чая самых известных и
            качественных мировых брендов. Мы тщательно подбираем товары, чтобы
            удовлетворить даже самых взыскательных покупателей. Мы гордимся тем,
            что предоставляем только натуральные и свежесобранные чаи, которые
            помогут вам насладиться их уникальным вкусом и ароматом. Мы также
            предлагаем различные виды чая - зеленый, черный, белый, травяной,
            фруктовый и многие другие.
          </motion.p>
        </div>
      </motion.div>
      <MainInstagram />
      <motion.div
        className={styles.secondBlock}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <div className={styles.blockWrapperRight}>
          <motion.p
            variants={xMinusAnimation}
            custom={1}
            className={styles.blockTextRight}
          >
            Наша команда усердно работает, чтобы обеспечить вас лучшим
            обслуживанием и помочь вам выбрать идеальный чай для вашего вкуса и
            предпочтений. Сделайте покупку в нашем магазине чая простой и
            приятной. Приготовьте свой любимый напиток и наслаждайтесь каждым
            глотком с нами!"
          </motion.p>
        </div>
      </motion.div>
      <div className={styles.bigWrapper}>
        <div className={styles.wrapperImg}>
          <img
            className={styles.paymentImg}
            src="/images/payment_logo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
