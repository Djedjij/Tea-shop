import React, { useEffect, useState } from "react";

import { CSSTransition } from "react-transition-group";
import { useAppSelector } from "../../../../hooks/hooks";
import HorizontalTeaCard from "../../../UI/TeaCards/HorizontalTeaCard/HorizontalTeaCard";
import styles from "../Account.module.scss";
const FavoriteTeas = () => {
  const favoriteTeas = useAppSelector((state) => state.teas.favoriteTeas);
  const [changeTeas, setChangeTeas] = useState(false);

  useEffect(() => {
    setChangeTeas((changeTeas) => !changeTeas);
  }, [favoriteTeas]);

  return (
    <div className={styles.accountBodyContent}>
      <h3 className={styles.accountPageHeader}>Избранные</h3>
      {favoriteTeas.length ? (
        favoriteTeas.map((tea) => (
          <CSSTransition
            in={changeTeas}
            timeout={300}
            classNames={{
              enter: styles.textEnter,
              enterActive: styles.textEnterActive,
              exit: styles.textExit,
              exitActive: styles.textExitActive,
            }}
          >
            <div key={tea.productId} className={styles.favoriteTea}>
              <HorizontalTeaCard tea={tea} weight={100} isFavoriteTea={true} />
            </div>
          </CSSTransition>
        ))
      ) : (
        <p>Избранных товаров пока нет</p>
      )}
    </div>
  );
};

export default FavoriteTeas;
