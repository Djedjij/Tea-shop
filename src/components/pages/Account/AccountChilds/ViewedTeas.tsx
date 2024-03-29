import React from "react";
import styles from "../Account.module.scss";
import { useAppSelector } from "../../../../hooks/hooks";
import HorizontalTeaCard from "../../../UI/TeaCards/HorizontalTeaCard/HorizontalTeaCard";
const ViewedTeas = () => {
  const viewedTeas = useAppSelector((state) => state.teas.viewedTeas);

  return (
    <div className={styles.accountBodyContent}>
      <h3 className={styles.accountPageHeader}>Просмотренные товары</h3>
      {viewedTeas.length ? (
        viewedTeas.map((tea) => (
          <div className={styles.favoriteTea}>
            <HorizontalTeaCard tea={tea} weight={100} />
          </div>
        ))
      ) : (
        <p>Просмотренных товаров нет.</p>
      )}
    </div>
  );
};

export default ViewedTeas;
