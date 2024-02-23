import React, { useState } from "react";
import styles from "./Account.module.scss";
import LocatePanel from "../../UI/LocatePahel/LocatePanel";
import AuthInput from "../../UI/Inputs/AuthInput/AuthInput";
import LoginInput from "../../UI/Inputs/AuthInput/LoginInput";
import { CSSTransition } from "react-transition-group";
const Account = () => {
  const [hasAccount, setHasAccount] = useState<boolean>(false);
  const changeForm = () => {
    setHasAccount(!hasAccount);
  };

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
          {hasAccount ? (
            <LoginInput changeForm={changeForm} />
          ) : (
            <AuthInput changeForm={changeForm} />
          )}
        </CSSTransition>
      </div>
    </div>
  );
};

export default Account;
