import React, { useState } from "react";
import styles from "./MainAboutComponent.module.scss";
import GreenButton from "../../../UI/GreenButton/GreenButton";
import { historyAndAwards } from "../../../../utils/consts";
import AboutButtons from "../../../UI/AboutButtons/AboutButtons";

const MainAboutComponent: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number | null>(1);

  const handleButtonClick = (id: number) => {
    setActiveButton(activeButton === id ? activeButton : id);
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
                year={button.year}
                onClick={() => handleButtonClick(button.id)}
                className={button.id === activeButton ? false : true}
              />
            ))}
          </div>
          <div>
            {activeButton !== null && (
              <p className={styles.awardsText}>
                {historyAndAwards[activeButton - 1].text}
              </p>
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
