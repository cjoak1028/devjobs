import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/desktop/logo.svg";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={"f f-ai-c f-jc-sb"}>
        <img src={logo} alt="devjobs logo" />
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Header;
