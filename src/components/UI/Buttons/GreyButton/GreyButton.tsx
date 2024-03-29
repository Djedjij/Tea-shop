import React from "react";

import styles from "./GreyButton.module.scss";
interface GreyButtonProps {
  text: string;
  onClick?: () => void;
}

const GreyButton: React.FC<GreyButtonProps> = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={styles.greyButton}>
      {text}
    </button>
  );
};

export default GreyButton;
