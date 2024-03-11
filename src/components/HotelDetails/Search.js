 
import React, { useState } from "react";
import { FormControlLabel, FormGroup, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 
const Search = () => {
  const [selectedDate, setSelectedDate] = useState(null);
 
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#0000FF",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#0000FF",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#808080" : "#0000FF",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));
 
  return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row border border-blue-600">
      {/* Search Inputs */}
      <div className="w-full sm:w-full md:w-full lg:w-full xl:w-1/1 flex flex-col sm:flex-row  gap-2 bg-slate-500 border border-gray-900 rounded-xl p-2">
        {/* Check-in and Check-out Inputs */}
        <DatePicker
          selected={selectedDate}
          
          onChange={(date) => setSelectedDate(date)}
        />
 
        {/* <TextField
        label="Check-in - check-out"
        variant="outlined"
        className=" w-full sm:w-64 h-12 sm:h-14 bg-white rounded-2xl"
      /> */}
 
        {/* Update Search Button */}
        <button className="h-10 sm:h-14 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 sm:px-6 py-1 sm:py-2 rounded-2xl">
          Update Search
        </button>
 
        <div className="flex flex-col sm:flex-row bg-slate-500 border border-gray-900 rounded-xl ">
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
        </div>
      </div>
    </div>
  );
};
 
export default Search;
 