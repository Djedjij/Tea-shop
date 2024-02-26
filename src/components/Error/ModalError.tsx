import React, { useCallback, useEffect, useState } from "react";
import styles from "./ModalError.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setModalError } from "../../store/redusers/errorSlice";

const ModalError = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.error.message);
  const [showError, setShowError] = useState<string>("-100px");

  const handleDispatch = useCallback(() => {
    dispatch(setModalError(""));
  }, [dispatch]);

  useEffect(() => {
    setShowError(error ? "0px" : "-100px");
    const timeoutId = setTimeout(() => {
      setShowError("-100px");
      setTimeout(() => {
        handleDispatch();
      }, 300);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [error, handleDispatch]);

  return (
    <div style={{ bottom: showError }} className={styles.wrapper}>
      <div className={styles.error}>
        <img src="/images/icons/warning.png" alt="" />
        <p>{error}</p>
      </div>
    </div>
  );
};

export default ModalError;
