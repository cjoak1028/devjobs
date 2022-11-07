import React from "react";
import styles from "./JobPage.module.css";
import { useLocation } from "react-router-dom";

const JobPage = () => {
  const location = useLocation();
  const jobData = location.state;

  return (
    <div className={styles.jobPage}>
      <div className={`${styles.companyOverview}`}>
        <div className={styles.companyOverviewContent}>
          <div
            className={styles.logoContainer}
            style={{ backgroundColor: jobData.logoBackground }}
          >
            <img src={jobData.logo} alt={`${jobData.company} logo`} />
          </div>
          <div className={styles.textAlignCenter}>
            <h3>{jobData.company}</h3>
            <p href={jobData.website}>{jobData.company.toLowerCase()}.com</p>
          </div>
          <a className={styles.websiteLink} href={jobData.website}>
            Company Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
