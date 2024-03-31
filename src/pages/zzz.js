// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { DayPicker } from "react-day-picker";
// import "react-datepicker/dist/react-datepicker.css";
// import "react-day-picker/dist/style.css";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import { setCheckInDate, setCheckOutDate } from "../redux/actions"; // Import your Redux action creators
// function formatTime(time, prefix = "") {
//   if (typeof time === "object") {
//     const year = time.getFullYear();
//     const month = String(time.getMonth() + 1).padStart(2, "0");
//     const day = String(time.getDate()).padStart(2, "0");
//     return prefix + `${month}/${day}/${year}`;
//   }
//   return "";
// }

// const YourComponent = () => {
//   const dispatch = useDispatch();
//   const checkInDate = useSelector((state) => state.date.checkInDate);
//   const checkOutDate = useSelector((state) => state.date.checkOutDate);
//   const [localCheckInDate, setLocalCheckInDate] = useState(checkInDate);
//   const [localCheckOutDate, setLocalCheckOutDate] = useState(checkOutDate);
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   const today = new Date();
//   const tomorrow = new Date(today);
//   tomorrow.setDate(today.getDate() + 1);

//   const formatDate = (date) => {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const day = String(date.getDate()).padStart(2, "0");
//     return `${month}/${day}/${year}`;
//   };

//   useEffect(() => {
//     setLocalCheckInDate(checkInDate);
//     setLocalCheckOutDate(checkOutDate);
//   }, [checkInDate, checkOutDate]);

//   const handleDayPickerToggle = () => {
//     setIsCalendarOpen(!isCalendarOpen);
//   };

//   const handleDayClick = (day) => {
//     // Set time to noon (12:00 PM) to avoid timezone issues
//     day.setHours(12, 0, 0, 0);

//     if (!localCheckInDate || localCheckOutDate) {
//       // If check-in date is not set or both dates are already selected, set the check-in date
//       setLocalCheckInDate(day);
//       setLocalCheckOutDate(null); // Clear check-out date
//       dispatch(setCheckInDate(day)); // Pass the selected date to the action
//       dispatch(setCheckOutDate(null)); // Clear check-out date in Redux
//     } else if (day > localCheckInDate) {
//       // If check-out date is not set and selected date is after check-in date, set the check-out date
//       setLocalCheckOutDate(day);

//       // Update check-out date in Redux only if the selected date is ahead of the current check-in date
//       if (day > checkInDate) {
//         dispatch(setCheckOutDate(day)); // Pass the selected date to the action
//       }

//       setIsCalendarOpen(false);
//     } else {
//       // Reset both check-in and check-out dates
//       setLocalCheckInDate(day);
//       setLocalCheckOutDate(null);
//       dispatch(setCheckInDate(day)); // Pass the selected date to the action
//       dispatch(setCheckOutDate(null)); // Pass null to clear the check-out date in Redux
//     }
//   };

//   return (
//     <div
//       className="relative rounded-xl flex items-center border-2 p-2 w-full sm:w-1/2"
//       onClick={handleDayPickerToggle}
//     >
//       <div className="mr-2">
//         <CalendarMonthIcon className="font-montserrat font-bold text-2xl leading-10 text-orange-800" />
//       </div>
//       <div className="flex flex-col">
//         <div>
//           <p className="text-sm font-bold">Check-in - Check-out</p>
//         </div>
//         <div>
//           <p>
//             {`${formatTime(
//               localCheckInDate || today,
//               localCheckInDate ? "" : `${formatDate(today)} - `
//             )}${
//               localCheckInDate && localCheckOutDate
//                 ? " - " +
//                   (formatTime(
//                     localCheckOutDate || tomorrow,
//                     localCheckOutDate ? "" : `${formatDate(tomorrow)} - `
//                   ) || "")
//                 : ""
//             }`}
//           </p>
//         </div>
//       </div>
//       {isCalendarOpen && (
//         <div className="w-auto absolute top-full left-0 bg-white border rounded shadow mt-2">
//           <DayPicker
//             onClick={handleDayPickerToggle}
//             selectedDays={[
//               localCheckInDate,
//               { from: localCheckInDate, to: localCheckOutDate },
//             ]}
//             numberOfMonths={2}
//             onDayClick={handleDayClick}
//             placeholderText="Check-in Check-out"
//             className="focus:outline-none focus:border-orange-500"
//             modifiers={{
//               disabled: { before: today },
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default YourComponent;


