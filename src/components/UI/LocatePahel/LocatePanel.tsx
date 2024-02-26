import React from "react";
import styles from "./LocatePanel.module.scss";
import { Link, useLocation } from "react-router-dom";
import { mainRoute, routes } from "../../../utils/routes";
const LocatePanel = () => {
  const locate = useLocation();
  const component = routes.find((route) => route.path === locate.pathname);
  console.log(locate);

  return (
    <div className={styles.bigWrapper}>
      <div className={styles.wrapper}>
        <h3>{component?.name}</h3>
        <div className={styles.adress}>
          <Link to={mainRoute.path}>{mainRoute.name}</Link>
          <img src="/images/icons/icon-arrowRight.svg" alt=">" />
          <p>{component?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default LocatePanel;
