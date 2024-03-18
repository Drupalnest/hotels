// import { CheckBox, Label } from "@mui/icons-material";
// import React from "react";
// import WifiIcon from "@mui/icons-material/Wifi";
// import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
// import LocalParkingIcon from "@mui/icons-material/LocalParking";
// import PetsIcon from "@mui/icons-material/Pets";
// import PoolIcon from "@mui/icons-material/Pool";
// const Amenties = () => {
//   return (
//     <div>
//       <Label className="flex flex-row">
//         <CheckBox />
//         <WifiIcon />
//         <p>Free Internet Access</p>
//         <p>216</p>
//       </Label>
//     </div>
//   );
// };

// export default Amenties;

// import React, { useState, useEffect, useRef } from "react";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Checkbox from "@mui/material/Checkbox";
// import WifiIcon from "@mui/icons-material/Wifi";
// import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
// import LocalParkingIcon from "@mui/icons-material/LocalParking";
// import PetsIcon from "@mui/icons-material/Pets";
// import PoolIcon from "@mui/icons-material/Pool";

// const Amenties = ({ hotels, airports, cruise, interest, city }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const allData = [...hotels, ...airports, ...cruise, ...interest, ...city];

//   const handleToggle = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         className="w-full transition duration-300 rounded-t-lg hover:bg-gray-200 p-2 border border-b-slate-800"
//         onClick={handleToggle}
//       >
//         <div className="flex justify-between items-center">
//           <span className="font-bold text-lg">Amenities</span>
//           <ExpandMoreIcon
//             style={{
//               transform: isOpen ? "rotate(180deg)" : "rotate(360deg)",
//             }}
//             className="text-blue-600 text-3xl rounded-full hover:bg-gray-300 transition duration-300"
//           />
//         </div>
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 w-full flex flex-col bg-white border border-t-0 p-4 rounded shadow-md">
//           <label className="flex items-center cursor-pointer hover:bg-gray-100 transition duration-300 py-2">
//             <Checkbox className="mr-3" color="primary" />
//             <div className="flex flex-row items-center justify-between w-full">
//               <div className="flex items-center">
//                 <BreakfastDiningIcon className="mr-2" />
//                 <p className="text-sm">Free Internet Access</p>
//               </div>
//               <div className="text-gray-500">(8)</div>
//             </div>
//           </label>

//           <label className="flex items-center cursor-pointer hover:bg-gray-100 transition duration-300 py-2">
//             <Checkbox className="mr-3" color="primary" />
//             <div className="flex flex-row items-center justify-between w-full">
//               <div className="flex items-center">
//                 <WifiIcon className="mr-2" />
//                 <p className="text-sm">Free Breakfast</p>
//               </div>
//               <div className="text-gray-500">(8)</div>
//             </div>
//           </label>

//           <label className="flex items-center cursor-pointer hover:bg-gray-100 transition duration-300 py-2">
//             <Checkbox className="mr-3" color="primary" />
//             <div className="flex flex-row items-center justify-between w-full">
//               <div className="flex items-center">
//                 <LocalParkingIcon className="mr-2" />
//                 <p className="text-sm">Free Parking</p>
//               </div>
//               <div className="text-gray-500">(8)</div>
//             </div>
//           </label>

//           <label className="flex items-center cursor-pointer hover:bg-gray-100 transition duration-300 py-2">
//             <Checkbox className="mr-3" color="primary" />
//             <div className="flex flex-row items-center justify-between w-full">
//               <div className="flex items-center">
//                 <PetsIcon className="mr-2" />
//                 <p className="text-sm">Pets Allowed</p>
//               </div>
//               <div className="text-gray-500">(8)</div>
//             </div>
//           </label>

//           <label className="flex items-center cursor-pointer hover:bg-gray-100 transition duration-300 py-2">
//             <Checkbox className="mr-3" color="primary" />
//             <div className="flex flex-row items-center justify-between w-full">
//               <div className="flex items-center">
//                 <PoolIcon className="mr-2" />
//                 <p className="text-sm">Swimming Pool</p>
//               </div>
//               <div className="text-gray-500">(8)</div>
//             </div>
//           </label>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Amenties;

