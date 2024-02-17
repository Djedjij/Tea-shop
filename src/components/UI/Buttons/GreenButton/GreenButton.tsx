import React from "react";
import { Link } from "react-router-dom";
import styles from "./GreenButton.module.scss";
interface GreenButtonProps {
  text: string;
  link: string;
  disabled?: boolean;
}

const GreenButton: React.FC<GreenButtonProps> = (props) => {
  return (
    <Link
      className={`${styles.greenButton} ${
        props.disabled ? styles.disabled : ""
      }`}
      to={props.link}
    >
      {props.text}
    </Link>
  );
};

export default GreenButton;
