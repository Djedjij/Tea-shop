import React from "react";
import { Link } from "react-router-dom";
import styles from "./PahelButtons.module.scss";
const PanelButton = () => {
  return (
    <div className={styles.panelButtons}>
      <Link className={styles.panelButton} to={""}>
        <img
          className={styles.panelButtonCardImg}
          src="/images/icons/shopping-card.svg"
          alt="shopping-card"
        />
      </Link>
      <Link className={styles.panelButton} to={""}>
        <img
          className={styles.panelButtonUserImg}
          src="/images/icons/user.svg"
          alt="shopping-card"
        />
      </Link>
    </div>
  );
};

export default PanelButton;
