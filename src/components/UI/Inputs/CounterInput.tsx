import styles from "./CounterInput.module.scss";
import { shopCartAPI } from "../../../services/shopCartService";
import { useAppDispatch } from "../../../hooks/hooks";
import { setError } from "../../../store/redusers/errorSlice";

interface ICounterInputProps {
  weight: number;
  id: number;
}

const CounterInput: React.FC<ICounterInputProps> = (props) => {
  const dispatch = useAppDispatch();
  const [changeWeightTea, { isError: createError }] =
    shopCartAPI.useChangeWeightTeaMutation();

  const quantityIncrement = async () => {
    await changeWeightTea({ weight: 100, id: props.id });
    if (createError) {
      dispatch(setError("Большего количества нет на складе"));
    }
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
    </div>
  );
};

export default CounterInput;
