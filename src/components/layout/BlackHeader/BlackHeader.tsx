import React, { useState } from "react";
import styles from "./BlackHeader.module.scss";
import { Link } from "react-router-dom";
import Modal from "../../UI/Modal/Modal";

const Cities = () => {
  return <div>asdasf</div>;
};
const BlackHeader = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [activePhone, setActivePhone] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.location} onClick={() => setActiveModal(true)}>
          <img src="/images/icons/iconLocationWhite.png" alt="" />

          <p>Жодино</p>
        </div>
        <div className={styles.info}>
          <div className={styles.infoLinks}>
            <Link to={""}>Помощь</Link>
            <Link to={""}>Оплата и доставка</Link>
            <Link to={""}>Что с моим заказом?</Link>
          </div>
          <div
            onMouseEnter={() => setActivePhone(true)}
            onMouseLeave={() => setActivePhone(false)}
            className={styles.phone}
          >
            <img src="/images/icons/iconPhoneWhite.png" alt="" />
            <p>375-33-334-75-71</p>
            <img
              className={`${styles.arrowImg} ${activePhone && styles.active}`}
              src="/images/icons/iconArrowDown.svg"
              alt=""
            />
          </div>
          <div className={styles.time}>
            <img src="/images/icons/iconClockWhite.png" alt="" />
            <p>
              контакт-центр
              <br />c 8.00 до 22.00
            </p>
          </div>
        </div>
      </div>
      <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
        <Cities />
      </Modal>
    </div>
  );
};

export default BlackHeader;
