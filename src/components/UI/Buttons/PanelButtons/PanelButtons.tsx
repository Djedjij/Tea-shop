import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./PahelButtons.module.scss";
import { CSSTransition } from "react-transition-group";
import { shopCartAPI } from "../../../../services/shopCartService";
const PanelButton = () => {
  const [isHoveredShoppingCard, setIsHoveredShoppingCard] = useState(false);
  const [isHoveredUserCard, setIsHoveredUserCard] = useState(false);
  const { data: shopCart } = shopCartAPI.useFetchShopCartQuery();
  const [countTeas, setCountTeas] = useState(0);
  const shoppingCardRef = useRef(null);
  const userCardRef = useRef(null);

  useEffect(() => {
    if (shopCart?.itemsMap.length) {
      setCountTeas(shopCart?.itemsMap.length);
    } else {
      setCountTeas(0);
    }
  }, [shopCart?.itemsMap.length]);

  const handleMouseEnterShoppingCard = () => {
    setIsHoveredShoppingCard(true);
  };
  const handleMouseLeaveShoppingCard = () => {
    setIsHoveredShoppingCard(false);
  };

  const handleMouseEnterUserCard = () => {
    setIsHoveredUserCard(true);
  };
  const handleMouseLeaveUserCard = () => {
    setIsHoveredUserCard(false);
  };

  return (
    <div className={styles.panelButtons}>
      <div className={styles.panelButtonWrapper}>
        <CSSTransition
          in={isHoveredShoppingCard}
          nodeRef={shoppingCardRef}
          timeout={300}
          classNames={{
            enter: styles.buttonNameEnter,
            enterActive: styles.buttonNameEnterActive,
            exit: styles.buttonNameExit,
            exitActive: styles.buttonNameExitActive,
          }}
          unmountOnExit
        >
          <div ref={shoppingCardRef} className={styles.buttonName}>
            <p>Корзина</p>
          </div>
        </CSSTransition>
        <Link
          className={
            isHoveredShoppingCard
              ? styles.panelButtonActive
              : styles.panelButton
          }
          onMouseEnter={handleMouseEnterShoppingCard}
          onMouseLeave={handleMouseLeaveShoppingCard}
          to={"/shopCart"}
        >
          {countTeas ? <div className={styles.count}>{countTeas}</div> : ""}
          <img
            className={styles.panelButtonCardImg}
            src="/images/icons/shopCart.svg"
            alt=""
          />
        </Link>
      </div>
      <div className={styles.panelButtonWrapper}>
        <CSSTransition
          in={isHoveredUserCard}
          nodeRef={userCardRef}
          timeout={300}
          classNames={{
            enter: styles.buttonNameEnter,
            enterActive: styles.buttonNameEnterActive,
            exit: styles.buttonNameExit,
            exitActive: styles.buttonNameExitActive,
          }}
          unmountOnExit
        >
          <div ref={userCardRef} className={styles.buttonName}>
            <p>Кабинет</p>
          </div>
        </CSSTransition>
        <Link
          className={
            isHoveredUserCard ? styles.panelButtonActive : styles.panelButton
          }
          onMouseEnter={handleMouseEnterUserCard}
          onMouseLeave={handleMouseLeaveUserCard}
          to={"/account"}
        >
          <img
            className={styles.panelButtonUserImg}
            src="/images/icons/user.svg"
            alt="user"
          />
        </Link>
      </div>
    </div>
  );
};

export default PanelButton;
