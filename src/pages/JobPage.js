import React from "react";
import { useLocation } from "react-router-dom";

const JobPage = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <div>
      <p>This is Job Page</p>
    </div>
  );
};

export default JobPage;
