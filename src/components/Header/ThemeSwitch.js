import React from "react";
import styles from "./ThemeSwitch.module.css";
import iconSun from "../../assets/desktop/icon-sun.svg";
import iconMoon from "../../assets/desktop/icon-moon.svg";

const ThemeSwitch = () => {
  return (
    <div className={styles.switchContainer}>
      <img src={iconSun} alt="light theme icon" />
      <label className={styles.themeSwitch}>
        <input type="checkbox" />
        <span className={styles.slider}></span>
      </label>
      <img src={iconMoon} alt="light theme icon" />
    </div>
  );
};

export default ThemeSwitch;
