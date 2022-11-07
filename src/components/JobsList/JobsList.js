import React, { useState } from "react";
import jobsData from "../../data/data.json";
import JobCard from "./JobCard";
import styles from "./JobsList.module.css";
const JOBS_PER_LOAD = 12;

const JobsList = () => {
  const [limit, setLimit] = useState(JOBS_PER_LOAD);

  const handleLoadJobs = () => {
    setLimit(limit + JOBS_PER_LOAD);
  };

  return (
    <div className={styles.listContainer}>
      <ul className={styles.list}>
        {jobsData
          .slice(0, limit)
          .map(
            (jobData) => {
              return (
                <li key={jobData.id}>
                  <JobCard
                    jobData={jobData}
                  />
                </li>
              );
            }
          )}
      </ul>
      {limit > jobsData.length ? null : (
        <button className={styles.loadButton} onClick={handleLoadJobs}>
          Load More
        </button>
      )}
    </div>
  );
};

export default JobsList;
