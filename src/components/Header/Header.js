import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/desktop/logo.svg";
import ThemeSwitch from "./ThemeSwitch";
import FilterBar from "./FilterBar";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <img src={logo} alt="devjobs logo" />
        <ThemeSwitch />
      </div>
      <FilterBar />
    </div>
  );
};

export default Header;
