import React, { useState } from "react";
import styles from "./SearchInput.module.scss";

const SearchInput = () => {
  const [seacrhValue, setSearchValue] = useState("");

  return (
    <div className={styles.searchInput}>
      <input
        type="text"
        placeholder="Поиск..."
        value={seacrhValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <img
        className={styles.searchIcon}
        src="/images/icons/icon-search.svg"
        alt=""
      />
    </div>
  );
};

export default SearchInput;
