import React from "react";
import styles from "./CounterInput.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {
  setCost,
  setDecrementQuantity,
  setIncrementQuantity,
  setTotalCost,
} from "../../../store/redusers/shopCardSlice";

interface ICounterInputProps {
  quantity: number;
  index: number;
  teaPrice: number;
}

const CounterInput: React.FC<ICounterInputProps> = (props) => {
  const cartItems = useAppSelector((state) => state.shopCard.shopCart.itemsMap);
  let totalCost = useAppSelector((state) => state.shopCard.shopCart.totalCost);
  const dispatch = useAppDispatch();

  const quantityIncrement = () => {
    dispatch(setIncrementQuantity({ index: props.index }));
    dispatch(setCost({ index: props.index }));
    dispatch(setTotalCost());
  };
  const quantityDecrement = () => {
    if (props.quantity > 1) {
      dispatch(setDecrementQuantity({ index: props.index }));
      dispatch(setCost({ index: props.index }));
      dispatch(setTotalCost());
    }
  };
  console.log(`Массив чаев: ${cartItems}`);
  console.log(`Итоговая цена: ${totalCost}`);

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
