import React, { useState } from "react";
import styles from "./ShopTea.module.scss";
import GridButtons from "../../../UI/Buttons/GridButtons/GridButton";
import Select from "../../../UI/Select/Select";
import { CSSTransition } from "react-transition-group";
import TeaList from "../TeaList/TeaList";

const ShopTea: React.FC = () => {
  const [isVertical, setIsVertical] = useState<boolean>(true);

  const handleVerticalClick = () => {
    setIsVertical(true);
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
        <TeaList isVertical={isVertical} />
      </CSSTransition>
    </div>
  );
};

export default ShopTea;
