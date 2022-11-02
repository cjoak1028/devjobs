import React from "react";
import styles from "./ThemeSwitch.module.css";

const ThemeSwitch = () => {
  return (
    <label className={styles.themeSwitch}>
      <input type="checkbox" />
      <span class={styles.slider}></span>
    </label>
  );
};

export default ThemeSwitch;
