// import React, { useEffect, useRef, useState } from "react";
// import DatePicker from "react-datepicker";
// import { DayPicker } from "react-day-picker";
// import "react-datepicker/dist/react-datepicker.css";
// import { FormControlLabel, FormGroup, TextField } from "@mui/material";
// import "react-day-picker/dist/style.css";
// import HotelDetailss from "../HotelList/HotelDetailss";
// import { styled } from "@mui/material/styles";
// import Switch, { SwitchProps } from "@mui/material/Switch";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import PersonIcon from "@mui/icons-material/Person";
// import { navigate } from "gatsby";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setSearchTerm,
//   setSelectedHotel,
//   setHotelDetails,
//   setFilteredHotels,
//   setCheckInDate,
//   setCheckOutDate,
//   incrementRooms,
//   decrementRooms,
//   incrementAdults,
//   decrementAdults,
//   incrementChildren,
//   decrementChildren,
//   setRoomCount,
//   setAdultCount,
//   setChildrenCount,
// } from "../../redux/actions";

// const RoomSearch = ({ hotels, airports, cruise, interest, city }) => {
//   const [searchTerm, setSearchTerm] = useState(""); // Define searchTerm state
//   const [selectedHotel, setSelectedHotel] = useState(null);
//   const allData = [...hotels, ...airports, ...cruise, ...interest, ...city];

//   const dispatch = useDispatch();
//   // Filter based on the entered search term
//   const filteredData = allData.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleHotelClick = (hotel) => {
//     setSelectedHotel(hotel);
//   };

//   const today = new Date(); // Get the current date
//   const tomorrow = new Date(today); // Get tomorrow's date
//   tomorrow.setDate(tomorrow.getDate() + 1);

//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   const [dateRange, setDateRange] = useState([today, tomorrow]);

//   const handleDayPickerToggle = () => {
//     setIsCalendarOpen(!isCalendarOpen);
//   };

//   const checkInDate = useSelector((state) => state.date.checkInDate);
//   const checkOutDate = useSelector((state) => state.date.checkOutDate);

//   console.log("checkInDate", checkInDate, "checkOutDate", checkOutDate);

//   const [localCheckInDate, setLocalCheckInDate] = useState(today);
//   const [localCheckOutDate, setLocalCheckOutDate] = useState(tomorrow);

//   // const handleDayClick = (day) => {
//   //   const newDateRange = [...dateRange];

//   //   if (!newDateRange[0] || (newDateRange[0] && newDateRange[1])) {
//   //     newDateRange[0] = day;
//   //     newDateRange[1] = null;
//   //   } else if (day > newDateRange[0]) {
//   //     newDateRange[1] = day;
//   //     setIsCalendarOpen(false);
//   //   } else {
//   //     // Swap dates if the selected date is before the check-in date
//   //     newDateRange[1] = newDateRange[0];
//   //     newDateRange[0] = day;
//   //     setIsCalendarOpen(false);
//   //   }

//   //   setDateRange(newDateRange);
//   // };

//   const handleDayClick = (day) => {
//     const newDateRange = [...dateRange];

//     if (!newDateRange[0] || (newDateRange[0] && newDateRange[1])) {
//       const today = new Date();

//       if (day < today) {
//         return;
//       }

//       // Set time to noon (12:00 PM) to avoid timezone issues
//       day.setHours(12, 0, 0, 0);

//       newDateRange[0] = day;
//       newDateRange[1] = null;

//       // Dispatch check-in date to Redux
//       dispatch(setCheckInDate(newDateRange[0]));
//     } else if (day > newDateRange[0]) {
//       setIsCalendarOpen(false);
//       // Set time to noon (12:00 PM) to avoid timezone issues
//       day.setHours(12, 0, 0, 0);
//       newDateRange[1] = day;

//       // Dispatch check-out date to Redux
//       dispatch(setCheckOutDate(newDateRange[1]));
//     } else {
//       // Swap dates if the selected date is before the check-in date
//       newDateRange[1] = newDateRange[0];
//       newDateRange[0] = day;
//       setIsCalendarOpen(false);

//       // Dispatch both check-in and check-out dates to Redux
//       dispatch(setCheckInDate(newDateRange[0]));
//       dispatch(setCheckOutDate(newDateRange[1]));
//     }

//     setDateRange(newDateRange);
//   };

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const dropdownRef = useRef(null);

//   const handleToggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const { rooms, adults, children } = useSelector((state) => state.countData);
//   const handleIncrement = (type) => {
//     switch (type) {
//       case "rooms":
//         dispatch(setRoomCount(rooms + 1));
//         break;
//       case "adults":
//         dispatch(setAdultCount(adults + 1));
//         break;
//       case "children":
//         dispatch(setChildrenCount(children + 1));
//         break;
//       default:
//         break;
//     }
//   };

