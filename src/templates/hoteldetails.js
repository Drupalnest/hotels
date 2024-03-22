// import React, { useEffect, useState } from "react";
// import { Link, graphql } from "gatsby";
// import { Button, Card, Input, PopoverPaper } from "@mui/material";
// import Footer from "../components/Footer";
// //import Navbar from "../components/Header";
// import ImageSlider from "../components/ImageSlider";
// import PlaceIcon from "@mui/icons-material/Place";
// import IosShareIcon from "@mui/icons-material/IosShare";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import CachedIcon from "@mui/icons-material/Cached";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import WifiIcon from "@mui/icons-material/Wifi";
// import PetsIcon from "@mui/icons-material/Pets";
// import VapeFreeIcon from "@mui/icons-material/VapeFree";
// import AccessibleIcon from "@mui/icons-material/Accessible";
// import TextField from "@mui/material/TextField";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DatePicker from "@mui/lab/DatePicker";

// import Amenities from "../components/HotelDetails/Amenities ";
// import AboutHotel from "../components/HotelDetails/AboutHotel";
// import GuestPolicies from "../components/HotelDetails/GuestPolicies ";
// import ReviewBox from "../components/HotelDetails/ReviewBox";
// import RatingSection from "../components/HotelDetails/RatingBar";
// import Typography from "@mui/material/Typography";
// import GoogleMapComponent from "../components/HotelDetails/GoogleMapComponent";
// import Search from "../components/HotelDetails/Search";
// import HotelDetailsComponent from "../components/HotelList/HotelDetailss";
// import HeaderSearchBox from "../components/SearchComponents/HeaderSearchBox";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import SearchData from "../components/data/SearchData";
// import RoomSearch from "../components/HotelDetailsPage/RoomSearch";
// import Navbar from "../components/Navbar/Navbar";
// import { useDispatch, useSelector } from "react-redux";
// import { setCheckInDate, setCheckOutDate } from "../redux/actions";
// import RoomCard from "../components/HotelDetailsPage/RoomCard";

// const HotelDetails = ({ data }) => {
//   const hotel = data.allHotel.edges[0]?.node;

//   const [selectedItem, setSelectedItem] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);

//   const dispatch = useDispatch();
//   const checkInDate = useSelector((state) => state.date.checkInDate);
//   const checkOutDate = useSelector((state) => state.date.checkOutDate);

//   console.log("checkInDate", checkInDate, "checkOutDate", checkOutDate);

//   useEffect(() => {
//     // Handle date changes
//     console.log("Selected Date:", selectedDate);
//   }, [selectedDate]);
//   const handleItemClick = (index) => {
//     setSelectedItem(index);
//   };

//   if (!hotel) {
//     return <p>No hotel details found.</p>;
//   }

//   const containerStyle = {
//     width: "100%",
//     height: "400px",
//   };

//   const scrollLeft = () => {
//     document.getElementById("image-gallery").scrollLeft -= 300; // Adjust scroll distance as needed
//   };

//   const scrollRight = () => {
//     document.getElementById("image-gallery").scrollLeft += 300; // Adjust scroll distance as needed
//   };

//   const getAmenityIcon = (amenityName) => {
//     switch (amenityName) {
//       case "Wifi":
//         return <WifiIcon className="mr-2" />;
//       case "Pets":
//         return <PetsIcon className="mr-2" />;
//       case "VapeFree":
//         return <VapeFreeIcon className="mr-2" />;
//       case "Accessible":
//         return <AccessibleIcon className="mr-2" />;
//       default:
//         return <FiberManualRecordIcon className="mr-2" />; // Default icon
//     }
//   };

//   const handleDataFetched = (fetchedData) => {
//     if (fetchedData && Array.isArray(fetchedData.hotels)) {
//       console.log("Fetched Hotels Data:", fetchedData.hotels);
//       // Do something with the fetched data, e.g., set it in the component state
//     } else {
//       console.error("Invalid or undefined data structure:", fetchedData);
//     }
//   };

//   const hotels = data?.allHotel?.nodes || [];
//   console.log("hotels", hotels);
//   const airports = data?.allLocationAirport?.nodes || [];
//   console.log("airports", airports);
//   const city = data?.allLocationCity?.nodes || [];
//   console.log("city", city);
//   const cruise = data?.allLocationCruise?.nodes || [];
//   console.log("cruise", cruise);
//   const interest = data?.allLocationPointOfInterest?.nodes || [];
//   console.log("interest", interest);
//   // console.log("hotelsdfdv",hotels)

//   return (
//     <div className="py-2 container-fluid flex flex-col justify-center">
//       <Navbar />
//       <div className=" flex justify-center items-center">
//         <Link
//           className="flex mr-3 font-bold text-blue-600 hover:underline"
//           to="/hotellist"
//         >
//           <p>
//             <KeyboardArrowLeftIcon />
//           </p>
//           <p>Back to Listings</p>
//         </Link>
//         <HeaderSearchBox
//           hotels={hotels}
//           airports={airports}
//           city={city}
//           cruise={cruise}
//           interest={interest}
//         />
//       </div>

//       {/* <Navbar /> */}
//       <ImageSlider />

//       {/* <div className="container-fluid flex flex-row overflow-x-auto">
//         <div className="flex">
//           {Array.from({ length: 15 }).map((_, index) => (
//             <div key={index} className="w-96 h-80 p-2">
//               <img
//                 src={`https://via.placeholder.com/800x600?text=Image${
//                   index + 1
//                 }`}
//                 className="w-full h-full object-cover rounded"
//                 alt={`Image ${index + 1}`}
//               />
//             </div>
//           ))}
//         </div>
//       </div> */}
//       <div className="container-fluid  flex  justify-center border-b border-gray-500">
//         <div className="container ">
//           <div className="hidden md:flex flex-wrap list-none">
//             <li
//               className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
//                 selectedItem === 0 ? "border-2 border-blue-500" : ""
//               }`}
//               onClick={() => handleItemClick(0)}
//             >
//               Overview & Photos
//             </li>
//             <li
//               className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
//                 selectedItem === 1 ? "border-2 border-blue-500" : ""
//               }`}
//               onClick={() => handleItemClick(1)}
//             >
//               Rooms
//             </li>
//             <li
//               className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
//                 selectedItem === 2 ? "border-2 border-blue-500" : ""
//               }`}
//               onClick={() => handleItemClick(2)}
//             >
//               Amenities
//             </li>
//             <li
//               className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
//                 selectedItem === 3 ? "border-2 border-blue-500" : ""
//               }`}
//               onClick={() => handleItemClick(3)}
//             >
//               About
//             </li>
//             <li
//               className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
//                 selectedItem === 4 ? "border-2 border-blue-500" : ""
//               }`}
//               onClick={() => handleItemClick(4)}
//             >
//               Reviews
//             </li>
//             <li
//               className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
//                 selectedItem === 5 ? "border-2 border-blue-500" : ""
//               }`}
//               onClick={() => handleItemClick(5)}
//             >
//               Map
//             </li>
//           </div>
//         </div>
//       </div>

//       <div className="container p-0 mx-auto flex flex-col justify-center border border-red-500">
//         {/* <div className="flex flex-wrap p-1 border-b border-gray-500">
//           <div className="w-full md:w-8/12 mb-4 md:mb-0">
//             <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>

//             <span className="flex items-center">
//               <p className="text-gray-600">5-STAR HOTEL Luxury</p>
//               <p className="text-gray-700 ml-2">
//                 <PlaceIcon className="text-blue-500" />
//               </p>
//               <p className="text-blue-500 ml-1">View Map</p>
//             </span>

//             <span className="flex mt-1 items-center">
//               <p className="text-gray-600 bg-gray-300 px-1 py-1 rounded-full mr-1">
//                 TOP BOOKED HOTEL
//               </p>
//               <p className="text-red-600">
//                 30 people are looking at this hotel
//               </p>
//             </span>

