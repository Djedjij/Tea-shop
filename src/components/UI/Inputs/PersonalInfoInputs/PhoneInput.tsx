import React, { useState } from "react";
import styles from "./PersonalInfoInputs.module.scss";

export interface IInpitProps {
  setValue: (value: string) => void;
  setActiveModal: (activeModal: boolean) => void;
}

const PhoneInput: React.FC<IInpitProps> = ({ setValue, setActiveModal }) => {
  const [phone, setPhone] = useState("");
  const changeName = (e: any) => {
    e.preventDefault();
    setValue(phone);
    setActiveModal(false);
  };
  return (
    <form onSubmit={changeName} className={styles.wrapper} action="">
      <h3>Изменение номера телефона</h3>
      <input
        className={styles.textInput}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        type="text"
        placeholder="Телефон*"
      />

      <input className={styles.submitInput} type="submit" value="Сохранить" />
    </form>
  );
};

export default PhoneInput;
