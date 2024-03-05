import React, { useRef, useState } from "react";
import styles from "./MainAboutComponent.module.scss";
import GreenButton from "../../../UI/Buttons/GreenButton/GreenButton";
import { historyAndAwards } from "../../../../utils/consts";
import AboutButtons from "../../../UI/Buttons/AboutButtons/AboutButtons";
import { CSSTransition } from "react-transition-group";
import { motion } from "framer-motion";

const MainAboutComponent: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number | null>(1);
  const [isDrop, setIsDrop] = useState<boolean>(false);
  const nodeRef = useRef(null);

  const handleButtonClick = (id: number) => {
    if (activeButton === id) {
      setActiveButton(activeButton);
    } else {
      setIsDrop(!isDrop);
      setActiveButton(id);
    }
  };

  const cardsAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.4, duration: 0.4 },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={styles.aboutCard}
    >
      <motion.h4
        variants={cardsAnimation}
        custom={1}
        className={styles.aboutCardHeader}
      >
        О чае
      </motion.h4>
      <motion.div
        variants={cardsAnimation}
        custom={1}
        className={styles.aboutCardDesc}
      >
        <p>
          Каждая покупка чая включает в себя органически и этически выращенный
          листовой чай, тщательно смешанный для создания идеальной чашки.
        </p>
        <GreenButton text="Узнать больше" link="/about" />
      </motion.div>
      <motion.div
        variants={cardsAnimation}
        custom={2}
        className={styles.aboutCardHistory}
      >
        <img src="/images/main-images/MainAboutImg.avif" alt="tea" />
        <div className={styles.aboutCardAwards}>
          <h1>История и награды</h1>
          <div className={styles.aboutCardAwardsButtons}>
            {historyAndAwards.map((button) => (
              <AboutButtons
                key={button.year}
                text={button.year}
                onClick={() => handleButtonClick(button.id)}
                className={button.id === activeButton ? false : true}
              />
            ))}
          </div>
          <div>
            {activeButton !== null && (
              <CSSTransition
                nodeRef={nodeRef}
                in={!isDrop}
                timeout={300}
                classNames={{
                  enter: styles.awardsTextEnter,
                  enterActive: styles.awardsTextEnterActive,
                  exit: styles.awardsTextExit,
                  exitActive: styles.awardsTextExitActive,
                }}
              >
                <p className={styles.awardsText} ref={nodeRef}>
                  {historyAndAwards[activeButton - 1].text}
                </p>
              </CSSTransition>
            )}
          </div>
          <img
            className={styles.awardsImg}
            src="/images/main-images/historyAndAwards.jpg"
            alt="history"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MainAboutComponent;
