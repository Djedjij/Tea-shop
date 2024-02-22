import React, { useState } from "react";
import styles from "./AuthInput.module.scss";
import { auth } from "../../../../store/fetchUser";
import { useAppDispatch } from "../../../../hooks/hooks";
const AuthInput = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const goAuth = async (event: any) => {
    event.preventDefault();
    dispatch(auth({ name, password, email, address }));
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.wrapper} onSubmit={goAuth}>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Адрес"
        />
        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
};

export default AuthInput;
