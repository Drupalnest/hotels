import React from "react";
import MapComponent from "./MapComponent";
import SortBy from "../FilterComponents/SortBy";
import PropertyTypes from "../FilterComponents/PropertyTypes";
import SetYourBudget from "../FilterComponents/SetYourBudget";

const Filterwithoutmap = () => {
  return (
    <div className="w-1/ border-2">
      <div>
        <p>Sort by</p>
        <SortBy />
        <SetYourBudget />
        {/* <PropertyTypes /> */}
      </div>
    </div>
  );
};

export default Filterwithoutmap;
