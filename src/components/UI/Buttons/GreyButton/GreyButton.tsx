import React from "react";

import styles from "./GreyButton.module.scss";
interface GreyButtonProps {
  text: string;
  onClick?: () => void;
}

const GreyButton: React.FC<GreyButtonProps> = (props) => {
  return <button className={styles.greyButton}>{props.text}</button>;
};

export default GreyButton;