//   const handleDecrement = (type) => {
//     switch (type) {
//       case "rooms":
//         if (rooms > 1) {
//           dispatch(setRoomCount(rooms - 1));
//         }
//         break;
//       case "adults":
//         if (adults > 1) {
//           dispatch(setAdultCount(adults - 1));
//         }
//         break;
//       case "children":
//         if (children > 0) {
//           dispatch(setChildrenCount(children - 1));
//         }
//         break;
//       default:
//         break;
//     }
//   };
//   useEffect(() => {
//     console.log("Rooms:", rooms, "Adults:", adults, "Children:", children);
//   });

//   const handleSearchBoxClick = () => {
//     navigate("/hotellist");
//   };

//   const IOSSwitch = styled((props) => (
//     <Switch
//       focusVisibleClassName=".Mui-focusVisible"
//       disableRipple
//       {...props}
//     />
//   ))(({ theme }) => ({
//     width: 42,
//     height: 26,
//     padding: 0,
//     "& .MuiSwitch-switchBase": {
//       padding: 0,
//       margin: 2,
//       transitionDuration: "300ms",
//       "&.Mui-checked": {
//         transform: "translateX(16px)",
//         color: "#fff",
//         "& + .MuiSwitch-track": {
//           backgroundColor:
//             theme.palette.mode === "dark" ? "#2ECA45" : "#0000FF",
//           opacity: 1,
//           border: 0,
//         },
//         "&.Mui-disabled + .MuiSwitch-track": {
//           opacity: 0.5,
//         },
//       },
//       "&.Mui-focusVisible .MuiSwitch-thumb": {
//         color: "#0000FF",
//         border: "6px solid #fff",
//       },
//       "&.Mui-disabled .MuiSwitch-thumb": {
//         color:
//           theme.palette.mode === "light"
//             ? theme.palette.grey[100]
//             : theme.palette.grey[600],
//       },
//       "&.Mui-disabled + .MuiSwitch-track": {
//         opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
//       },
//     },
//     "& .MuiSwitch-thumb": {
//       boxSizing: "border-box",
//       width: 22,
//       height: 22,
//     },
//     "& .MuiSwitch-track": {
//       borderRadius: 26 / 2,
//       backgroundColor: theme.palette.mode === "light" ? "#808080" : "#0000FF",
//       opacity: 1,
//       transition: theme.transitions.create(["background-color"], {
//         duration: 500,
//       }),
//     },
//   }));

//   return (
//     <div className=" relative z-50 w-1/ h-20  flex flex-row justify-center item-center ">
//       {/* <div
//        ref={dropdownRef}
//         className=" relative  mb-4 sm:mr-4 sm:mb-0 border-2 border-red-400"
//       >
//         <button
//           className="w-full p-3 border rounded focus:outline-none focus:border-blue-500 text-blue-500 hover:bg-blue-50"
//           onClick={handleToggleDropdown}
//         >
//           {rooms} Rooms, {children} Children, {adults} Adults
//         </button>
//         {isDropdownOpen && (
//           <div   ref={dropdownRef} className="absolute top-10 right-0 p-4 bg-white border rounded shadow ">
//             <div className="mb-4">
//               <label className="block text-gray-700">Rooms:</label>
//               <div className="flex">
//                 <button
//                   className="px-2 py-1 border rounded hover:bg-gray-200"
//                   onClick={() => handleDecrement("rooms")}
//                 >
//                   -
//                 </button>
//                 <span className="mx-2">{rooms}</span>
//                 <button
//                   className="px-2 py-1 border rounded hover:bg-gray-200"
//                   onClick={() => handleIncrement("rooms")}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Adults:</label>
//               <div className="flex">
//                 <button
//                   className="px-2 py-1 border rounded hover:bg-gray-200"
//                   onClick={() => handleDecrement("adults")}
//                 >
//                   -
//                 </button>
//                 <span className="mx-2">{adults}</span>
//                 <button
//                   className="px-2 py-1 border rounded hover:bg-gray-200"
//                   onClick={() => handleIncrement("adults")}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//             <div>
//               <label className="block text-gray-700">Children:</label>
//               <div className="flex">
//                 <button
//                   className="px-2 py-1 border rounded hover:bg-gray-200"
//                   onClick={() => handleDecrement("children")}
//                 >
//                   -
//                 </button>
//                 <span className="mx-2">{children}</span>
//                 <button
//                   className="px-2 py-1 border rounded hover:bg-gray-200"
//                   onClick={() => handleIncrement("children")}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div> */}

