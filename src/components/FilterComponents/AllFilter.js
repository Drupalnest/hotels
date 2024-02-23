import React from "react";
import SortBy from "./SortBy";
import PropertyTypes from "./PropertyTypes";
import SetYourBudget from "./SetYourBudget";

const AllFilter = () => {
  return (
    <div>
      <SortBy />
      <PropertyTypes />
      <SetYourBudget />
    </div>
  );
};

export default AllFilter;
