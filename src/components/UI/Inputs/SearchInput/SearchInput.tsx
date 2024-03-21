import React, { useState } from "react";
import styles from "./SearchInput.module.scss";
import { useAppDispatch } from "../../../../hooks/hooks";
import { fetchFilteredTeas } from "../../../../store/redusers/fetchTeas";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const [seacrhValue, setSearchValue] = useState<string>("");
  const submitSearch = (seacrhValue: string) => {
    dispatch(
      fetchFilteredTeas({
        name: seacrhValue,
      })
    );
  };

  return (
    <div className={styles.searchInput}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitSearch(seacrhValue);
        }}
      >
        <input
          type="text"
          placeholder="Поиск..."
          value={seacrhValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
      <img
        onClick={() => submitSearch(seacrhValue)}
        className={styles.searchIcon}
        src="/images/icons/icon-search.svg"
        alt=""
      />
    </div>
  );
};

export default SearchInput;
