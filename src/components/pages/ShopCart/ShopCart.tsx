import React, { useEffect, useState } from "react";
import LocatePanel from "../../UI/LocatePahel/LocatePanel";
import { Link } from "react-router-dom";

import CounterInput from "../../UI/Inputs/CounterInput";
import DeleteButton from "../../UI/Buttons/DeleteButton/DeleteButton";
import styles from "./ShopCart.module.scss";
import GreenButton from "../../UI/Buttons/GreenButton/GreenButton";
import { shopCartAPI } from "../../../services/shopCartService";

const ShopCart = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const { data: shopCart } = shopCartAPI.useFetchShopCartQuery();
  const [deleteTea] = shopCartAPI.useDeleteTeaMutation();
  const [clearShopCart] = shopCartAPI.useClearShopCartMutation();

  useEffect(() => {
    setIsEmpty(!!shopCart?.itemsMap.length);
  }, [shopCart?.itemsMap.length]);

  const deleteCartItem = (id: number) => {
    deleteTea(id);
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
              <button
                className={styles.clearShopCart}
                onClick={() => clearShopCart()}
              >
                Очистить корзину
              </button>
              {shopCart?.itemsMap.map((tea, index) => (
                <div key={tea.id} className={styles.tea}>
                  <div className={styles.nameAndImg}>
                    <img src={tea.imagesLink} alt={tea.name} />
                    <h4>{tea.name}</h4>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.price}>
                      <CounterInput weight={tea.weight} id={tea.id} />
                      <h4>{tea.costByHundredGrams}р.</h4>
                    </div>
                    <DeleteButton onclick={() => deleteCartItem(tea.id)} />
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.sendPanelWrapper}>
              <div className={styles.sendPanel}>
                <div className={styles.totalCost}>
                  <h4>Итого</h4>
                  <h4>{shopCart?.totalCost}р.</h4>
                </div>
                <hr />
                <div className={styles.totalCost}>
                  <h5>Товары - {shopCart?.itemsMap.length}шт.</h5>
                  <h5>{shopCart?.totalCost}р.</h5>
                </div>
                <div className={styles.totalCost}>
                  <h5>Скидка</h5>
                  <h5>0.00р</h5>
                </div>
                <div className={styles.pay}>
                  <GreenButton link="/shopCart" text="Оплатить" />
                  <p>
                    * Способ и время доставки можно выбрать при оформлении
                    заказа. Дата доставки заказа рассчитывается по максимальной
                    дате доставки товаров в корзине.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopCart;
