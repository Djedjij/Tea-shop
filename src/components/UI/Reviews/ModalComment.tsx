import React, { useState } from "react";
import styles from "./Reviews.module.scss";
import GreenButton from "../Buttons/GreenButton/GreenButton";

const ModalComment = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  const validatePassword = (password: string) => {
    if (!password) {
      setPasswordError(`Поле "Пароль" не может быть пустым`);
    } else if (password.length < 4) {
      setPasswordError("Пароль слишком короткий");
    } else if (password.length > 10) {
      setPasswordError("Пароль слишком длинный ");
    }
  };

  const goLogin = async (event: any) => {
    event.preventDefault();
    validateEmail(email);
    validatePassword(password);
    if (!emailError || !passwordError) {
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className={styles.modalReview}>
      <div className={styles.modalReviewContent}>
        <h2>Оставить комментарий</h2>
      </div>
      <div className={styles.noLogin}>
        <h5>Заполните личные данные или предварительно авторизуйтесь</h5>
        <div className={styles.greenBtn}>
          <GreenButton text="Войти" link="/account" />
          <div className={styles.formData}>
            <form className={styles.form} onSubmit={goLogin}>
              <input
                className={
                  emailError ? styles.authInputError : styles.authInput
                }
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
                className={
                  passwordError ? styles.authInputError : styles.authInput
                }
                type="password"
                placeholder="Пароль*"
                value={password}
                autoComplete="true"
                onFocus={() => setPasswordError("")}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError ? (
                <p className={styles.error}>{passwordError}</p>
              ) : (
                ""
              )}
              <textarea
                className={styles.textInput}
                placeholder="Комментарий*"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
              <input
                className={styles.submitInput}
                type="submit"
                value="Оставить комментарий"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComment;
