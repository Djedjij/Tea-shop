import React from "react";

import styles from "./GreyButton.module.scss";
interface GreyButtonProps {
  text: string;
  onClick?: () => void;
}

const GreyButtonDisabled: React.FC<GreyButtonProps> = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={styles.GreyButtonDisabled} disabled>
      {text}
    </button>
  );
};

export default GreyButtonDisabled;