// // Amenties.js
// import React, { useState, useEffect, useRef } from "react";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Checkbox from "@mui/material/Checkbox";
// import WifiIcon from "@mui/icons-material/Wifi";
// import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
// import LocalParkingIcon from "@mui/icons-material/LocalParking";
// import PetsIcon from "@mui/icons-material/Pets";
// import PoolIcon from "@mui/icons-material/Pool";

// const Amenties = ({ hotels, onFilterChange }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleToggle = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   const handleAmenityChange = (amenity) => {
//     onFilterChange(amenity);
//     handleClose();
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         className="w-full transition duration-300 rounded-t-lg hover:bg-gray-200 p-2 border border-b-slate-800"
//         onClick={handleToggle}
//       >
//         <div className="flex justify-between items-center">
//           <span className="font-bold text-lg">Amenities</span>
//           <ExpandMoreIcon
//             style={{
//               transform: isOpen ? "rotate(180deg)" : "rotate(360deg)",
//             }}
//             className="text-blue-600 text-3xl rounded-full hover:bg-gray-300 transition duration-300"
//           />
//         </div>
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 w-full flex flex-col bg-white border border-t-0 p-4 rounded shadow-md">
//           <label
//             className="flex items-center cursor-pointer hover:bg-gray-100 transition duration-300 py-2"
//             onClick={() => handleAmenityChange("Free Internet Access")}
//           >
//             <Checkbox className="mr-3" color="primary" />
//             <div className="flex flex-row items-center justify-between w-full">
//               <div className="flex items-center">
//                 <BreakfastDiningIcon className="mr-2" />
//                 <p className="text-sm">Free Internet Access</p>
//               </div>
//               <div className="text-gray-500">(8)</div>
//             </div>
//           </label>

//           {/* Add other amenities here using a similar pattern */}
//         </div>
//       )}
//     </div>
//   );
// };

// query MyQuery {
//   allHotel(filter: {amenities: {elemMatch: {name: {eq: "Pet Friendly"}}}}) {
//     totalCount
//     nodes {
//       id
//       name
//       drupal_id
//       drupal_internal__id
//       amenities {
//         name
//       }
//     }
//   }
// }
// export default Amenties;

// import React, { useState, useEffect, useRef } from "react";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Checkbox from "@mui/material/Checkbox";
// import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
// import LocalParkingIcon from "@mui/icons-material/LocalParking";
// import PetsIcon from "@mui/icons-material/Pets";
// import PoolIcon from "@mui/icons-material/Pool";
// import WifiIcon from  "@mui/icons-material/Wifi";

// const Amenities = ({ hotels, onFilterChange }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   console.log("hotels",hotels)
//   const handleToggle = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   const handleAmenityChange = (amenity) => {
//     onFilterChange(amenity);
//     handleClose();
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   // Extract unique amenities from hotels
//   const allAmenities = hotels.reduce((amenities, hotel) => {
//     hotel.amenities.forEach((amenity) => {
//       if (!amenities.includes(amenity.name)) {
//         amenities.push(amenity.name);
//       }
//     });
//     return amenities;
//   }, []);

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         className="w-full transition duration-300 rounded-t-lg hover:bg-gray-200 p-2 border border-b-slate-800"
//         onClick={handleToggle}
//       >
//         <div className="flex justify-between items-center">
//           <span className="font-bold text-lg">Amenities</span>
//           <ExpandMoreIcon
//             style={{
//               transform: isOpen ? "rotate(180deg)" : "rotate(360deg)",
//             }}
//             className="text-blue-600 text-3xl rounded-full hover:bg-gray-300 transition duration-300"
//           />
//         </div>
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 w-full flex flex-col bg-white border border-t-0 p-4 rounded shadow-md">
//           {allAmenities.map((amenity, index) => (
//             <label
//               key={index}
//               className="flex items-center cursor-pointer hover:bg-gray-100 transition duration-300 py-2"
//               onClick={() => handleAmenityChange(amenity)}
//             >
//               <Checkbox className="mr-3" color="primary" />
//               <div className="flex flex-row items-center justify-between w-full">
//                 <div className="flex items-center">
//                   {/* You can add icons based on amenity type */}
//                   {amenity === "Free Internet Access" && (
//                     <WifiIcon className="mr-2" />
//                   )}
//                   {amenity === "Breakfast Included" && (
//                     <BreakfastDiningIcon className="mr-2" />
//                   )}
//                   {amenity === "Parking Available" && (
//                     <LocalParkingIcon className="mr-2" />
//                   )}
//                   {amenity === "Pet Friendly" && <PetsIcon className="mr-2" />}
//                   {amenity === "Pool Access" && <PoolIcon className="mr-2" />}
//                   <p className="text-sm">{amenity}</p>
//                 </div>
//                 {/* You can display counts or other information related to the amenity */}
//                 <div className="text-gray-500">(Count)</div>
//               </div>
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Amenities;

