import React, { useState } from "react";
import styles from "./AuthInput.module.scss";
import { auth } from "../../../../store/fetchUser";
import { useAppDispatch } from "../../../../hooks/hooks";

interface AuthInputProps {
  changeForm: () => void;
}

const AuthInput: React.FC<AuthInputProps> = (props) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [addressError, setAddressError] = useState("");

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
  const validateName = (name: string) => {
    if (!name) {
      setNameError(`Поле "Имя" не может быть пустым`);
    }
  };
  const validateAddress = (addres: string) => {
    if (!addres) {
      setAddressError(`Поле "Адрес" не может быть пустым`);
    }
  };
  const goAuth = async (event: any) => {
    event.preventDefault();
    validateEmail(email);
    validateName(name);
    validateAddress(address);
    validatePassword(password);
    if (!emailError && !passwordError) {
      dispatch(auth({ name, password, email, address }));
      setName("");
      setAddress("");
      setPassword("");
      setEmail("");
    }
  };

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.smallHeader}>Нет аккаунта?</h4>
      <h2 className={styles.bigHeader}>Зарегистрируйтесь</h2>
      <form className={styles.form} onSubmit={goAuth}>
        <input
          className={nameError ? styles.authInputError : styles.authInput}
          type="text"
          placeholder="Имя*"
          value={name}
          onFocus={() => setNameError("")}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError ? <p className={styles.error}>{nameError}</p> : ""}
        <input
          className={emailError ? styles.authInputError : styles.authInput}
          type="text"
          placeholder="Email*"
          value={email}
          onFocus={() => setEmailError("")}
          // onBlur={() => validateEmail("")}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError ? <p className={styles.error}>{emailError}</p> : ""}
        <input
          className={passwordError ? styles.authInputError : styles.authInput}
          type="password"
          placeholder="Пароль*"
          value={password}
          onFocus={() => setPasswordError("")}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="true"
        />
        {passwordError ? <p className={styles.error}>{passwordError}</p> : ""}
        <input
          className={addressError ? styles.authInputError : styles.authInput}
          type="text"
          value={address}
          onFocus={() => setAddressError("")}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Адрес*"
        />
        {addressError ? <p className={styles.error}>{addressError}</p> : ""}
        <input
          className={styles.submitInput}
          type="submit"
          value="Регистрация"
        />
      </form>
      <button onClick={props.changeForm} className={styles.changeInput}>
        Вход
      </button>
    </div>
  );
};

export default AuthInput;