//       <div className="flex flex-col sm:flex-row  justify-between text-blue-800 gap-3 ">
//         <div
//           onClick={handleDayPickerToggle}
//           className=" relative  rounded-xl flex items-center border-2 p-2 w-full sm:w-1/2  "
//         >
//           <div className="mr-2">
//             <CalendarMonthIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//           </div>
//           <div className="flex flex-col">
//             <div>
//               <p className="text-sm font-bold">Check-in - Check-out</p>
//             </div>
//             <div>
//               <p>
//                 {`${checkInDate?.toLocaleDateString() || ""}${
//                   checkInDate && checkOutDate
//                     ? " - " + (checkOutDate?.toLocaleDateString() || "")
//                     : ""
//                 }`}
//               </p>
//             </div>
//           </div>
//           {isCalendarOpen && (
//             <div className="w-auto absolute top-full left-0 bg-white border rounded shadow mt-2 ">
//               <DayPicker
//                 ref={dropdownRef}
//                 onClick={handleDayPickerToggle}
//                 numberOfMonths={2}
//                 pagedNavigation
//                 selected={dateRange[0]}
//                 onDayClick={handleDayClick}
//                 startDate={dateRange[0]}
//                 endDate={dateRange[1]}
//                 selectsRange
//                 placeholderText="Check-in Check-out"
//                 className="  focus:outline-none focus:border-blue-500"
//                 modifiers={{
//                   disabled: { before: today },
//                 }}
//               />
//             </div>
//           )}
//         </div>

//         <button
//           ref={dropdownRef}
//           onClick={handleToggleDropdown}
//           className="rounded-xl flex items-center border-2 p-2 w-full sm:w-1/2 relative"
//         >
//           <div className="flex items-center">
//             <div className="mr-2">
//               <PersonIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//             </div>
//             <div className="">
//               <p>
//                 {rooms} Rooms, {adults} Adults ,{children} Children
//               </p>
//             </div>
//           </div>

//           {isDropdownOpen && (
//             <div className="py-2 w-full absolute top-full left-0 bg-white border rounded shadow mt-2">
//               <div className="flex flex-row mb-4  justify-around ">
//                 <label className="block text-gray-700">Rooms:</label>
//                 <div className="flex">
//                   <button
//                     className="px-2 py-1 border rounded hover:bg-gray-200"
//                     onClick={() => handleDecrement("rooms")}
//                   >
//                     -
//                   </button>
//                   <span className="mx-2">{rooms}</span>
//                   <button
//                     className="px-2 py-1 border rounded hover:bg-gray-200"
//                     onClick={() => handleIncrement("rooms")}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <div className="flex flex-row   justify-around mb-4">
//                 <label className="block text-gray-700">Adults:</label>
//                 <div className="flex">
//                   <button
//                     className="px-2 py-1 border rounded hover:bg-gray-200"
//                     onClick={() => handleDecrement("adults")}
//                   >
//                     -
//                   </button>
//                   <span className="mx-2">{adults}</span>
//                   <button
//                     className="px-2 py-1 border rounded hover:bg-gray-200"
//                     onClick={() => handleIncrement("adults")}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <div className="flex flex-row mb-4  justify-around">
//                 <label className="block text-gray-700">Children:</label>
//                 <div className="flex">
//                   <button
//                     className="px-2 py-1 border rounded hover:bg-gray-200"
//                     onClick={() => handleDecrement("children")}
//                   >
//                     -
//                   </button>
//                   <span className="mx-2">{children}</span>
//                   <button
//                     className="px-2 py-1 border rounded hover:bg-gray-200"
//                     onClick={() => handleIncrement("children")}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </button>
//       </div>

//       <div className="ml-2  flex justify-center items-center">
//         <button
//           onClick={handleSearchBoxClick}
//           className="bg-green-500 hover:bg-green-600 text-white py-1 px-1 rounded transition duration-300 w-full sm:w-auto"
//         >
//           Update Search
//         </button>
//       </div>
//       {/* <div className="flex flex-col sm:flex-row bg-slate-500 border border-gray-900 rounded-xl ">
//         <div className="flex flex-col p-2  ">
//           <span className="text-sm sm:text-base font-semibold">
//             Show total prices
//           </span>
//           <span className="text-sm sm:text-base">
//             For 1 night, includes taxes & fees
//           </span>
//         </div>
//         <div className="">
//           <FormGroup>
//             <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} />
//           </FormGroup>
//         </div>
//       </div> */}
//     </div>
//   );
// };
// export default RoomSearch;

