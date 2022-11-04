import React from "react";
import styles from "./JobCard.module.css";

const JobCard = ({
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div
          className={styles.logoContainer}
          style={{ backgroundColor: logoBackground }}
        >
          <img src={logo} alt={`${company} logo`} />
        </div>
        <p style={{ marginBottom: "1.3rem" }}>
          {postedAt}
          <span className={styles.circle}></span>
          {contract}
        </p>
        <h3 style={{ marginBottom: "1.7rem" }}>{position}</h3>
        <p style={{ marginBottom: "4.4rem" }}>{company}</p>
        <p className={styles.location}>{location}</p>
      </div>
    </div>
  );
};

export default JobCard;