// import React, { useState, useEffect, useRef } from "react";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Checkbox from "@mui/material/Checkbox";
// import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
// import LocalParkingIcon from "@mui/icons-material/LocalParking";
// import PetsIcon from "@mui/icons-material/Pets";
// import PoolIcon from "@mui/icons-material/Pool";
// import WifiIcon from "@mui/icons-material/Wifi";
// import { useDispatch, useSelector } from "react-redux";
// import { setFilteredHotels } from "../../redux/actions";

// const Amenities = ({ onFilterChange }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const filteredHotels = useSelector((state) => state.hotel.filteredHotels);
//   useEffect(() => {
//     // This will run whenever hotels in Redux store changes
//     console.log("Hotels in Redux store:", filteredHotels);
//   }, [filteredHotels]);
//   if (!filteredHotels || filteredHotels.length === 0) {
//     return <div>No hotel selected</div>;
//   }

//   const handleToggle = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   const handleAmenityChange = (amenity) => {
//     onFilterChange(amenity);
//     handleClose();
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   // Check if hotels is null or undefined
//   if (!filteredHotels) {
//     return <div>No hotels available</div>;
//   }

//   // Extract unique amenities from hotels
//   const allAmenities = filteredHotels.reduce((amenities, hotel) => {
//     // Check if hotel.amenities is null or undefined
//     if (hotel.amenities) {
//       hotel.amenities.forEach((amenity) => {
//         if (!amenities.includes(amenity.name)) {
//           amenities.push(amenity.name);
//         }
//       });
//     }
//     return amenities;
//   }, []);

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         className="w-full transition duration-300 rounded-t-lg hover:bg-gray-200 p-2 border border-b-slate-800"
//         onClick={handleToggle}
//       >
//         <div className="flex justify-between items-center">
//           <span className="font-bold text-lg">Amenities</span>
//           <ExpandMoreIcon
//             style={{
//               transform: isOpen ? "rotate(180deg)" : "rotate(360deg)",
//             }}
//             className="text-blue-600 text-3xl rounded-full hover:bg-gray-300 transition duration-300"
//           />
//         </div>
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 w-full flex flex-col bg-white border border-t-0 p-4 rounded shadow-md">
//           {allAmenities.map((amenity, index) => (
//             <label
//               key={index}
//               className="flex items-center cursor-pointer hover:bg-gray-100 transition duration-300 py-2"
//               onClick={() => handleAmenityChange(amenity)}
//             >
//               <Checkbox className="mr-3" color="primary" />
//               <div className="flex flex-row items-center justify-between w-full">
//                 <div className="flex items-center">
//                   {/* You can add icons based on amenity type */}
//                   {amenity === "Free Internet Access" && (
//                     <WifiIcon className="mr-2" />
//                   )}
//                   {amenity === "Breakfast Included" && (
//                     <BreakfastDiningIcon className="mr-2" />
//                   )}
//                   {amenity === "Parking Available" && (
//                     <LocalParkingIcon className="mr-2" />
//                   )}
//                   {amenity === "Pet Friendly" && <PetsIcon className="mr-2" />}
//                   {amenity === "Pool Access" && <PoolIcon className="mr-2" />}
//                   <p className="text-sm">{amenity}</p>
//                 </div>
//                 {/* You can display counts or other information related to the amenity */}
//                 <div className="text-gray-500">(Count)</div>
//               </div>
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Amenities;