//             <div className="flex mt-1 gap-1">
//               <Button className="border border-blue-700 bg-white-500 hover:bg-blue-700 text-blue hover:text-white font-bold py-2 px-4 rounded-full">
//                 <IosShareIcon className="text-md" />
//                 Share
//               </Button>

//               <Button className="bg-white-500 hover:bg-blue-700 text-blue hover:text-white font-bold py-2 px-4 rounded-full">
//                 <FavoriteBorderIcon className="text-md" />
//                 Save
//               </Button>
//             </div>
//           </div>

//           <div className="w-full md:w-4/12 text-left md:text-right">
//             <h1 className="text-3xl font-bold mb-2">$312</h1>
//             <p className="text-gray-600">Price per night</p>
//             <Button color="primary" className="mt-4">
//               Choose Your Room
//             </Button>
//           </div>
//         </div> */}
//         <div className="flex flex-wrap p-4 border-b border-gray-500">
//           <div className="w-full md:w-8/12 mb-4 md:mb-0">
//             <p className="text-2xl font-bold mb-2 text-gray-800">
//               {hotel.name}
//             </p>

//             <div className="flex items-center mb-2">
//               <p className="text-gray-600 font-bold text-sm">
//                 5-STAR HOTEL Luxury
//               </p>
//               <p className="text-blue-500 ml-2">
//                 <PlaceIcon className="text-lg" />
//               </p>
//               <p className="text-blue-500 ml-1 font-bold text-sm cursor-pointer">
//                 View Map
//               </p>
//             </div>

//             <div className="flex items-center mb-4">
//               <p className="text-pink-600 text-sm font-bold bg-gray-300 px-1  rounded-full mr-2">
//                 TOP BOOKED HOTEL
//               </p>
//               <p className="text-red-600 text-sm">
//                 30 people are looking at this hotel
//               </p>
//             </div>

//             <div className="flex gap-3">
//               <button className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white font-bold py-1 px-2 rounded-full flex items-center text-xs underline">
//                 <IosShareIcon className="text-md mr-1" />
//                 Share
//               </button>

//               <button className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white font-bold py-1 px-2 rounded-full flex items-center text-xs underline">
//                 <FavoriteBorderIcon className="text-md mr-1" />
//                 Save
//               </button>
//             </div>
//           </div>

//           <div className="w-full md:w-4/12 text-left md:text-right">
//             <h1 className="text-2xl md:text-4xl font-bold mb-2 text-blue-700">
//               {/* ${hotel.price} */}
//               ₹13075
//             </h1>
//             <p className="text-sm md:text-base text-gray-600">
//               Price per night
//             </p>
//             {/* <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded-full mt-2 md:mt-2">
//               Choose Your Room
//             </button> */}

//             <div className="ml-2 flex justify-end items-center">
//               {checkInDate && checkOutDate ? (
//                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded-full mt-2 md:mt-2">
//                   Choose Your Room
//                 </button>
//               ) : (
//                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded-full mt-2 md:mt-2">
//                   Select the date
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* <div className=" flex flex-wrap justify-center items-start border border-green-500 sm:w-full ">
//           <div className=" p-4 border border-gray-400 border-r-2">
//             <h1 className="text-2xl font-bold mb-2">Top Reasons to Book</h1>
//             <div className="space-y-2">
//               <div className="flex gap-2">
//                 <span className="flex mt-1">
//                   <CachedIcon className=" text-green-700 bg-green-300 hover:bg-green-700 rounded-full p-0.5  " />
//                 </span>
//                 <span>
//                   <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
//                   <p>
//                     Children 2 and under stay for free when using an available
//                     crib (details)
//                   </p>
//                 </span>
//               </div>
//               <div className="flex gap-2">
//                 <span className="flex mt-1">
//                   <ShoppingCartIcon className=" text-green-700 bg-green-300 hover:bg-green-700 rounded-full p-0.5" />
//                 </span>
//                 <span>
//                   <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
//                   <p>
//                     Children 2 and under stay for free when using an available
//                     crib (details)
//                   </p>
//                 </span>
//               </div>
//               <div className="flex gap-2">
//                 <span className="flex mt-1">
//                   <CheckCircleIcon className=" text-orange-500 bg-orange-200 hover:bg-orange-500 rounded-full p-0.5 " />
//                 </span>
//                 <span>
//                   <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
//                   <p>
//                     Children 2 and under stay for free when using an available
//                     crib (details)
//                   </p>
//                 </span>
//               </div>
//               <div className="flex gap-2">
//                 <span className="flex mt-1">
//                   <EmojiEventsIcon className=" text-orange-500 bg-orange-200 hover:bg-orange-500 rounded-full p-0.5" />
//                 </span>
//                 <span>
//                   <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
//                   <p>
//                     Children 2 and under stay for free when using an available
//                     crib (details)
//                   </p>
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="  border border-blue-500  p-4">
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <span className="text-2xl text-white font-bold bg-orange-500 px-2 py-0 rounded-full mr-2">
//                   8.7
//                 </span>
//                 <h1 className="text-xl font-bold">Guest Rating</h1>
//               </div>

//               <div className="">
//                 <span className="flex justify-between">
//                   <p className="text-sm font-semibold">CLEANLINESS</p>
//                   <span className="text-lg font-bold">9.2</span>
//                 </span>
//                 <span className="w-full border rounded h-1.5 bg-orange-600 block"></span>
//               </div>

//               <div className="">
//                 <span className="flex justify-between">
//                   <p className="text-sm font-semibold">CLEANLINESS</p>
//                   <span className="text-lg font-bold">9.2</span>
//                 </span>
//                 <span className="w-full border rounded h-1.5 bg-orange-600 block"></span>
//               </div>
//               <div className="">
//                 <span className="flex justify-between">
//                   <p className="text-sm font-semibold">CLEANLINESS</p>
//                   <span className="text-lg font-bold">9.2</span>
//                 </span>
//                 <span className="w-full border rounded h-1.5 bg-orange-600 block"></span>
//               </div>
//               <div className="p-0">
//                 <span className="text-sm text-blue-600  ">
//                   Verified ratings from 1788 guests
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className=" p-3 border-l border-gray-500">
//             <h1 className="text-2xl font-bold mb-2">Top Amenities</h1>
//             <div className="grid grid-cols-2 gap-4">
//               {hotel.amenities.map((amenity) => (
//                 <div key={amenity.machine_name} className="flex items-center">
//                   {getAmenityIcon(amenity.name)}

//                   <span>{amenity.name}</span>
//                 </div>
//               ))}
//             </div>
//             <p className="mt-4">Show All Amenities</p>
//           </div>
//         </div> */}

//         <div className=" border border-yellow-500 flex flex-wrap justify-center ">
//           <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 ">
//             <div className="h-full bg-white ">
//               <div className=" p-4  border-r ">
//                 <h1 className="text-2xl font-bold mb-5">Top Reasons to Book</h1>
//                 <div className="space-y-2">
//                   <div className="flex gap-2">
//                     <span className="flex mt-1">
//                       <CachedIcon className=" text-green-700 bg-green-300 hover:bg-green-700 rounded-full p-0.5  " />
//                     </span>
//                     <span>
//                       <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
//                       <p>
//                         Children 2 and under stay for free when using an
//                         available crib (details)
//                       </p>
//                     </span>
//                   </div>
//                   <div className="flex gap-2">
//                     <span className="flex mt-1">
//                       <ShoppingCartIcon className=" text-green-700 bg-green-300 hover:bg-green-700 rounded-full p-0.5" />
//                     </span>
//                     <span>
//                       <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
//                       <p>
//                         Children 2 and under stay for free when using an
//                         available crib (details)
//                       </p>
//                     </span>
//                   </div>
//                   <div className="flex gap-2">
//                     <span className="flex mt-1">
//                       <CheckCircleIcon className=" text-orange-500 bg-orange-200 hover:bg-orange-500 rounded-full p-0.5 " />
//                     </span>
//                     <span>
//                       <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
//                       <p>
//                         Children 2 and under stay for free when using an
//                         available crib (details)
//                       </p>
//                     </span>
//                   </div>
//                   <div className="flex gap-2">
//                     <span className="flex mt-1">
//                       <EmojiEventsIcon className=" text-orange-500 bg-orange-200 hover:bg-orange-500 rounded-full p-0.5" />
//                     </span>
//                     <span>
//                       <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
//                       <p>
//                         Children 2 and under stay for free when using an
//                         available crib (details)
//                       </p>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 ">
//             <div className="h-full bg-white rounded-md">
//               <div className="    p-4">
//                 <div className="space-y-4">
//                   <div className="flex items-center mb-5">
//                     <span className="text-2xl text-white font-bold bg-orange-500 px-2 py-0 rounded-full mr-2">
//                       8.7
//                     </span>
//                     <h1 className="text-xl font-bold">Guest Rating</h1>
//                   </div>

