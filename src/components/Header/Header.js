import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/desktop/logo.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <img src={logo} alt="devjobs logo" />
        <p>Theme Switch</p>
      </div>
    </div>
  );
};

export default Header;
