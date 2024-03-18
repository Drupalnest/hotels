// import React, { useEffect, useRef, useState } from "react";
// import ApartmentIcon from "@mui/icons-material/Apartment";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import PersonIcon from "@mui/icons-material/Person";
// import FlightIcon from "@mui/icons-material/Flight";
// import LuggageIcon from "@mui/icons-material/Luggage";
// import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
// import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
// import InputAdornment from "@mui/material/InputAdornment";
// import TextField from "@mui/material/TextField";
// import SearchIcon from "@mui/icons-material/Search";
// import "../../styles/style.css";
// import { CheckBox } from "@mui/icons-material";
// import room1 from "../../assets/room1.jpg";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   setSearchTerm,
//   setSelectedHotel,
//   setHotelDetails,
//   setFilteredHotels,
// } from "../../redux/actions";

// const Indexpage = ({ index,hotels, airports, cruise, interest, city }) => {
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive((prevIsActive) => !prevIsActive);
//   };

//   const containerStyle = {
//     width: "3/12",
//     position: "relative",
//     overflow: "hidden",
//   };

//   const imgStyle = {
//     width: "500px",
//     height: "400px",
//   };

//   const dispatch = useDispatch();
//   const inputRef = useRef(null);

//   const fetchHotelDetails = (hotelId, hotelName, addressLine) => {
//     // Replace this with your actual logic to fetch hotel details
//     return {
//       id: hotelId,
//       name: hotelName,
//       address: "Hotel Address",
//       // Add other details as needed
//     };
//   };

//   const searchTerm = useSelector((state) => state.hotel.searchTerm);
//   const selectedHotel = useSelector((state) => state.hotel.selectedHotel);
//   const hotelDetails = useSelector((state) => state.hotel.hotelDetails);

//   return (
//     <div className="border-2 relative container-fluid px-32  flex flex-row z-50 ">
//       <div className="w-9/12">
//         <p className="m-3 font-montserrat font-semibold text-3xl leading-10 text-blue-800">
//           Save big on your next hotel
//         </p>
//         <div className=" space-y-4 border shadow-2xl rounded-3xl p-3 ">
//           <div className=" flex">
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2 border-2 rounded-full p-1 bg-gray-100 ">
//                 <ApartmentIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 onClick={handleClick}
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat  leading-7 text-blue-800`}
//               >
//                 Hotels
//               </div>
//             </div>
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2">
//                 <FlightIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat text-md leading-7 text-blue-800`}
//               >
//                 Flights
//               </div>
//             </div>
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2">
//                 <LuggageIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat text-md leading-7 text-blue-800`}
//               >
//                 Bundle & Save
//               </div>
//             </div>
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2">
//                 <TimeToLeaveIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat text-md leading-7 text-blue-800`}
//               >
//                 Cars
//               </div>
//             </div>
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2">
//                 <DirectionsBoatIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat text-md leading-7 text-blue-800`}
//               >
//                 Cruices
//               </div>
//             </div>
//           </div>
//           <div className="sm:w-full border-none rounded-3xl">
//             <TextField
//               placeholder="Where to?"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <SearchIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//                   </InputAdornment>
//                 ),
//               }}
//               className="w-full  border-2 rounded-lg border-blue-600"
//             />
//           </div>

//           <div className="flex flex-col sm:flex-row  justify-betwee text-blue-800 gap-3 ">
//             <div className=" rounded-xl flex items-center border-2 p-2 w-full sm:w-1/2">
//               <div className="mr-2">
//                 <CalendarMonthIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div className="flex flex-col">
//                 <div>
//                   <p className="text-sm font-bold">Check-in - Check-out</p>
//                 </div>
//                 <div>
//                   <p>03/04/2024 - 03/05/2024 </p>
//                 </div>
//               </div>
//             </div>

//             <button className=" rounded-xl flex items-center border-2 p-2 w-full sm:w-1/2">
//               <div className="flex items-center">
//                 <div className="mr-2">
//                   <PersonIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//                 </div>
//                 <div className="">
//                   <p>2 Adults, 1 Room</p>
//                 </div>
//               </div>
//             </button>
//           </div>

//           <div className="flex flex-col sm:flex-row w-full text-green-800 gap-3">
//             <div className="bg-green-100 rounded-xl p-2 flex items-center border-2 w-full sm:w-1/2 overflow-x-auto">
//               <div className="mr-3">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   height="24"
//                   width="24"
//                   aria-hidden="true"
//                   fill="currentcolor"
//                   color="highlight.shade"
//                   tabIndex="-1"
//                   focusable="false"
//                   role="img"
//                   className="Svg-sc-12lgb6u-0 bkdMKt Discount__SvgDiscount-sc-1s5abed-0 fkoOZw"
//                 >
//                   <path d="M23 12l-2.4 2.7.3 3.5-3.6.8-1.9 3-3.4-1.4L8.6 22l-1.9-3-3.6-.8.3-3.5L1 12l2.4-2.7-.3-3.5L6.7 5l1.9-3L12 3.4 15.4 2l1.9 3 3.6.8-.3 3.5L23 12zm-10.8-.6c-1.3-.3-1.8-.7-1.8-1.3 0-.6.6-1.1 1.6-1.1s1.4.5 1.5 1.2h1.3c0-1-.7-1.9-1.9-2.2V6.7h-1.8V8c-1.1.2-2 1-2 2.1 0 1.3 1.1 2 2.8 2.4 1.5.4 1.8.9 1.8 1.4 0 .4-.3 1-1.6 1-1.2 0-1.7-.5-1.8-1.2H9c.1 1.3 1 2 2.2 2.2v1.3H13V16c1.1-.2 2.1-.9 2.1-2.1-.1-1.6-1.5-2.2-2.9-2.5z"></path>
//                 </svg>
//               </div>
//               <div className="flex p-1 py-2 flex-row text-sm md:text-base font-semibold">
//                 <div>
//                   <p>Bundle + save</p>
//                 </div>
//                 <div className="flex items-center ml-2">
//                   <CheckBox className="text-lg" />
//                   <p className="ml-1">Add a car</p>
//                   {/* <CheckBox className="ml-2" />
//                   <p className="ml-1">Add a flight</p> */}
//                 </div>
//               </div>
//             </div>

//             <button className="bg-blue-800 rounded-xl p-2 items-center border-2 w-full sm:w-1/2">
//               <div className=" text-blue-800 font-bold flex items-center justify-center">
//                 <p className="text-white">Find Your Hotel</p>
//               </div>
//             </button>
//           </div>
//           <div className="flex justify-end  border-b-2 p-2 ">
//             <div className="p-0 w-full sm:w-1/2 lg:w-1/2 flex justify-center">
//               <p className="text-xs text-center">
//                 Book a hotel with free cancellation for flexibility
//               </p>
//             </div>
//           </div>

//           <div className="flex justify-center text-sm font-bold text-blue-600 ">
//             <a>Book all of your hotels at once and save up to $625</a>
//           </div>
//         </div>
//       </div>
//       {/* <div
//         className=" position-absolute  overflow-hidden grid place-items-center border-2"
//         style={containerStyle}
//       >
//         <img
//           src={room1}
//           className="rounded-tl-full rounded-bl-full"
//           alt="Room 1"
//           style={imgStyle}
//         />
//       </div> */}
//     </div>
//   );
// };

// export default Indexpage;

// import React, { useEffect, useRef, useState } from "react";
// import ApartmentIcon from "@mui/icons-material/Apartment";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import PersonIcon from "@mui/icons-material/Person";
// import FlightIcon from "@mui/icons-material/Flight";
// import LuggageIcon from "@mui/icons-material/Luggage";
// import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
// import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
// import InputAdornment from "@mui/material/InputAdornment";
// import TextField from "@mui/material/TextField";
// import SearchIcon from "@mui/icons-material/Search";
// import "../../styles/style.css";
// import { CheckBox } from "@mui/icons-material";
// import room5 from "../../assets/room5.jpg";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setSearchTerm,
//   setSelectedHotel,
//   setHotelDetails,
//   setFilteredHotels,
//   setCheckInDate,
//   setCheckOutDate,
// } from "../../redux/actions";

// import { DayPicker } from "react-day-picker";
// import "react-datepicker/dist/react-datepicker.css";
// import "react-day-picker/dist/style.css";
// import { navigate } from "gatsby";

// const Indexpage = ({ hotels, airports, cruise, interest, city }) => {
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive((prevIsActive) => !prevIsActive);
//   };

//   const checkInDate = useSelector((state) => state.date.checkInDate);
//   const checkOutDate = useSelector((state) => state.date.checkOutDate);

//   console.log("checkInDate", checkInDate, "checkOutDate", checkOutDate);

//   const containerStyle = {
//     width: "3/12",
//     position: "relative",
//     overflow: "hidden",
//   };

//   const imgStyle = {
//     width: "500px",
//     height: "400px",
//   };

//   const dispatch = useDispatch();

//   const inputRef = useRef(null);

//   const fetchHotelDetails = (hotelId, hotelName, addressLine) => {
//     // Replace this with your actual logic to fetch hotel details
//     return {
//       id: hotelId,
//       name: hotelName,
//       address: "Hotel Address",
//       // Add other details as needed
//     };
//   };

//   const searchTerm = useSelector((state) => state.hotel.searchTerm);
//   const selectedHotel = useSelector((state) => state.hotel.selectedHotel);
//   const hotelDetails = useSelector((state) => state.hotel.hotelDetails);

//   // Combine all data into a single array
//   const allData = [...hotels, ...airports, ...cruise, ...interest, ...city];
//   console.log("allData", allData);

