import React, { useState } from "react";
import styles from "./Contacts.module.scss";
import LocatePanel from "../../UI/LocatePahel/LocatePanel";
import { Link } from "react-router-dom";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError(`Поле "Email" не может быть пустым`);
    } else {
      const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      emailRegex.test(email)
        ? setEmailError("")
        : setEmailError("Неверно указан Email");
    }
  };

  const validateName = (name: string) => {
    if (!name) {
      setNameError(`Поле "Имя" не может быть пустым`);
    }
  };

  const validateMessage = (message: string) => {
    if (!message) {
      setNameError(`Поле "Сообщение" не может быть пустым`);
    }
  };

  const sendMessage = () => {
    validateEmail(email);
    validateMessage(message);
    validateName(name);
    if (name && email && message) {
      console.log("ok");
    }
  };
  return (
    <div>
      <LocatePanel />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h4>Телефоны</h4>
          <p>+375-33-334-75-71</p>
          <p>+374-44-774-75-20</p>
          <h4>Почта</h4>
          <div className={styles.row}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="-2 -2 28 28"
              fill="none"
              id="d-mail"
              y="541"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 4.8a2.39 2.39 0 0 1 1.99 1.058A2.39 2.39 0 0 1 22.4 7.2v9.6a2.4 2.4 0 0 1-2.4 2.4H4a2.4 2.4 0 0 1-2.4-2.4V7.2A2.4 2.4 0 0 1 4 4.8h16zm-.6 1.5c.214 0 .418.045.603.126l-7.215 6.28-.087.069a1.2 1.2 0 0 1-1.489-.07l-7.214-6.28c.184-.08.388-.125.602-.125h14.8zM3.1 7.8c0-.172.03-.338.083-.492l5.496 4.783L3.1 15.842V7.8zm.293 9.291c.274.37.712.609 1.207.609h14.8c.494 0 .933-.239 1.206-.608l-6.223-4.184-.807.703a2.4 2.4 0 0 1-3.152 0l-.808-.704-6.223 4.184zm11.928-4.999l5.58 3.752V7.8c0-.172-.03-.338-.084-.492l-5.496 4.784z"
                fill="#231F20"
              />
            </svg>
            <a href="mailto:mat3347571@gmail.com">Написать письмо</a>
          </div>
          <h4>Социальные сети</h4>
          <Link className={styles.row} to="https://web.telegram.org/@Djedjij">
            <img src="/images/icons/icon-telegramBlack.svg" alt="" />
            <p>Djedj</p>
          </Link>
          <Link className={styles.row} to="https://github.com/Djedjij">
            <img src="/images/icons/icon-githubBlack.svg" alt="" />
            <p>Djedj</p>
          </Link>
          <Link className={styles.row} to="https://web.telegram.org/@Djedjij">
            <img src="/images/icons/icon-telegramBlack.svg" alt="" />
            <p>EnotikSh0</p>
          </Link>
          <Link className={styles.row} to="https://github.com/EnoticSho">
            <img src="/images/icons/icon-githubBlack.svg" alt="" />
            <p>EnotikSho</p>
          </Link>

          <h4>Адрес</h4>
          <div className={styles.row}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="-2 -2 28 28"
              fill="none"
              id="d-location"
              y="513"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1.6c4.411 0 8 3.473 8 7.741 0 2.515-1.271 5.452-3.779 8.73l-.306.394-.152.191-.301.372-.297.355-.29.339-.282.32-.403.448-.253.273-.46.483-.552.555-.429.409a.733.733 0 0 1-.496.19.739.739 0 0 1-.434-.14l-.084-.07-.345-.342-.518-.537-.443-.476-.373-.413-.266-.301-.418-.486-.289-.347-.296-.362-.301-.378-.304-.392-.153-.202C5.27 14.626 4 11.728 4 9.341c0-4.268 3.589-7.74 8-7.74zm0 1.2c-3.757 0-6.8 2.944-6.8 6.541 0 2.08 1.171 4.753 3.535 7.891a38.196 38.196 0 0 0 2.44 2.917l.29.312.384.4.157.16.27-.266.263-.266.291-.302c.83-.87 1.66-1.827 2.438-2.844C17.63 14.255 18.8 11.55 18.8 9.34c0-3.597-3.043-6.54-6.8-6.54zm0 1.848A4.516 4.516 0 0 0 7.489 9.16 4.516 4.516 0 0 0 12 13.672a4.516 4.516 0 0 0 4.511-4.512A4.516 4.516 0 0 0 12 4.648zm0 1.2a3.316 3.316 0 0 1 3.311 3.312A3.316 3.316 0 0 1 12 12.472 3.316 3.316 0 0 1 8.689 9.16 3.316 3.316 0 0 1 12 5.848z"
                fill="#231F20"
              />
            </svg>
            <p>220036,г. Жодино, ул. Куприянова 21</p>
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A5c92759d2232417b7a63af2c62a71e75fdea61535a326787a0bd9740d9082b18&amp;source=constructor"
            width="100%"
            height="467"
            frameBorder="0"
            title="contacts-map"
          ></iframe>
        </div>
      </div>
      <div className={styles.formQuestion}>
        <h2>Есть вопрос?</h2>
        <h1>Отправьте нам сообщение</h1>
        <form className={styles.form} onSubmit={() => sendMessage()}>
          <input
            className={emailError ? styles.authInputError : styles.authInput}
            type="text"
            placeholder="Email*"
            value={email}
            onFocus={() => setEmailError("")}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {emailError ? <p className={styles.error}>{emailError}</p> : ""}
          <input
            className={nameError ? styles.authInputError : styles.authInput}
            type="text"
            placeholder="Имя*"
            value={name}
            autoComplete="true"
            onFocus={() => setNameError("")}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError ? <p className={styles.error}>{nameError}</p> : ""}
          <textarea
            className={styles.textInput}
            placeholder="Сообщение*"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <input
            className={styles.submitInput}
            type="submit"
            value="Отправить"
          />
        </form>
      </div>
    </div>
  );
};

export default Contacts;
