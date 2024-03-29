import React, { useState } from "react";
import styles from "./Account.module.scss";
import LocatePanel from "../../UI/LocatePahel/LocatePanel";
import AuthInput from "../../UI/Inputs/AuthInput/AuthInput";
import LoginInput from "../../UI/Inputs/AuthInput/LoginInput";
import { CSSTransition } from "react-transition-group";
import { useAppSelector } from "../../../hooks/hooks";
import Loader from "../../UI/Loaders/Loader";
import { accountPages } from "../../../utils/consts";
import { Link } from "react-router-dom";

const Account = () => {
  const [hasAccount, setHasAccount] = useState<boolean>(false);
  const [accountPage, setAccountPage] = useState("Личные данные");
  const [changePage, setChangePage] = useState<boolean>(false);
  const changeForm = () => {
    setHasAccount(!hasAccount);
  };

  const isLogin = useAppSelector((state) => state.user.isLogin);
  // const user = localStorage.getItem("user")
  //   ? JSON.parse(localStorage.getItem("user") as string)
  //   : null;
  const isLoading = useAppSelector((state) => state.user.isLoading);
  return (
    <div>
      <LocatePanel />
      {isLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
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
              <div className={styles.accountBody}>
                <ul className={styles.accountPanel}>
                  <Link to={"/shopCart"} className={styles.accountPanelLink}>
                    <img src="/images/icons/shopCartBlack.svg" alt="" />
                    Корзина
                  </Link>
                  <hr className={styles.accountPanelLine} />
                  {accountPages.map((page) => (
                    <div className={styles.accountPanelLink} key={page.name}>
                      <img src={page.img} alt="" />
                      <li
                        className={
                          accountPage === page.name ? `${styles.liActive}` : ""
                        }
                        onClick={() => {
                          setAccountPage(page.name);
                          setChangePage(!changePage);
                        }}
                      >
                        {page.name}
                      </li>
                    </div>
                  ))}
                  <hr className={styles.accountPanelLine} />
                  <div className={styles.accountPanelLink}>
                    <img src="/images/icons/exit.svg" alt="" />
                    <li>Выход</li>
                  </div>
                </ul>
                <CSSTransition
                  in={changePage}
                  timeout={300}
                  classNames={{
                    enter: styles.inputEnter,
                    enterActive: styles.inputEnterActive,
                    exit: styles.inputExit,
                    exitActive: styles.inputExitActive,
                  }}
                  unmountOnEnter
                >
                  <>
                    {accountPages.map((page) =>
                      accountPage === page.name ? (
                        <page.Component key={page.name} />
                      ) : (
                        ""
                      )
                    )}
                  </>
                </CSSTransition>
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
      )}
    </div>
  );
};

export default Account;
