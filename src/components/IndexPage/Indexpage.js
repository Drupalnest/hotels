import React, { useState } from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import "../../styles/style.css";

const Indexpage = ({ index }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <div className="container border border-green-500">
      <div className=" border border-red-500">
        <div className="border border-red-200 p-4">
          <p className="font-montserrat font-semibold text-2xl leading-10 text-blue-800">
            Save big on your next hotel
          </p>

          <div className="border border-rounded-3 flex">
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
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Indexpage;