//   // Filter hotels based on the selected locality

//   const uniqueLocalities = new Set();

//   const filteredData = allData.filter((item) => {
//      const matchesSearch =
//       item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       item.address &&
//       item.address.locality &&
//       item.address.locality.toLowerCase().includes(searchTerm.toLowerCase());

//      if (matchesSearch) {
//        // Add the locality to the set if it matches the search
//        uniqueLocalities.add(item.address.locality);
//      }

//      return matchesSearch;
//   });

//   // const filteredData = allData.filter((item) => {
//   // });

//   // Handle click on hotel item
//   const handleHotelClick = (hotel) => {
//     dispatch(setSelectedHotel(hotel));

//     // Fetch detailed information for the selected hotel (replace with your logic)
//     const details = fetchHotelDetails(
//       hotel.id,
//       hotel.Name,
//       hotel.address ? hotel.address.address_line1 : "Address not available"
//     );

//     // Dispatch the action to store hotel details in Redux
//     dispatch(setHotelDetails(details));

//     // Log filtered hotels based on locality

//     const filteredHotels = allData.filter(
//       (item) =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         item.address &&
//         item.address.locality &&
//         item.address.locality.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     console.log("Filtered Hotels based on Locality:", filteredHotels);
//     dispatch(setFilteredHotels(filteredHotels));
//   };

//   const today = new Date(); // Get the current date
//   const tomorrow = new Date(today); // Get tomorrow's date
//   tomorrow.setDate(tomorrow.getDate() + 1);

//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   const [dateRange, setDateRange] = useState([today, tomorrow]);

//   const handleDayPickerToggle = () => {
//     setIsCalendarOpen(!isCalendarOpen);
//   };

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

//   // const handleDayClick = (day) => {
//   //   const newDateRange = [...dateRange];

//   //   if (!newDateRange[0] || (newDateRange[0] && newDateRange[1])) {
//   //     const today = new Date();

//   //     // Set check-in date, adjusting for time zone
//   //     if (day < today) {
//   //       // Prevent setting check-in date before today
//   //       return;
//   //     }

//   //     // Adjust time part to prevent timezone issues
//   //     day.setHours(12, 0, 0, 0);

//   //     newDateRange[0] = day;
//   //     newDateRange[1] = null;
//   //   } else if (day > newDateRange[0]) {
//   //     // Set check-out date
//   //     setIsCalendarOpen(false);
//   //     newDateRange[1] = day;
//   //   } else {
//   //     // Swap dates if the selected date is before the check-in date
//   //     newDateRange[1] = newDateRange[0];
//   //     newDateRange[0] = day;
//   //     setIsCalendarOpen(false);
//   //   }

//   //   setDateRange(newDateRange);

//   //   // Dispatch both check-in and check-out dates to Redux
//   //   dispatch(setCheckInDate(newDateRange[0]));
//   //   dispatch(setCheckOutDate(newDateRange[1]));
//   // };

//   // const handleDayClick = (day) => {
//   //   const newDateRange = [...dateRange];

//   //   if (!newDateRange[0] || (newDateRange[0] && newDateRange[1])) {
//   //     const today = new Date();

//   //     if (day < today) {
//   //       return;
//   //     }

//   //     // Set time to noon (12:00 PM) to avoid timezone issues
//   //     day.setHours(12, 0, 0, 0);

//   //     newDateRange[0] = day;
//   //     newDateRange[1] = null;

//   //     // Update local state for check-in date
//   //     setLocalCheckInDate(newDateRange[0]);
//   //   } else if (day > newDateRange[0]) {
//   //     setIsCalendarOpen(false);
//   //     // Set time to noon (12:00 PM) to avoid timezone issues
//   //     day.setHours(12, 0, 0, 0);
//   //     newDateRange[1] = day;

//   //     // Update local state for check-out date
//   //     setLocalCheckOutDate(newDateRange[1]);
//   //   } else {
//   //     // Swap dates if the selected date is before the check-in date
//   //     newDateRange[1] = newDateRange[0];
//   //     newDateRange[0] = day;
//   //     setIsCalendarOpen(false);

//   //     // Update local state for both check-in and check-out dates
//   //     setLocalCheckInDate(newDateRange[0]);
//   //     setLocalCheckOutDate(newDateRange[1]);
//   //   }

//   //   setDateRange(newDateRange);

//   //   // Dispatch both check-in and check-out dates to Redux
//   //   dispatch(setCheckInDate(newDateRange[0]));
//   //   dispatch(setCheckOutDate(newDateRange[1]));
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
//   const [rooms, setRooms] = useState(1);
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
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

//   const handleIncrement = (type) => {
//     switch (type) {
//       case "rooms":
//         setRooms(rooms + 1);
//         break;
//       case "adults":
//         setAdults(adults + 1);
//         break;
//       case "children":
//         setChildren(children + 1);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleDecrement = (type) => {
//     if (type === "rooms" && rooms > 1) {
//       setRooms(rooms - 1);
//     } else if (type === "adults" && adults > 1) {
//       setAdults(adults - 1);
//     } else if (type === "children" && children > 0) {
//       setChildren(children - 1);
//     }
//   };

//   const handleSearchClick = (hotel) => {
//     navigate("/hotellist");
//   };

//   return (
//     <div className=" relative container-fluid px-32  flex flex-row z-50 ">
//       <div className="w-9/12">
//         <p className="m-3 font-montserrat font-semibold text-3xl leading-10 text-blue-800">
//           Save big on your next hotel
//         </p>
//         <div className=" space-y-4 border shadow-2xl rounded-3xl p-3 ">
//           <div className=" flex">
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2 border-2 rounded-full p-1 bg-gray-100 ">
//                 <ApartmentIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 onClick={handleClick}
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat  leading-7 text-blue-800`}
//               >
//                 Hotels
//               </div>
//             </div>
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2">
//                 <FlightIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat text-md leading-7 text-blue-800`}
//               >
//                 Flights
//               </div>
//             </div>
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2">
//                 <LuggageIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat text-md leading-7 text-blue-800`}
//               >
//                 Bundle & Save
//               </div>
//             </div>
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2">
//                 <TimeToLeaveIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat text-md leading-7 text-blue-800`}
//               >
//                 Cars
//               </div>
//             </div>
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2">
//                 <DirectionsBoatIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat text-md leading-7 text-blue-800`}
//               >
//                 Cruices
//               </div>
//             </div>
//           </div>
//           <div className="relative sm:w-full border-none rounded-3xl">
//             <TextField
//               placeholder="Where to?"
//               value={searchTerm}
//               onChange={(e) => dispatch(setSearchTerm(e.target.value))}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <SearchIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//                   </InputAdornment>
//                 ),
//               }}
//               className="w-full  border-2 rounded-lg border-blue-600"
//             />

//             {searchTerm && (
//               <div className="z-50 bg-white w-full absolute top-full left-0 shadow  mt-2 h-24 overflow-y-auto border border-gray-300 rounded p-2 ">
//                 {filteredData.map((item) => (
//                   <div
//                     key={item.id}
//                     className="mb-2 cursor-pointer"
//                     onClick={() => handleHotelClick(item)}
//                   >
//                     {item.address && (
//                       <div>
//                         <div>{item.address.locality}</div>
//                         {/* Add other address properties as needed */}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="flex flex-col sm:flex-row  justify-between text-blue-800 gap-3 ">
//             <div
//               ref={dropdownRef}
//               onClick={handleDayPickerToggle}
//               className=" relative  rounded-xl flex items-center border-2 p-2 w-full sm:w-1/2  "
//             >
//               <div className="mr-2">
//                 <CalendarMonthIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div className="flex flex-col">
//                 <div>
//                   <p className="text-sm font-bold">Check-in - Check-out</p>
//                 </div>
//                 <div>
//                   <p>
//                     {`${checkInDate?.toLocaleDateString() ?? ""}${
//                       checkInDate && checkOutDate
//                         ? " - " + (checkOutDate?.toLocaleDateString() ?? "")
//                         : ""
//                     }`}
//                   </p>
//                 </div>
//               </div>
//               {isCalendarOpen && (
//                 <div className="w-auto absolute top-full left-0 bg-white border rounded shadow mt-2 ">
//                   <DayPicker
//                     onClick={handleDayPickerToggle}
//                     numberOfMonths={2}
//                     pagedNavigation
//                     selected={dateRange[0]}
//                     onDayClick={handleDayClick}
//                     startDate={dateRange[0]}
//                     endDate={dateRange[1]}
//                     selectsRange
//                     placeholderText="Check-in Check-out"
//                     className="  focus:outline-none focus:border-blue-500"
//                     modifiers={{
//                       disabled: { before: today },
//                     }}
//                   />
//                 </div>
//               )}
//             </div>

//             <button
//               ref={dropdownRef}
//               onClick={handleToggleDropdown}
//               className="rounded-xl flex items-center border-2 p-2 w-full sm:w-1/2 relative"
//             >
//               <div className="flex items-center">
//                 <div className="mr-2">
//                   <PersonIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//                 </div>
//                 <div className="">
//                   <p>
//                     {rooms} Rooms, {adults} Adults ,{children} Children
//                   </p>
//                 </div>
//               </div>