// import React, { useState, useEffect, useRef } from "react";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Checkbox from "@mui/material/Checkbox";
// import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
// import LocalParkingIcon from "@mui/icons-material/LocalParking";
// import PetsIcon from "@mui/icons-material/Pets";
// import PoolIcon from "@mui/icons-material/Pool";
// import WifiIcon from "@mui/icons-material/Wifi";
// import { useDispatch, useSelector } from "react-redux";
// import { setFilteredHotels } from "../../redux/actions";

// const Amenities = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const dispatch = useDispatch();

//   const storedFilteredHotels =
//     JSON.parse(sessionStorage.getItem("filteredHotels")) || [];

//   // useEffect(() => {
//   //   // Dispatch filtered hotels to Redux when component mounts
//   //   dispatch(setFilteredHotels(storedFilteredHotels));
//   // }, []); // Empty dependency array ensures this effect runs only once when the component mounts

//   useEffect(() => {
//     // This will run whenever hotels in Redux store changes
//     console.log(
//       "storedFilteredHotels Hotels in session store:",
//       storedFilteredHotels
//     );
//   }, [storedFilteredHotels]);

//   const handleToggle = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   const handleAmenityChange = (amenity) => {
//     const allHotels = useSelector((state) => state.hotel.hotels); // Get all hotels from Redux store
//     const updatedHotels = allHotels.filter((hotel) => {
//       // Check if hotel is not null and has the amenities property and is an array
//       if (hotel && hotel.amenities && Array.isArray(hotel.amenities)) {
//         return hotel.amenities.includes(amenity);
//       }
//       return false; // Exclude null or invalid hotels
//     });
//     dispatch(setFilteredHotels(updatedHotels)); // Dispatch updated hotels to Redux

//     console.log("updatedHotels Hotels in Redux store:", updatedHotels);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   const allAmenities = [
//     "Wireless Internet",
//     "Breakfast",
//     "Parking",
//     "Pet Friendly",
//     "Swimming Pool",
//   ];

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         className="w-full transition duration-300 rounded-t-lg hover:bg-gray-200 p-2 border border-b-slate-800"
//         onClick={handleToggle}
//       >
//         <div className="flex justify-between items-center">
//           <span className="font-bold text-lg">Amenities</span>
//           <ExpandMoreIcon
//             style={{
//               transform: isOpen ? "rotate(180deg)" : "rotate(360deg)",
//             }}
//             className="text-blue-600 text-3xl rounded-full hover:bg-gray-300 transition duration-300"
//           />
//         </div>
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 w-full flex flex-col bg-white border border-t-0 p-4 rounded shadow-md">
//           {allAmenities.map((amenity, index) => (
//             <label
//               key={index}
//               className="flex items-center cursor-pointer hover:bg-gray-100 transition duration-300 py-2"
//             >
//               <Checkbox
//                 className="mr-3"
//                 color="primary"
//                 onChange={() => handleAmenityChange(amenity)}
//               />
//               <div className="flex flex-row items-center justify-between w-full">
//                 <div className="flex items-center">
//                   {amenity === "Wireless Internet" && (
//                     <WifiIcon className="mr-2" />
//                   )}
//                   {amenity === "Breakfast" && (
//                     <BreakfastDiningIcon className="mr-2" />
//                   )}
//                   {amenity === "Parking" && (
//                     <LocalParkingIcon className="mr-2" />
//                   )}
//                   {amenity === "Pet Friendly" && <PetsIcon className="mr-2" />}
//                   {amenity === "Swimming Pool" && <PoolIcon className="mr-2" />}
//                   <p className="text-sm">{amenity}</p>
//                 </div>
//               </div>
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Amenities;

// Amenities.js
import React, { useState, useEffect, useRef } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import PetsIcon from "@mui/icons-material/Pets";
import PoolIcon from "@mui/icons-material/Pool";
import WifiIcon from "@mui/icons-material/Wifi";

