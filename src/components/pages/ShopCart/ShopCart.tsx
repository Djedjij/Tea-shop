import React, { useEffect, useState } from "react";
import LocatePanel from "../../UI/LocatePahel/LocatePanel";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {
  setShopCart,
  setTotalCost,
} from "../../../store/redusers/shopCardSlice";
import CounterInput from "../../UI/Inputs/CounterInput";
import DeleteButton from "../../UI/Buttons/DeleteButton/DeleteButton";
import styles from "./ShopCart.module.scss";
import GreenButton from "../../UI/Buttons/GreenButton/GreenButton";

const ShopCart = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.shopCard.shopCart.itemsMap);

  const totalCost = useAppSelector(
    (state) => state.shopCard.shopCart.totalCost
  );

  useEffect(() => {
    setIsEmpty(!!cartItems.length);
  }, [cartItems.length]);

  const deleteCartItem = (id: number, price: number) => {
    const index = cartItems.findIndex((el) => el.id === id);
    if (index !== -1) {
      dispatch(
        setShopCart([
          ...cartItems.slice(0, index),
          ...cartItems.slice(index + 1),
        ])
      );
      dispatch(setTotalCost(totalCost - price));
    }
  };

  return (
    <div>
      <LocatePanel />
      <div className={styles.wrapper}>
        {!isEmpty ? (
          <div className={styles.emptyShopCart}>
            <img src="/images/emptyShopCart.png" alt="shopCart" />
            <p>
              У вас пока нет ни одного товара в корзине, вы можете выбрать их{" "}
              <Link to={"/shop"}>здесь</Link>
            </p>
          </div>
        ) : (
          <div className={styles.shopCart}>
            <div className={styles.teas}>
              {cartItems.map((tea, index) => (
                <div key={tea.id} className={styles.tea}>
                  <div className={styles.nameAndImg}>
                    <img src={tea.img} alt={tea.title} />
                    <h4>{tea.title}</h4>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.price}>
                      <CounterInput index={index} quantity={tea.quantity} />
                      <h4>{tea.costByHundredGrams}р.</h4>
                    </div>
                    <DeleteButton
                      onclick={() =>
                        deleteCartItem(tea.id, tea.costByHundredGrams)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.sendPanel}>
              <div className={styles.totalCost}>
                <h4>Итого</h4>
                <h4>{totalCost}р.</h4>
              </div>
              <hr />
              <div className={styles.totalCost}>
                <h5>Товары - {cartItems.length}шт.</h5>
                <h5>{totalCost}р.</h5>
              </div>
              <div className={styles.totalCost}>
                <h5>Скидка</h5>
                <h5>0.00р</h5>
              </div>
              <div className={styles.pay}>
                <GreenButton link="/shopCart" text="Оплатить" />
                <p>
                  * Способ и время доставки можно выбрать при оформлении заказа.
                  Дата доставки заказа рассчитывается по максимальной дате
                  доставки товаров в корзине.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopCart;
