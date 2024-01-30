import React from "react";
import styles from "./CounterInput.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { setQuantity } from "../../../store/redusers/shopCardSlice";

interface ICounterInputProps {
  quantity: number;
  index: number;
}

const CounterInput: React.FC<ICounterInputProps> = ({ quantity, index }) => {
  const cartItems = useAppSelector((state) => state.shopCard.shopCart.itemsMap);
  console.log(cartItems);

  const dispatch = useAppDispatch();
  const quantityIncrement = () => {
    // dispatch(setQuantity(cartItems[index].quantity + 1));
  };
  const quantityDecrement = () => {
    quantity = quantity - 1;
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
        defaultValue={quantity}
      />
      <div onClick={quantityIncrement} className={styles.inputNumberPlus}>
        +
      </div>
    </div>
  );
};

export default CounterInput;
