import React, { ChangeEvent } from "react";
import styles from "./Select.module.scss";
import { useAppDispatch } from "../../../hooks/hooks";
import {
  setHighCostTeas,
  setLowCostTeas,
} from "../../../store/redusers/teasSlice";

const Select = () => {
  const dispatch = useAppDispatch();
  const handleChangeTea = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "setLowCost") {
      dispatch(setLowCostTeas());
    }
    if (e.target.value === "setHighCost") {
      dispatch(setHighCostTeas());
    }
  };

  return (
    <div>
      <select className={styles.select} onChange={handleChangeTea}>
        <option disabled value="1">
          Сортировать по
        </option>
        <option value="2">По популярности</option>
        <option value="setLowCost">По цене: сначала дешевые</option>
        <option value="setHighCost">По цене: сначала дорогие</option>
      </select>
    </div>
  );
};

export default Select;
