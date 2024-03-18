import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { DayPicker } from "react-day-picker";
import "react-datepicker/dist/react-datepicker.css";
import "./DayPicker.css";
import "react-day-picker/dist/style.css";
import HotelDetailss from "../HotelList/HotelDetailss";
import Search from "./Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import { navigate } from "gatsby";
import { useDispatch, useSelector } from "react-redux";
import {
  setCheckInDate,
  setCheckOutDate,
  incrementRooms,
  decrementRooms,
  incrementAdults,
  decrementAdults,
  incrementChildren,
  decrementChildren,
  setRoomCount,
  setAdultCount,
  setChildrenCount,
} from "../../redux/actions";

const HeaderSearchBox = ({
  hotels,
  airports,
  cruise,
  interest,
  city,
  onButtonClick,
  isMapViewPage,
}) => {
  const [searchTerm, setSearchTerm] = useState(""); // Define searchTerm state
  const [selectedHotel, setSelectedHotel] = useState(null);
  const allData = [...hotels, ...airports, ...cruise, ...interest, ...city];

  const dispatch = useDispatch();

  // Filter based on the entered search term
  const filteredData = allData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleHotelClick = (hotel) => {
    setSelectedHotel(hotel);
  };

  // const today = new Date(); // Get the current date
  // const tomorrow = new Date(today); // Get tomorrow's date
  // tomorrow.setDate(tomorrow.getDate() + 1);

  // const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  // const [dateRange, setDateRange] = useState([today, tomorrow]);

  // const handleDayPickerToggle = () => {
  //   setIsCalendarOpen(!isCalendarOpen);
  // };

  // const handleDayClick = (day) => {
  //   const newDateRange = [...dateRange];

  //   if (!newDateRange[0] || (newDateRange[0] && newDateRange[1])) {
  //     newDateRange[0] = day;
  //     newDateRange[1] = null;
  //   } else if (day > newDateRange[0]) {
  //     newDateRange[1] = day;
  //     setIsCalendarOpen(false);
  //   } else {
  //     // Swap dates if the selected date is before the check-in date
  //     newDateRange[1] = newDateRange[0];
  //     newDateRange[0] = day;
  //     setIsCalendarOpen(false);
  //   }

  //   setDateRange(newDateRange);
  // };

  // const [localCheckInDate, setLocalCheckInDate] = useState(today);
  // const [localCheckOutDate, setLocalCheckOutDate] = useState(tomorrow);

  // const handleDayClick = (day) => {
  //   const newDateRange = [...dateRange];

  //   if (!newDateRange[0] || (newDateRange[0] && newDateRange[1])) {
  //     const today = new Date();

  //     if (day < today) {
  //       return;
  //     }

  //     // Set time to noon (12:00 PM) to avoid timezone issues
  //     day.setHours(12, 0, 0, 0);

  //     newDateRange[0] = day;
  //     newDateRange[1] = null;

  //     // Update local state for check-in date
  //     setLocalCheckInDate(newDateRange[0]);
  //   } else if (day > newDateRange[0]) {
  //     setIsCalendarOpen(false);
  //     // Set time to noon (12:00 PM) to avoid timezone issues
  //     day.setHours(12, 0, 0, 0);
  //     newDateRange[1] = day;

  //     // Update local state for check-out date
  //     setLocalCheckOutDate(newDateRange[1]);
  //   } else {
  //     // Swap dates if the selected date is before the check-in date
  //     newDateRange[1] = newDateRange[0];
  //     newDateRange[0] = day;
  //     setIsCalendarOpen(false);

  //     // Update local state for both check-in and check-out dates
  //     setLocalCheckInDate(newDateRange[0]);
  //     setLocalCheckOutDate(newDateRange[1]);
  //   }

  //   setDateRange(newDateRange);

  //   // Dispatch both check-in and check-out dates to Redux
  //   dispatch(setCheckInDate(newDateRange[0]));
  //   dispatch(setCheckOutDate(newDateRange[1]));
  // };

  // const handleDayClick = (day) => {
  //   const newDateRange = [...dateRange];

  //   if (!newDateRange[0] || (newDateRange[0] && newDateRange[1])) {
  //     const today = new Date();

  //     if (day < today) {
  //       return;
  //     }

  //     // Set time to noon (12:00 PM) to avoid timezone issues
  //     day.setHours(12, 0, 0, 0);

  //     newDateRange[0] = day;
  //     newDateRange[1] = null;

  //     // Dispatch check-in date to Redux
  //     dispatch(setCheckInDate(newDateRange[0]));
  //   } else if (day > newDateRange[0]) {
  //     setIsCalendarOpen(false);
  //     // Set time to noon (12:00 PM) to avoid timezone issues
  //     day.setHours(12, 0, 0, 0);
  //     newDateRange[1] = day;

  //     // Dispatch check-out date to Redux
  //     dispatch(setCheckOutDate(newDateRange[1]));
  //   } else {
  //     // Swap dates if the selected date is before the check-in date
  //     newDateRange[1] = newDateRange[0];
  //     newDateRange[0] = day;
  //     setIsCalendarOpen(false);

  //     // Dispatch both check-in and check-out dates to Redux
  //     dispatch(setCheckInDate(newDateRange[0]));
  //     dispatch(setCheckOutDate(newDateRange[1]));
  //   }

  //   setDateRange(newDateRange);
  // };

  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const dropdownRef = useRef(null);

  // const handleToggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  // const handleClickOutside = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setIsDropdownOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  const checkInDate = useSelector((state) => state.date.checkInDate);
  const checkOutDate = useSelector((state) => state.date.checkOutDate);
  console.log("checkInDate", checkInDate, "checkOutDate", checkOutDate);

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateRange, setDateRange] = useState([today, tomorrow]);

  const handleDayPickerToggle = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const [localCheckInDate, setLocalCheckInDate] = useState(today);
  const [localCheckOutDate, setLocalCheckOutDate] = useState(tomorrow);

  const handleDayClick = (day) => {
    const newDateRange = [...dateRange];

    // Set time to noon (12:00 PM) to avoid timezone issues
    day.setHours(12, 0, 0, 0);

    if (!newDateRange[0] || newDateRange[1]) {
      // Only check-in date is selected or both dates are selected
      if (day < today) {
        // Prevent selection of past dates
        return;
      }

      newDateRange[0] = day;
      newDateRange[1] = null;

      // Dispatch check-in date to Redux
      dispatch(setCheckInDate(newDateRange[0]));
    } else if (day > newDateRange[0]) {
      // Check-out date is selected
      setIsCalendarOpen(false);
      newDateRange[1] = day;

      // Dispatch check-out date to Redux
      dispatch(setCheckOutDate(newDateRange[1]));
    } else {
      // Swap dates if the selected date is before the check-in date
      newDateRange[1] = newDateRange[0];
      newDateRange[0] = day;
      setIsCalendarOpen(false);

      // Dispatch both check-in and check-out dates to Redux
      dispatch(setCheckInDate(newDateRange[0]));
      dispatch(setCheckOutDate(newDateRange[1]));
    }

    setDateRange(newDateRange);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  // Ensure localCheckInDate is set to today's date on component mount
  useEffect(() => {
    setLocalCheckInDate(today);
  }, []);

  const { rooms, adults, children } = useSelector((state) => state.countData);
  const handleIncrement = (type) => {
    switch (type) {
      case "rooms":
        dispatch(setRoomCount(rooms + 1));
        break;
      case "adults":
        dispatch(setAdultCount(adults + 1));
        break;
      case "children":
        dispatch(setChildrenCount(children + 1));
        break;
      default:
        break;
    }
  };

  const handleDecrement = (type) => {
    switch (type) {
      case "rooms":
        if (rooms > 1) {
          dispatch(setRoomCount(rooms - 1));
        }
        break;
      case "adults":
        if (adults > 1) {
          dispatch(setAdultCount(adults - 1));
        }
        break;
      case "children":
        if (children > 0) {
          dispatch(setChildrenCount(children - 1));
        }
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    console.log("Rooms:", rooms, "Adults:", adults, "Children:", children);
  });

  const handleSearchBoxClick = () => {
    navigate("/hotellist");
  };



  const handleClick = () => {
    if (isMapViewPage) {
      onButtonClick(); // Call onButtonClick if it's the map view page
    } else {
      handleSearchBoxClick(); // Call handleSearchBoxClick for other pages
    }
  };

  return (
    <div className=" relative z-50 w-1/ h-20  flex flex-row">
      <Search
        hotels={hotels}
        airports={airports}
        city={city}
        cruise={cruise}
        interest={interest}
      />

      {/* <div
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
          <div   ref={dropdownRef} className="absolute top-10 right-0 p-4 bg-white border rounded shadow ">
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
      </div> */}

      <div className="flex flex-col sm:flex-row  justify-between text-blue-800 gap-3 ">
        <div
          onClick={handleDayPickerToggle}
          className=" relative  rounded-xl flex items-center border-2 p-2 w-full sm:w-1/2  "
        >
          <div className="mr-2">
            <CalendarMonthIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
          </div>
          <div className="flex flex-col">
            <div>
              <p className="text-sm font-bold">Check-in - Check-out</p>
            </div>
            <div>
              <p>
                {/* {`${dateRange[0]?.toLocaleDateString()}${
                  dateRange[0] && dateRange[1]
                    ? " - " + dateRange[1]?.toLocaleDateString()
                    : ""
                }`} */}
                {`${checkInDate?.toLocaleDateString() || ""}${
                  checkInDate && checkOutDate
                    ? " - " + (checkOutDate?.toLocaleDateString() || "")
                    : ""
                }`}
              </p>
            </div>
          </div>
          {isCalendarOpen && (
            <div className="w-auto absolute top-full left-0 bg-white border rounded shadow mt-2 ">
              <DayPicker
                onClick={handleDayPickerToggle}
                numberOfMonths={2}
                pagedNavigation
                selected={localCheckInDate} // Set the selected date to localCheckInDate
                onDayClick={handleDayClick}
                startDate={dateRange[0]}
                endDate={dateRange[1]}
                selectsRange
                placeholderText="Check-in Check-out"
                className="focus:outline-none focus:border-blue-500"
                modifiers={{
                  disabled: { before: today },
                }}
              />
            </div>
          )}
        </div>

        <button
          ref={dropdownRef}
          onClick={handleToggleDropdown}
          className="rounded-xl flex items-center border-2 p-2 w-full sm:w-1/2 relative"
        >
          <div className="flex items-center">
            <div className="mr-2">
              <PersonIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
            </div>
            <div className="">
              <p>
                {rooms} Rooms, {adults} Adults ,{children} Children
              </p>
            </div>
          </div>

          {isDropdownOpen && (
            <div className="py-2 w-full absolute top-full left-0 bg-white border rounded shadow mt-2">
              <div className="flex flex-row mb-4  justify-around ">
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
              <div className="flex flex-row   justify-around mb-4">
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
              <div className="flex flex-row mb-4  justify-around">
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
        </button>
      </div>

      <div className="ml-2  flex justify-center items-center">
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white py-1 px-1 rounded transition duration-300 w-full sm:w-auto"
      >
        {isMapViewPage ? "Update Search" : "Update Search"}
      </button>
      </div>
    </div>
  );
};
export default HeaderSearchBox;