import React, { useEffect, useRef, useState } from "react";
//import DatePicker from "react-datepicker";
import { DayPicker } from "react-day-picker";
import "react-datepicker/dist/react-datepicker.css";
//import { FormControlLabel, FormGroup, TextField } from "@mui/material";
import "react-day-picker/dist/style.css";
//import HotelDetailss from "../HotelList/HotelDetailss";
//import { styled } from "@mui/material/styles";
//import Switch, { SwitchProps } from "@mui/material/Switch";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import { navigate } from "gatsby";
import { useDispatch, useSelector } from "react-redux";
import {
  //setSearchTerm,
  // setSelectedHotel,
  // setHotelDetails,
  //setFilteredHotels,
  setCheckInDate,
  setCheckOutDate,
  //incrementRooms,
  //decrementRooms,
  //incrementAdults,
  //decrementAdults,
  //incrementChildren,
  //decrementChildren,
  setRoomCount,
  setAdultCount,
  setChildrenCount,
} from "../../redux/actions";

function formatTime(time, prefix = "") {
  if (time && typeof time === "object") {
    const year = time.getFullYear();
    const month = String(time.getMonth() + 1).padStart(2, "0");
    const day = String(time.getDate()).padStart(2, "0");
    return prefix + `${month}/${day}/${year}`;
  }
  return "";
}
const RoomSearch = ({ hotels }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Define searchTerm state
  const [selectedHotel, setSelectedHotel] = useState(null);
  const allData = [...hotels];

  const dispatch = useDispatch();
  // Filter based on the entered search term
  const filteredData = allData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const handleHotelClick = (hotel) => {
  //   setSelectedHotel(hotel);
  // };

  // const today = new Date(); // Get the current date
  // const tomorrow = new Date(today); // Get tomorrow's date
  // tomorrow.setDate(tomorrow.getDate() + 1);

  // const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  // const [dateRange, setDateRange] = useState([today, tomorrow]);

  // const handleDayPickerToggle = () => {
  //   setIsCalendarOpen(!isCalendarOpen);
  // };

  // const checkInDate = useSelector((state) => state.date.checkInDate);
  // const checkOutDate = useSelector((state) => state.date.checkOutDate);

  // console.log("checkInDate", checkInDate, "checkOutDate", checkOutDate);

  // const [localCheckInDate, setLocalCheckInDate] = useState(today);
  // const [localCheckOutDate, setLocalCheckOutDate] = useState(tomorrow);

  // // const handleDayClick = (day) => {
  // //   const newDateRange = [...dateRange];

  // //   if (!newDateRange[0] || (newDateRange[0] && newDateRange[1])) {
  // //     newDateRange[0] = day;
  // //     newDateRange[1] = null;
  // //   } else if (day > newDateRange[0]) {
  // //     newDateRange[1] = day;
  // //     setIsCalendarOpen(false);
  // //   } else {
  // //     // Swap dates if the selected date is before the check-in date
  // //     newDateRange[1] = newDateRange[0];
  // //     newDateRange[0] = day;
  // //     setIsCalendarOpen(false);
  // //   }

  // //   setDateRange(newDateRange);
  // // };

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

  const checkInDateRedux = useSelector((state) => state.date.checkInDate);
  const checkOutDateRedux = useSelector((state) => state.date.checkOutDate);
  
  const [localCheckInDate, setLocalCheckInDate] = useState(checkInDateRedux);
  const [localCheckOutDate, setLocalCheckOutDate] = useState(checkOutDateRedux);

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const today = new Date();


  useEffect(() => {
    setLocalCheckInDate(checkInDateRedux);
    setLocalCheckOutDate(checkOutDateRedux);
  }, [checkInDateRedux, checkOutDateRedux]);

  const handleDayPickerToggle = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleDayClick = (day) => {
    day.setHours(12, 0, 0, 0);

    if (!localCheckInDate || localCheckOutDate) {
      setLocalCheckInDate(day);
      setLocalCheckOutDate(null);
      dispatch(setCheckInDate(day));
      dispatch(setCheckOutDate(null));
    } else if (day > localCheckInDate) {
      setLocalCheckOutDate(day);
      dispatch(setCheckOutDate(day));
      setIsCalendarOpen(false);
    } else {
      setLocalCheckInDate(day);
      setLocalCheckOutDate(null);
      dispatch(setCheckInDate(day));
      dispatch(setCheckOutDate(null));
    }
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

  // const IOSSwitch = styled((props) => (
  //   <Switch
  //     focusVisibleClassName=".Mui-focusVisible"
  //     disableRipple
  //     {...props}
  //   />
  // ))(({ theme }) => ({
  //   width: 42,
  //   height: 26,
  //   padding: 0,
  //   "& .MuiSwitch-switchBase": {
  //     padding: 0,
  //     margin: 2,
  //     transitionDuration: "300ms",
  //     "&.Mui-checked": {
  //       transform: "translateX(16px)",
  //       color: "#fff",
  //       "& + .MuiSwitch-track": {
  //         backgroundColor:
  //           theme.palette.mode === "dark" ? "#2ECA45" : "#0000FF",
  //         opacity: 1,
  //         border: 0,
  //       },
  //       "&.Mui-disabled + .MuiSwitch-track": {
  //         opacity: 0.5,
  //       },
  //     },
  //     "&.Mui-focusVisible .MuiSwitch-thumb": {
  //       color: "#0000FF",
  //       border: "6px solid #fff",
  //     },
  //     "&.Mui-disabled .MuiSwitch-thumb": {
  //       color:
  //         theme.palette.mode === "light"
  //           ? theme.palette.grey[100]
  //           : theme.palette.grey[600],
  //     },
  //     "&.Mui-disabled + .MuiSwitch-track": {
  //       opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
  //     },
  //   },
  //   "& .MuiSwitch-thumb": {
  //     boxSizing: "border-box",
  //     width: 22,
  //     height: 22,
  //   },
  //   "& .MuiSwitch-track": {
  //     borderRadius: 26 / 2,
  //     backgroundColor: theme.palette.mode === "light" ? "#808080" : "#0000FF",
  //     opacity: 1,
  //     transition: theme.transitions.create(["background-color"], {
  //       duration: 500,
  //     }),
  //   },
  // }));

  return (
    <div className=" relative z-50 w-1/ h-20  flex flex-row justify-center item-center ">
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
        
        {/* <div
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
                {`${checkInDate?.toLocaleDateString() || ""}${
                  checkInDate && checkOutDate
                    ? " - " + (checkOutDate?.toLocaleDateString() || "")
                    : ""
                }`}
              </p>
              <p>
                {`${checkInDate || ""}${
                  checkInDate && checkOutDate
                    ? " - " + (checkOutDate || "")
                    : ""
                }`}
              </p>
            </div>
          </div>
          {isCalendarOpen && (
            <div className="w-auto absolute top-full left-0 bg-white border rounded shadow mt-2 ">
              <DayPicker
                ref={dropdownRef}
                onClick={handleDayPickerToggle}
                numberOfMonths={2}
                pagedNavigation
                selected={dateRange[0]}
                onDayClick={handleDayClick}
                startDate={dateRange[0]}
                endDate={dateRange[1]}
                selectsRange
                placeholderText="Check-in Check-out"
                className="  focus:outline-none focus:border-blue-500"
                modifiers={{
                  disabled: { before: today },
                }}
              />
            </div>
          )}
        </div> */}

        <div
      className="relative rounded-xl flex items-center border-2 p-2 w-full sm:w-1/2"
      onClick={handleDayPickerToggle}
    >
      <div className="mr-2">
        <CalendarMonthIcon className="font-montserrat font-bold text-2xl leading-10 text-orange-800" />
      </div>
      <div className="flex flex-col">
        <div>
          <p className="text-sm font-bold">Check-in - Check-out</p>
        </div>
        <div>
         <p>{`${formatTime(localCheckInDate)} - ${formatTime(localCheckOutDate)}`}</p>
        </div>
      </div>
      {isCalendarOpen && (
        <div className="w-auto absolute top-full left-0 bg-white border rounded shadow mt-2">
        <DayPicker
              onClick={handleDayPickerToggle}
              selectedDays={[localCheckInDate, { from: localCheckInDate, to: localCheckOutDate }]}
              numberOfMonths={2}
              onDayClick={handleDayClick}
              placeholderText="Check-in Check-out"
              className="focus:outline-none focus:border-orange-500"
              modifiers={{ disabled: { before: today } }}
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
          onClick={handleSearchBoxClick}
          className="bg-green-500 hover:bg-green-600 text-white py-1 px-1 rounded transition duration-300 w-full sm:w-auto"
        >
          Update Search
        </button>
      </div>
      {/* <div className="flex flex-col sm:flex-row bg-slate-500 border border-gray-900 rounded-xl ">
        <div className="flex flex-col p-2  ">
          <span className="text-sm sm:text-base font-semibold">
            Show total prices
          </span>
          <span className="text-sm sm:text-base">
            For 1 night, includes taxes & fees
          </span>
        </div>
        <div className="">
          <FormGroup>
            <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} />
          </FormGroup>
        </div>
      </div> */}
    </div>
  );
};
export default RoomSearch;