//               {isDropdownOpen && (
//                 <div
//                   ref={dropdownRef}
//                   className="py-2 w-full absolute top-full left-0 bg-white border rounded shadow mt-2"
//                 >
//                   <div className="flex flex-row mb-4  justify-around ">
//                     <label className="block text-gray-700">Rooms:</label>
//                     <div className="flex">
//                       <button
//                         className="px-2 py-1 border rounded hover:bg-gray-200"
//                         onClick={() => handleDecrement("rooms")}
//                       >
//                         -
//                       </button>
//                       <span className="mx-2">{rooms}</span>
//                       <button
//                         className="px-2 py-1 border rounded hover:bg-gray-200"
//                         onClick={() => handleIncrement("rooms")}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <div className="flex flex-row   justify-around mb-4">
//                     <label className="block text-gray-700">Adults:</label>
//                     <div className="flex">
//                       <button
//                         className="px-2 py-1 border rounded hover:bg-gray-200"
//                         onClick={() => handleDecrement("adults")}
//                       >
//                         -
//                       </button>
//                       <span className="mx-2">{adults}</span>
//                       <button
//                         className="px-2 py-1 border rounded hover:bg-gray-200"
//                         onClick={() => handleIncrement("adults")}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <div className="flex flex-row mb-4  justify-around">
//                     <label className="block text-gray-700">Children:</label>
//                     <div className="flex">
//                       <button
//                         className="px-2 py-1 border rounded hover:bg-gray-200"
//                         onClick={() => handleDecrement("children")}
//                       >
//                         -
//                       </button>
//                       <span className="mx-2">{children}</span>
//                       <button
//                         className="px-2 py-1 border rounded hover:bg-gray-200"
//                         onClick={() => handleIncrement("children")}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </button>
//           </div>

//           <div className="flex flex-col sm:flex-row w-full text-green-800 gap-3">
//             <div className="bg-green-100 rounded-xl p-2 flex items-center border-2 w-full sm:w-1/2 overflow-x-auto">
//               <div className="mr-3">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   height="24"
//                   width="24"
//                   aria-hidden="true"
//                   fill="currentcolor"
//                   color="highlight.shade"
//                   tabIndex="-1"
//                   focusable="false"
//                   role="img"
//                   className="Svg-sc-12lgb6u-0 bkdMKt Discount__SvgDiscount-sc-1s5abed-0 fkoOZw"
//                 >
//                   <path d="M23 12l-2.4 2.7.3 3.5-3.6.8-1.9 3-3.4-1.4L8.6 22l-1.9-3-3.6-.8.3-3.5L1 12l2.4-2.7-.3-3.5L6.7 5l1.9-3L12 3.4 15.4 2l1.9 3 3.6.8-.3 3.5L23 12zm-10.8-.6c-1.3-.3-1.8-.7-1.8-1.3 0-.6.6-1.1 1.6-1.1s1.4.5 1.5 1.2h1.3c0-1-.7-1.9-1.9-2.2V6.7h-1.8V8c-1.1.2-2 1-2 2.1 0 1.3 1.1 2 2.8 2.4 1.5.4 1.8.9 1.8 1.4 0 .4-.3 1-1.6 1-1.2 0-1.7-.5-1.8-1.2H9c.1 1.3 1 2 2.2 2.2v1.3H13V16c1.1-.2 2.1-.9 2.1-2.1-.1-1.6-1.5-2.2-2.9-2.5z"></path>
//                 </svg>
//               </div>
//               <div className="flex p-1 py-2 flex-row text-sm md:text-base font-semibold">
//                 <div>
//                   <p>Bundle + save</p>
//                 </div>
//                 <div className="flex items-center ml-2">
//                   <CheckBox className="text-lg" />
//                   <p className="ml-1">Add a car</p>
//                   {/* <CheckBox className="ml-2" />
//                   <p className="ml-1">Add a flight</p> */}
//                 </div>
//               </div>
//             </div>

//             <button
//               onClick={handleSearchClick}
//               className="bg-blue-800 rounded-xl p-2 items-center border-2 w-full sm:w-1/2"
//             >
//               <div className=" text-blue-800 font-bold flex items-center justify-center">
//                 <p className="text-white">Find Your Hotel</p>
//               </div>
//             </button>
//           </div>
//           <div className="flex justify-end  border-b-2 p-2 ">
//             <div className="p-0 w-full sm:w-1/2 lg:w-1/2 flex justify-center">
//               <p className="text-xs text-center">
//                 Book a hotel with free cancellation for flexibility
//               </p>
//             </div>
//           </div>

//           <div className="flex justify-center text-sm font-bold text-blue-600 ">
//             <a>Book all of your hotels at once and save up to $625</a>
//           </div>
//         </div>
//       </div>
//       <div
//         className=" relative   overflow-hidden grid place-items-center "
//         style={containerStyle}
//       >
//         <img
//           src={room5}
//           className="rounded-tl-full rounded-bl-full"
//           alt="Room 1"
//           style={imgStyle}
//         />
//       </div>
//     </div>
//   );
// };

// export default Indexpage;

// import React, { useEffect, useRef, useState } from "react";
// import ApartmentIcon from "@mui/icons-material/Apartment";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import PersonIcon from "@mui/icons-material/Person";
// import FlightIcon from "@mui/icons-material/Flight";
// import LuggageIcon from "@mui/icons-material/Luggage";
// import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
// import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
// import InputAdornment from "@mui/material/InputAdornment";
// import TextField from "@mui/material/TextField";
// import SearchIcon from "@mui/icons-material/Search";
// import "../../styles/style.css";
// import { CheckBox } from "@mui/icons-material";
// import room5 from "../../assets/room5.jpg";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setSearchTerm,
//   setSelectedHotel,
//   setHotelDetails,
//   setFilteredHotels,
//   setCheckInDate,
//   setCheckOutDate,
// } from "../../redux/actions";

// import { DayPicker } from "react-day-picker";
// import "react-datepicker/dist/react-datepicker.css";
// import "react-day-picker/dist/style.css";
// import { navigate } from "gatsby";

// const Indexpage = ({ hotels, airports, cruise, interest, city }) => {
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive((prevIsActive) => !prevIsActive);
//   };

//   const checkInDate = useSelector((state) => state.date.checkInDate);
//   const checkOutDate = useSelector((state) => state.date.checkOutDate);

//   console.log("checkInDate", checkInDate, "checkOutDate", checkOutDate);

//   const containerStyle = {
//     width: "3/12",
//     position: "relative",
//     overflow: "hidden",
//   };

//   const imgStyle = {
//     width: "500px",
//     height: "400px",
//   };

//   const dispatch = useDispatch();

//   const inputRef = useRef(null);

//   const fetchHotelDetails = (hotelId, hotelName, addressLine) => {
//     // Replace this with your actual logic to fetch hotel details
//     return {
//       id: hotelId,
//       name: hotelName,
//       address: "Hotel Address",
//       // Add other details as needed
//     };
//   };

//   const searchTerm = useSelector((state) => state.hotel.searchTerm);
//   const selectedHotel = useSelector((state) => state.hotel.selectedHotel);
//   const hotelDetails = useSelector((state) => state.hotel.hotelDetails);

//   // Combine all data into a single array
//   const allData = [...hotels, ...airports, ...cruise, ...interest, ...city];
//   console.log("allData", allData);

//   // Filter hotels based on the selected locality

//   const uniqueLocalities = new Set();

//   const filteredData = allData.filter((item) => {
//     const itemName = item?.name;
//     const itemAddress = item?.address?.locality;

//     const matchesSearch =
//       itemName && itemAddress &&
//       itemName.toLowerCase()?.includes(searchTerm.toLowerCase()) &&
//       itemAddress.toLowerCase()?.includes(searchTerm.toLowerCase());

//     if (matchesSearch) {
//       // Add the locality to the set if it matches the search
//       uniqueLocalities.add(itemAddress);
//     }

//     return matchesSearch;
//   });

//   // const filteredData = allData.filter((item) => {
//   // });

//   // Handle click on hotel item
//   const handleHotelClick = (hotel) => {
//     dispatch(setSelectedHotel(hotel));

//     // Fetch detailed information for the selected hotel (replace with your logic)
//     const details = fetchHotelDetails(
//       hotel.id,
//       hotel.Name,
//       hotel.address ? hotel.address.address_line1 : "Address not available"
//     );

//     // Dispatch the action to store hotel details in Redux
//     dispatch(setHotelDetails(details));

//     // Log filtered hotels based on locality

//     const filteredHotels = allData.filter(
//       (item) =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         item.address &&
//         item.address.locality &&
//         item.address.locality.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     console.log("Filtered Hotels based on Locality:", filteredHotels);
//     dispatch(setFilteredHotels(filteredHotels));
//   };

//   const today = new Date(); // Get the current date
//   const tomorrow = new Date(today); // Get tomorrow's date
//   tomorrow.setDate(tomorrow.getDate() + 1);

//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   const [dateRange, setDateRange] = useState([today, tomorrow]);

//   const handleDayPickerToggle = () => {
//     setIsCalendarOpen(!isCalendarOpen);
//   };

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

//   // const handleDayClick = (day) => {
//   //   const newDateRange = [...dateRange];

//   //   if (!newDateRange[0] || (newDateRange[0] && newDateRange[1])) {
//   //     const today = new Date();

//   //     // Set check-in date, adjusting for time zone
//   //     if (day < today) {
//   //       // Prevent setting check-in date before today
//   //       return;
//   //     }

//   //     // Adjust time part to prevent timezone issues
//   //     day.setHours(12, 0, 0, 0);

//   //     newDateRange[0] = day;
//   //     newDateRange[1] = null;
//   //   } else if (day > newDateRange[0]) {
//   //     // Set check-out date
//   //     setIsCalendarOpen(false);
//   //     newDateRange[1] = day;
//   //   } else {
//   //     // Swap dates if the selected date is before the check-in date
//   //     newDateRange[1] = newDateRange[0];
//   //     newDateRange[0] = day;
//   //     setIsCalendarOpen(false);
//   //   }

