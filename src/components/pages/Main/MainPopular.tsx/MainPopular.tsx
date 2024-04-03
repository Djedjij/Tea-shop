import React from "react";
import styles from "./MainPopular.module.scss";
import GreenButton from "../../../UI/Buttons/GreenButton/GreenButton";

import { mainPageCategories } from "../../../../utils/consts";
import { useAppDispatch } from "../../../../hooks/hooks";
import { fetchFilteredByCategoryTeas } from "../../../../store/redusers/fetchTeas";
import { Link } from "react-router-dom";

const MainPopular = () => {
  const dispatch = useAppDispatch();
  const filterTeas = (categoryName: string) => {
    dispatch(fetchFilteredByCategoryTeas({ title: categoryName }));
  };
  return (
    <div className={styles.wrapper}>
      <h4>Магазин</h4>
      <h1>Популярное сейчас</h1>
      <div className={styles.verticalCards}>
        {mainPageCategories.map(
          (tea, index) =>
            index <= 3 && (
              <div className={styles.teaCard}>
                <img src={tea.img} alt="" />
                <Link
                  className={styles.teaCardLink}
                  onClick={() => filterTeas(tea.name)}
                  to="/shop"
                >
                  {tea.name}
                </Link>
              </div>
            )
        )}
      </div>
      <GreenButton text="Больше товаров" link="/shop" />
    </div>
  );
};

export default MainPopular;
