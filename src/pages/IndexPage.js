import React from "react";
import FilterBar from "../components/FilterBar/FilterBar";
import JobsList from "../components/JobsList/JobsList";
import styles from "./IndexPage.module.css";

const IndexPage = () => {
  return (
    <div className={styles.indexPage}>
      <FilterBar />
      <JobsList />
    </div>
  );
};

export default IndexPage;
