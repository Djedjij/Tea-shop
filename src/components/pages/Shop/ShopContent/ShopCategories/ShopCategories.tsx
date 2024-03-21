import React, { useState } from "react";
import styles from "./Shop.categories.module.scss";
import { mainPageCategories } from "../../../../../utils/consts";
import { useAppDispatch } from "../../../../../hooks/hooks";
import {} from "../../../../../store/redusers/teasSlice";
import { fetchFilteredByCategoryTeas } from "../../../../../store/redusers/fetchTeas";
const ShopCategories = () => {
  const dispatch = useAppDispatch();
  const [activeCategory, setActiveCategory] = useState("");
  const handleCategoryClick = (name: string) => {
    console.log(name);

    dispatch(fetchFilteredByCategoryTeas({ title: name }));
    setActiveCategory(name);
  };

  return (
    <div className={styles.wrapper}>
      <h3>Категории</h3>
      <ul className={styles.categories}>
        {mainPageCategories.map((category) => (
          <li
            className={
              category.name === activeCategory
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