//   //   setDateRange(newDateRange);

//   //   // Dispatch both check-in and check-out dates to Redux
//   //   dispatch(setCheckInDate(newDateRange[0]));
//   //   dispatch(setCheckOutDate(newDateRange[1]));
//   // };

//   // const handleDayClick = (day) => {
//   //   const newDateRange = [...dateRange];

//   //   if (!newDateRange[0] || (newDateRange[0] && newDateRange[1])) {
//   //     const today = new Date();

//   //     if (day < today) {
//   //       return;
//   //     }

//   //     // Set time to noon (12:00 PM) to avoid timezone issues
//   //     day.setHours(12, 0, 0, 0);

//   //     newDateRange[0] = day;
//   //     newDateRange[1] = null;

//   //     // Update local state for check-in date
//   //     setLocalCheckInDate(newDateRange[0]);
//   //   } else if (day > newDateRange[0]) {
//   //     setIsCalendarOpen(false);
//   //     // Set time to noon (12:00 PM) to avoid timezone issues
//   //     day.setHours(12, 0, 0, 0);
//   //     newDateRange[1] = day;

//   //     // Update local state for check-out date
//   //     setLocalCheckOutDate(newDateRange[1]);
//   //   } else {
//   //     // Swap dates if the selected date is before the check-in date
//   //     newDateRange[1] = newDateRange[0];
//   //     newDateRange[0] = day;
//   //     setIsCalendarOpen(false);

//   //     // Update local state for both check-in and check-out dates
//   //     setLocalCheckInDate(newDateRange[0]);
//   //     setLocalCheckOutDate(newDateRange[1]);
//   //   }

//   //   setDateRange(newDateRange);

//   //   // Dispatch both check-in and check-out dates to Redux
//   //   dispatch(setCheckInDate(newDateRange[0]));
//   //   dispatch(setCheckOutDate(newDateRange[1]));
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
//   const [rooms, setRooms] = useState(1);
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
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

//   const handleIncrement = (type) => {
//     switch (type) {
//       case "rooms":
//         setRooms(rooms + 1);
//         break;
//       case "adults":
//         setAdults(adults + 1);
//         break;
//       case "children":
//         setChildren(children + 1);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleDecrement = (type) => {
//     if (type === "rooms" && rooms > 1) {
//       setRooms(rooms - 1);
//     } else if (type === "adults" && adults > 1) {
//       setAdults(adults - 1);
//     } else if (type === "children" && children > 0) {
//       setChildren(children - 1);
//     }
//   };

//   const handleSearchClick = (hotel) => {
//     navigate("/hotellist");
//   };

//   return (
//     <div className=" relative container-fluid px-32  flex flex-row z-50 ">
//       <div className="w-9/12">
//         <p className="m-3 font-montserrat font-semibold text-3xl leading-10 text-blue-800">
//           Save big on your next hotel
//         </p>
//         <div className=" space-y-4 border shadow-2xl rounded-3xl p-3 ">
//           <div className=" flex">
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2 border-2 rounded-full p-1 bg-gray-100 ">
//                 <ApartmentIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 onClick={handleClick}
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat  leading-7 text-blue-800`}
//               >
//                 Hotels
//               </div>
//             </div>
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2">
//                 <FlightIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat text-md leading-7 text-blue-800`}
//               >
//                 Flights
//               </div>
//             </div>
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2">
//                 <LuggageIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat text-md leading-7 text-blue-800`}
//               >
//                 Bundle & Save
//               </div>
//             </div>
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2">
//                 <TimeToLeaveIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat text-md leading-7 text-blue-800`}
//               >
//                 Cars
//               </div>
//             </div>
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2">
//                 <DirectionsBoatIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat text-md leading-7 text-blue-800`}
//               >
//                 Cruices
//               </div>
//             </div>
//           </div>
//           <div className="relative sm:w-full border-none rounded-3xl">
//             <TextField
//               placeholder="Where to?"
//               value={searchTerm}
//               onChange={(e) => dispatch(setSearchTerm(e.target.value))}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <SearchIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//                   </InputAdornment>
//                 ),
//               }}
//               className="w-full  border-2 rounded-lg border-blue-600"
//             />

//             {searchTerm && (
//               <div className="z-50 bg-white w-full absolute top-full left-0 shadow  mt-2 h-24 overflow-y-auto border border-gray-300 rounded p-2 ">
//                 {filteredData.map((item) => (
//                   <div
//                     key={item.id}
//                     className="mb-2 cursor-pointer"
//                     onClick={() => handleHotelClick(item)}
//                   >
//                     {item.address && (
//                       <div>
//                         <div>{item.address.locality}</div>
//                         {/* Add other address properties as needed */}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="flex flex-col sm:flex-row  justify-between text-blue-800 gap-3 ">
//             <div
//               ref={dropdownRef}
//               onClick={handleDayPickerToggle}
//               className=" relative  rounded-xl flex items-center border-2 p-2 w-full sm:w-1/2  "
//             >
//               <div className="mr-2">
//                 <CalendarMonthIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div className="flex flex-col">
//                 <div>
//                   <p className="text-sm font-bold">Check-in - Check-out</p>
//                 </div>
//                 <div>
//                   <p>
//                     {`${checkInDate?.toLocaleDateString() ?? ""}${
//                       checkInDate && checkOutDate
//                         ? " - " + (checkOutDate?.toLocaleDateString() ?? "")
//                         : ""
//                     }`}
//                   </p>
//                 </div>
//               </div>
//               {isCalendarOpen && (
//                 <div className="w-auto absolute top-full left-0 bg-white border rounded shadow mt-2 ">
//                   <DayPicker
//                     onClick={handleDayPickerToggle}
//                     numberOfMonths={2}
//                     pagedNavigation
//                     selected={dateRange[0]}
//                     onDayClick={handleDayClick}
//                     startDate={dateRange[0]}
//                     endDate={dateRange[1]}
//                     selectsRange
//                     placeholderText="Check-in Check-out"
//                     className="  focus:outline-none focus:border-blue-500"
//                     modifiers={{
//                       disabled: { before: today },
//                     }}
//                   />
//                 </div>
//               )}
//             </div>

//             <button
//               ref={dropdownRef}
//               onClick={handleToggleDropdown}
//               className="rounded-xl flex items-center border-2 p-2 w-full sm:w-1/2 relative"
//             >
//               <div className="flex items-center">
//                 <div className="mr-2">
//                   <PersonIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//                 </div>
//                 <div className="">
//                   <p>
//                     {rooms} Rooms, {adults} Adults ,{children} Children
//                   </p>
//                 </div>
//               </div>

//               {isDropdownOpen && (
//                 <div
//                   ref={dropdownRef}
//                   className="py-2 w-full absolute top-full left-0 bg-white border rounded shadow mt-2"
//                 >
//                   <div className="flex flex-row mb-4  justify-around ">
//                     <label className="block text-gray-700">Rooms:</label>
//                     <div className="flex">
//                       <button
//                         className="px-2 py-1 border rounded hover:bg-gray-200"
//                         onClick={() => handleDecrement("rooms")}
//                       >
//                         -
//                       </button>
//                       <span className="mx-2">{rooms}</span>
//                       <button
//                         className="px-2 py-1 border rounded hover:bg-gray-200"
//                         onClick={() => handleIncrement("rooms")}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <div className="flex flex-row   justify-around mb-4">
//                     <label className="block text-gray-700">Adults:</label>
//                     <div className="flex">
//                       <button
//                         className="px-2 py-1 border rounded hover:bg-gray-200"
//                         onClick={() => handleDecrement("adults")}
//                       >
//                         -
//                       </button>
//                       <span className="mx-2">{adults}</span>
//                       <button
//                         className="px-2 py-1 border rounded hover:bg-gray-200"
//                         onClick={() => handleIncrement("adults")}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <div className="flex flex-row mb-4  justify-around">
//                     <label className="block text-gray-700">Children:</label>
//                     <div className="flex">
//                       <button
//                         className="px-2 py-1 border rounded hover:bg-gray-200"
//                         onClick={() => handleDecrement("children")}
//                       >
//                         -
//                       </button>
//                       <span className="mx-2">{children}</span>
//                       <button
//                         className="px-2 py-1 border rounded hover:bg-gray-200"
//                         onClick={() => handleIncrement("children")}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </button>
//           </div>