//                   <div className="">
//                     <span className="flex justify-between">
//                       <p className="text-sm font-semibold">CLEANLINESS</p>
//                       <span className="text-lg font-bold">9.2</span>
//                     </span>
//                     <span className="w-full border rounded h-1.5 bg-orange-600 block"></span>
//                   </div>

//                   <div className="">
//                     <span className="flex justify-between">
//                       <p className="text-sm font-semibold">CLEANLINESS</p>
//                       <span className="text-lg font-bold">9.2</span>
//                     </span>
//                     <span className="w-full border rounded h-1.5 bg-orange-600 block"></span>
//                   </div>
//                   <div className="">
//                     <span className="flex justify-between">
//                       <p className="text-sm font-semibold">CLEANLINESS</p>
//                       <span className="text-lg font-bold">9.2</span>
//                     </span>
//                     <span className="w-full border rounded h-1.5 bg-orange-600 block"></span>
//                   </div>
//                   <div className="p-0">
//                     <span className="text-sm text-blue-600  ">
//                       Verified ratings from 1788 guests
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <div className="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3">
//             <div className="h-full bg-white">
//               <div className="p-4 border-l">
//                 <h1 className="text-xl sm:text-2xl font-bold mb-2">
//                   Top Amenities
//                 </h1>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {hotel.amenities.map((amenity) => (
//                     <div
//                       key={amenity.machine_name}
//                       className="flex items-center"
//                     >
//                       {getAmenityIcon(amenity.name)}
//                       <span>{amenity.name}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <p className="mt-5 text-blue-500 underline">
//                   Show All Amenities
//                 </p>
//               </div>
//             </div>
//           </div> */}
//           <div className="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3">
//             <div className="h-full bg-white">
//               <div className="p-4 border-l r">
//                 <h1 className="text-xl sm:text-2xl font-bold mb-5">
//                   Top Amenities
//                 </h1>
//                 <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-3 gap-4">
//                   {hotel.amenities.map((amenity) => (
//                     <div
//                       key={amenity.machine_name}
//                       className="flex items-center"
//                     >
//                       <WifiIcon className="mr-2 text-3xl border rounded-full p-1 bg-gray-300" />
//                       <span>{amenity.name}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <p className="mt-5 text-blue-500 underline md:text-center sm:text-center">
//                   Show All Amenities
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Room Options */}
//         <div className="  border border-yellow-700">
//           <div className="flex flex-col  md:justify-between ">
//             <div className="mb-4  border border-red-700">
//               <div className="flex flex-col sm:flex-row justify-between border-b border-gray-500 p-4 sm:p-6">
//                 <div className="flex flex-col justify-end">
//                   <span className="mt-auto">
//                     <h1 className="text-xl sm:text-2xl font-bold mb-2">
//                       Room Options
//                     </h1>
//                   </span>
//                 </div>
//                 <span className="mt-4 sm:mt-0">
//                   <p className="mb-1 text-sm sm:text-base font-semibold">
//                     Best Price. GUARANTEED.
//                   </p>
//                   <p className="text-sm sm:text-base">
//                     Exclusively for Priceline membersDetails
//                   </p>
//                 </span>
//               </div>

//               {/* <div className=" flex flex-row border py-4 border-blue-600">
//                 <div className="w-full sm:w-full md:w-full lg:w-full xl:w-1/1 flex justify-between  m-2 gap-2 bg-slate-200 border border-gray-900 ">
//                   <TextField
//                     id="outlined-basic"
//                     label="Check-in - check-out"
//                     variant="outlined"
//                     className="w-full max-w-lg h-12 sm:h-14 bg-white rounded-2xl"
//                   />

//                   <TextField
//                     id="outlined-basic"
//                     label="Check-in - check-out"
//                     variant="outlined"
//                     className="w-full max-w-lg h-12 sm:h-14 bg-white rounded-2xl"
//                   />

//                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded-2xl">
//                     Update Search
//                   </button>
//                 </div>
//                 <div className="flex flex-row items-center justify-between border border-gray-500 ">
//                   <div className="flex flex-col">
//                     <span className="mb-1 text-sm sm:text-base font-semibold text-end">
//                       Show total prices
//                     </span>
//                     <span className="mb-1 text-sm sm:text-base">
//                       For 1 night, includes taxes & fees
//                     </span>
//                   </div>
//                   <div className="ml-auto">
//                     <FormGroup>
//                       <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} />
//                     </FormGroup>
//                   </div>
//                 </div>
//               </div> */}

//               {/* <Search /> */}

//               <RoomSearch
//                 hotels={hotels}
//                 airports={airports}
//                 city={city}
//                 cruise={cruise}
//                 interest={interest}
//               />
//             </div>

//             <div className="">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {[...Array(6)].map((_, index) => (
//                   <RoomCard key={index} imageIndex={index} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Amenities */}
//         {/* <div>
//           <h1>Amenities</h1>
//           <div className="flex ">
//             <span>
//               <h3>Room Amenities (34)</h3>
//               <li>Allergy-free rooms available</li>
//               <li>Coffee/tea maker</li>
//               <li>Ironing amenities</li>
//               <li>Fire extinguishers</li>
//               <li>Carpeting</li>
//               <li>Room towels provided</li>
//               <li>Telephone</li>
//             </span>
//             <span>
//               <h3>Room Amenities (34)</h3>
//               <li>Allergy-free rooms available</li>
//               <li>Coffee/tea maker</li>
//               <li>Ironing amenities</li>
//               <li>Fire extinguishers</li>
//               <li>Carpeting</li>
//               <li>Room towels provided</li>
//               <li>Telephone</li>
//             </span>
//             <span>
//               <h3>Room Amenities (34)</h3>
//               <li>Allergy-free rooms available</li>
//               <li>Coffee/tea maker</li>
//               <li>Ironing amenities</li>
//               <li>Fire extinguishers</li>
//               <li>Carpeting</li>
//               <li>Room towels provided</li>
//               <li>Telephone</li>
//             </span>
//           </div>
//           <div className="flex justify-center p-3">
//             <Button>Show All Amenities</Button>
//           </div>
//         </div> */}
//         <Amenities amenities={hotel.amenities} />

//         <AboutHotel description={hotel.description} />

//         {/* <div>
//           <div>Guest Policies</div>
//           <div className="flex flex-row ">
//             <span>Check-in</span>
//             <span>After 4:00 PM</span>
//           </div>
//           <div className="flex flex-row ">
//             <span>Check-in</span>
//             <span>After 4:00 PM</span>
//           </div>
//           <div className="flex flex-row ">
//             <span>Check-in</span>
//             <span>After 4:00 PM</span>
//           </div>
//           <div className="flex flex-row ">
//             <span>Check-in</span>
//             <span>After 4:00 PM</span>
//           </div>
//           <div className="flex flex-row ">
//             <span>Check-in</span>
//             <span>After 4:00 PM</span>
//           </div>
//           <div className="flex flex-row ">
//             <span>Check-in</span>
//             <span>After 4:00 PM</span>
//           </div>
//         </div> */}
//         <GuestPolicies />

