import React from "react";
import styles from "./CounterInput.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {
  setCost,
  setDecrementQuantity,
  setIncrementQuantity,
} from "../../../store/redusers/shopCardSlice";

interface ICounterInputProps {
  quantity: number;
  index: number;
}

const CounterInput: React.FC<ICounterInputProps> = (props) => {
  const cartItems = useAppSelector((state) => state.shopCard.shopCart.itemsMap);

  const dispatch = useAppDispatch();

  const quantityIncrement = () => {
    dispatch(setIncrementQuantity({ index: props.index }));
    dispatch(setCost({ index: props.index }));
    console.log(props.quantity);
    console.log(cartItems);
  };
  const quantityDecrement = () => {
    if (props.quantity > 1) {
      dispatch(setDecrementQuantity({ index: props.index }));
      dispatch(setCost({ index: props.index }));
    }
  };

  return (
    <div className={styles.inputNumber}>
      <div onClick={quantityDecrement} className={styles.inputNumberMinus}>
        -
      </div>
      <input
        className={styles.inputNumberInput}
        type="text"
        pattern="^[0-9]+$"
        value={props.quantity}
        defaultValue={props.quantity}
        readOnly
      />
      <div onClick={quantityIncrement} className={styles.inputNumberPlus}>
        +
      </div>
    </div>
  );
};

export default CounterInput;
