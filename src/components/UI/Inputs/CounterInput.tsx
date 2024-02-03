import React from "react";
import styles from "./CounterInput.module.scss";
import { shopCartAPI } from "../../../services/shopCartService";

// import { useAppDispatch } from "../../../hooks/hooks";
// import {
//   setCost,
//   setDecrementQuantity,
//   setIncrementQuantity,
//   setTotalCost,
// } from "../../../store/redusers/shopCardSlice";

interface ICounterInputProps {
  weight: number;
  index: number;
  sum: number;
  id: number;
}

const CounterInput: React.FC<ICounterInputProps> = (props) => {
  // const cartItems = useAppSelector((state) => state.shopCard.shopCart.itemsMap);
  // let totalCost = useAppSelector((state) => state.shopCard.shopCart.totalCost);
  // const dispatch = useAppDispatch();

  const quantityIncrement = () => {
    // changeWeightTea({ variables: { weight: props.weight, id: props.id } });
    // dispatch(setIncrementQuantity({ index: props.index }));
    // dispatch(setCost({ index: props.index }));
    // dispatch(setTotalCost());
  };
  const quantityDecrement = () => {
    if (props.weight > 100) {
      // dispatch(setDecrementQuantity({ index: props.index }));
      // dispatch(setCost({ index: props.index }));
      // dispatch(setTotalCost());
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
        value={props.weight}
        defaultValue={props.weight}
        readOnly
      />
      <div onClick={quantityIncrement} className={styles.inputNumberPlus}>
        +
      </div>
    </div>
  );
};

export default CounterInput;
