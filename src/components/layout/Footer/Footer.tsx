import React from "react";
import styles from "./Footer.module.scss";
const Footer: React.FC = () => {
  return (
    <div className={styles.year}>
      <div className={styles.bigWrapper}>
        <div className={styles.wrapper}>
          <div className={styles.address}>
            <h4>Адрес</h4>
            <p>г. Жодино, ул. Куприянова, 21</p>
          </div>
          <div className={styles.contacts}>
            <h4>Фронтенд</h4>
            <div className={styles.links}>
              <a href="/products">
                <div className={styles.telegram}></div>
              </a>
              <a href="/products">
                <div className={styles.github}></div>
              </a>
            </div>
          </div>
          <div className={styles.contacts}>
            <h4>Бекенд</h4>
            <div className={styles.links}>
              <a href="/products">
                <div className={styles.telegram}></div>
              </a>
              <a href="/products">
                <div className={styles.github}></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p>
        © 2024. Все права защищены. <a href="/">Условия использования</a> и{" "}
        <a href="/">Политика конфиденциальности</a>
      </p>
    </div>
  );
};

export default Footer;
