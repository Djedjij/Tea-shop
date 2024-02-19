import React from "react";
import styles from "./TeaList.module.scss";
import { useAppDispatch } from "../../../../hooks/hooks";
import { resetFilters } from "../../../../store/redusers/teasSlice";
const TeaListEmpty = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.emptyWrapper}>
      <img src="/images/nothing.png" alt="not found" />
      <p>
        К сожалению, по вашему запросу не найдено ни одного товара.{" "}
        <button onClick={() => dispatch(resetFilters())}>
          Весь список товаров
        </button>
      </p>
    </div>
  );
};

export default TeaListEmpty;
