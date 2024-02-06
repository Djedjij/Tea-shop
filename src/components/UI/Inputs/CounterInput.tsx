import React, { useEffect, useState } from "react";
import styles from "./CounterInput.module.scss";
import { shopCartAPI } from "../../../services/shopCartService";
import { CSSTransition } from "react-transition-group";
interface ICounterInputProps {
  weight: number;
  id: number;
}

const CounterInput: React.FC<ICounterInputProps> = (props) => {
  const [localError, setLocalError] = useState(false);

  const [changeWeightTea, { error: createError }] =
    shopCartAPI.useChangeWeightTeaMutation();

  useEffect(() => {
    if (createError) {
      setLocalError(true);
      setTimeout(() => setLocalError(false), 2000);
    }
  }, [createError]);

  const quantityIncrement = () => {
    changeWeightTea({ weight: 100, id: props.id });
  };
  const quantityDecrement = () => {
    if (props.weight > 100) {
      changeWeightTea({ weight: -100, id: props.id });
    }
  };

  return (
    <div>
      <div className={styles.inputNumber}>
        <div onClick={quantityDecrement} className={styles.inputNumberMinus}>
          -
        </div>
        <input
          className={styles.inputNumberInput}
          type="text"
          pattern="^[0-9]+$"
          value={props.weight}
          readOnly
        />
        <div
          onClick={quantityIncrement}
          className={
            createError
              ? styles.inputNumberPlusDisabled
              : styles.inputNumberPlus
          }
        >
          +
        </div>
      </div>

      <CSSTransition
        in={!localError}
        timeout={300}
        classNames={{
          enter: styles.textEnter,
          enterActive: styles.textEnterActive,
          exit: styles.textExit,
          exitActive: styles.textExitActive,
        }}
        unmountOnExit
      >
        <p className={styles.errorMessage}>Большего количества нет на складе</p>
      </CSSTransition>
    </div>
  );
};

export default CounterInput;
