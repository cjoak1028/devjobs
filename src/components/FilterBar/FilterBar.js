import React from "react";
import styles from "./FilterBar.module.css";
import iconFilter from "../../assets/mobile/icon-filter.svg";
import iconSearchWhite from "../../assets/desktop/icon-search-white.svg";

const FilterBar = () => {
  return (
    <div className={styles.filterBarWrapper}>
      <div className={styles.filterBar}>
        <input
          className={styles.filterInput}
          type="text"
          placeholder="Filter by title..."
        />
        <button className={styles.filterButton}>
          <img
            src={iconFilter}
            alt="filter icon"
          />
        </button>
        <button className={styles.searchButton}>
          <img src={iconSearchWhite} alt="search icon" />
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
