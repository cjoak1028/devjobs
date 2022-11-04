import React from "react";
import jobsData from "../../data/data.json";
import JobCard from "./JobCard";
import styles from "./JobsList.module.css"

const JobsList = () => {
  return (
    <ul className={styles.list}>
      {jobsData.map(
        ({
          id,
          company,
          logo,
          logoBackground,
          position,
          postedAt,
          contract,
          location,
        }) => {
          return (
            <li key={id}>
              <JobCard
                company={company}
                logo={logo}
                logoBackground={logoBackground}
                position={position}
                postedAt={postedAt}
                contract={contract}
                location={location}
              />
            </li>
          );
        }
      )}
    </ul>
  );
};

export default JobsList;
