import React, { useState } from "react";
import styles from "../Account.module.scss";
import Modal from "../../../UI/Modal/Modal";
import NameInput from "../../../UI/Inputs/PersonalInfoInputs/NameInput";
import EmailInput from "../../../UI/Inputs/PersonalInfoInputs/EmailInput";
import PhoneInput from "../../../UI/Inputs/PersonalInfoInputs/PhoneInput";
import { Cities } from "../../../layout/BlackHeader/BlackHeader";
const PersonalInfo = () => {
  const [userName, setUserName] = useState("Евгений");
  const [userEmail, setUserEmail] = useState("d@gmail.com");
  const [userAddress, setUserAddress] = useState("Жодино");
  const [userPhone, setUserPhone] = useState("-");
  const [activeNameModal, setActiveNameModal] = useState(false);
  const [activeEmailModal, setActiveEmailModal] = useState(false);
  const [activeAddressModal, setActiveAddressModal] = useState(false);
  const [activePhoneModal, setActivePhoneModal] = useState(false);

  return (
    <div className={styles.accountBodyContent}>
      <h3 className={styles.accountPageHeader}>Личные данные</h3>
      <div className={styles.infoBlock}>
        <hr className={styles.accountPanelLine} />
        <div className={styles.infoBlockItems}>
          <img src="/images/icons/userBlack.svg" alt="" />
          <div className={styles.infoBlockText}>
            <p className={styles.infoBlockTag}>Имя</p>
            <p>{userName}</p>
          </div>
          <img
            className={styles.imgPen}
            onClick={() => setActiveNameModal(true)}
            src="/images/icons/pen.svg"
            alt=""
          />
          <Modal
            activeModal={activeNameModal}
            setActiveModal={setActiveNameModal}
          >
            <NameInput
              setValue={setUserName}
              setActiveModal={setActiveNameModal}
            />
          </Modal>
        </div>
      </div>
      <div className={styles.infoBlock}>
        <hr className={styles.accountPanelLine} />
        <div className={styles.infoBlockItems}>
          <img src="/images/icons/convert.svg" alt="" />
          <div className={styles.infoBlockText}>
            <p className={styles.infoBlockTag}>Почта</p>
            <p>{userEmail}</p>
          </div>
          <img
            className={styles.imgPen}
            onClick={() => setActiveEmailModal(true)}
            src="/images/icons/pen.svg"
            alt=""
          />
          <Modal
            activeModal={activeEmailModal}
            setActiveModal={setActiveEmailModal}
          >
            <EmailInput
              setValue={setUserEmail}
              setActiveModal={setActiveEmailModal}
            />
          </Modal>
        </div>
      </div>
      <div className={styles.infoBlock}>
        <hr className={styles.accountPanelLine} />
        <div className={styles.infoBlockItems}>
          <img src="/images/icons/location.svg" alt="" />
          <div className={styles.infoBlockText}>
            <p className={styles.infoBlockTag}>Адрес</p>
            <p>{userAddress}</p>
          </div>
          <img
            className={styles.imgPen}
            onClick={() => setActiveAddressModal(true)}
            src="/images/icons/pen.svg"
            alt=""
          />
        </div>
        <Modal
          activeModal={activeAddressModal}
          setActiveModal={setActiveAddressModal}
        >
          <Cities
            setCity={setUserAddress}
            setActiveModal={setActiveAddressModal}
          />
        </Modal>
      </div>
      <div className={styles.infoBlock}>
        <hr className={styles.accountPanelLine} />
        <div className={styles.infoBlockItems}>
          <img src="/images/icons/phone.svg" alt="" />
          <div className={styles.infoBlockText}>
            <p className={styles.infoBlockTag}>Телефон</p>
            <p>{userPhone}</p>
          </div>
          <img
            className={styles.imgPen}
            onClick={() => setActivePhoneModal(true)}
            src="/images/icons/pen.svg"
            alt=""
          />
        </div>
        <Modal
          activeModal={activePhoneModal}
          setActiveModal={setActivePhoneModal}
        >
          <PhoneInput
            setValue={setUserPhone}
            setActiveModal={setActivePhoneModal}
          />
        </Modal>
      </div>
    </div>
  );
};

export default PersonalInfo;