//           <div className="flex flex-col sm:flex-row w-full text-green-800 gap-3">
//             <div className="bg-green-100 rounded-xl p-2 flex items-center border-2 w-full sm:w-1/2 overflow-x-auto">
//               <div className="mr-3">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   height="24"
//                   width="24"
//                   aria-hidden="true"
//                   fill="currentcolor"
//                   color="highlight.shade"
//                   tabIndex="-1"
//                   focusable="false"
//                   role="img"
//                   className="Svg-sc-12lgb6u-0 bkdMKt Discount__SvgDiscount-sc-1s5abed-0 fkoOZw"
//                 >
//                   <path d="M23 12l-2.4 2.7.3 3.5-3.6.8-1.9 3-3.4-1.4L8.6 22l-1.9-3-3.6-.8.3-3.5L1 12l2.4-2.7-.3-3.5L6.7 5l1.9-3L12 3.4 15.4 2l1.9 3 3.6.8-.3 3.5L23 12zm-10.8-.6c-1.3-.3-1.8-.7-1.8-1.3 0-.6.6-1.1 1.6-1.1s1.4.5 1.5 1.2h1.3c0-1-.7-1.9-1.9-2.2V6.7h-1.8V8c-1.1.2-2 1-2 2.1 0 1.3 1.1 2 2.8 2.4 1.5.4 1.8.9 1.8 1.4 0 .4-.3 1-1.6 1-1.2 0-1.7-.5-1.8-1.2H9c.1 1.3 1 2 2.2 2.2v1.3H13V16c1.1-.2 2.1-.9 2.1-2.1-.1-1.6-1.5-2.2-2.9-2.5z"></path>
//                 </svg>
//               </div>
//               <div className="flex p-1 py-2 flex-row text-sm md:text-base font-semibold">
//                 <div>
//                   <p>Bundle + save</p>
//                 </div>
//                 <div className="flex items-center ml-2">
//                   <CheckBox className="text-lg" />
//                   <p className="ml-1">Add a car</p>
//                   {/* <CheckBox className="ml-2" />
//                   <p className="ml-1">Add a flight</p> */}
//                 </div>
//               </div>
//             </div>

//             <button
//               onClick={handleSearchClick}
//               className="bg-blue-800 rounded-xl p-2 items-center border-2 w-full sm:w-1/2"
//             >
//               <div className=" text-blue-800 font-bold flex items-center justify-center">
//                 <p className="text-white">Find Your Hotel</p>
//               </div>
//             </button>
//           </div>
//           <div className="flex justify-end  border-b-2 p-2 ">
//             <div className="p-0 w-full sm:w-1/2 lg:w-1/2 flex justify-center">
//               <p className="text-xs text-center">
//                 Book a hotel with free cancellation for flexibility
//               </p>
//             </div>
//           </div>

//           <div className="flex justify-center text-sm font-bold text-blue-600 ">
//             <a>Book all of your hotels at once and save up to $625</a>
//           </div>
//         </div>
//       </div>
//       <div
//         className=" relative   overflow-hidden grid place-items-center "
//         style={containerStyle}
//       >
//         <img
//           src={room5}
//           className="rounded-tl-full rounded-bl-full"
//           alt="Room 1"
//           style={imgStyle}
//         />
//       </div>
//     </div>
//   );
// };

// export default Indexpage;

// import React, { useEffect, useRef, useState } from "react";
// import ApartmentIcon from "@mui/icons-material/Apartment";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import PersonIcon from "@mui/icons-material/Person";
// import FlightIcon from "@mui/icons-material/Flight";
// import LuggageIcon from "@mui/icons-material/Luggage";
// import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
// import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
// import InputAdornment from "@mui/material/InputAdornment";
// import TextField from "@mui/material/TextField";
// import SearchIcon from "@mui/icons-material/Search";
// import "../../styles/style.css";
// import { CheckBox } from "@mui/icons-material";
// import room5 from "../../assets/room5.jpg";
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

// import { DayPicker } from "react-day-picker";
// import "react-datepicker/dist/react-datepicker.css";
// import "react-day-picker/dist/style.css";
// import { navigate } from "gatsby";

// const Indexpage = ({ hotels, airports, cruise, interest, city }) => {
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive((prevIsActive) => !prevIsActive);
//   };

//   const checkInDate = useSelector((state) => state.date.checkInDate);
//   const checkOutDate = useSelector((state) => state.date.checkOutDate);

//   console.log("checkInDate", checkInDate, "checkOutDate", checkOutDate);

//   const containerStyle = {
//     width: "3/12",
//     position: "relative",
//     overflow: "hidden",
//   };

//   const imgStyle = {
//     width: "500px",
//     height: "400px",
//   };

//   const dispatch = useDispatch();

//   const inputRef = useRef(null);

//   const fetchHotelDetails = (hotelId, hotelName, addressLine) => {
//     // Replace this with your actual logic to fetch hotel details
//     return {
//       id: hotelId,
//       name: hotelName,
//       address: "Hotel Address",
//       // Add other details as needed
//     };
//   };

//   const searchTerm = useSelector((state) => state.hotel.searchTerm);
//   const selectedHotel = useSelector((state) => state.hotel.selectedHotel);
//   const hotelDetails = useSelector((state) => state.hotel.hotelDetails);

//   // Combine all data into a single array
//   const allData = [...hotels, ...airports, ...cruise, ...interest, ...city];
//   console.log("allData", allData);

//   // Filter hotels based on the selected locality

//   const uniqueLocalities = new Set();

//   const filteredData = allData.filter((item) => {
//     const matchesSearch =
//       item.name.toLowerCase().includes(searchTerm) &&
//       item.address &&
//       item.address.locality &&
//       item.address.locality.toLowerCase().includes(searchTerm.toLowerCase());

//     if (matchesSearch) {
//       // Add the locality to the set if it matches the search
//       uniqueLocalities.add(item.address.locality);
//     }

//     return matchesSearch;
//   });

//   // Handle click on hotel item
//   const handleHotelClick = (hotel) => {
//     dispatch(setSelectedHotel(hotel));

//     // Fetch detailed information for the selected hotel (replace with your logic)
//     const details = fetchHotelDetails(
//       hotel.id,
//       hotel.Name,
//       hotel.address ? hotel.address.address_line1 : "Address not available"
//     );

//     // Dispatch the action to store hotel details in Redux
//     dispatch(setHotelDetails(details));

//     // Log filtered hotels based on locality

//     const filteredHotels = allData.filter(
//       (item) =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         item.address &&
//         item.address.locality &&
//         item.address.locality.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     console.log("Filtered Hotels based on Locality:", filteredHotels);
//     dispatch(setFilteredHotels(filteredHotels));
//     dispatch(setSearchTerm(''));

//   };

//   // // Filter hotels based on the selected locality
//   // const filteredData = allData.filter((item) => {
//   //   const matchesSearch =
//   //     (!searchTerm || // If no search term is provided, display all data
//   //       (item.address && // Otherwise, filter based on locality if search term is provided
//   //         item.address.locality &&
//   //         item.address.locality
//   //           .toLowerCase()
//   //           .includes(searchTerm.toLowerCase()))) &&
//   //     (!item.field_rooms_ajay || // Filter out items with non-empty field_rooms_ajay
//   //       item.field_rooms_ajay.drupal_internal__target_id === "");

//   //   return matchesSearch;
//   // });

//   //   const handleHotelClick = (hotel) => {
//   //     dispatch(setSelectedHotel(hotel));

//   //     // Fetch detailed information for the selected hotel (replace with your logic)
//   //     const details = fetchHotelDetails(
//   //       hotel.id,
//   //       hotel.Name,
//   //       hotel.address ? hotel.address.address_line1 : "Address not available"
//   //     );

//   //     // Dispatch the action to store hotel details in Redux
//   //     dispatch(setHotelDetails(details));

//   //     // Filter hotels based on the selected locality
//   //     const filteredHotels = filteredData.filter(
//   //       (item) =>
//   //         item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//   //         item.address &&
//   //         item.address.locality &&
//   //         item.address.locality.toLowerCase().includes(searchTerm.toLowerCase())
//   //     );

//   //     console.log("Filtered Hotels based on Locality:", filteredHotels);
//   //     dispatch(setFilteredHotels(filteredHotels));
//   //   };

//   const today = new Date(); // Get the current date
//   const tomorrow = new Date(today); // Get tomorrow's date
//   tomorrow.setDate(tomorrow.getDate() + 1);

//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   const [dateRange, setDateRange] = useState([today, tomorrow]);

//   const handleDayPickerToggle = () => {
//     setIsCalendarOpen(!isCalendarOpen);
//   };

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

//   // const handleDayClick = (day) => {
//   //   const newDateRange = [...dateRange];

//   //   if (!newDateRange[0] || (newDateRange[0] && newDateRange[1])) {
//   //     const today = new Date();

//   //     // Set check-in date, adjusting for time zone
//   //     if (day < today) {
//   //       // Prevent setting check-in date before today
//   //       return;
//   //     }

//   //     // Adjust time part to prevent timezone issues
//   //     day.setHours(12, 0, 0, 0);

//   //     newDateRange[0] = day;
//   //     newDateRange[1] = null;
//   //   } else if (day > newDateRange[0]) {
//   //     // Set check-out date
//   //     setIsCalendarOpen(false);
//   //     newDateRange[1] = day;
//   //   } else {
//   //     // Swap dates if the selected date is before the check-in date
//   //     newDateRange[1] = newDateRange[0];
//   //     newDateRange[0] = day;
//   //     setIsCalendarOpen(false);
//   //   }

//   //   setDateRange(newDateRange);

//   //   // Dispatch both check-in and check-out dates to Redux
//   //   dispatch(setCheckInDate(newDateRange[0]));
//   //   dispatch(setCheckOutDate(newDateRange[1]));
//   // };

//   // const handleDayClick = (day) => {
//   //   const newDateRange = [...dateRange];

//   //   if (!newDateRange[0] || (newDateRange[0] && newDateRange[1])) {
//   //     const today = new Date();

//   //     if (day < today) {
//   //       return;
//   //     }

//   //     // Set time to noon (12:00 PM) to avoid timezone issues
//   //     day.setHours(12, 0, 0, 0);

//   //     newDateRange[0] = day;
//   //     newDateRange[1] = null;

//   //     // Update local state for check-in date
//   //     setLocalCheckInDate(newDateRange[0]);
//   //   } else if (day > newDateRange[0]) {
//   //     setIsCalendarOpen(false);
//   //     // Set time to noon (12:00 PM) to avoid timezone issues
//   //     day.setHours(12, 0, 0, 0);
//   //     newDateRange[1] = day;

