import React, { useEffect, useRef, useState } from "react";
import styles from "./ShopTea.module.scss";
import GridButtons from "../../../UI/Buttons/GridButtons/GridButton";
import Select from "../../../UI/Select/Select";
import { CSSTransition } from "react-transition-group";
import TeaList from "../TeaList/TeaList";
import { useAppSelector } from "../../../../hooks/hooks";
import ErrorMessage from "../../../Error/Message";
import SearchInput from "../../../UI/Inputs/SearchInput/SearchInput";

const ShopTea: React.FC = () => {
  const [isVertical, setIsVertical] = useState<boolean>(true);
  const [isRendered, setIsRendered] = useState<boolean>(true);
  const error = useAppSelector((state) => state.teas.error);
  const upRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (upRef.current) {
      const headerHeight = document.querySelector("header")!.offsetHeight;
      const topOffset = upRef.current.offsetTop - headerHeight - 50;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  }, [isRendered]);

  const handleVerticalClick = () => {
    setIsVertical(true);
  };

  const handleHorizontalClick = () => {
    setIsVertical(false);
  };

  const renderTeaList = () => {
    if (isRendered) {
      setIsRendered(false);
    } else {
      setIsRendered(true);
    }
  };
  return (
    <div ref={upRef} className={styles.wrapper}>
      <div className={styles.buttons}>
        <GridButtons
          onVerticalClick={handleVerticalClick}
          onHorizontalClick={handleHorizontalClick}
        />
        <SearchInput />
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
        {error ? (
          <ErrorMessage
            message="Произошла ошибка. Попробуйте позже"
            showImg={true}
          />
        ) : (
          <TeaList isVertical={isVertical} renderTeaList={renderTeaList} />
        )}
      </CSSTransition>
    </div>
  );
};

export default ShopTea;
