import React from "react";
import styles from "./CompanyOverview.module.css";

const CompanyOverview = ({ logoBackground, logo, company, website }) => {
  return (
    <div className={styles.companyOverview}>
      <div className={styles.companyOverviewContent}>
        <div
          className={styles.logoContainer}
          style={{ backgroundColor: logoBackground }}
        >
          <img src={logo} alt={`${company} logo`} />
        </div>
        <div className={styles.textAlignCenter}>
          <h3>{company}</h3>
          <p href={website}>{company.toLowerCase()}.com</p>
        </div>
        <a className={styles.websiteLink} href={website}>
          Company Site
        </a>
      </div>
    </div>
  );
};

export default CompanyOverview;
