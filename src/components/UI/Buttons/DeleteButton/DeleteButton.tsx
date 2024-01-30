import React from "react";
import styles from "./DeleteButton.module.scss";

interface IButtonProps {
  onclick: () => void;
}

const DeleteButton: React.FC<IButtonProps> = (props) => {
  return (
    <button onClick={props.onclick} className={styles.closeButton}>
      <img src="/images/icons/icon-cross.svg" alt="close" />
    </button>
  );
};

export default DeleteButton;
