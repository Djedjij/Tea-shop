import React, { useState } from "react";
import { popularTea } from "../../../../utils/consts";
import VerticalTeaCard from "../../../UI/TeaCards/VerticalTeaCard/VerticalTeaCard";
import styles from "./ShopTea.module.scss";
import GridButtons from "../../../UI/Buttons/GridButtons/GridButton";
import Select from "../../../UI/Select/Select";
import HorizontalTeaCard from "../../../UI/TeaCards/HorizontalTeaCard/HorizontalTeaCard";
import { CSSTransition } from "react-transition-group";

const ShopTea: React.FC = () => {
  const [isVertical, setIsVertical] = useState<boolean>(true);

  const handleVerticalClick = () => {
    setIsVertical(true); // eeeee
  };

  const handleHorizontalClick = () => {
    setIsVertical(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        <GridButtons
          onVerticalClick={handleVerticalClick}
          onHorizontalClick={handleHorizontalClick}
        />
        <Select />
      </div>
      <CSSTransition
        in={isVertical}
        timeout={300}
        classNames={{
          enter: styles.CardEnter,
          enterActive: styles.CardEnterActive,
          exit: styles.CardExit,
          exitActive: styles.CardExitActive,
        }}
      >
        <div className={styles.tea}>
          {popularTea.map((tea) => (
            <div className={styles.teaCard} key={tea.name}>
              {isVertical ? (
                <VerticalTeaCard
                  name={tea.name}
                  img={tea.img}
                  price={tea.price}
                />
              ) : (
                <HorizontalTeaCard
                  name={tea.name}
                  img={tea.img}
                  price={tea.price}
                  desc={tea.desc}
                />
              )}
            </div>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
};

export default ShopTea;
