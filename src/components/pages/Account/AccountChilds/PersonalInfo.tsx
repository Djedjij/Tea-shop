import React from "react";
import styles from "../Account.module.scss";
const PersonalInfo = () => {
  return (
    <div className={styles.accountBodyContent}>
      <h3 className={styles.accountPageHeader}>Личные данные</h3>
      <div className={styles.infoBlock}>
        <hr className={styles.accountPanelLine} />
        <div className={styles.infoBlockItems}>
          <img src="/images/icons/userBlack.svg" alt="" />
          <div className={styles.infoBlockText}>
            <p className={styles.infoBlockTag}>Имя</p>
            <p>Евгений Матюха</p>
          </div>
          <img className={styles.imgPen} src="/images/icons/pen.svg" alt="" />
        </div>
      </div>
      <div className={styles.infoBlock}>
        <hr className={styles.accountPanelLine} />
        <div className={styles.infoBlockItems}>
          <img src="/images/icons/convert.svg" alt="" />
          <div className={styles.infoBlockText}>
            <p className={styles.infoBlockTag}>Почта</p>
            <p>mat3347571@gmail.com</p>
          </div>
          <img className={styles.imgPen} src="/images/icons/pen.svg" alt="" />
        </div>
      </div>
      <div className={styles.infoBlock}>
        <hr className={styles.accountPanelLine} />
        <div className={styles.infoBlockItems}>
          <img src="/images/icons/location.svg" alt="" />
          <div className={styles.infoBlockText}>
            <p className={styles.infoBlockTag}>Адрес</p>
            <p>г. Жодино</p>
          </div>
          <img className={styles.imgPen} src="/images/icons/pen.svg" alt="" />
        </div>
      </div>
      <div className={styles.infoBlock}>
        <hr className={styles.accountPanelLine} />
        <div className={styles.infoBlockItems}>
          <img src="/images/icons/phone.svg" alt="" />
          <div className={styles.infoBlockText}>
            <p className={styles.infoBlockTag}>Телефон</p>
            <p>-</p>
          </div>
          <img className={styles.imgPen} src="/images/icons/pen.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
