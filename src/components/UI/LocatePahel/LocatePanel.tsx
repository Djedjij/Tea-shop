import React from "react";
import styles from "./LocatePanel.module.scss";
import { Link, useLocation } from "react-router-dom";
import { mainRoute, routes } from "../../../utils/routes";

interface ILocatePanelProps {
  childLocate?: string;
}

const LocatePanel: React.FC<ILocatePanelProps> = ({ childLocate }) => {
  const locate = useLocation();
  const component = routes.find(
    (route) => route.path === "/" + locate.pathname.split("/")[1]
  );

  return (
    <div className={styles.bigWrapper}>
      <div className={styles.wrapper}>
        <h3>{childLocate ? childLocate : component?.name}</h3>
        <div className={styles.adress}>
          <Link to={mainRoute.path}>{mainRoute.name}</Link>
          <img src="/images/icons/icon-arrowRight.svg" alt=">" />
          <Link to={`/${locate.pathname.split("/")[1]}`}>
            {component?.name}
          </Link>
          {childLocate && (
            <div className={styles.childLocate}>
              <img src="/images/icons/icon-arrowRight.svg" alt=">" />
              <p>{childLocate}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocatePanel;
