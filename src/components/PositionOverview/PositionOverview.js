import React from "react";
import styles from "./PositionOverview.module.css";

const PositionOverview = ({
  postedAt,
  contract,
  position,
  location,
  apply,
  description,
  requirements,
  role,
}) => {
  return (
    <div className={styles.positionOverview}>
      <div className={styles.positionOverviewContent}>
        <div className={styles.positionInfo}>
          <p>
            {postedAt}
            <span className={styles.circle}></span>
            {contract}
          </p>
          <h3>{position}</h3>
          <p className={styles.location}>{location}</p>
        </div>
        <a href={apply} className={styles.applyButton}>
          Apply Now
        </a>
      </div>
      <p>{description}</p>
      <div>
        <h3>Requirements</h3>
        <p>{requirements.content}</p>
        <ul>
          {requirements.items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      <div>
        <h3>What You Will Do</h3>
        <p>{role.content}</p>
        <ol>
          {role.items.map((item) => {
            return <li>{item}</li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default PositionOverview;
