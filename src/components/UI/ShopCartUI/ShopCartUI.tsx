import styles from "./ShopCartUI.module.scss";
import { Link } from "react-router-dom";
import GreyButton from "../Buttons/GreyButton/GreyButton";
import { useEffect, useState } from "react";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import CounterInput from "../Inputs/CounterInput";
import { shopCartAPI } from "../../../services/shopCartService";
import Loader from "../Loader/Loader";

const ShoppingCardUI: React.FC = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const {
    data: shopCart,
    isLoading,
    isFetching,
    isError,
  } = shopCartAPI.useFetchShopCartQuery();
  const [deleteTea] = shopCartAPI.useDeleteTeaMutation();

  useEffect(() => {
    setIsEmpty(!!shopCart?.itemsMap.length);
  }, [shopCart?.itemsMap.length]);

  const deleteCartItem = (id: number) => {
    deleteTea(id);
  };

  return (
    <div className={styles.loaderWrapper}>
      {(isLoading || isFetching) && <Loader />}
      <div
        className={`${styles.wrapper} ${
          isLoading || isFetching ? styles.loading : ""
        }`}
      >
        <h3>Корзина</h3>
        {!isEmpty && <p className={styles.empty}>Ваша корзина пуста</p>}
        {!isEmpty && isError && <h1>Ошибка при загрузке корзины</h1>}
        {isEmpty && (
          <div>
            <div className={styles.teaList}>
              {shopCart?.itemsMap.map((tea) => (
                <div key={tea.id} className={styles.tea}>
                  <div className={styles.teaContent}>
                    <img src={tea.imagesLink} alt={tea.name} />
                    <div className={styles.teaText}>
                      <Link className={styles.teaTextLink} to="/">
                        {tea.name}
                      </Link>
                      <div className={styles.counter}>
                        <CounterInput weight={tea.weight} id={tea.id} />
                      </div>
                    </div>
                  </div>
                  <DeleteButton onclick={() => deleteCartItem(tea.id)} />
                </div>
              ))}
            </div>
            <div className={styles.subtotal}>
              <h4>Итого: {shopCart?.totalCost}р</h4>
              <div className={styles.buttons}>
                <Link to={"/shopCart"}>
                  <GreyButton text="Корзина" />
                </Link>
                <GreyButton text="Оплатить" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCardUI;
