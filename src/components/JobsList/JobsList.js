import React from "react";
import jobsData from "../../data/data.json";

const JobsList = () => {
  return (
    <ul>
      {jobsData.map((job) => {
        return <li>{job.company}</li>;
      })}
    </ul>
  );
};

export default JobsList;
