import React from "react";
import styles from "./Error.module.scss";
interface IErrorProps {
  message: string;
  showImg: boolean;
}
const ErrorMessage: React.FC<IErrorProps> = ({ message, showImg }) => {
  return (
    <div className={styles.wrapper}>
      {showImg && <img src="/images/error.png" alt="Ошибка" />}
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
