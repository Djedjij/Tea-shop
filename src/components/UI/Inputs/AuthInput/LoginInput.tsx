import React, { useState } from "react";
import styles from "./AuthInput.module.scss";
import { login } from "../../../../store/fetchUser";
import { useAppDispatch } from "../../../../hooks/hooks";

interface LoginInputProps {
  changeForm: () => void;
}
const LoginInput: React.FC<LoginInputProps> = (props) => {
  const dispatch = useAppDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
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
      dispatch(login({ password, email }));
      localStorage.setItem("user", JSON.stringify({ email }));
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.bigHeader}>Вход</h2>
      <form className={styles.form} onSubmit={goLogin}>
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
          className={passwordError ? styles.authInputError : styles.authInput}
          type="password"
          placeholder="Пароль*"
          value={password}
          autoComplete="true"
          onFocus={() => setPasswordError("")}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError ? <p className={styles.error}>{passwordError}</p> : ""}
        <input className={styles.submitInput} type="submit" value="Войти" />
      </form>
      <button onClick={props.changeForm} className={styles.changeInput}>
        Регистрация
      </button>
    </div>
  );
};

export default LoginInput;
