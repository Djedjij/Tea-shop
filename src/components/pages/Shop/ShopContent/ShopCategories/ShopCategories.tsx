import React from "react";
import styles from "./Shop.categories.module.scss";
import { mainPageCategories } from "../../../../../utils/consts";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import { fetchFilteredByCategoryTeas } from "../../../../../store/redusers/fetchTeas";
const ShopCategories = () => {
  const dispatch = useAppDispatch();

  const filteredBy = useAppSelector((state) => state.teas.filteredBy);
  const handleCategoryClick = (name: string) => {
    dispatch(fetchFilteredByCategoryTeas({ title: name }));
  };

  return (
    <div className={styles.wrapper}>
      <h3>Категории</h3>
      <ul className={styles.categories}>
        {mainPageCategories.map((category) => (
          <li
            className={
              category.name === filteredBy
                ? styles.categoryActive
                : styles.category
            }
            onClick={() => handleCategoryClick(category.name)}
            key={category.name}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopCategories;
