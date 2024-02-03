import styles from "./ShopCartUI.module.scss";
import { Link } from "react-router-dom";
import GreyButton from "../Buttons/GreyButton/GreyButton";
import { useAppSelector } from "../../../hooks/hooks";
import { useEffect, useState } from "react";
// import {
//   setShopCart,
//   setTotalCost,
// } from "../../../store/redusers/shopCardSlice";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import CounterInput from "../Inputs/CounterInput";
import { shopCartAPI } from "../../../services/shopCartService";

const ShoppingCardUI: React.FC = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  // const dispatch = useAppDispatch();
  const { data: shopCart } = shopCartAPI.useFetchShopCartQuery();
  const [deleteTea] = shopCartAPI.useDeleteTeaMutation();
  const cartItems = useAppSelector((state) => state.shopCard.shopCart.itemsMap);

  // const totalCost = useAppSelector(
  //   (state) => state.shopCard.shopCart.totalCost
  // );

  useEffect(() => {
    setIsEmpty(!!cartItems.length);
  }, [cartItems.length]);

  const deleteCartItem = (id: number) => {
    deleteTea(id);

    // const index = cartItems.findIndex((el) => el.id === id);
    // if (index !== -1) {
    //   dispatch(
    //     setShopCart([
    //       ...cartItems.slice(0, index),
    //       ...cartItems.slice(index + 1),
    //     ])
    //   );
    //   dispatch(setTotalCost());
    // }
  };
  console.log(shopCart?.itemsMap);
  return (
    <div className={styles.wrapper}>
      <h3>Корзина</h3>
      {isEmpty && !isEmpty ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <div>
          <div className={styles.teaList}>
            {shopCart?.itemsMap.map((tea, index) => (
              <div key={tea.id} className={styles.tea}>
                <div className={styles.teaContent}>
                  <img src={tea.img} alt={tea.name} />
                  <div className={styles.teaText}>
                    <Link to="/">{tea.name}</Link>
                    <CounterInput
                      index={index}
                      weight={tea.weight}
                      sum={tea.sum}
                      id={tea.id}
                    />
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
        // <div>
        //   <div className={styles.teaList}>
        //     {cartItems.map((tea, index) => (
        //       <div key={tea.id} className={styles.tea}>
        //         <div className={styles.teaContent}>
        //           <img src={tea.img} alt={tea.title} />
        //           <div className={styles.teaText}>
        //             <Link to="/">{tea.title}</Link>
        //             <CounterInput
        //               index={index}
        //               quantity={tea.weight}
        //               teaPrice={tea.teaPrice}
        //             />
        //           </div>
        //         </div>
        //         <DeleteButton
        //           onclick={() => deleteCartItem(tea.id, tea.costByHundredGrams)}
        //         />
        //       </div>
        //     ))}
        //   </div>
        //   <div className={styles.subtotal}>
        //     <h4>Итого: {totalCost}р</h4>
        //     <div className={styles.buttons}>
        //       <Link to={"/shopCart"}>
        //         <GreyButton text="Корзина" />
        //       </Link>
        //       <GreyButton text="Оплатить" />
        //     </div>
        //   </div>
        // </div>
      )}
    </div>
  );
};

export default ShoppingCardUI;
