import React from "react";
import MapComponent from "./MapComponent";
import SortBy from "../FilterComponents/SortBy";
import PropertyTypes from "../FilterComponents/PropertyTypes";
import SetYourBudget from "../FilterComponents/SetYourBudget";
import Amenties from "../FilterComponents/Amenties";

const Filter = ({
  hotels,
  airports,
  cruise,
  interest,
  city,
  onAmenityChange,
  
}) => {
  return (
    <div className="w-1/ border-2">
      <MapComponent />
      <div>
        <p>Sort by</p>
        <SortBy />
        <SetYourBudget />
        {/* <PropertyTypes /> */}
        <Amenties
          //hotels={hotels}
          airports={airports}
          cruise={cruise}
          interest={interest}
          city={city}
          onAmenityChange={onAmenityChange}
          hotels={hotels}
        />
      </div>
    </div>
  );
};

export default Filter;