const Amenities = ({ onAmenityChange, hotels }) => {
  // Pass hotels as props
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);


  console.log("ammenities hotels", hotels)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const allAmenities = [
    "Wireless Internet",
    "Breakfast",
    "Parking",
    "Pet Friendly",
    "Swimming Pool",
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="w-full transition duration-300 rounded-t-lg hover:bg-gray-200 p-2 border border-b-slate-800"
        onClick={handleToggle}
      >
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">Amenities</span>
          <ExpandMoreIcon
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(360deg)",
            }}
            className="text-blue-600 text-3xl rounded-full hover:bg-gray-300 transition duration-300"
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full flex flex-col bg-white border border-t-0 p-4 rounded shadow-md">
          {allAmenities.map((amenity, index) => (
            <label
              key={index}
              className="flex items-center cursor-pointer hover:bg-gray-100 transition duration-300 py-2"
            >
              <Checkbox
                className="mr-3"
                color="primary"
                onChange={() => onAmenityChange(amenity, hotels)} // Pass hotels to onAmenityChange
              />
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex items-center">
                  {amenity === "Wireless Internet" && (
                    <WifiIcon className="mr-2" />
                  )}
                  {amenity === "Breakfast" && (
                    <BreakfastDiningIcon className="mr-2" />
                  )}
                  {amenity === "Parking" && (
                    <LocalParkingIcon className="mr-2" />
                  )}
                  {amenity === "Pet Friendly" && <PetsIcon className="mr-2" />}
                  {amenity === "Swimming Pool" && <PoolIcon className="mr-2" />}
                  <p className="text-sm">{amenity}</p>
                </div>
              </div>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Amenities;

// import React, { useState, useEffect, useRef } from "react";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Checkbox from "@mui/material/Checkbox";
// import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
// import LocalParkingIcon from "@mui/icons-material/LocalParking";
// import PetsIcon from "@mui/icons-material/Pets";
// import PoolIcon from "@mui/icons-material/Pool";
// import WifiIcon from '@mui/icons-material/Wifi';

// const Amenities = ({ hotels, onFilterChange }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleToggle = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   const handleAmenityChange = (amenity) => {
//     onFilterChange(amenity);
//     handleClose();
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   // Extract unique amenities from hotels if hotels is not null
//   const allAmenities = hotels
//     ? hotels.reduce((amenities, hotel) => {
//         hotel.amenities.forEach((amenity) => {
//           if (!amenities.includes(amenity.name)) {
//             amenities.push(amenity.name);
//           }
//         });
//         return amenities;
//       }, [])
//     : [];

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         className="w-full transition duration-300 rounded-t-lg hover:bg-gray-200 p-2 border border-b-slate-800"
//         onClick={handleToggle}
//       >
//         <div className="flex justify-between items-center">
//           <span className="font-bold text-lg">Amenities</span>
//           <ExpandMoreIcon
//             style={{
//               transform: isOpen ? "rotate(180deg)" : "rotate(360deg)",
//             }}
//             className="text-blue-600 text-3xl rounded-full hover:bg-gray-300 transition duration-300"
//           />
//         </div>
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 w-full flex flex-col bg-white border border-t-0 p-4 rounded shadow-md">
//           {allAmenities.map((amenity, index) => (
//             <label
//               key={index}
//               className="flex items-center cursor-pointer hover:bg-gray-100 transition duration-300 py-2"
//               onClick={() => handleAmenityChange(amenity)}
//             >
//               <Checkbox className="mr-3" color="primary" />
//               <div className="flex flex-row items-center justify-between w-full">
//                 <div className="flex items-center">
//                   {/* You can add icons based on amenity type */}
//                   {amenity === "Free Internet Access" && <WifiIcon className="mr-2" />}
//                   {amenity === "Breakfast Included" && <BreakfastDiningIcon className="mr-2" />}
//                   {amenity === "Parking Available" && <LocalParkingIcon className="mr-2" />}
//                   {amenity === "Pet Friendly" && <PetsIcon className="mr-2" />}
//                   {amenity === "Pool Access" && <PoolIcon className="mr-2" />}
//                   <p className="text-sm">{amenity}</p>
//                 </div>
//                 {/* You can display counts or other information related to the amenity */}
//                 <div className="text-gray-500">(Count)</div>
//               </div>
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Amenities;
