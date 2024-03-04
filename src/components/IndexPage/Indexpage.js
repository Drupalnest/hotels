import React, { useState } from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import "../../styles/style.css";
import { CheckBox } from "@mui/icons-material";

const Indexpage = ({ index }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <div className="container ">
      <div className=" ">
        <p className="m-3 font-montserrat font-semibold text-3xl leading-10 text-blue-800">
          Save big on your next hotel
        </p>
        <div className=" space-y-4 border shadow-2xl rounded-3xl p-3 ">
          <div className=" flex">
            <div
              className={`flex p-2 ${
                isActive
                  ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
                  : ""
              }`}
              onClick={handleClick}
            >
              <div className="mr-2">
                <ApartmentIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
              </div>
              <div
                onClick={handleClick}
                className={`${
                  isActive ? "font-semibold text-md" : "hover:underline"
                } font-montserrat  leading-7 text-blue-800`}
              >
                Hotels
              </div>
            </div>
            <div
              className={`flex p-2 ${
                isActive
                  ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
                  : ""
              }`}
              onClick={handleClick}
            >
              <div className="mr-2">
                <ApartmentIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
              </div>
              <div
                className={`${
                  isActive ? "font-semibold text-md" : "hover:underline"
                } font-montserrat text-md leading-7 text-blue-800`}
              >
                Hotels
              </div>
            </div>
            <div
              className={`flex p-2 ${
                isActive
                  ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
                  : ""
              }`}
              onClick={handleClick}
            >
              <div className="mr-2">
                <ApartmentIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
              </div>
              <div
                className={`${
                  isActive ? "font-semibold text-md" : "hover:underline"
                } font-montserrat text-md leading-7 text-blue-800`}
              >
                Hotels
              </div>
            </div>
            <div
              className={`flex p-2 ${
                isActive
                  ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
                  : ""
              }`}
              onClick={handleClick}
            >
              <div className="mr-2">
                <ApartmentIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
              </div>
              <div
                className={`${
                  isActive ? "font-semibold text-md" : "hover:underline"
                } font-montserrat text-md leading-7 text-blue-800`}
              >
                Hotels
              </div>
            </div>
            <div
              className={`flex p-2 ${
                isActive
                  ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
                  : ""
              }`}
              onClick={handleClick}
            >
              <div className="mr-2">
                <ApartmentIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
              </div>
              <div
                className={`${
                  isActive ? "font-semibold text-md" : "hover:underline"
                } font-montserrat text-md leading-7 text-blue-800`}
              >
                Hotels
              </div>
            </div>
          </div>
          <div className="sm:w-full border rounded-lg">
            <TextField
              placeholder="Where to?"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              className="w-full border-2 rounded-3xl border-blue-600"
            />
          </div>

          <div className="flex flex-col sm:flex-row  justify-betwee text-blue-800 gap-3 ">
            <div className=" rounded-xl flex items-center border-2 p-2 w-full sm:w-1/2">
              <div className="mr-2">
                <CalendarMonthIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
              </div>
              <div className="flex flex-col">
                <div>
                  <p className="text-sm font-bold">Check-in - Check-out</p>
                </div>
                <div>
                  <p>03/04/2024 - 03/05/2024 </p>
                </div>
              </div>
            </div>

            <button className=" rounded-xl flex items-center border-2 p-2 w-full sm:w-1/2">
              <div className="flex items-center">
                <div className="mr-2">
                  <PersonIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
                </div>
                <div className="">
                  <p>2 Adults, 1 Room</p>
                </div>
              </div>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row w-full text-green-800 gap-3">
            <div className="bg-green-100 rounded-xl p-2 flex items-center border-2 w-full sm:w-1/2 overflow-x-auto">
              <div className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  aria-hidden="true"
                  fill="currentcolor"
                  color="highlight.shade"
                  tabIndex="-1"
                  focusable="false"
                  role="img"
                  className="Svg-sc-12lgb6u-0 bkdMKt Discount__SvgDiscount-sc-1s5abed-0 fkoOZw"
                >
                  <path d="M23 12l-2.4 2.7.3 3.5-3.6.8-1.9 3-3.4-1.4L8.6 22l-1.9-3-3.6-.8.3-3.5L1 12l2.4-2.7-.3-3.5L6.7 5l1.9-3L12 3.4 15.4 2l1.9 3 3.6.8-.3 3.5L23 12zm-10.8-.6c-1.3-.3-1.8-.7-1.8-1.3 0-.6.6-1.1 1.6-1.1s1.4.5 1.5 1.2h1.3c0-1-.7-1.9-1.9-2.2V6.7h-1.8V8c-1.1.2-2 1-2 2.1 0 1.3 1.1 2 2.8 2.4 1.5.4 1.8.9 1.8 1.4 0 .4-.3 1-1.6 1-1.2 0-1.7-.5-1.8-1.2H9c.1 1.3 1 2 2.2 2.2v1.3H13V16c1.1-.2 2.1-.9 2.1-2.1-.1-1.6-1.5-2.2-2.9-2.5z"></path>
                </svg>
              </div>
              <div className="flex p-1 py-2 flex-row text-sm md:text-base font-semibold">
                <div>
                  <p>Bundle + save</p>
                </div>
                <div className="flex items-center ml-2">
                  <CheckBox className="text-lg" />
                  <p className="ml-1">Add a car</p>
                  {/* <CheckBox className="ml-2" />
                  <p className="ml-1">Add a flight</p> */}
                </div>
              </div>
            </div>

            <button className="bg-blue-800 rounded-xl p-2 items-center border-2 w-full sm:w-1/2">
              <div className=" text-blue-800 font-bold flex items-center justify-center">
                <p className="text-white">Find Your Hotel</p>
              </div>
            </button>
          </div>
          <div className="border-2 w-full sm:w-1/2 md:w-1/2  lg:w-1/2flex lg:justify-end ">
            <p className="text-xs">
              Book a hotel with free cancellation for flexibility
            </p>
          </div>

          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Indexpage;