//   //     // Update local state for check-out date
//   //     setLocalCheckOutDate(newDateRange[1]);
//   //   } else {
//   //     // Swap dates if the selected date is before the check-in date
//   //     newDateRange[1] = newDateRange[0];
//   //     newDateRange[0] = day;
//   //     setIsCalendarOpen(false);

//   //     // Update local state for both check-in and check-out dates
//   //     setLocalCheckInDate(newDateRange[0]);
//   //     setLocalCheckOutDate(newDateRange[1]);
//   //   }

//   //   setDateRange(newDateRange);

//   //   // Dispatch both check-in and check-out dates to Redux
//   //   dispatch(setCheckInDate(newDateRange[0]));
//   //   dispatch(setCheckOutDate(newDateRange[1]));
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

//   // const [rooms, setRooms] = useState(1);
//   // const [adults, setAdults] = useState(1);
//   // const [children, setChildren] = useState(0);

//   // const handleIncrement = (type) => {
//   //   switch (type) {
//   //     case "rooms":
//   //       setRooms(rooms + 1);
//   //       break;
//   //     case "adults":
//   //       setAdults(adults + 1);
//   //       break;
//   //     case "children":
//   //       setChildren(children + 1);
//   //       break;
//   //     default:
//   //       break;
//   //   }
//   // };

//   // const handleDecrement = (type) => {
//   //   if (type === "rooms" && rooms > 1) {
//   //     setRooms(rooms - 1);
//   //   } else if (type === "adults" && adults > 1) {
//   //     setAdults(adults - 1);
//   //   } else if (type === "children" && children > 0) {
//   //     setChildren(children - 1);
//   //   }
//   // };

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

//   const handleSearchClick = (hotel) => {
//     navigate("/hotellist");
//   };

//   return (
//     <div className=" relative container-fluid px-32  flex flex-row z-50 ">
//       <div className="w-9/12">
//         <p className="m-3 font-montserrat font-semibold text-3xl leading-10 text-blue-800">
//           Save big on your next hotel
//         </p>
//         <div className=" space-y-4 border shadow-2xl rounded-3xl p-3 ">
//           <div className=" flex">
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2 border-2 rounded-full p-1 bg-gray-100 ">
//                 <ApartmentIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 onClick={handleClick}
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat  leading-7 text-blue-800`}
//               >
//                 Hotels
//               </div>
//             </div>
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2">
//                 <FlightIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat text-md leading-7 text-blue-800`}
//               >
//                 Flights
//               </div>
//             </div>
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2">
//                 <LuggageIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat text-md leading-7 text-blue-800`}
//               >
//                 Bundle & Save
//               </div>
//             </div>
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2">
//                 <TimeToLeaveIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat text-md leading-7 text-blue-800`}
//               >
//                 Cars
//               </div>
//             </div>
//             <div
//               className={`flex p-2 ${
//                 isActive
//                   ? "active:bg-blue-200 border-blue-600 active:rounded-3xl active:border-2"
//                   : ""
//               }`}
//               onClick={handleClick}
//             >
//               <div className="mr-2">
//                 <DirectionsBoatIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div
//                 className={`${
//                   isActive ? "font-semibold text-md" : "hover:underline"
//                 } font-montserrat text-md leading-7 text-blue-800`}
//               >
//                 Cruices
//               </div>
//             </div>
//           </div>

//           <div   className="relative sm:w-full border-none rounded-3xl">
//             <TextField

//               ref={dropdownRef}
//               placeholder="Where to?"
//               value={searchTerm}
//               onChange={(e) => dispatch(setSearchTerm(e.target.value))}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <SearchIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//                   </InputAdornment>
//                 ),
//               }}
//               className="w-full  border-2 rounded-lg border-blue-600"
//             />

//             {searchTerm && (
//               <div className="z-50 bg-white w-full absolute top-full left-0 shadow  mt-2 h-24 overflow-y-auto border border-gray-300 rounded p-2 ">
//                 {filteredData.map((item) => (
//                   <div
//                     key={item.id}
//                     className="mb-2 cursor-pointer"
//                     onClick={() => handleHotelClick(item)}
//                   >
//                     {item.address && (
//                       <div>
//                         <div>{item.address.locality}</div>
//                       </div>
//                     )}
//                     {/* {!item.field_rooms_ajay ||
//                     item.field_rooms_ajay.drupal_internal__target_id ===
//                       "" ? null : (
//                       <div>
//                         <div>{item.address.locality}</div>

//                       </div>
//                     )} */}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="flex flex-col sm:flex-row  justify-between text-blue-800 gap-3 ">
//             <div
//               ref={dropdownRef}
//               onClick={handleDayPickerToggle}
//               className=" relative  rounded-xl flex items-center border-2 p-2 w-full sm:w-1/2  "
//             >
//               <div className="mr-2">
//                 <CalendarMonthIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//               </div>
//               <div className="flex flex-col">
//                 <div>
//                   <p className="text-sm font-bold">Check-in - Check-out</p>
//                 </div>
//                 <div>
//                   <p>
//                     {`${checkInDate?.toLocaleDateString() || ""}${
//                       checkInDate && checkOutDate
//                         ? " - " + (checkOutDate?.toLocaleDateString() || "")
//                         : ""
//                     }`}
//                   </p>
//                 </div>
//               </div>
//               {isCalendarOpen && (
//                 <div className="w-auto absolute top-full left-0 bg-white border rounded shadow mt-2 ">
//                   <DayPicker
//                     onClick={handleDayPickerToggle}
//                     numberOfMonths={2}
//                     pagedNavigation
//                     selected={dateRange[0]}
//                     onDayClick={handleDayClick}
//                     startDate={dateRange[0]}
//                     endDate={dateRange[1]}
//                     selectsRange
//                     placeholderText="Check-in Check-out"
//                     className="  focus:outline-none focus:border-blue-500"
//                     modifiers={{
//                       disabled: { before: today },
//                     }}
//                   />
//                 </div>
//               )}
//             </div>

//             <button
//               ref={dropdownRef}
//               onClick={handleToggleDropdown}
//               className="rounded-xl flex items-center border-2 p-2 w-full sm:w-1/2 relative"
//             >
//               <div className="flex items-center">
//                 <div className="mr-2">
//                   <PersonIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
//                 </div>
//                 <div className="">
//                   <p>
//                     {rooms} Rooms, {adults} Adults ,{children} Children
//                   </p>
//                 </div>
//               </div>

//               {isDropdownOpen && (
//                 <div
//                   ref={dropdownRef}
//                   className="py-2 w-full absolute top-full left-0 bg-white border rounded shadow mt-2"
//                 >
//                   <div className="flex flex-row mb-4  justify-around ">
//                     <label className="block text-gray-700">Rooms:</label>
//                     <div className="flex">
//                       <button
//                         className="px-2 py-1 border rounded hover:bg-gray-200"
//                         onClick={() => handleDecrement("rooms")}
//                       >
//                         -
//                       </button>
//                       <span className="mx-2">{rooms}</span>
//                       <button
//                         className="px-2 py-1 border rounded hover:bg-gray-200"
//                         onClick={() => handleIncrement("rooms")}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <div className="flex flex-row   justify-around mb-4">
//                     <label className="block text-gray-700">Adults:</label>
//                     <div className="flex">
//                       <button
//                         className="px-2 py-1 border rounded hover:bg-gray-200"
//                         onClick={() => handleDecrement("adults")}
//                       >
//                         -
//                       </button>
//                       <span className="mx-2">{adults}</span>
//                       <button
//                         className="px-2 py-1 border rounded hover:bg-gray-200"
//                         onClick={() => handleIncrement("adults")}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <div className="flex flex-row mb-4  justify-around">
//                     <label className="block text-gray-700">Children:</label>
//                     <div className="flex">
//                       <button
//                         className="px-2 py-1 border rounded hover:bg-gray-200"
//                         onClick={() => handleDecrement("children")}
//                       >
//                         -
//                       </button>
//                       <span className="mx-2">{children}</span>
//                       <button
//                         className="px-2 py-1 border rounded hover:bg-gray-200"
//                         onClick={() => handleIncrement("children")}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </button>
//           </div>

//           <div className="flex flex-col sm:flex-row w-full text-green-800 gap-3">
//             <div className="bg-green-100 rounded-xl p-2 flex items-center border-2 w-full sm:w-1/2 overflow-x-auto">
//               <div className="mr-3">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   height="24"
//                   width="24"
//                   aria-hidden="true"
//                   fill="currentcolor"
//                   color="highlight.shade"
//                   tabIndex="-1"
//                   focusable="false"
//                   role="img"
//                   className="Svg-sc-12lgb6u-0 bkdMKt Discount__SvgDiscount-sc-1s5abed-0 fkoOZw"
//                 >
//                   <path d="M23 12l-2.4 2.7.3 3.5-3.6.8-1.9 3-3.4-1.4L8.6 22l-1.9-3-3.6-.8.3-3.5L1 12l2.4-2.7-.3-3.5L6.7 5l1.9-3L12 3.4 15.4 2l1.9 3 3.6.8-.3 3.5L23 12zm-10.8-.6c-1.3-.3-1.8-.7-1.8-1.3 0-.6.6-1.1 1.6-1.1s1.4.5 1.5 1.2h1.3c0-1-.7-1.9-1.9-2.2V6.7h-1.8V8c-1.1.2-2 1-2 2.1 0 1.3 1.1 2 2.8 2.4 1.5.4 1.8.9 1.8 1.4 0 .4-.3 1-1.6 1-1.2 0-1.7-.5-1.8-1.2H9c.1 1.3 1 2 2.2 2.2v1.3H13V16c1.1-.2 2.1-.9 2.1-2.1-.1-1.6-1.5-2.2-2.9-2.5z"></path>
//                 </svg>
//               </div>
//               <div className="flex p-1 py-2 flex-row text-sm md:text-base font-semibold">
//                 <div>
//                   <p>Bundle + save</p>
//                 </div>
//                 <div className="flex items-center ml-2">
//                   <CheckBox className="text-lg" />
//                   <p className="ml-1">Add a car</p>
//                   {/* <CheckBox className="ml-2" />
//                   <p className="ml-1">Add a flight</p> */}
//                 </div>
//               </div>
//             </div>

