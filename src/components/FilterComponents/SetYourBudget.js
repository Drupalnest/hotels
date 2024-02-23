import React, { useState, useEffect, useRef } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";

const SetYourBudget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="w-full transition duration-300 rounded-t-lg hover:bg-gray-200 p-2 border border-b-slate-800"
        onClick={handleToggle}
      >
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">Property Types</span>
          <ExpandMoreIcon
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(360deg)",
            }}
            className="text-blue-600 text-3xl rounded-full hover:bg-gray-300 transition duration-300"
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full flex flex-col bg-white border border-t-0 p-2">
          <label className="flex items-center cursor-pointer hover:bg-gray-200 transition duration-300">
            <Checkbox className="mr-3" color="primary" />
            <div className="w-3/4 flex flex-row justify-between">
              <p className="text-lg font-semibold">Hotel</p>
              <p className="text-gray-500">(334)</p>
            </div>
          </label>
          <label className="flex items-center cursor-pointer hover:bg-gray-200 transition duration-300">
            <Checkbox className="mr-3" color="primary" />
            <div className="w-3/4 flex flex-row justify-between">
              <p className="text-lg font-semibold">Holiday Homes</p>
              <p className="text-gray-500">(8)</p>
            </div>
          </label>
          <label className="flex items-center cursor-pointer hover:bg-gray-200 transition duration-300">
            <Checkbox className="mr-3" color="primary" />
            <div className="w-3/4 flex flex-row justify-between">
              <p className="text-lg font-semibold">Apartments</p>
              <p className="text-gray-500">(9)</p>
            </div>
          </label>
        </div>
      )}
    </div>
  );
};

export default SetYourBudget;
