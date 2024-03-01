import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { DayPicker } from "react-day-picker";
import "react-datepicker/dist/react-datepicker.css";
import "./DayPicker.css";
import "react-day-picker/dist/style.css";
import HotelDetailss from "../HotelList/HotelDetailss";
import Search from "./Search";

const HeaderSearchBox = ({ hotels, airports, cruise, interest, city }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Define searchTerm state
  const [selectedHotel, setSelectedHotel] = useState(null);
  const allData = [...hotels, ...airports, ...cruise, ...interest, ...city];

  // Filter based on the entered search term
  const filteredData = allData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleHotelClick = (hotel) => {
    setSelectedHotel(hotel);
  };

  const today = new Date(); // Get the current date
  const tomorrow = new Date(today); // Get tomorrow's date
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateRange, setDateRange] = useState([today, tomorrow]);

  const handleDayPickerToggle = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleDayClick = (day) => {
    const newDateRange = [...dateRange];

    if (!newDateRange[0] || (newDateRange[0] && newDateRange[1])) {
      newDateRange[0] = day;
      newDateRange[1] = null;
    } else if (day > newDateRange[0]) {
      newDateRange[1] = day;
      setIsCalendarOpen(false);
    } else {
      // Swap dates if the selected date is before the check-in date
      newDateRange[1] = newDateRange[0];
      newDateRange[0] = day;
      setIsCalendarOpen(false);
    }

    setDateRange(newDateRange);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleIncrement = (type) => {
    switch (type) {
      case "rooms":
        setRooms(rooms + 1);
        break;
      case "adults":
        setAdults(adults + 1);
        break;
      case "children":
        setChildren(children + 1);
        break;
      default:
        break;
    }
  };

  const handleDecrement = (type) => {
    if (type === "rooms" && rooms > 1) {
      setRooms(rooms - 1);
    } else if (type === "adults" && adults > 1) {
      setAdults(adults - 1);
    } else if (type === "children" && children > 0) {
      setChildren(children - 1);
    }
  };

  return (
    <div className=" relative z-50 w-1/ h-20 border-2 border border-red-500  flex flex-row">
      <Search
        hotels={hotels}
        airports={airports}
        city={city}
        cruise={cruise}
        interest={interest}
      />
      <div
        style={{ position: "relative" }}
        className="flex-grow mb-4 sm:mr-4 sm:mb-0"
      >
        <input
          type="text"
          placeholder="Check-in Check-out"
          onClick={handleDayPickerToggle}
          value={`${dateRange[0]?.toLocaleDateString()}${
            dateRange[0] && dateRange[1]
              ? " - " + dateRange[1]?.toLocaleDateString()
              : ""
          }`}
          readOnly
          className="overflow-x-auto w-full p-3 border rounded focus:outline-none focus:border-blue-500"
        />
        {isCalendarOpen && (
          <DayPicker
            numberOfMonths={2}
            pagedNavigation
            selected={dateRange[0]}
            onDayClick={handleDayClick}
            startDate={dateRange[0]}
            endDate={dateRange[1]}
            selectsRange
            placeholderText="Check-in Check-out"
            className=" border-red-500 w-full p-3 border rounded focus:outline-none focus:border-blue-500"
            style={{
              zIndex: 999999,
              width: "300px",
              backgroundColor: "#ffffff",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
              borderRadius: "8px",
             
            }}
            modifiers={{
              disabled: { before: today },
            }}
          />
        )}
      </div>

      <div
        ref={dropdownRef}
        className=" relative  mb-4 sm:mr-4 sm:mb-0 border-2 border-red-400"
      >
        <button
          className="w-full p-3 border rounded focus:outline-none focus:border-blue-500 text-blue-500 hover:bg-blue-50"
          onClick={handleToggleDropdown}
        >
          {rooms} Rooms, {children} Children, {adults} Adults
        </button>
        {isDropdownOpen && (
          <div className="absolute top-10 right-0 p-4 bg-white border rounded shadow ">
            <div className="mb-4">
              <label className="block text-gray-700">Rooms:</label>
              <div className="flex">
                <button
                  className="px-2 py-1 border rounded hover:bg-gray-200"
                  onClick={() => handleDecrement("rooms")}
                >
                  -
                </button>
                <span className="mx-2">{rooms}</span>
                <button
                  className="px-2 py-1 border rounded hover:bg-gray-200"
                  onClick={() => handleIncrement("rooms")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Adults:</label>
              <div className="flex">
                <button
                  className="px-2 py-1 border rounded hover:bg-gray-200"
                  onClick={() => handleDecrement("adults")}
                >
                  -
                </button>
                <span className="mx-2">{adults}</span>
                <button
                  className="px-2 py-1 border rounded hover:bg-gray-200"
                  onClick={() => handleIncrement("adults")}
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Children:</label>
              <div className="flex">
                <button
                  className="px-2 py-1 border rounded hover:bg-gray-200"
                  onClick={() => handleDecrement("children")}
                >
                  -
                </button>
                <span className="mx-2">{children}</span>
                <button
                  className="px-2 py-1 border rounded hover:bg-gray-200"
                  onClick={() => handleIncrement("children")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex-grow">
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300 w-full sm:w-auto">
          Update Search
        </button>
      </div>
    </div>
  );
};
export default HeaderSearchBox;