//         <div className=" m-2 py-4  border-b  border-gray-500">
//           <h3 className="text-2xl font-bold mb-4">Important Info</h3>
//           <span className="text-xl  mb-4 ">
//             Guests are required to show a photo ID and credit card upon
//             check-in. Please note that all Special Requests are subject to
//             availability and additional charges may apply.
//           </span>
//         </div>

//         {/* <div className="flex flex-col md:flex-row justify-between border-b border-blue-500 p-4">
//           <div className="mb-4 md:mb-0 border border-red-500 w-full md:w-auto">
//             <span className="flex flex-col gap-4 md:flex-row items-center">
//               <h1 className="text-xl font-bold mb-2 md:mb-0 md:mr-2">
//                 Guest Rating
//               </h1>
//               <span className="text-md text-white font-bold bg-orange-500 px-2 py-0 rounded-full mb-2 md:mb-0 md:ml-2">
//                 8.7
//               </span>
//             </span>
//             <span className="w-full border rounded h-1.5 bg-orange-600 block mt-4 md:mt-0"></span>
//           </div>

//           <div className="mb-4 md:mb-0 md:ml-4 w-full md:w-auto">
//             <span className="flex flex-col gap-4 md:flex-row items-center">
//               <p className="text-sm font-semibold mb-2 md:mb-0 md:mr-2">
//                 CLEANLINESS
//               </p>
//               <span className="text-lg font-bold">9.2</span>
//             </span>
//             <span className="w-full border rounded h-1.5 bg-orange-600 block mt-4 md:mt-0"></span>
//           </div>

//           <div className="mb-4 md:mb-0 md:ml-4 w-full md:w-auto">
//             <span className="flex flex-col gap-4 md:flex-row items-center">
//               <p className="text-sm font-semibold mb-2 md:mb-0 md:mr-2">
//                 CLEANLINESS
//               </p>
//               <span className="text-lg font-bold">9.2</span>
//             </span>
//             <span className="w-full border rounded h-1.5 bg-orange-600 block mt-4 md:mt-0"></span>
//           </div>

//           <div className="md:ml-4 w-full md:w-auto">
//             <span className="flex flex-col gap-4 md:flex-row items-center">
//               <p className="text-sm font-semibold mb-2 md:mb-0 md:mr-2">
//                 YET ANOTHER CATEGORY
//               </p>
//               <span className="text-lg font-bold">8.8</span>
//             </span>
//             <span className="w-full border rounded h-1.5 bg-orange-600 block mt-4 md:mt-0"></span>
//           </div>
//         </div> */}

//         {/* <div className="flex flex-row">
//           <span> 10 Perfect Feb 7, 2024 Mary Traveling as Couple</span>
//           <span>
//             <p>
//               This guest had nothing but positive things to say about the
//               property and rated it as perfect.
//             </p>
//             <span>
//               What did you like most? We had a slight issue on check in but it
//               was very professionally handled by the manager. She clearly cared
//               about us having a pleasant stay & went out of her way to ensure
//               that happened. We were very happy with our room & the service we
//               received. Thanks Was there anything you didn't like? No
//             </span>
//           </span>
//         </div> */}
//         <RatingSection />
//         <ReviewBox />

//         <div className=" py-4  border-b  border-gray-500">
//           <h1 className="text-2xl  font-bold ">Location</h1>
//           <span className="text-lg p-0 flex flex-row gap-2">
//             <p>{hotel.address.address_line1}</p>
//             <p>{hotel.address.locality}</p>
//             <p>{hotel.address.administrative_area}</p>
//             <p>{hotel.address.postal_code}</p>
//             <p>{hotel.address.country_code}</p>
//           </span>

//           {/* <div className="py-4">
//             <div style={containerStyle}>
//               <iframe
//                 title="Google Map"
//                 width="100%"
//                 height="100%"
//                 frameBorder="0"
//                 style={{ border: "0" }}
//                // src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJgUbEo8cfqokR5lP9_Wh_DaM&key=AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ"
//                src={mapUrl}
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div> */}
//           <GoogleMapComponent lat_lon={hotel.lat_lon} address={hotel.address} />
//         </div>

//         <div>
//           <Footer />
//         </div>

//         <div className="card mt-4">
//           <div className="card-body">
//             <h1 className="card-title">{hotel.name}</h1>
//             <p className="card-text">{hotel.rlh_status}</p>

//             <div className="mb-4">
//               <h2>Address:</h2>
//               <p>{hotel.address.address_line1}</p>
//               <p>{hotel.address.locality}</p>
//               <p>{hotel.address.administrative_area}</p>
//               <p>{hotel.address.postal_code}</p>
//               <p>{hotel.address.country_code}</p>

//               {/* <div>
//                 <h2>Amenities:</h2>
//                 <ul>
//                   {hotel.amenities.map((amenity) => (
//                     <li key={amenity.machine_name}>{amenity.name}</li>
//                   ))}
//                 </ul>
//               </div> */}
//               {/* <div><p>{hotel.description}</p></div> */}
//             </div>
//             <p>latlon des sdfdf </p>
//             <p> {hotel.lat_lon.geo_type}</p>
//             <p> {hotel.lat_lon.geohash}</p>
//             <p> {hotel.lat_lon.lat}</p>
//             <p>{hotel.lat_lon.lon}</p>
//             <p> {hotel.lat_lon.top}</p>
//             <p> {hotel.lat_lon.bottom}</p>
//             <p> {hotel.lat_lon.left}</p>
//             <p> {hotel.lat_lon.right}</p>
//             <p> {hotel.lat_lon.value}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const query = graphql`
//   query MyQuery($id: String!) {
//     allHotel(filter: { id: { eq: $id } }) {
//       edges {
//         node {
//           id
//           name
//           phone
//           hotel_code
//           rlh_status
//           description
//           address {
//             address_line1
//             locality
//             administrative_area
//             postal_code
//             country_code
//           }
//           amenities {
//             machine_name
//             name
//           }
//           lat_lon {
//             bottom
//             geo_type
//             geohash
//             lat
//             latlon
//             left
//             lon
//             right
//             top
//             value
//           }
//           address {
//             address_line1
//             locality
//             postal_code
//             country_code
//           }
//           email
//           description
//           crs_code
//           crs_name
//           address {
//             address_line1
//             country_code
//             administrative_area
//             locality
//             postal_code
//           }
//           amenities {
//             machine_name
//             name
//           }
//         }
//       }
//     }
//     allLocationAirport {
//       nodes {
//         id
//         name
//         field_address {
//           locality
//           country_code
//         }
//       }
//     }
//     allLocationCity {
//       nodes {
//         id
//         name
//         population
//       }
//     }
//     allLocationCruise {
//       nodes {
//         id
//         google_place_id
//         name
//       }
//     }
//     allLocationPointOfInterest {
//       nodes {
//         id
//         name
//         google_place_id
//       }
//     }
//   }
// `;

// export default HotelDetails;

// import React, { useEffect, useState } from "react";
// import { Link, graphql } from "gatsby";
// import { Button, Card, Input, PopoverPaper } from "@mui/material";
// import Footer from "../components/Footer";
// //import Navbar from "../components/Header";
// import ImageSlider from "../components/ImageSlider";
// import PlaceIcon from "@mui/icons-material/Place";
// import IosShareIcon from "@mui/icons-material/IosShare";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import CachedIcon from "@mui/icons-material/Cached";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import WifiIcon from "@mui/icons-material/Wifi";
// import PetsIcon from "@mui/icons-material/Pets";
// import VapeFreeIcon from "@mui/icons-material/VapeFree";
// import AccessibleIcon from "@mui/icons-material/Accessible";
// import TextField from "@mui/material/TextField";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DatePicker from "@mui/lab/DatePicker";

