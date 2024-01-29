import styles from "./ShoppingCardUI.module.scss";
import { Link } from "react-router-dom";
import GreyButton from "../Buttons/GreyButton/GreyButton";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { useEffect, useState } from "react";
import {
  setShopCard,
  setTotalCost,
} from "../../../store/redusers/shopCardSlice";

const ShoppingCardUI: React.FC = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.shopCard.shopCard.itemsMap);

  const totalCost = useAppSelector(
    (state) => state.shopCard.shopCard.totalCost
  );

  useEffect(() => {
    setIsEmpty(!!cartItems.length);
  }, [cartItems.length]);

  const deleteCartItem = (id: number, price: number) => {
    const index = cartItems.findIndex((el) => el.id === id);
    if (index !== -1) {
      dispatch(
        setShopCard([
          ...cartItems.slice(0, index),
          ...cartItems.slice(index + 1),
        ])
      );
      dispatch(setTotalCost(totalCost - price));
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3>Корзина</h3>
      {!isEmpty ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <div>
          <div className={styles.teaList}>
            {cartItems.map((tea) => (
              <div key={tea.id} className={styles.tea}>
                <div className={styles.teaContent}>
                  <img src={tea.img} alt={tea.title} />
                  <div className={styles.teaText}>
                    <Link to="/">{tea.title}</Link>
                    <div className={styles.inputNumber}>
                      <div className={styles.inputNumberMinus}>-</div>
                      <input
                        className={styles.inputNumberInput}
                        type="text"
                        pattern="^[0-9]+$"
                        defaultValue="1"
                      />
                      <div className={styles.inputNumberPlus}>+</div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => deleteCartItem(tea.id, tea.costByHundredGrams)}
                  className={styles.closeButton}
                >
                  <img src="/images/icons/icon-cross.svg" alt="close" />
                </button>
              </div>
            ))}
          </div>
          <div className={styles.subtotal}>
            <h4>Итого: {totalCost}р</h4>
            <div className={styles.buttons}>
              <GreyButton text="Корзина" />
              <GreyButton text="Оплатить" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCardUI;
