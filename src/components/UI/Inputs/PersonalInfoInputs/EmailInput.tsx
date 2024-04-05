import React, { useState } from "react";
import styles from "./PersonalInfoInputs.module.scss";

export interface IInpitProps {
  setValue: (value: string) => void;
  setActiveModal: (activeModal: boolean) => void;
}

const EmailInput: React.FC<IInpitProps> = ({ setValue, setActiveModal }) => {
  const [email, setEmail] = useState("");
  const changeName = (e: any) => {
    e.preventDefault();
    setValue(email);
    setActiveModal(false);
  };
  return (
    <form onSubmit={changeName} className={styles.wrapper} action="">
      <h3>Изменение почты</h3>
      <input
        className={styles.textInput}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        placeholder="Почта*"
      />

      <input className={styles.submitInput} type="submit" value="Сохранить" />
    </form>
  );
};

export default EmailInput;
