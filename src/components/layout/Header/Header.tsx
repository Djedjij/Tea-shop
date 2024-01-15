import React from "react";
import styles from "../Header/Header.module.scss";
import { Link } from "react-router-dom";
import { accountRoute, mainRoutes } from "../../../utils/routes";
const Header = () => {
  return (
    <div className={styles.bigWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img
            className={styles.logo_image}
            src="/images/logo/logo.png"
            alt="logo"
          />
          <div className={styles.logo_full}>
            <h2 className={styles.logo_text}>Magic Tea</h2>
            <h4 className={styles.logo_slogan}>Tea & teaware co.</h4>
          </div>
        </div>
        <nav className={styles.navbar}>
          <ul className={styles.navbar_ul}>
            {mainRoutes.map((navButton) => (
              <li key={navButton.name}>
                <Link className={styles.navbar_a} to={navButton.path}>
                  {navButton.name}
                </Link>
              </li>
            ))}
            <li>
              <Link className={styles.navbar_a} to={accountRoute.path}>
                Счет: 0.00р
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
