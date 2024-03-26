import React from "react";
import styles from "../Account.module.scss";
const PersonalInfo = () => {
  return (
    <div className={styles.personalInfo}>
      <h3 className={styles.accountPageHeader}>Личные данные</h3>
      <div className={styles.infoBlock}>
        <hr className={styles.accountPanelLine} />
        <img src="/images/icons/userBlack.svg" alt="" />
        <p>Имя</p>
        <p>Евгений Матюха</p>
      </div>
      <div className={styles.infoBlock}>
        <hr className={styles.accountPanelLine} />
        <div>
          <img src="/images/icons/convert.svg" alt="" />
          <div className={styles.infoBlockText}>
            <p>Почта</p>
            <p>mat3347571@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.infoBlock}>
        <hr className={styles.accountPanelLine} />
        <img src="/images/icons/location.svg" alt="" />
        <div className={styles.infoBlockText}>
          <p>Адрес</p>
          <p>г. Жодино</p>
        </div>
      </div>
      <div className={styles.infoBlock}>
        <hr className={styles.accountPanelLine} />
        <img src="/images/icons/phone.svg" alt="" />
        <div className={styles.infoBlockText}>
          <p>Телефон</p>
          <p>-</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