// import Amenities from "../components/HotelDetails/Amenities ";
// import AboutHotel from "../components/HotelDetails/AboutHotel";
// import GuestPolicies from "../components/HotelDetails/GuestPolicies ";
// import ReviewBox from "../components/HotelDetails/ReviewBox";
// import RatingSection from "../components/HotelDetails/RatingBar";
// import Typography from "@mui/material/Typography";
// import GoogleMapComponent from "../components/HotelDetails/GoogleMapComponent";
// import Search from "../components/HotelDetails/Search";
// import HotelDetailsComponent from "../components/HotelList/HotelDetailss";
// import HeaderSearchBox from "../components/SearchComponents/HeaderSearchBox";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import SearchData from "../components/data/SearchData";
// import RoomSearch from "../components/HotelDetailsPage/RoomSearch";
// import Navbar from "../components/Navbar/Navbar";
// import { useDispatch, useSelector } from "react-redux";
// import { setCheckInDate, setCheckOutDate } from "../redux/actions";
// import RoomCard from "../components/HotelDetailsPage/RoomCard";

// const HotelDetails = ({ data }) => {
//   const hotel = data.allHotel.edges[0]?.node;

//   const [selectedItem, setSelectedItem] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);

//   const dispatch = useDispatch();
//   const checkInDate = useSelector((state) => state.date.checkInDate);
//   const checkOutDate = useSelector((state) => state.date.checkOutDate);

//   console.log("checkInDate", checkInDate, "checkOutDate", checkOutDate);

//   useEffect(() => {
//     console.log("Selected Date:", selectedDate);
//   }, [selectedDate]);
//   const handleItemClick = (index) => {
//     setSelectedItem(index);
//   };

//   if (!hotel) {
//     return <p>No hotel details found.</p>;
//   }

//   const containerStyle = {
//     width: "100%",
//     height: "400px",
//   };

//   const scrollLeft = () => {
//     document.getElementById("image-gallery").scrollLeft -= 300;
//   };

//   const scrollRight = () => {
//     document.getElementById("image-gallery").scrollLeft += 300;
//   };

//   const getAmenityIcon = (amenityName) => {
//     switch (amenityName) {
//       case "Wifi":
//         return <WifiIcon className="mr-2" />;
//       case "Pets":
//         return <PetsIcon className="mr-2" />;
//       case "VapeFree":
//         return <VapeFreeIcon className="mr-2" />;
//       case "Accessible":
//         return <AccessibleIcon className="mr-2" />;
//       default:
//         return <FiberManualRecordIcon className="mr-2" />;
//     }
//   };

//   const handleDataFetched = (fetchedData) => {
//     if (fetchedData && Array.isArray(fetchedData.hotels)) {
//       console.log("Fetched Hotels Data:", fetchedData.hotels);
//       // Do something with the fetched data, e.g., set it in the component state
//     } else {
//       console.error("Invalid or undefined data structure:", fetchedData);
//     }
//   };

//   const hotels = data?.allHotel?.nodes || [];
//   console.log("hotels", hotels);
//   const airports = data?.allLocationAirport?.nodes || [];
//   console.log("airports", airports);
//   const city = data?.allLocationCity?.nodes || [];
//   console.log("city", city);
//   const cruise = data?.allLocationCruise?.nodes || [];
//   console.log("cruise", cruise);
//   const interest = data?.allLocationPointOfInterest?.nodes || [];
//   console.log("interest", interest);
//   // console.log("hotelsdfdv",hotels)

//   return (
//     <div className="py-2 container-fluid flex flex-col justify-center">
//       <Navbar />
//       <div className=" flex justify-center items-center">
//         <Link
//           className="flex mr-3 font-bold text-blue-600 hover:underline"
//           to="/hotellist"
//         >
//           <p>
//             <KeyboardArrowLeftIcon />
//           </p>
//           <p>Back to Listings</p>
//         </Link>
//         <HeaderSearchBox
//           hotels={hotels}
//           airports={airports}
//           city={city}
//           cruise={cruise}
//           interest={interest}
//         />
//       </div>

//       {/* <Navbar /> */}
//       <ImageSlider />

//       <div className="container-fluid  flex  justify-center border-b border-gray-500">
//         <div className="container ">
//           <div className="hidden md:flex flex-wrap list-none">
//             <li
//               className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
//                 selectedItem === 0 ? "border-2 border-blue-500" : ""
//               }`}
//               onClick={() => handleItemClick(0)}
//             >
//               Overview & Photos
//             </li>
//             <li
//               className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
//                 selectedItem === 1 ? "border-2 border-blue-500" : ""
//               }`}
//               onClick={() => handleItemClick(1)}
//             >
//               Rooms
//             </li>
//             <li
//               className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
//                 selectedItem === 2 ? "border-2 border-blue-500" : ""
//               }`}
//               onClick={() => handleItemClick(2)}
//             >
//               Amenities
//             </li>
//             <li
//               className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
//                 selectedItem === 3 ? "border-2 border-blue-500" : ""
//               }`}
//               onClick={() => handleItemClick(3)}
//             >
//               About
//             </li>
//             <li
//               className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
//                 selectedItem === 4 ? "border-2 border-blue-500" : ""
//               }`}
//               onClick={() => handleItemClick(4)}
//             >
//               Reviews
//             </li>
//             <li
//               className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
//                 selectedItem === 5 ? "border-2 border-blue-500" : ""
//               }`}
//               onClick={() => handleItemClick(5)}
//             >
//               Map
//             </li>
//           </div>
//         </div>
//       </div>

//       <div className="container p-0 mx-auto flex flex-col justify-center border border-red-500">
//         <div className="flex flex-wrap p-4 border-b border-gray-500">
//           <div className="w-full md:w-8/12 mb-4 md:mb-0">
//             <p className="text-2xl font-bold mb-2 text-gray-800">
//               {hotel.name}
//             </p>

//             <div className="flex items-center mb-2">
//               <p className="text-gray-600 font-bold text-sm">
//                 5-STAR HOTEL Luxury
//               </p>
//               <p className="text-blue-500 ml-2">
//                 <PlaceIcon className="text-lg" />
//               </p>
//               <p className="text-blue-500 ml-1 font-bold text-sm cursor-pointer">
//                 View Map
//               </p>
//             </div>

//             <div className="flex items-center mb-4">
//               <p className="text-pink-600 text-sm font-bold bg-gray-300 px-1  rounded-full mr-2">
//                 TOP BOOKED HOTEL
//               </p>
//               <p className="text-red-600 text-sm">
//                 30 people are looking at this hotel
//               </p>
//             </div>

//             <div className="flex gap-3">
//               <button className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white font-bold py-1 px-2 rounded-full flex items-center text-xs underline">
//                 <IosShareIcon className="text-md mr-1" />
//                 Share
//               </button>

//               <button className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white font-bold py-1 px-2 rounded-full flex items-center text-xs underline">
//                 <FavoriteBorderIcon className="text-md mr-1" />
//                 Save
//               </button>
//             </div>
//           </div>

//           <div className="w-full md:w-4/12 text-left md:text-right">
//             <h1 className="text-2xl md:text-4xl font-bold mb-2 text-blue-700">
//               {/* ${hotel.price} */}
//               ₹13075
//             </h1>
//             <p className="text-sm md:text-base text-gray-600">
//               Price per night
//             </p>

