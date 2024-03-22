// import React from "react";
// import CheckIcon from '@mui/icons-material/Check';
// import Button from "@mui/material/Button";

// const Amenities = ({ amenities }) => (
//   <div className="container mx-auto p-4 border border-b border-gray-700">
//     <h1 className="text-2xl font-bold mb-4">Amenities</h1>
//     <div className="flex flex-wrap m-auto justify-center border border-red-500 ">
//       <div className="w-full sm:w-1/2 lg:w-1/3 p-3 border border-gray-400">
//         <h3 className="text-lg font-bold mb-2">Room Amenities (34)</h3>
//         <ul>
//           {[...Array(6)].map((_, index) => (
//             <li key={index} className="flex items-center mb-2">
//               <CheckIcon style={{ color: "green" }} />
//               <span className="ml-2">Allergy-free rooms available</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="w-full sm:w-1/2 lg:w-1/3 p-3 border border-gray-400">
//         <h3 className="text-lg font-bold mb-2">Room Amenities (34)</h3>
//         <ul>
//           {[...Array(6)].map((_, index) => (
//             <li key={index} className="flex items-center mb-2">
//               <CheckIcon style={{ color: "green" }} />
//               <span className="ml-2">Coffee/tea maker</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="w-full sm:w-1/2 lg:w-1/3 p-3 border border-gray-400">
//         <h3 className="text-lg font-bold mb-2">Room Amenities (34)</h3>
//         <ul>
//           {[...Array(6)].map((_, index) => (
//             <li key={index} className="flex items-center mb-2">
//               <CheckIcon style={{ color: "green" }} />
//               <span className="ml-2">Ironing amenities</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {/* Repeat the same structure for other divs */}
//     </div>
//     <div className="flex justify-center p-3">
//       <button className="bg-gray-300 hover:bg-blue-700 hover:text-white text-blue-500 font-bold py-2 px-4 rounded-full">
//         Show All Amenities
//       </button>
//     </div>
//   </div>
// );

// export default Amenities;

import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";

const Amenities = ({ amenities }) => (
  <div className="container mx-auto p-4 border border-b border-gray-700">
    <h1 className="text-2xl font-bold mb-4">Amenities</h1>
    <div className="flex flex-wrap m-auto justify-center border border-red-500 ">
      <div className="flex justify-between  gap-3">
        <div className="w-1/2 p-3 border border-gray-400">
          <h3 className="text-lg font-bold mb-2">Room Amenities </h3>
          <ul>
            {amenities
              .slice(0, Math.ceil(amenities.length / 2))
              .map((amenity) => (
                <li
                  key={amenity.machine_name}
                  className="flex items-center mb-2"
                >
                  <CheckIcon style={{ color: "green" }} />
                  <span className="ml-2">{amenity.name}</span>
                </li>
              ))}
          </ul>
        </div>
        <div className="w-1/2 p-3 border border-gray-400">
          <h3 className="text-lg font-bold mb-2">Room Amenities </h3>
          <ul>
            {amenities.slice(Math.ceil(amenities.length / 2)).map((amenity) => (
              <li key={amenity.machine_name} className="flex items-center mb-2">
                <CheckIcon style={{ color: "green" }} />
                <span className="ml-2">{amenity.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="flex justify-center p-3">
      <button className="bg-gray-300 hover:bg-blue-700 hover:text-white text-blue-500 font-bold py-2 px-4 rounded-full">
        Show All Amenities
      </button>
    </div>
  </div>
);

export default Amenities;

// import React, { useState } from "react";
// import CheckIcon from "@mui/icons-material/Check";
// import Button from "@mui/material/Button";

// const Amenities = ({ amenities }) => {
//   const [showAllAmenities, setShowAllAmenities] = useState(false);

//   const visibleAmenities = showAllAmenities ? amenities : amenities.slice(0, 6);

//   return (
//     <div className="container mx-auto p-4 border border-b border-gray-700">
//       <h1 className="text-2xl font-bold mb-4">Amenities</h1>
//       <div className="flex flex-wrap m-auto justify-center border border-red-500">
//         {visibleAmenities.map((amenity) => (
//           <div key={amenity.machine_name} className="w-full sm:w-1/2 lg:w-1/3 p-3 border border-gray-400">
//             <h3 className="text-lg font-bold mb-2">{amenity.name}</h3>
//             <ul>
//               <li className="flex items-center mb-2">
//                 <CheckIcon style={{ color: "green" }} />
//                 <span className="ml-2">{amenity.name}</span>
//               </li>
//               {/* Repeat as needed */}
//             </ul>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center p-3">
//         <button
//           className="bg-gray-300 hover:bg-blue-700 hover:text-white text-blue-500 font-bold py-2 px-4 rounded-full"
//           onClick={() => setShowAllAmenities(!showAllAmenities)}
//         >
//           {showAllAmenities ? "Hide Amenities" : "Show All Amenities"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Amenities;
