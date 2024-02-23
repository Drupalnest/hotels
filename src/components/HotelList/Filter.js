import React from "react";
import MapComponent from "./MapComponent";
import SortBy from "../FilterComponents/SortBy";
import PropertyTypes from "../FilterComponents/PropertyTypes";

const Filter = () => {
  return (
    <div className="w-1/ border-2">
      <MapComponent />
      <div>
        <p>Sort by</p>
        <SortBy />
        <PropertyTypes/>
      </div>
    </div>
  );
};

export default Filter;