//             <div className="ml-2 flex justify-end items-center">
//               {checkInDate && checkOutDate ? (
//                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded-full mt-2 md:mt-2">
//                   Choose Your Room
//                 </button>
//               ) : (
//                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded-full mt-2 md:mt-2">
//                   Select the date
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className=" border border-yellow-500 flex flex-wrap justify-center ">
//           <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 ">
//             <div className="h-full bg-white ">
//               <div className=" p-4  border-r ">
//                 <h1 className="text-2xl font-bold mb-5">Top Reasons to Book</h1>
//                 <div className="space-y-2">
//                   <div className="flex gap-2">
//                     <span className="flex mt-1">
//                       <CachedIcon className=" text-green-700 bg-green-300 hover:bg-green-700 rounded-full p-0.5  " />
//                     </span>
//                     <span>
//                       <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
//                       <p>
//                         Children 2 and under stay for free when using an
//                         available crib (details)
//                       </p>
//                     </span>
//                   </div>
//                   <div className="flex gap-2">
//                     <span className="flex mt-1">
//                       <ShoppingCartIcon className=" text-green-700 bg-green-300 hover:bg-green-700 rounded-full p-0.5" />
//                     </span>
//                     <span>
//                       <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
//                       <p>
//                         Children 2 and under stay for free when using an
//                         available crib (details)
//                       </p>
//                     </span>
//                   </div>
//                   <div className="flex gap-2">
//                     <span className="flex mt-1">
//                       <CheckCircleIcon className=" text-orange-500 bg-orange-200 hover:bg-orange-500 rounded-full p-0.5 " />
//                     </span>
//                     <span>
//                       <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
//                       <p>
//                         Children 2 and under stay for free when using an
//                         available crib (details)
//                       </p>
//                     </span>
//                   </div>
//                   <div className="flex gap-2">
//                     <span className="flex mt-1">
//                       <EmojiEventsIcon className=" text-orange-500 bg-orange-200 hover:bg-orange-500 rounded-full p-0.5" />
//                     </span>
//                     <span>
//                       <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
//                       <p>
//                         Children 2 and under stay for free when using an
//                         available crib (details)
//                       </p>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 ">
//             <div className="h-full bg-white rounded-md">
//               <div className="    p-4">
//                 <div className="space-y-4">
//                   <div className="flex items-center mb-5">
//                     <span className="text-2xl text-white font-bold bg-orange-500 px-2 py-0 rounded-full mr-2">
//                       8.7
//                     </span>
//                     <h1 className="text-xl font-bold">Guest Rating</h1>
//                   </div>

//                   <div className="">
//                     <span className="flex justify-between">
//                       <p className="text-sm font-semibold">CLEANLINESS</p>
//                       <span className="text-lg font-bold">9.2</span>
//                     </span>
//                     <span className="w-full border rounded h-1.5 bg-orange-600 block"></span>
//                   </div>

//                   <div className="">
//                     <span className="flex justify-between">
//                       <p className="text-sm font-semibold">CLEANLINESS</p>
//                       <span className="text-lg font-bold">9.2</span>
//                     </span>
//                     <span className="w-full border rounded h-1.5 bg-orange-600 block"></span>
//                   </div>
//                   <div className="">
//                     <span className="flex justify-between">
//                       <p className="text-sm font-semibold">CLEANLINESS</p>
//                       <span className="text-lg font-bold">9.2</span>
//                     </span>
//                     <span className="w-full border rounded h-1.5 bg-orange-600 block"></span>
//                   </div>
//                   <div className="p-0">
//                     <span className="text-sm text-blue-600  ">
//                       Verified ratings from 1788 guests
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3">
//             <div className="h-full bg-white">
//               <div className="p-4 border-l r">
//                 <h1 className="text-xl sm:text-2xl font-bold mb-5">
//                   Top Amenities
//                 </h1>
//                 <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-3 gap-4">
//                   {hotel.amenities.map((amenity) => (
//                     <div
//                       key={amenity.machine_name}
//                       className="flex items-center"
//                     >
//                       <WifiIcon className="mr-2 text-3xl border rounded-full p-1 bg-gray-300" />
//                       <span>{amenity.name}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <p className="mt-5 text-blue-500 underline md:text-center sm:text-center">
//                   Show All Amenities
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Room Options */}
//         <div className="  border border-yellow-700">
//           <div className="flex flex-col  md:justify-between ">
//             <div className="mb-4  border border-red-700">
//               <div className="flex flex-col sm:flex-row justify-between border-b border-gray-500 p-4 sm:p-6">
//                 <div className="flex flex-col justify-end">
//                   <span className="mt-auto">
//                     <h1 className="text-xl sm:text-2xl font-bold mb-2">
//                       Room Options
//                     </h1>
//                   </span>
//                 </div>
//                 <span className="mt-4 sm:mt-0">
//                   <p className="mb-1 text-sm sm:text-base font-semibold">
//                     Best Price. GUARANTEED.
//                   </p>
//                   <p className="text-sm sm:text-base">
//                     Exclusively for Priceline membersDetails
//                   </p>
//                 </span>
//               </div>

//               <RoomSearch
//                 hotels={hotels}
//                 airports={airports}
//                 city={city}
//                 cruise={cruise}
//                 interest={interest}
//               />
//             </div>

//             <div className="">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {[...Array(6)].map((_, index) => (
//                   <RoomCard key={index} imageIndex={index} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <Amenities amenities={hotel.amenities} />

//         <AboutHotel description={hotel.description} />

//         <GuestPolicies />

//         <div className=" m-2 py-4  border-b  border-gray-500">
//           <h3 className="text-2xl font-bold mb-4">Important Info</h3>
//           <span className="text-xl  mb-4 ">
//             Guests are required to show a photo ID and credit card upon
//             check-in. Please note that all Special Requests are subject to
//             availability and additional charges may apply.
//           </span>
//         </div>

//         <RatingSection />
//         <ReviewBox />

//         <div className=" py-4  border-b  border-gray-500">
//           <h1 className="text-2xl  font-bold ">Location</h1>
//           <span className="text-lg p-0 flex flex-row gap-2">
//             <p>{hotel.address.address_line1}</p>
//             <p>{hotel.address.locality}</p>
//             <p>{hotel.address.administrative_area}</p>
//             <p>{hotel.address.postal_code}</p>
//             <p>{hotel.address.country_code}</p>
//           </span>

//           <GoogleMapComponent lat_lon={hotel.lat_lon} address={hotel.address} />
//         </div>

//         <div>
//           <Footer />
//         </div>

//         <div className="card mt-4">
//           <div className="card-body">
//             <h1 className="card-title">{hotel.name}</h1>
//             <p className="card-text">{hotel.rlh_status}</p>

//             <div className="mb-4">
//               <h2>Address:</h2>
//               <p>{hotel.address.address_line1}</p>
//               <p>{hotel.address.locality}</p>
//               <p>{hotel.address.administrative_area}</p>
//               <p>{hotel.address.postal_code}</p>
//               <p>{hotel.address.country_code}</p>

//               {/* <div>
//                 <h2>Amenities:</h2>
//                 <ul>
//                   {hotel.amenities.map((amenity) => (
//                     <li key={amenity.machine_name}>{amenity.name}</li>
//                   ))}
//                 </ul>
//               </div> */}
//               {/* <div><p>{hotel.description}</p></div> */}
//             </div>
//             <p>latlon des sdfdf </p>
//             <p> {hotel.lat_lon.geo_type}</p>
//             <p> {hotel.lat_lon.geohash}</p>
//             <p> {hotel.lat_lon.lat}</p>
//             <p>{hotel.lat_lon.lon}</p>
//             <p> {hotel.lat_lon.top}</p>
//             <p> {hotel.lat_lon.bottom}</p>
//             <p> {hotel.lat_lon.left}</p>
//             <p> {hotel.lat_lon.right}</p>
//             <p> {hotel.lat_lon.value}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const query = graphql`
//   query MyQuery($id: String!) {
//     allHotel(filter: { id: { eq: $id } }) {
//       edges {
//         node {
//           id
//           name
//           phone
//           hotel_code
//           rlh_status
//           description
//           address {
//             address_line1
//             locality
//             administrative_area
//             postal_code
//             country_code
//           }
//           amenities {
//             machine_name
//             name
//           }
//           lat_lon {
//             bottom
//             geo_type
//             geohash
//             lat
//             latlon
//             left
//             lon
//             right
//             top
//             value
//           }
//           address {
//             address_line1
//             locality
//             postal_code
//             country_code
//           }
//           email
//           description
//           crs_code
//           crs_name
//           address {
//             address_line1
//             country_code
//             administrative_area
//             locality
//             postal_code
//           }
//           amenities {
//             machine_name
//             name
//           }
//         }
//       }
//     }
//     allLocationAirport {
//       nodes {
//         id
//         name
//         field_address {
//           locality
//           country_code
//         }
//       }
//     }
//     allLocationCity {
//       nodes {
//         id
//         name
//         population
//       }
//     }
//     allLocationCruise {
//       nodes {
//         id
//         google_place_id
//         name
//       }
//     }
//     allLocationPointOfInterest {
//       nodes {
//         id
//         name
//         google_place_id
//       }
//     }
//   }
// `;

