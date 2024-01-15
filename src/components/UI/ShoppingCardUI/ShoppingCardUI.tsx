import React, { useState } from "react";
import styles from "./ShoppingCardUI.module.scss";
import { popularTea } from "../../../utils/consts";
import { Link } from "react-router-dom";
import GreyButton from "../Buttons/GreyButton/GreyButton";

interface TeaQuantity {
  [key: string]: number;
}

const ShoppingCardUI: React.FC = () => {
  const isEmpty = false;
  const [teaQuantities, setTeaQuantities] = useState<TeaQuantity>(
    popularTea.reduce((acc: TeaQuantity, tea) => {
      acc[tea.name] = 1;
      return acc;
    }, {})
  );
  const teaCounter = (name: string, value: string) => {
    const quantity = Math.max(Number(value), 1);
    setTeaQuantities((prevQuantities) => ({
      ...prevQuantities,
      [name]: quantity,
    }));
  };

  return (
    <div className={styles.wrapper}>
      <h3>Корзина</h3>
      {isEmpty ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <div>
          <div className={styles.teaList}>
            {popularTea.map((tea) => (
              <div key={tea.name} className={styles.tea}>
                <div className={styles.teaContent}>
                  <img src={tea.img} alt={tea.name} />
                  <div className={styles.teaText}>
                    <Link to="/">{tea.name}</Link>
                    <form>
                      <input
                        type="number"
                        value={teaQuantities[tea.name]}
                        onChange={(e) => teaCounter(tea.name, e.target.value)}
                        name="quantity"
                        min={1}
                        max={5}
                      />{" "}
                      {/* x {tea.price}p */}
                    </form>
                  </div>
                </div>
                <button className={styles.closeButton}>
                  <img src="/images/icons/icon-cross.svg" alt="close" />
                </button>
              </div>
            ))}
          </div>
          <div className={styles.subtotal}>
            <h4>Итого: 24р</h4>
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
