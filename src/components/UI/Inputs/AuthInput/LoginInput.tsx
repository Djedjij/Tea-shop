import React, { useState } from "react";
import styles from "./AuthInput.module.scss";
import { login } from "../../../../store/fetchUser";
import { useAppDispatch } from "../../../../hooks/hooks";
const LoginInput = () => {
  const dispatch = useAppDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const goLogin = async (event: any) => {
    event.preventDefault();
    dispatch(login({ password, email }));
  };
  return (
    <div className={styles.wrapper}>
      <form className={styles.wrapper} onSubmit={goLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
};

export default LoginInput;
