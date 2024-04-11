import React, { useState } from "react";
import styles from "./PersonalInfoInputs.module.scss";

export interface IInpitProps {
  setValue: (value: string) => void;
  setActiveModal: (activeModal: boolean) => void;
}

const NameInput: React.FC<IInpitProps> = ({ setValue, setActiveModal }) => {
  const [name, setName] = useState("");
  const changeName = (e: any) => {
    e.preventDefault();
    setValue(name);
    setActiveModal(false);
  };
  return (
    <form onSubmit={changeName} className={styles.wrapper} action="">
      <h3>Изменение профиля</h3>
      <input
        className={styles.textInput}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Имя*"
      />
      <h4>Пол</h4>
      <div>
        <input
          className={styles.radioInput}
          type="radio"
          id="man"
          name="person"
          defaultChecked
        />
        <label className={styles.radio} htmlFor="man">
          Мужской
        </label>
        <input
          className={styles.radioInput}
          type="radio"
          id="woman"
          name="person"
        />
        <label htmlFor="man">Женский</label>
      </div>
      <input className={styles.submitInput} type="submit" value="Сохранить" />
    </form>
  );
};

export default NameInput;
