import React, { useRef, useState } from "react";
import styles from "./MainAboutComponent.module.scss";
import GreenButton from "../../../UI/GreenButton/GreenButton";
import { historyAndAwards } from "../../../../utils/consts";
import AboutButtons from "../../../UI/AboutButtons/AboutButtons";
import { CSSTransition } from "react-transition-group";

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

  return (
    <div className={styles.aboutCard}>
      <h4 className={styles.aboutCardHeader}>О чае</h4>
      <div className={styles.aboutCardDesc}>
        <p>
          Каждая покупка чая включает в себя органически и этически выращенный
          листовой чай, тщательно смешанный для создания идеальной чашки.
        </p>
        <GreenButton text="Узнать больше" link="/about" />
      </div>
      <div className={styles.aboutCardHistory}>
        <img src="/images/main-images/MainAboutImg.avif" alt="tea" />
        <div className={styles.aboutCardAwards}>
          <h1>История и награды</h1>
          <div className={styles.aboutCardAwardsButtons}>
            {historyAndAwards.map((button) => (
              <AboutButtons
                key={button.year}
                year={button.year}
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
      </div>
    </div>
  );
};

export default MainAboutComponent;
