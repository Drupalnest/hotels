import React, { useState } from "react";
import FlightIcon from "@mui/icons-material/Flight";
import LuggageIcon from "@mui/icons-material/Luggage";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import ApartmentIcon from "@mui/icons-material/Apartment";
const ListBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };
  return (
    <div className=" flex">
      <div
        className={`flex p-2 ${
          isActive
            ? "active:bg-orange-200 border-orange-600 active:rounded-3xl active:border-2"
            : ""
        }`}
        onClick={handleClick}
      >
        <div className="mr-2 border-2 rounded-full p-1 bg-gray-100 ">
          <ApartmentIcon className="font-montserrat font-bold text-2xl leading-10 text-orange-800" />
        </div>
        <div
          onClick={handleClick}
          className={`${
            isActive ? "font-semibold text-md" : "hover:underline"
          } font-montserrat  leading-7 text-orange-800`}
        >
          Hotels
        </div>
      </div>
      <div
        className={`flex p-2 ${
          isActive
            ? "active:bg-orange-200 border-orange-600 active:rounded-3xl active:border-2"
            : ""
        }`}
        onClick={handleClick}
      >
        <div className="mr-2">
          <FlightIcon className="font-montserrat font-bold text-2xl leading-10 text-orange-800" />
        </div>
        <div
          className={`${
            isActive ? "font-semibold text-md" : "hover:underline"
          } font-montserrat text-md leading-7 text-orange-800`}
        >
          Flights
        </div>
      </div>
      <div
        className={`flex p-2 ${
          isActive
            ? "active:bg-orange-200 border-orange-600 active:rounded-3xl active:border-2"
            : ""
        }`}
        onClick={handleClick}
      >
        <div className="mr-2">
          <LuggageIcon className="font-montserrat font-bold text-2xl leading-10 text-orange-800" />
        </div>
        <div
          className={`${
            isActive ? "font-semibold text-md" : "hover:underline"
          } font-montserrat text-md leading-7 text-orange-800`}
        >
          Bundle & Save
        </div>
      </div>
      <div
        className={`flex p-2 ${
          isActive
            ? "active:bg-orange-200 border-orange-600 active:rounded-3xl active:border-2"
            : ""
        }`}
        onClick={handleClick}
      >
        <div className="mr-2">
          <TimeToLeaveIcon className="font-montserrat font-bold text-2xl leading-10 text-orange-800" />
        </div>
        <div
          className={`${
            isActive ? "font-semibold text-md" : "hover:underline"
          } font-montserrat text-md leading-7 text-orange-800`}
        >
          Cars
        </div>
      </div>
      <div
        className={`flex p-2 ${
          isActive
            ? "active:bg-orange-200 border-orange-600 active:rounded-3xl active:border-2"
            : ""
        }`}
        onClick={handleClick}
      >
        <div className="mr-2">
          <DirectionsBoatIcon className="font-montserrat font-bold text-2xl leading-10 text-red-500" />
        </div>
        <div
          className={`${
            isActive ? "font-semibold text-md" : "hover:underline"
          } font-montserrat text-md leading-7 text-orange-800`}
        >
          Cruices
        </div>
      </div>
    </div>
  );
};

export default ListBar;
