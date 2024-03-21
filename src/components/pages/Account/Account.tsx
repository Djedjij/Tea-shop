import React, { useState } from "react";
import styles from "./Account.module.scss";
import LocatePanel from "../../UI/LocatePahel/LocatePanel";
import AuthInput from "../../UI/Inputs/AuthInput/AuthInput";
import LoginInput from "../../UI/Inputs/AuthInput/LoginInput";
import { CSSTransition } from "react-transition-group";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { logout } from "../../../store/redusers/userSlice";

const Account = () => {
  const dispatch = useAppDispatch();
  const [hasAccount, setHasAccount] = useState<boolean>(false);
  const changeForm = () => {
    setHasAccount(!hasAccount);
  };
  const isLogin = useAppSelector((state) => state.user.isLogin);
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null;

  return (
    <div>
      <LocatePanel />
      <div className={styles.wrapper}>
        <CSSTransition
          in={hasAccount}
          timeout={300}
          classNames={{
            enter: styles.inputEnter,
            enterActive: styles.inputEnterActive,
            exit: styles.inputExit,
            exitActive: styles.inputExitActive,
          }}
        >
          {isLogin ? (
            <div>
              {`Кабинет пользователя ${user.email}`}
              <button onClick={() => dispatch(logout())}>Выйти</button>
            </div>
          ) : (
            <div>
              {hasAccount ? (
                <LoginInput changeForm={changeForm} />
              ) : (
                <AuthInput changeForm={changeForm} />
              )}
            </div>
          )}
        </CSSTransition>
      </div>
    </div>
  );
};

export default Account;