import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DayPicker } from "react-day-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-day-picker/dist/style.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { setCheckInDate, setCheckOutDate } from "../redux/actions";

function formatTime(time, prefix = "") {
  if (time && typeof time === "object") {
    const year = time.getFullYear();
    const month = String(time.getMonth() + 1).padStart(2, "0");
    const day = String(time.getDate()).padStart(2, "0");
    return prefix + `${month}/${day}/${year}`;
  }
  return "";
}

const YourComponent = () => {
  const dispatch = useDispatch();
  const checkInDate = useSelector((state) => state.date.checkInDate);
  const checkOutDate = useSelector((state) => state.date.checkOutDate);
  console.log("checkInDate", checkInDate, "checkOutDate", checkOutDate);

  // Initialize localCheckInDate to today and localCheckOutDate to tomorrow
 // Initialize localCheckInDate to today at noon and localCheckOutDate to tomorrow at noon
const [localCheckInDate, setLocalCheckInDate] = useState(() => {
    const todayAtNoon = new Date();
    todayAtNoon.setHours(12, 0, 0, 0);
    return todayAtNoon;
  });
  const [localCheckOutDate, setLocalCheckOutDate] = useState(() => {
    const tomorrowAtNoon = new Date();
    tomorrowAtNoon.setDate(tomorrowAtNoon.getDate() + 1);
    tomorrowAtNoon.setHours(12, 0, 0, 0);
    return tomorrowAtNoon;
  });
  

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const today = new Date();

  useEffect(() => {
    setLocalCheckInDate(checkInDate);
    setLocalCheckOutDate(checkOutDate);
  }, [checkInDate, checkOutDate]);

  useEffect(() => {
    // Dispatch initial check-in and check-out dates when component mounts
    dispatch(setCheckInDate(localCheckInDate));
    dispatch(setCheckOutDate(localCheckOutDate));
  }, []); // Empty dependency array ensures this effect runs only once, on mount

  const handleDayPickerToggle = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleDayClick = (day) => {
    // Set time to noon (12:00 PM) to avoid timezone issues
    day.setHours(12, 0, 0, 0);

    if (!localCheckInDate || localCheckOutDate) {
      // If check-in date is not set or both dates are already selected, set the check-in date
      setLocalCheckInDate(day);
      setLocalCheckOutDate(null); // Clear check-out date
      dispatch(setCheckInDate(day)); // Pass the selected date to the action
      dispatch(setCheckOutDate(null)); // Clear check-out date in Redux
    } else if (day > localCheckInDate) {
      // If check-out date is not set and selected date is after check-in date, set the check-out date
      setLocalCheckOutDate(day);

      // Update check-out date in Redux only if the selected date is ahead of the current check-in date
      if (day > localCheckInDate) {
        dispatch(setCheckOutDate(day)); // Pass the selected date to the action
      }

      setIsCalendarOpen(false);
    } else {
      // Reset both check-in and check-out dates
      setLocalCheckInDate(day);
      setLocalCheckOutDate(null);
      dispatch(setCheckInDate(day)); // Pass the selected date to the action
      dispatch(setCheckOutDate(null)); // Pass null to clear the check-out date in Redux
    }
  };

  return (
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
            selectedDays={[
              localCheckInDate,
              { from: localCheckInDate, to: localCheckOutDate },
            ]}
            numberOfMonths={2}
            onDayClick={handleDayClick}
            placeholderText="Check-in Check-out"
            className="focus:outline-none focus:border-orange-500"
            modifiers={{
              disabled: { before: today },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default YourComponent;