// export default HotelDetails;

import React, { useEffect, useState } from "react";
import { Link, graphql } from "gatsby";
import { Button, Card, Input, PopoverPaper } from "@mui/material";
import Footer from "../components/Footer";
//import Navbar from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import PlaceIcon from "@mui/icons-material/Place";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CachedIcon from "@mui/icons-material/Cached";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import WifiIcon from "@mui/icons-material/Wifi";
// import PetsIcon from "@mui/icons-material/Pets";
import VapeFreeIcon from "@mui/icons-material/VapeFree";
import AccessibleIcon from "@mui/icons-material/Accessible";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import Amenities from "../components/HotelDetails/Amenities ";
import AboutHotel from "../components/HotelDetails/AboutHotel";
import GuestPolicies from "../components/HotelDetails/GuestPolicies ";
import ReviewBox from "../components/HotelDetails/ReviewBox";
import RatingSection from "../components/HotelDetails/RatingBar";
import Typography from "@mui/material/Typography";
import GoogleMapComponent from "../components/HotelDetails/GoogleMapComponent";
import Search from "../components/HotelDetails/Search";
import HotelDetailsComponent from "../components/HotelList/HotelDetailss";
import HeaderSearchBox from "../components/SearchComponents/HeaderSearchBox";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import RoomSearch from "../components/HotelDetailsPage/RoomSearch";
import Navbar from "../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setCheckInDate, setCheckOutDate } from "../redux/actions";
import RoomCard from "../components/HotelDetailsPage/RoomCard";
import {
  Wifi as WifiIcon,
  Pets as PetsIcon,
  AcUnit as AcUnitIcon,
  LocalParking as LocalParkingIcon,
  BusinessCenter as BusinessCenterIcon,
  Tv as TvIcon,
  Pool as PoolIcon,
  FitnessCenter as FitnessCenterIcon,
  Refrigerator as RefrigeratorIcon,
  Microwave as MicrowaveIcon,
} from "@mui/icons-material";
import { setCheckOutData } from "../redux/actions";

