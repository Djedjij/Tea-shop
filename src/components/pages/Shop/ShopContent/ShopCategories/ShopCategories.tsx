import React from "react";
import styles from "./Shop.categories.module.scss";
import { mainPageCategories } from "../../../../../utils/consts";
import { useAppDispatch } from "../../../../../hooks/hooks";
import { showFilteredByCategoryTeas } from "../../../../../store/redusers/teasSlice";
const ShopCategories = () => {
  const dispatch = useAppDispatch();
  const handleCategoryClick = (name: string) => {
    dispatch(showFilteredByCategoryTeas(name));
  };
  return (
    <div className={styles.wrapper}>
      <h3>Категории</h3>
      <ul className={styles.categories}>
        {mainPageCategories.map((category) => (
          <li
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