//             <button
//               onClick={handleSearchClick}
//               className="bg-blue-800 rounded-xl p-2 items-center border-2 w-full sm:w-1/2"
//             >
//               <div className=" text-blue-800 font-bold flex items-center justify-center">
//                 <p className="text-white">Find Your Hotel</p>
//               </div>
//             </button>
//           </div>
//           <div className="flex justify-end  border-b-2 p-2 ">
//             <div className="p-0 w-full sm:w-1/2 lg:w-1/2 flex justify-center">
//               <p className="text-xs text-center">
//                 Book a hotel with free cancellation for flexibility
//               </p>
//             </div>
//           </div>

//           <div className="flex justify-center text-sm font-bold text-blue-600 ">
//             <a>Book all of your hotels at once and save up to $625</a>
//           </div>
//         </div>
//       </div>
//       <div
//         className=" relative   overflow-hidden grid place-items-center "
//         style={containerStyle}
//       >
//         <img
//           src={room5}
//           className="rounded-tl-full rounded-bl-full"
//           alt="Room 1"
//           style={imgStyle}
//         />
//       </div>
//     </div>
//   );
// };

// export default Indexpage;

import React, { useEffect, useRef, useState } from "react";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import "../../styles/style.css";
import { CheckBox } from "@mui/icons-material";
import room5 from "../../assets/room5.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchTerm,
  setSelectedHotel,
  setHotelDetails,
  setFilteredHotels,
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

import { DayPicker } from "react-day-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-day-picker/dist/style.css";
import { navigate } from "gatsby";
import ListBar from "./ListBar";
import LiveLocation from "./LiveLocation";

