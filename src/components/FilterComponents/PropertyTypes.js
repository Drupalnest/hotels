// import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// export default function AccordionWithCheckboxes() {
//   const [checked1, setChecked1] = React.useState(false);
//   const [checked2, setChecked2] = React.useState(false);

//   const handleCheckboxChange = (checkboxNumber) => {
//     if (checkboxNumber === 1) {
//       setChecked1(!checked1);
//     } else if (checkboxNumber === 2) {
//       setChecked2(!checked2);
//     }
//   };

//   return (
//     <div>
//       <button className="border-2">
//         Property Types
//         <ExpandMoreIcon className="text-blue-600 text-2xl p-2 border-rounded " />
//       </button>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1-content"
//           id="panel1-header"
//         >
//           Accordion 1
//         </AccordionSummary>
//         <div style={{ paddingLeft: "16px" }}>
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={checked1}
//                 onChange={() => handleCheckboxChange(1)}
//               />
//             }
//             label="Checkbox 1"
//           />
//         </div>
//         <div style={{ paddingLeft: "16px" }}>
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={checked1}
//                 onChange={() => handleCheckboxChange(1)}
//               />
//             }
//             label="Checkbox 2"
//           />
//         </div>
//         <div style={{ paddingLeft: "16px" }}>
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={checked1}
//                 onChange={() => handleCheckboxChange(1)}
//               />
//             }
//             label="Checkbox 3"
//           />
//         </div>
//       </Accordion>
//     </div>
//   );
// }

import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DropdownButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        className=" w-full rounded-t-lg  hover:bg-gray-200 p-4 border-b "
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <div className="flex justify-between ">
          <span className=" font-bold text-lg ">Property Types</span>
          <ExpandMoreIcon className="text-blue-600 text-3xl rounded-full hover:bg-gray-300 transition duration-300" />
        </div>
      </button>


      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="w-full"
      >
        <MenuItem classonClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownButton;



// all: unset;
// display: flex;
// -webkit-box-pack: justify;
// justify-content: space-between;
// width: 100%;
// padding: 4px;
// border-bottom: 1px solid rgb(192, 202, 213);
// box-sizing: border-box;