const HotelDetails = ({ data }) => {
  // const hotel = data.allHotel.edges?.[0]?.node;
  // console.log("hotel", hotel);

  // Define a mapping of amenities to icons
  const amenityIconMap = {
    "Accessibility Features": <AcUnitIcon />,
    "Air Conditioning": <AcUnitIcon />,
    "Pet Friendly": <PetsIcon />,
    "Wireless Internet": <WifiIcon />,
    Parking: <LocalParkingIcon />,
    "Business Center": <BusinessCenterIcon />,
    "Flat Screen TV": <TvIcon />,
    "Swimming Pool": <PoolIcon />,
    "On Site Fitness Center": <FitnessCenterIcon />,
    Refrigerator: <RefrigeratorIcon />,
    Microwave: <MicrowaveIcon />,
    // Add more amenities and their corresponding icons as needed
  };

  // Define a default icon or text
  const DefaultIcon = <span>No Icon</span>;

  const hotel = data.specificHotel.edges?.[0]?.node;

  console.log("hotel", hotel);

  const hotels = data?.allHotels?.nodes || [];
  console.log("hotels", hotels);
  const airports = data?.allLocationAirport?.nodes || [];
  console.log("airports", airports);
  const city = data?.allLocationCity?.nodes || [];
  console.log("city", city);
  const cruise = data?.allLocationCruise?.nodes || [];
  console.log("cruise", cruise);
  const interest = data?.allLocationPointOfInterest?.nodes || [];
  console.log("interest", interest);
  // console.log("hotelsdfdv",hotels)
  const dispatch = useDispatch();

  useEffect(() => {
    // Set the selected hotel when the component mounts
    dispatch(setCheckOutData(hotel));
  }, [dispatch, hotel]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const checkInDate = useSelector((state) => state.date.checkInDate);
  const checkOutDate = useSelector((state) => state.date.checkOutDate);

  console.log("checkInDate", checkInDate, "checkOutDate", checkOutDate);

  useEffect(() => {
    // Handle date changes
    console.log("Selected Date:", selectedDate);
  }, [selectedDate]);
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  if (!hotel) {
    return <p>No hotel details found.</p>;
  }

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const scrollLeft = () => {
    document.getElementById("image-gallery").scrollLeft -= 300;
  };

  const scrollRight = () => {
    document.getElementById("image-gallery").scrollLeft += 300;
  };

  const getAmenityIcon = (amenityName) => {
    switch (amenityName) {
      case "Wifi":
        return <WifiIcon className="mr-2" />;
      case "Pets":
        return <PetsIcon className="mr-2" />;
      case "VapeFree":
        return <VapeFreeIcon className="mr-2" />;
      case "Accessible":
        return <AccessibleIcon className="mr-2" />;
      default:
        return <FiberManualRecordIcon className="mr-2" />; // Default icon
    }
  };

  const handleDataFetched = (fetchedData) => {
    if (fetchedData && Array.isArray(fetchedData.hotels)) {
      console.log("Fetched Hotels Data:", fetchedData.hotels);
      // Do something with the fetched data, e.g., set it in the component state
    } else {
      console.error("Invalid or undefined data structure:", fetchedData);
    }
  };

  const amenityList = hotel.amenities.map((amenity) => amenity.name);

  const amenityIcons = hotel.amenities.map(
    (amenity) => amenityIconMap[amenity.name] || DefaultIcon
  );

  const roomData = JSON.parse(sessionStorage.getItem("roomData"));
  console.log("roomData", roomData);

  if (!roomData) {
    return <p>No room data available</p>;
  }

  return (
    <div className="py-2 container-fluid flex flex-col justify-center">
      <Navbar />
      <div className=" flex justify-center items-center">
        <Link
          className="flex mr-3 font-bold text-blue-600 hover:underline"
          to="/hotellist"
        >
          <p>
            <KeyboardArrowLeftIcon />
          </p>
          <p>Back to Listings</p>
        </Link>
        <HeaderSearchBox
          hotels={hotels}
          airports={airports}
          city={city}
          cruise={cruise}
          interest={interest}
        />
      </div>

      {/* <Navbar /> */}
      <ImageSlider />

      <div className="container-fluid  flex  justify-center border-b border-gray-500">
        <div className="container ">
          <div className="hidden md:flex flex-wrap list-none">
            <li
              className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
                selectedItem === 0 ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => handleItemClick(0)}
            >
              Overview & Photos
            </li>
            <li
              className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
                selectedItem === 1 ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => handleItemClick(1)}
            >
              Rooms
            </li>
            <li
              className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
                selectedItem === 2 ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => handleItemClick(2)}
            >
              Amenities
            </li>
            <li
              className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
                selectedItem === 3 ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => handleItemClick(3)}
            >
              About
            </li>
            <li
              className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
                selectedItem === 4 ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => handleItemClick(4)}
            >
              Reviews
            </li>
            <li
              className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
                selectedItem === 5 ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => handleItemClick(5)}
            >
              Map
            </li>
          </div>
        </div>
      </div>

      <div className="container p-0 mx-auto flex flex-col justify-center border border-red-500">
        <div className="flex flex-wrap p-4 border-b border-gray-500">
          <div className="w-full md:w-8/12 mb-4 md:mb-0">
            <p className="text-2xl font-bold mb-2 text-gray-800">
              {hotel.name}
            </p>

            <div className="flex items-center mb-2">
              <p className="text-gray-600 font-bold text-sm">
                5-STAR HOTEL Luxury
              </p>
              <p className="text-blue-500 ml-2">
                <PlaceIcon className="text-lg" />
              </p>
              <p className="text-blue-500 ml-1 font-bold text-sm cursor-pointer">
                View Map
              </p>
            </div>

            <div className="flex items-center mb-4">
              <p className="text-pink-600 text-sm font-bold bg-gray-300 px-1  rounded-full mr-2">
                TOP BOOKED HOTEL
              </p>
              <p className="text-red-600 text-sm">
                30 people are looking at this hotel
              </p>
            </div>

            <div className="flex gap-3">
              <button className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white font-bold py-1 px-2 rounded-full flex items-center text-xs underline">
                <IosShareIcon className="text-md mr-1" />
                Share
              </button>

              <button className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white font-bold py-1 px-2 rounded-full flex items-center text-xs underline">
                <FavoriteBorderIcon className="text-md mr-1" />
                Save
              </button>
            </div>
          </div>

          <div className="w-full md:w-4/12 text-left md:text-right">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 text-blue-700">
              {/* ${hotel.price} */}$ {roomData.room_price}
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Price per night
            </p>

            <div className="ml-2 flex justify-end items-center">
              {checkInDate && checkOutDate ? (
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded-full mt-2 md:mt-2">
                  Choose Your Room
                </button>
              ) : (
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded-full mt-2 md:mt-2">
                  Select the date
                </button>
              )}
            </div>
          </div>
        </div>

        <div className=" border border-yellow-500 flex flex-wrap justify-center ">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 ">
            <div className="h-full bg-white ">
              <div className=" p-4  border-r ">
                <h1 className="text-2xl font-bold mb-5">Top Reasons to Book</h1>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="flex mt-1">
                      <CachedIcon className=" text-green-700 bg-green-300 hover:bg-green-700 rounded-full p-0.5  " />
                    </span>
                    <span>
                      <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
                      <p>
                        Children 2 and under stay for free when using an
                        available crib (details)
                      </p>
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="flex mt-1">
                      <ShoppingCartIcon className=" text-green-700 bg-green-300 hover:bg-green-700 rounded-full p-0.5" />
                    </span>
                    <span>
                      <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
                      <p>
                        Children 2 and under stay for free when using an
                        available crib (details)
                      </p>
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="flex mt-1">
                      <CheckCircleIcon className=" text-orange-500 bg-orange-200 hover:bg-orange-500 rounded-full p-0.5 " />
                    </span>
                    <span>
                      <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
                      <p>
                        Children 2 and under stay for free when using an
                        available crib (details)
                      </p>
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="flex mt-1">
                      <EmojiEventsIcon className=" text-orange-500 bg-orange-200 hover:bg-orange-500 rounded-full p-0.5" />
                    </span>
                    <span>
                      <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
                      <p>
                        Children 2 and under stay for free when using an
                        available crib (details)
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 ">
            <div className="h-full bg-white rounded-md">
              <div className="    p-4">
                <div className="space-y-4">
                  <div className="flex items-center mb-5">
                    <span className="text-2xl text-white font-bold bg-orange-500 px-2 py-0 rounded-full mr-2">
                      8.7
                    </span>
                    <h1 className="text-xl font-bold">Guest Rating</h1>
                  </div>

                  <div className="">
                    <span className="flex justify-between">
                      <p className="text-sm font-semibold">CLEANLINESS</p>
                      <span className="text-lg font-bold">9.2</span>
                    </span>
                    <span className="w-full border rounded h-1.5 bg-orange-600 block"></span>
                  </div>

                  <div className="">
                    <span className="flex justify-between">
                      <p className="text-sm font-semibold">CLEANLINESS</p>
                      <span className="text-lg font-bold">9.2</span>
                    </span>
                    <span className="w-full border rounded h-1.5 bg-orange-600 block"></span>
                  </div>
                  <div className="">
                    <span className="flex justify-between">
                      <p className="text-sm font-semibold">CLEANLINESS</p>
                      <span className="text-lg font-bold">9.2</span>
                    </span>
                    <span className="w-full border rounded h-1.5 bg-orange-600 block"></span>
                  </div>
                  <div className="p-0">
                    <span className="text-sm text-blue-600  ">
                      Verified ratings from 1788 guests
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3">
            <div className="h-full bg-white">
              <div className="p-4 border-l r">
                <h1 className="text-xl sm:text-2xl font-bold mb-5">
                  Top Amenities
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-3 gap-4">
                  {hotel.amenities.map((amenity) => (
                    <div
                      key={amenity.machine_name}
                      className="flex items-center"
                    >
                      <WifiIcon className="mr-2 text-3xl border rounded-full p-1 bg-gray-300" />
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-blue-500 underline md:text-center sm:text-center">
                  Show All Amenities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Room Options */}
        <div className="  border border-yellow-700">
          <div className="flex flex-col  md:justify-between ">
            <div className="mb-4  border border-red-700">
              <div className="flex flex-col sm:flex-row justify-between border-b border-gray-500 p-4 sm:p-6">
                <div className="flex flex-col justify-end">
                  <span className="mt-auto">
                    <h1 className="text-xl sm:text-2xl font-bold mb-2">
                      Room Options
                    </h1>
                  </span>
                </div>
                <span className="mt-4 sm:mt-0">
                  <p className="mb-1 text-sm sm:text-base font-semibold">
                    Best Price. GUARANTEED.
                  </p>
                  <p className="text-sm sm:text-base">
                    Exclusively for Priceline membersDetails
                  </p>
                </span>
              </div>

              <RoomSearch
                hotels={hotels}
                airports={airports}
                city={city}
                cruise={cruise}
                interest={interest}
              />
            </div>

            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(1)].map((_, index) => (
                  <RoomCard key={index} imageIndex={index} rooms={hotel} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <Amenities amenities={hotel.amenities} />

        <AboutHotel description={hotel.description} />

        <GuestPolicies />

        <div className=" m-2 py-4  border-b  border-gray-500">
          <h3 className="text-2xl font-bold mb-4">Important Info</h3>
          <span className="text-xl  mb-4 ">
            Guests are required to show a photo ID and credit card upon
            check-in. Please note that all Special Requests are subject to
            availability and additional charges may apply.
          </span>
        </div>

        <RatingSection />
        <ReviewBox />

        <div className=" py-4  border-b  border-gray-500">
          <h1 className="text-2xl  font-bold ">Location</h1>
          <span className="text-lg p-0 flex flex-row gap-2">
            <p>{hotel.address.address_line1}</p>
            <p>{hotel.address.locality}</p>
            <p>{hotel.address.administrative_area}</p>
            <p>{hotel.address.postal_code}</p>
            <p>{hotel.address.country_code}</p>
            {/* <p className="text-lg text-green-700 font-bold">
              {hotel.drupal_id}
            </p> */}
          </span>

          <GoogleMapComponent lat_lon={hotel.lat_lon} address={hotel.address} />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query MyQuery($id: String!) {
    specificHotel: allHotel(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          drupal_id
          name
          phone
          hotel_code
          rlh_status
          description
          field_rooms {
            drupal_internal__target_id
          }
          address {
            address_line1
            locality
            administrative_area
            postal_code
            country_code
          }
          amenities {
            machine_name
            name
          }
          lat_lon {
            bottom
            geo_type
            geohash
            lat
            latlon
            left
            lon
            right
            top
            value
          }
          email
          description
          crs_code
          crs_name
        }
      }
    }

    allHotels: allHotel {
      nodes {
        id
        drupal_id
        name
        phone
        hotel_code
        rlh_status
        description
        field_rooms {
          drupal_internal__target_id
        }
        address {
          address_line1
          locality
          administrative_area
          postal_code
          country_code
        }
        amenities {
          machine_name
          name
        }
        lat_lon {
          bottom
          geo_type
          geohash
          lat
          latlon
          left
          lon
          right
          top
          value
        }
        address {
          address_line1
          locality
          postal_code
          country_code
        }
        email
        description
        crs_code
        crs_name
      }
    }

    allLocationAirport {
      nodes {
        id
        name
        field_address {
          locality
          country_code
        }
      }
    }
    allLocationCity {
      nodes {
        id
        name
        population
      }
    }
    allLocationCruise {
      nodes {
        id
        google_place_id
        name
      }
    }
    allLocationPointOfInterest {
      nodes {
        id
        name
        google_place_id
      }
    }
  }
`;

export default HotelDetails;