const Indexpage = ({ hotels, airports, cruise, interest, city }) => {
  const containerStyle = {
    width: "3/12",
    position: "relative",
    overflow: "hidden",
  };

  const imgStyle = {
    width: "500px",
    height: "400px",
  };

  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const fetchHotelDetails = (hotelId, hotelName, addressLine) => {
    // Replace this with your actual logic to fetch hotel details
    return {
      id: hotelId,
      name: hotelName,
      address: "Hotel Address",
      // Add other details as needed
    };
  };

  const searchTerm = useSelector((state) => state.hotel.searchTerm);
  const selectedHotel = useSelector((state) => state.hotel.selectedHotel);
  const hotelDetails = useSelector((state) => state.hotel.hotelDetails);

  // Combine all data into a single array
  const allData = [...hotels, ...airports, ...cruise, ...interest, ...city];
  console.log("allData", allData);

  // // Filter hotels based on the selected locality

  // const uniqueLocalities = new Set();

  // const filteredData = allData.filter((item) => {
  //   const matchesSearch =
  //     item.name.toLowerCase().includes(searchTerm) &&
  //     item.address &&
  //     item.address.locality &&
  //     item.address.locality.toLowerCase().includes(searchTerm.toLowerCase());

  //   if (matchesSearch) {
  //     // Add the locality to the set if it matches the search
  //     uniqueLocalities.add(item.address.locality);
  //   }

  //   return matchesSearch;
  // });

  // // Handle click on hotel item
  // const handleHotelClick = (hotel) => {
  //   dispatch(setSelectedHotel(hotel));

  //   // Fetch detailed information for the selected hotel (replace with your logic)
  //   const details = fetchHotelDetails(
  //     hotel.id,
  //     hotel.Name,
  //     hotel.address ? hotel.address.address_line1 : "Address not available"
  //   );

  //   // Dispatch the action to store hotel details in Redux
  //   dispatch(setHotelDetails(details));

  //   // Log filtered hotels based on locality

  //   const localityName =
  //     hotels.address && hotels.address.locality
  //       ? hotels.address.locality.toLowerCase()
  //       : "";
  //   dispatch(setSearchTerm(localityName));

  //   const filteredHotels = allData.filter(
  //     (item) =>
  //       item.name.toLowerCase().includes(localityName) &&
  //       item.address &&
  //       item.address.locality &&
  //       item.address.locality.toLowerCase().includes(localityName)
  //   );

  //   console.log("Filtered Hotels based on Locality:", filteredHotels);
  //   dispatch(setFilteredHotels(filteredHotels));
  //   sessionStorage.setItem("filteredHotels", JSON.stringify(filteredHotels));
  // };

  // const uniqueLocalities = new Set();
  // const filteredData = allData.filter((item) => {
  //   const hasTargetId = item.field_rooms_ajay && item.field_rooms_ajay.drupal_internal__target_id;

  //   if (hasTargetId) {
  //     // Add the locality to the set if it matches the search
  //     uniqueLocalities.add(item.address.locality);
  //   }

  //   const matchesSearch =
  //     item.name.toLowerCase().includes(searchTerm) &&
  //     item.address &&
  //     item.address.locality &&
  //     item.address.locality.toLowerCase().includes(searchTerm.toLowerCase());

  //   return hasTargetId || matchesSearch;
  // });

  // // Handle click on hotel item
  // const handleHotelClick = (hotel) => {
  //   dispatch(setSelectedHotel(hotel));

  //   // Fetch detailed information for the selected hotel (replace with your logic)
  //   const details = fetchHotelDetails(
  //     hotel.id,
  //     hotel.Name,
  //     hotel.address ? hotel.address.address_line1 : "Address not available"
  //   );

  //   // Dispatch the action to store hotel details in Redux
  //   dispatch(setHotelDetails(details));

  //   // Log filtered hotels based on locality
  //   const localityName =
  //     hotel.address && hotel.address.locality
  //       ? hotel.address.locality.toLowerCase()
  //       : "";
  //   dispatch(setSearchTerm(localityName));

  //   const filteredHotels = allData.filter(
  //     (item) =>
  //       item.name.toLowerCase().includes(localityName) &&
  //       item.address &&
  //       item.address.locality &&
  //       item.address.locality.toLowerCase().includes(localityName)
  //   );

  //   console.log("Filtered Hotels based on Locality:", filteredHotels);
  //   dispatch(setFilteredHotels(filteredHotels));
  //   sessionStorage.setItem("filteredHotels", JSON.stringify(filteredHotels));
  // };

  // const uniqueLocalities = new Set();
  // const filteredData = allData.filter((item) => {
  //   const hasValidTargetId =
  //     item.field_rooms_ajay &&
  //     item.field_rooms_ajay[0] &&
  //     item.field_rooms_ajay[0].drupal_internal__target_id;

  //   if (hasValidTargetId) {
  //     // Add the locality to the set if it matches the search
  //     uniqueLocalities.add(item.address.locality);
  //   }

  //   // Check if field_rooms_ajay is not null and if the locality matches the search term
  //   const matchesSearch =
  //     hasValidTargetId &&
  //     item.address &&
  //     item.address.locality &&
  //     item.address.locality.toLowerCase().includes(searchTerm.toLowerCase());

  //   return matchesSearch;
  // });

  // // Handle click on hotel item
  // const handleHotelClick = (hotel) => {
  //   dispatch(setSelectedHotel(hotel));

  //   // Fetch detailed information for the selected hotel (replace with your logic)
  //   const details = fetchHotelDetails(
  //     hotel.id,
  //     hotel.Name,
  //     hotel.address ? hotel.address.address_line1 : "Address not available"
  //   );

  //   // Dispatch the action to store hotel details in Redux
  //   dispatch(setHotelDetails(details));

  //   // Log filtered hotels based on locality
  //   const localityName =
  //     hotel.address && hotel.address.locality
  //       ? hotel.address.locality.toLowerCase()
  //       : "";
  //   dispatch(setSearchTerm(localityName));

  //   const filteredHotels = allData.filter(
  //     (item) =>
  //       item.field_rooms_ajay &&
  //       item.field_rooms_ajay[0] &&
  //       item.field_rooms_ajay[0].drupal_internal__target_id &&
  //       item.address &&
  //       item.address.locality &&
  //       item.address.locality.toLowerCase().includes(localityName.toLowerCase()) // Make sure to convert both to lowercase for case-insensitive comparison
  //   );

  //   console.log("Filtered Hotels based on Locality:", filteredHotels);
  //   dispatch(setFilteredHotels(filteredHotels));
  //   sessionStorage.setItem("filteredHotels", JSON.stringify(filteredHotels));
  // };

  const [isDropdownserachBoxOpen, setIsDropdownserachBoxOpen] = useState(false);

  const handleInputBoxToggle = () => {
    setIsDropdownserachBoxOpen(!isDropdownserachBoxOpen);
  };

  const uniqueLocalities = new Set();
  const filteredData = allData.filter((item) => {
    const hasValidTargetId =
      item.field_rooms_ajay &&
      item.field_rooms_ajay[0] &&
      item.field_rooms_ajay[0].drupal_internal__target_id;

    if (hasValidTargetId) {
      // Add the locality to the set if it matches the search
      uniqueLocalities.add(item.address.locality);
    }

    // Check if field_rooms_ajay is not null and if the locality or postal code matches the search term
    const matchesSearch =
      hasValidTargetId &&
      item.address &&
      (item.address.locality.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.address.postal_code
          .toLowerCase()
          .includes(searchTerm.toLowerCase()));

    return matchesSearch;
  });

  // Handle click on hotel item
  const handleHotelClick = (hotel) => {
    dispatch(setSelectedHotel(hotel));
    setIsDropdownserachBoxOpen(false);

    // Fetch detailed information for the selected hotel (replace with your logic)
    const details = fetchHotelDetails(
      hotel.id,
      hotel.Name,
      hotel.address ? hotel.address.address_line1 : "Address not available"
    );

    // Dispatch the action to store hotel details in Redux
    dispatch(setHotelDetails(details));

    // Log filtered hotels based on locality
    const localityName =
      hotel.address && hotel.address.locality
        ? hotel.address.locality.toLowerCase()
        : "";
    dispatch(setSearchTerm(localityName));

    const filteredHotels = allData.filter(
      (item) =>
        item.field_rooms_ajay &&
        item.field_rooms_ajay[0] &&
        item.field_rooms_ajay[0].drupal_internal__target_id &&
        item.address &&
        (item.address.locality
          .toLowerCase()
          .includes(localityName.toLowerCase()) ||
          item.address.postal_code
            .toLowerCase()
            .includes(localityName.toLowerCase()))
    );

    console.log(
      "Filtered Hotels based on Locality or Postal Code:",
      filteredHotels
    );
    dispatch(setFilteredHotels(filteredHotels));
    sessionStorage.setItem("filteredHotels", JSON.stringify(filteredHotels));
  };

  // const checkInDate = useSelector((state) => state.date.checkInDate);
  // const checkOutDate = useSelector((state) => state.date.checkOutDate);

  // console.log("checkInDate", checkInDate, "checkOutDate", checkOutDate);

  // const today = new Date();
  // const tomorrow = new Date(today);
  // tomorrow.setDate(tomorrow.getDate() + 1);

  // const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  // const [dateRange, setDateRange] = useState([today, tomorrow]);

  // const handleDayPickerToggle = () => {
  //   setIsCalendarOpen(!isCalendarOpen);
  // };

  // const [localCheckInDate, setLocalCheckInDate] = useState(today);
  // const [localCheckOutDate, setLocalCheckOutDate] = useState(tomorrow);

  // // const handleDayClick = (day) => {
  // //   const newDateRange = [...dateRange];

  // //   if (!newDateRange[0] || (newDateRange[0] && newDateRange[1])) {
  // //     const today = new Date();

  // //     if (day < today) {
  // //       return;
  // //     }

  // //     // Set time to noon (12:00 PM) to avoid timezone issues
  // //     day.setHours(12, 0, 0, 0);

  // //     newDateRange[0] = day;
  // //     newDateRange[1] = null;

  // //     // Dispatch check-in date to Redux
  // //     dispatch(setCheckInDate(newDateRange[0]));
  // //   } else if (day > newDateRange[0]) {
  // //     setIsCalendarOpen(false);
  // //     // Set time to noon (12:00 PM) to avoid timezone issues
  // //     day.setHours(12, 0, 0, 0);
  // //     newDateRange[1] = day;

  // //     // Dispatch check-out date to Redux
  // //     dispatch(setCheckOutDate(newDateRange[1]));
  // //   } else {
  // //     // Swap dates if the selected date is before the check-in date
  // //     newDateRange[1] = newDateRange[0];
  // //     newDateRange[0] = day;
  // //     setIsCalendarOpen(false);

  // //     // Dispatch both check-in and check-out dates to Redux
  // //     dispatch(setCheckInDate(newDateRange[0]));
  // //     dispatch(setCheckOutDate(newDateRange[1]));
  // //   }

  // //   setDateRange(newDateRange);
  // // };

  // const handleDayClick = (day) => {
  //   const newDateRange = [...dateRange];

  //   // Set time to noon (12:00 PM) to avoid timezone issues
  //   day.setHours(12, 0, 0, 0);

  //   if (!newDateRange[0] || newDateRange[1]) {
  //     // Only check-in date is selected or both dates are selected
  //     if (day < today) {
  //       // Prevent selection of past dates
  //       return;
  //     }

  //     newDateRange[0] = day;
  //     newDateRange[1] = null;

  //     // Dispatch check-in date to Redux
  //     dispatch(setCheckInDate(newDateRange[0]));
  //   } else if (day > newDateRange[0]) {
  //     // Check-out date is selected
  //     setIsCalendarOpen(false);
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

  const handleSearchClick = (hotel) => {
    navigate("/hotellist");
  };

  return (
    <div className=" relative container-fluid px-32  flex flex-row z-50 ">
      <div className="w-9/12">
        <p className="m-3 font-montserrat font-semibold text-3xl leading-10 text-blue-800">
          Save big on your next hotel
        </p>
        <div className=" space-y-4 border shadow-2xl rounded-3xl p-3 ">
          <ListBar />

          <div className="relative sm:w-full border-none rounded-3xl">
            <TextField
              ref={dropdownRef}
              onClick={handleInputBoxToggle}
              placeholder={`Where to? ${searchTerm}`} // Concatenate the locality name with the placeholder
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
                  </InputAdornment>
                ),
              }}
              className="w-full  border-2 rounded-lg border-blue-600"
            />

            {isDropdownserachBoxOpen && searchTerm && (
              <div className="z-50 bg-white w-full absolute top-full left-0 shadow  mt-2 h-56 overflow-y-auto border border-gray-300 rounded p-2 ">
                <div className="py-3 px-1 flex flex-row gap-2 hover:bg-slate-100  rounded-2xl">
                  {/* <MyLocationIcon onClick={() => initMap()} /> */}
                  <LiveLocation allData={allData} />
                  {/* <p>Use current location</p> */}
                </div>
                {/* {filteredData.map((item) => (
                  <div
                    key={item.id}
                    className="mb-2 cursor-pointer"
                    onClick={() => handleHotelClick(item)}
                  >
                    {item.address && (
                      <div>
                     

                        <div className="py-2 px-1 flex flex-row  hover:bg-slate-100  rounded-2xl">
                          {item.address.locality}
                        </div>
                      </div>
                    )}
                   
                  </div>
                ))} */}

                {/* {filteredData.map((item) => (
                  <div
                    key={item.id}
                    className="mb-2 cursor-pointer"
                    onClick={() => handleHotelClick(item)}
                  >
                    {item.address && (
                      <div>
                        <div className="py-2 px-1 flex flex-row hover:bg-slate-100 rounded-2xl">
                          <div>{item.address.locality}</div>
                          <div>{item.address.postal_code}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))} */}

                {filteredData.map((item) => (
                  <div
                    key={item.id}
                    className="mb-2 cursor-pointer"
                    // onClick={() => handleHotelClick(item)}
                    onClick={() => {
                      handleHotelClick(item);
                      // Close the dropdown
                    }}
                  >
                    {item.address && (
                      <div>
                        {/* <MyLocationIcon onClick={() => inreitMap()} /> */}
                        <div className="py-2 px-1 flex flex-row hover:bg-slate-100 rounded-2xl">
                          {/* Display the locality if it matches the search term, otherwise display the postal code */}
                          <div>
                            {searchTerm &&
                              item.address.locality &&
                              item.address.locality
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase()) && (
                                <div>{item.address.locality}</div>
                              )}
                            {searchTerm &&
                              item.address.postal_code &&
                              item.address.postal_code
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase()) && (
                                <div>{item.address.postal_code}</div>
                              )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row  justify-between text-blue-800 gap-3 ">
            {/* <div
              ref={dropdownRef}
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
                </div>
              </div>
              {isCalendarOpen && (
                <div className="w-auto absolute top-full left-0 bg-white border rounded shadow mt-2 ">
                  <DayPicker
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
              ref={dropdownRef}
              onClick={handleDayPickerToggle}
              className="relative rounded-xl flex items-center border-2 p-2 w-full sm:w-1/2"
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
                </div>
              </div>
              {isCalendarOpen && (
                <div className="w-auto absolute top-full left-0 bg-white border rounded shadow mt-2">
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
                <div
                  ref={dropdownRef}
                  className="py-2 w-full absolute top-full left-0 bg-white border rounded shadow mt-2"
                >
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

            <button
              onClick={handleSearchClick}
              className="bg-blue-800 rounded-xl p-2 items-center border-2 w-full sm:w-1/2"
            >
              <div className=" text-blue-800 font-bold flex items-center justify-center">
                <p className="text-white">Find Your Hotel</p>
              </div>
            </button>
          </div>
          <div className="flex justify-end  border-b-2 p-2 ">
            <div className="p-0 w-full sm:w-1/2 lg:w-1/2 flex justify-center">
              <p className="text-xs text-center">
                Book a hotel with free cancellation for flexibility
              </p>
            </div>
          </div>

          <div className="flex justify-center text-sm font-bold text-blue-600 ">
            <a>Book all of your hotels at once and save up to $625</a>
          </div>
        </div>
      </div>
      <div
        className=" relative   overflow-hidden grid place-items-center "
        style={containerStyle}
      >
        <img
          src={room5}
          className="rounded-tl-full rounded-bl-full"
          alt="Room 1"
          style={imgStyle}
        />
      </div>
    </div>
  );
};

export default Indexpage;
