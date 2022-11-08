import React from "react";
import styles from "./JobPage.module.css";
import { useLocation } from "react-router-dom";
import CompanyOverview from "../components/CompanyOverview/CompanyOverview";
import PositionOverview from "../components/PositionOverview/PositionOverview";

const JobPage = () => {
  const currLocation = useLocation();
  const jobData = currLocation.state;

  return (
    <div className={styles.jobPage}>
      <CompanyOverview
        logoBackground={jobData.logoBackground}
        logo={jobData.logo}
        company={jobData.company}
        website={jobData.website}
      />
      <PositionOverview
        postedAt={jobData.postedAt}
        contract={jobData.contract}
        position={jobData.position}
        location={jobData.location}
        apply={jobData.apply}
        description={jobData.description}
        requirements={jobData.requirements}
        role={jobData.role}
      />
    </div>
  );
};

export default JobPage;
