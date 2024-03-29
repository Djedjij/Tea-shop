import React from "react";
import styles from "../Account.module.scss";
import { useAppSelector } from "../../../../hooks/hooks";
import HorizontalTeaCard from "../../../UI/TeaCards/HorizontalTeaCard/HorizontalTeaCard";
const FavoriteTeas = () => {
  const favoriteTeas = useAppSelector((state) => state.teas.favoriteTeas);
  return (
    <div className={styles.accountBodyContent}>
      <h3 className={styles.accountPageHeader}>Избранные</h3>
      {favoriteTeas.length ? (
        favoriteTeas.map((tea) => (
          <div key={tea.productId} className={styles.favoriteTea}>
            <HorizontalTeaCard tea={tea} weight={100} isFavoriteTea={true} />
          </div>
        ))
      ) : (
        <p>Избранных товаров пока нет</p>
      )}
    </div>
  );
};

export default FavoriteTeas;
