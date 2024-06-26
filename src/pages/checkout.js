// import * as React from "react";
// import { graphql } from "gatsby";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { Button } from "@mui/material";
// import { Container, Typography, Paper, TextField } from "@mui/material";
// import { shadows } from "@mui/system";
// import DemoImage from "../assets/room1.jpg";
// import { CheckBox, Radio } from "@mui/icons-material";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import CallIcon from "@mui/icons-material/Call";
// import CheckIcon from "@mui/icons-material/Check";
// import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import American_express from "../images/american-express.svg";
// import Discover from "../images/discover.svg";
// import Mastercard from "../images/mastercard.svg";
// import Visa from "../images/visa.svg";
// import Navbar from "../components/Navbar/Navbar";

// const steps = [
//   "Select master blaster campaign settings",
//   "Create an ad group",
//   "Create an ad",
// ];

// export default function Cart({ data }) {
//   const randomImage = "https://source.unsplash.com/?hotel,travel";

//   const hotel = data?.allHotel?.edges[0]?.node;
//   console.log("cbx",hotel)
//   return (
//     <div className="container-fluid flex flex-col justify-center items-center">
//       <Navbar />
//       <div className="flex container justify-between gap-4 flex-row md:flex-row sm:flex-col border border-green-500 p-2">
//         <div>SECURE TRANSACTIONS</div>
//         <div>SECURE TRANSACTIONS</div>
//         <div>SECURE TRANSACTIONS</div>
//       </div>

//       <div className="container p-4 sm:p-2 border border-gray-500">
//         <Box>
//           <Stepper activeStep={1} alternativeLabel>
//             {steps.map((label) => (
//               <Step key={label}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//         </Box>
//       </div>

//       <div className="flex flex-row border border-green-600">
//         <div
//           className="border-4 border-yellow-400  overflow-auto h-screen "
//           style={{ scrollBehavior: "smooth" }}
//         >
//           <p className="p-2 m-3">
//             <strong>Almost done!</strong> Enter your details and complete your
//             booking now.
//           </p>
//           <div className="m-4 border border-gray-500 rounded-2xl ">
//             <div className="flex flex-row p-4 ">
//               <img width="234" height="351" src={DemoImage} alt="Hotel" />
//               <div className="flex flex-col px-3">
//                 {/* <p className="font-bold "> {hotel.name}</p> */}
//                 <p className="font-bold "> cfhfg</p>
//                 <p className="py-1">Downtown New Orleans</p>
//                 <span className="py-1 flex flex-row gap-3">
//                   <p className="px-2 font-bold text-white bg-orange-400 rounded">
//                     8.7
//                   </p>
//                   VERY GOOD | 5-STAR HOTEL
//                 </span>
//                 <p className="py-1 flex text-green">
//                   <CheckIcon className="text-green" />
//                   Fully Refundable until 11:59 PM (property local time) on Feb
//                   26
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-row  justify-around m-4 border rounded-2xl bg-slate-200">
//               <span className="flex flex-col text-center p-2 ">
//                 <p>CHECK-IN</p>
//                 <p>Fri, Mar 1, 2024</p>
//               </span>
//               <span className="flex flex-col p-2 text-center">
//                 <p>CHECK-OUT</p>
//                 <p>Tue, Mar 5, 2024</p>
//               </span>
//               <span className="flex flex-col p-2 text-center">
//                 <p>NIGHTS</p>
//                 <p>4</p>
//               </span>
//               <span className="flex flex-col p-2 text-center">
//                 <p>ROOMS</p>
//                 <p>1</p>
//               </span>
//             </div>

//             <div className="m-4 w-96">
//               <h1 className="font-bold py-3">Deluxe Suite with King Bed</h1>

//               <span className="flex flex-row justify-between">
//                 <ul>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> 1 King
//                     Bed
//                   </li>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> Free
//                     WIFI
//                   </li>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> Hand
//                     sanitizer
//                   </li>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> Room
//                     sanitizing
//                   </li>
//                 </ul>
//                 <ul>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> Free
//                     Wifi
//                   </li>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> Drinking
//                     water included
//                   </li>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> Cable TV
//                     channels
//                   </li>
//                 </ul>
//               </span>
//             </div>
//           </div>

//           <div className="p-4 m-4 border  border-gray-500 rounded-2xl ">
//             <div className="p-2 border bg-slate-200 rounded-2xl">
//               The guest checking into each hotel room must be 21 or older,
//               present a valid Photo ID and credit card.
//             </div>
//             <div className="font-bold py-2">
//               <h1>Guest Name</h1>
//             </div>
//             <span class="flex flex-row gap-2 ">
//               <TextField
//                 id="outlined-basic"
//                 label="First Name*"
//                 variant="outlined"
//                 sx={{
//                   width: "50%",
//                   height: "2rem",
//                 }}
//               />
//               <TextField
//                 id="outlined-basic"
//                 label="Last Name*"
//                 variant="outlined"
//                 sx={{
//                   width: "50%",
//                   height: "2rem",
//                 }}
//               />
//             </span>
//             <span className="flex flex-row mt-3 py-5">
//               <Checkbox />
//               <p>Guest name and name on card are the same</p>
//             </span>
//           </div>

//           <div className="p-4 m-4 border  border-gray-500 rounded-2xl flex flex-col">
//             <h1 className="font-bold">Payment Method</h1>
//             <div className="border m-2 p-2  border-gray-500 rounded-2xl flex flex-col">
//               <span className="flex flex-row">
//                 <CheckBox />
//                 <span className="flex flex-col">
//                   <p className="font-bold">Credit Card or Debit</p>
//                   <p>
//                     Visa, Mastercard, Diners Club, Discover, American Express
//                   </p>
//                 </span>
//               </span>

//               <div className="p-3 bg-gray-200 rounded-2xl flex flex-col">
//                 <span className="flex flex-row gap-3 py-2">
//                   <img
//                     src={Visa}
//                     alt="Visa"
//                     style={{ height: "2em", width: "2rem" }}
//                   />
//                   <img
//                     src={Mastercard}
//                     alt="MasterCard"
//                     style={{ height: "2em", width: "2rem" }}
//                   />
//                   <img
//                     src={Discover}
//                     alt="Discover"
//                     style={{ height: "2em", width: "2rem" }}
//                   />
//                   <img
//                     src={American_express}
//                     alt="American Express"
//                     style={{ height: "2em", width: "2rem" }}
//                   />
//                 </span>
//                 <TextField
//                   id="outlined-basic"
//                   label="Name on card*"
//                   variant="outlined"
//                   sx={{
//                     width: { xs: "100%", sm: "100%" },
//                     marginBottom: "1rem",
//                   }}
//                 />
//                 <TextField
//                   id="outlined-basic"
//                   label="Card number*"
//                   variant="outlined"
//                   sx={{
//                     width: { xs: "100%", sm: "100%" },
//                     marginBottom: "1rem",
//                   }}
//                 />

//                 <TextField
//                   id="outlined-basic"
//                   label="MM/YYYY*"
//                   variant="outlined"
//                   sx={{
//                     width: { xs: "100%", sm: "100%" },
//                     marginBottom: "1rem",
//                   }}
//                 />
//                 <TextField
//                   id="outlined-basic"
//                   label="CVV code*"
//                   variant="outlined"
//                   sx={{
//                     width: { xs: "100%", sm: "100%" },
//                     marginBottom: "1rem",
//                   }}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* <div>
//             <CheckBox />
//           </div>
//           <div>
//             <CheckBox />
//           </div> */}
//           <div className="p-4 m-4 border border-gray-500 rounded-2xl flex flex-col">
//             <h1 className="font-bold py-2">Billing</h1>

//             <TextField
//               id="outlined-basic"
//               label="Street address*"
//               variant="outlined"
//               sx={{
//                 width: { xs: "100%", sm: "100%" },
//                 marginBottom: "1rem",
//               }}
//             />

//             <TextField
//               id="outlined-basic"
//               label="Country*"
//               variant="outlined"
//               sx={{
//                 width: { xs: "100%", sm: "100%" },
//                 marginBottom: "1rem",
//               }}
//             />

//             <TextField
//               id="outlined-basic"
//               label="State*"
//               variant="outlined"
//               sx={{
//                 width: { xs: "100%", sm: "100%" },
//                 marginBottom: "1rem",
//               }}
//             />

//             <TextField
//               id="outlined-basic"
//               label="Postal Code*"
//               variant="outlined"
//               sx={{
//                 width: { xs: "100%", sm: "100%" },
//                 marginBottom: "1rem",
//               }}
//             />

//             <TextField
//               id="outlined-basic"
//               label="Email address*"
//               variant="outlined"
//               sx={{
//                 width: { xs: "100%", sm: "100%" },
//                 marginBottom: "1rem",
//               }}
//             />

//             <span className="flex flex-row gap-2">
//               <TextField
//                 id="outlined-basic"
//                 label="+91"
//                 variant="outlined"
//                 disabled
//                 sx={{
//                   width: { xs: "30%", sm: "30%" },
//                   marginBottom: "1rem",
//                 }}
//               />
//               <TextField
//                 id="outlined-basic"
//                 label="Mobile Phone Number*"
//                 variant="outlined"
//                 sx={{
//                   width: { xs: "100%", sm: "100%" },
//                   marginBottom: "1rem",
//                 }}
//               />
//             </span>
//           </div>

//           <div className="p-4 m-4 border border-gray-500 rounded-2xl flex flex-col">
//             <p className="font-bold text-xl py-2">Important Information</p>
//             <ul className="list-disc pl-6">
//               <li className="mb-3">
//                 Fully refundable until 11:59 pm (property local time) on
//                 February 26, 2024. After that time, hotel cancellation and
//                 change fees apply as stated in the Booking Conditions.
//               </li>
//               <li className="mb-3">
//                 Check-in begins at 4 pm, and check-out is at 12 pm.
//               </li>
//               <li>
//                 By selecting Book & Pay, you agree to the Booking Conditions,
//                 Terms & Conditions, and Privacy Policy.
//               </li>
//             </ul>
//           </div>

//           <div className="p-4 m-4 border border-gray-500 rounded-2xl flex flex-col">
//             <button className="p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none">
//               Book & Pay
//             </button>
//           </div>
//         </div>

//         <div className="border border-red-500 w-6/12 ">
//           <div className="p-3 m-3 border border-gray-500 rounded-2xl">
//             <span className="flex flex-row justify-between py-1">
//               <p>Price per night</p>
//               <p>$340.55</p>
//             </span>
//             <span className="flex flex-row justify-between py-1">
//               <p>1 room</p>
//             </span>
//             <span className="flex flex-row justify-between py-1">
//               <p>Number of nights</p>
//               <p>4</p>
//             </span>
//             <span className="flex flex-row justify-between py-1 border-b border-gray-500 ">
//               <p>Taxes and fees</p>
//               <p>$224.69</p>
//             </span>
//             <span className="flex flex-row justify-between pt-4">
//               <p className="text-bold text-green-500">You pay today</p>
//               <p>$1,586.89</p>
//             </span>
//             <span className="text-end border-b border-gray-500  ">
//               <p className="text-blue">as low as $144/month</p>
//             </span>
//             <span className="flex flex-row justify-between">
//               <p>You pay today</p>
//               <p>$1,586.89</p>
//             </span>
//             <span className="flex flex-row  justify-between border-b border-gray-500 py-3">
//               <p>Property Fee*</p>
//               <p>$100.00</p>
//             </span>
//             <span className="flex flex-row justify-between border-b border-gray-500 py-3">
//               <p>Total Cost</p>
//               <p>$1,686.89</p>
//             </span>
//           </div>
//           <div className="p-3 m-3 border border-gray-500 rounded-2xl">
//             <span className="flex flex-row justify-between">
//               <p>Have a promo code?</p>
//               <p>
//                 <KeyboardArrowDownIcon />
//               </p>
//             </span>
//           </div>
//           <div className="p-3 m-3 border border-gray-500 rounded-2xl">
//             <span className="flex flex-row justify-between">
//               <p className="">
//                 <CallIcon />
//               </p>
//               <span className="flex flex-col">
//                 <p>Have questions? We're here to help!</p>
//                 <p>1800 365-254</p>
//               </span>
//             </span>
//           </div>
//           <div className="p-3 m-3 ">
//             <span className="border-b border-gray-500">
//               <p>
//                 Prices in USD. Prices include all taxes and fees (this link
//                 opens in a modal dialog)charged by Priceline.
//               </p>
//             </span>
//             <span className="p-3 m-3 ">
//               <p>
//                 *Collected at the property. Please bring a valid form of
//                 payment.
//               </p>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { Button } from "@mui/material";
// import { Container, Typography, Paper, TextField } from "@mui/material";
// import { shadows } from "@mui/system";
// import DemoImage from "../assets/room1.jpg";
// import { CheckBox, Radio } from "@mui/icons-material";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import CallIcon from "@mui/icons-material/Call";
// import CheckIcon from "@mui/icons-material/Check";
// import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import American_express from "../images/american-express.svg";
// import Discover from "../images/discover.svg";
// import Mastercard from "../images/mastercard.svg";
// import Visa from "../images/visa.svg";
// import Navbar from "../components/Navbar/Navbar";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, navigate } from "gatsby";
// import {
//   setSearchTerm,
//   setSelectedHotel,
//   setHotelDetails,
//   setFilteredHotels,
//   setCheckInDate,
//   setCheckOutDate,
//   setFirstName,
//   setLastName,
// } from "../redux/actions";
// import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import StripePaymentForm from "../components/Payment/StripePaymentForm";

// const steps = [
//   "Select master blaster campaign settings",
//   "Create an ad group",
//   "Create an ad",
// ];

// export default function Cart() {
//   const stripePromise = loadStripe("pk_test_wEfNm25VgswYweN4IK0JjMzQ");
//   const dispatch = useDispatch();
//   const randomImage = "https://source.unsplash.com/?hotel,travel";

//   // const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

//   const options = {
//     mode: "payment",
//     amount: 1099,
//     currency: "usd",
//     // Fully customizable with appearance API.
//     appearance: {
//       /*...*/
//     },
//   };

//   const checkoutData = useSelector((state) => state.checkoutData.checkoutData);
//   console.log("checkoutData", checkoutData);

//   const hotelName = checkoutData?.name || "Default Hotel Name";
//   const addressLine1 =
//     checkoutData?.address?.address_line1 || "Address Not Available";
//   const amenities = checkoutData?.amenities || [];

//   const formatDate = (date) => {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const day = String(date.getDate()).padStart(2, "0");
//     return `${year}-${month}-${day}`;
//   };

//   const bookinConfirmationClcik = () => {
//     if (!localFirstName || !localLastName) {
//       // Show warning if inputs are empty
//       setIsWarningShown(true);
//       return; // Exit function if inputs are empty
//     }
//     const postData = {
//       type: "reservations_new",
//       title: hotelName || "",
//       field_booking_id: "22",
//       field_lastname: "lastName",
//       $schema: "firstName",
//       field_checkin: checkInDate ? formatDate(checkInDate) : "",
//       field_checkout: checkOutDate ? formatDate(checkOutDate) : "",
//     };

//     axios
//       .post("https://hotelrepo.sastoo.com/api/create-booking", postData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then(function (response) {
//         console.log("Success:", response.data);
//         console.log("postData:", postData);
//         toast.success("Booking created successfully");
//         navigate("/bookingconfirm");
//       })
//       .catch(function (error) {
//         console.error("Error:", error);
//         toast.error("Failed to create booking");
//       });
//   };

//   const checkInDate = useSelector((state) => state.date.checkInDate);
//   const checkOutDate = useSelector((state) => state.date.checkOutDate);

//   // Calculate the number of nights
//   const diffTime = Math.abs(checkOutDate - checkInDate);
//   const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//   //Assuming rooms count is obtained from somewhere else in the state
//   const { rooms, adults, children } = useSelector((state) => state.countData);

//   // Get the first name and last name from Redux state
//   const firstName = useSelector((state) => state.name.firstName);
//   const lastName = useSelector((state) => state.name.lastName);

//   // Local state to hold the input values
//   const [localFirstName, setLocalFirstName] = useState(firstName || "");
//   const [localLastName, setLocalLastName] = useState(lastName || "");
//   const [isWarningShown, setIsWarningShown] = useState(false);

//   // Function to handle changes in the first name field
//   const handleFirstNameChange = (event) => {
//     const { value } = event.target;
//     setLocalFirstName(value);
//     // Dispatch action to update first name in Redux
//     dispatch(setFirstName(value));
//     setIsWarningShown(false);
//     checkButtonState(localFirstName, event.target.value);
//   };

//   // Function to handle changes in the last name field
//   const handleLastNameChange = (event) => {
//     const { value } = event.target;
//     setLocalLastName(value);
//     // Dispatch action to update last name in Redux
//     dispatch(setLastName(value));
//     setIsWarningShown(false);
//     checkButtonState(event.target.value, localLastName);
//   };

//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const checkButtonState = (firstName, lastName) => {
//     if (firstName.trim() !== "" && lastName.trim() !== "") {
//       setIsButtonDisabled(false);
//     } else {
//       setIsButtonDisabled(true);
//     }
//   };

//   // const roomData = JSON.parse(sessionStorage.getItem("roomData"));
//   // console.log("roomData", roomData);

//   // if (!roomData) {
//   //   return <p>No room data available</p>;
//   // }

//   const [roomData, setRoomData] = useState(null);

//   useEffect(() => {
//     // Check if sessionStorage is available
//     if (typeof window !== "undefined" && window.sessionStorage) {
//       // Access sessionStorage to retrieve room data
//       const storedRoomData = JSON.parse(sessionStorage.getItem("roomData"));
//       console.log("roomData", storedRoomData);
//       // Update roomData state with retrieved data
//       setRoomData(storedRoomData);
//     } else {
//       // Handle cases where sessionStorage is not available
//       console.error("sessionStorage is not available.");
//     }
//   }, []); // Empty dependency array ensures useEffect runs only once after component mounts

//   // Render message if roomData is not available
//   if (!roomData) {
//     return <p>No room data available</p>;
//   }

//   const roomPricePerNight = parseFloat(roomData.room_price); // Convert to float if necessary
//   const numberOfRooms = rooms; // Replace with actual number of rooms
//   const numberOfNights = nights; // Replace with actual number of nights

//   // Constants for taxes, discounts, and property fee
//   const taxPerRoom = 8;
//   const discountPerRoom = 1;
//   const propertyFeePerRoom = 5;

//   // Calculate subtotal before taxes and fees
//   const subtotal = roomPricePerNight * numberOfRooms * numberOfNights;

//   const totalPay =
//     roomPricePerNight * numberOfRooms * numberOfNights + taxPerRoom;
//   // Calculate total taxes
//   const totalTaxes = taxPerRoom * numberOfRooms;

//   // Calculate total discounts
//   const totalDiscounts = discountPerRoom * numberOfRooms;

//   // Calculate total property fee
//   const totalPropertyFee = propertyFeePerRoom * numberOfRooms;
//   // Calculate total cost
//   const totalCost = subtotal + totalTaxes + totalPropertyFee - totalDiscounts;

//   return (
//     <div>
//       {!hotelName || !addressLine1 || amenities.length === 0 ? (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             minHeight: "100vh", // Ensures the div takes up the full height of the viewport
//           }}
//         >
//           <div style={{ textAlign: "center" }}>
//             <p
//               style={{ fontSize: "16px", color: "#333", marginBottom: "10px" }}
//             >
//               <Link
//                 to="/"
//                 style={{
//                   textDecoration: "none",
//                   color: "blue",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Go back to main page
//               </Link>
//             </p>
//           </div>
//         </div>
//       ) : (
//         <div className="container-fluid flex flex-col justify-center items-center">
//           <Navbar />
//           <div className="flex container justify-between gap-4 flex-row md:flex-row sm:flex-col border border-green-500 p-2">
//             <div>SECURE TRANSACTIONS</div>
//             <div>SECURE TRANSACTIONS</div>
//             <div>SECURE TRANSACTIONS</div>
//           </div>

//           <div className="container p-4 sm:p-2 border border-gray-500">
//             <Box>
//               <Stepper activeStep={1} alternativeLabel>
//                 {steps.map((label) => (
//                   <Step key={label}>
//                     <StepLabel>{label}</StepLabel>
//                   </Step>
//                 ))}
//               </Stepper>
//             </Box>
//           </div>

//           <div className="flex flex-row border border-green-600">
//             <div
//               className="border-2 border-gray-400  overflow-auto h-screen "
//               style={{ scrollBehavior: "smooth" }}
//             >
//               <p className="p-2 m-3">
//                 <strong>Almost done!</strong> Enter your details and complete
//                 your booking now.
//               </p>
//               <div className="m-4 border border-gray-500 rounded-2xl ">
//                 <div className="flex flex-row p-4 ">
//                   <img width="234" height="351" src={DemoImage} alt="Hotel" />
//                   <div className="flex flex-col px-3">
//                     <p className="font-bold ">{hotelName}</p>
//                     <p className="py-1">{addressLine1}</p>
//                     <span className="py-1 flex flex-row gap-3">
//                       <p className="px-2 font-bold text-white bg-orange-400 rounded">
//                         8.7
//                       </p>
//                       VERY GOOD | 5-STAR HOTEL
//                     </span>
//                     <p className="py-1 flex text-green">
//                       <CheckIcon className="text-green" />
//                       Fully Refundable until 11:59 PM (property local time) on
//                       Feb 26
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex flex-row  justify-around m-4 border rounded-2xl bg-slate-200">
//                   <span className="flex flex-col text-center p-2 ">
//                     <p>CHECK-IN</p>
//                     <p>{checkInDate?.toDateString()}</p>
//                   </span>
//                   <span className="flex flex-col p-2 text-center">
//                     <p>CHECK-OUT</p>
//                     <p>{checkOutDate?.toDateString()}</p>
//                   </span>
//                   <span className="flex flex-col p-2 text-center">
//                     <p>NIGHTS</p>
//                     <p>{nights}</p>
//                   </span>
//                   <span className="flex flex-col p-2 text-center">
//                     <p>ROOMS</p>
//                     <p>{rooms}</p>
//                   </span>
//                 </div>

//                 <div className="m-4 w-auto ">
//                   <h1 className="font-bold py-3">Deluxe Suite with King Bed</h1>

//                   {/* <span className="flex flex-row justify-between">
//                 <ul>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> 1 King
//                     Bed
//                   </li>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> Free
//                     WIFI
//                   </li>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> Hand
//                     sanitizer
//                   </li>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> Room
//                     sanitizing
//                   </li>
//                 </ul>
//                 <ul>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> Free
//                     Wifi
//                   </li>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> Drinking
//                     water included
//                   </li>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> Cable TV
//                     channels
//                   </li>
//                 </ul>
//               </span> */}

//                   <div className="  w-full flex flex-row justify-start">
//                     <div className="col-2  w-1/4">
//                       {amenities
//                         .slice(0, Math.ceil(amenities.length / 2))
//                         .map((amenity, index) => (
//                           <ul className="flex flex-col" key={index}>
//                             <li className="flex flex-row">
//                               <CheckIcon
//                                 sx={{ fontSize: 16, color: "green" }}
//                               />
//                               {amenity.name}
//                             </li>
//                           </ul>
//                         ))}
//                     </div>
//                     <div className="col-2 col-2 w-1/4">
//                       {amenities
//                         .slice(Math.ceil(amenities.length / 2))
//                         .map((amenity, index) => (
//                           <ul className="flex flex-col" key={index}>
//                             <li>
//                               <CheckIcon
//                                 sx={{ fontSize: 16, color: "green" }}
//                               />
//                               {amenity.name}
//                             </li>
//                           </ul>
//                         ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-4 m-4 border  border-gray-500 rounded-2xl ">
//                 <div className="p-2 border bg-slate-200 rounded-2xl">
//                   The guest checking into each hotel room must be 21 or older,
//                   present a valid Photo ID and credit card.
//                 </div>
//                 <div className="font-bold py-2">
//                   <h1>Guest Name</h1>
//                 </div>
//                 <span className="flex flex-row gap-2">
//                   <TextField
//                     id="first-name"
//                     label="First Name*"
//                     variant="outlined"
//                     sx={{
//                       width: "50%",
//                       height: "2rem",
//                       borderColor: localFirstName ? "initial" : "red",
//                     }}
//                     value={localFirstName}
//                     onChange={handleFirstNameChange}
//                     InputProps={{
//                       endAdornment: isWarningShown && !localFirstName && (
//                         <p
//                           className="w-full"
//                           style={{ color: "red", margin: 0 }}
//                         >
//                           First name is required!
//                         </p>
//                       ),
//                     }}
//                   />

//                   <TextField
//                     id="last-name"
//                     required
//                     label="Last Name*"
//                     variant="outlined"
//                     sx={{
//                       width: "50%",
//                       height: "2rem",
//                     }}
//                     value={localLastName}
//                     onChange={handleLastNameChange}
//                     InputProps={{
//                       endAdornment: isWarningShown && !localLastName && (
//                         <p
//                           className="w-full"
//                           style={{ color: "red", margin: 0 }}
//                         >
//                           Last name is required!
//                         </p>
//                       ),
//                     }}
//                   />
//                 </span>
//                 <span className="flex flex-row mt-3 py-5">
//                   <Checkbox />
//                   <p>Guest name and name on card are the same</p>
//                 </span>
//               </div>

//               <div className="p-4 m-4 border  border-gray-500 rounded-2xl flex flex-col">
//                 <h1 className="font-bold">Payment Method</h1>
//                 <div className="border m-2 p-2  border-gray-500 rounded-2xl flex flex-col">
//                   <span className="flex flex-row">
//                     <CheckBox />
//                     <span className="flex flex-col">
//                       <p className="font-bold">Credit Card or Debit</p>
//                       <p>
//                         Visa, Mastercard, Diners Club, Discover, American
//                         Express
//                       </p>
//                     </span>
//                   </span>

//                   <div className="p-3 bg-gray-200 rounded-2xl flex flex-col">
//                     <span className="flex flex-row gap-3 py-2">
//                       <img
//                         src={Visa}
//                         alt="Visa"
//                         style={{ height: "2em", width: "2rem" }}
//                       />
//                       <img
//                         src={Mastercard}
//                         alt="MasterCard"
//                         style={{ height: "2em", width: "2rem" }}
//                       />
//                       <img
//                         src={Discover}
//                         alt="Discover"
//                         style={{ height: "2em", width: "2rem" }}
//                       />
//                       <img
//                         src={American_express}
//                         alt="American Express"
//                         style={{ height: "2em", width: "2rem" }}
//                       />
//                     </span>
//                     <TextField
//                       id="outlined-basic"
//                       label="Name on card*"
//                       variant="outlined"
//                       sx={{
//                         width: { xs: "100%", sm: "100%" },
//                         marginBottom: "1rem",
//                       }}
//                     />
//                     <TextField
//                       id="outlined-basic"
//                       label="Card number*"
//                       variant="outlined"
//                       sx={{
//                         width: { xs: "100%", sm: "100%" },
//                         marginBottom: "1rem",
//                       }}
//                     />

//                     <TextField
//                       id="outlined-basic"
//                       label="MM/YYYY*"
//                       variant="outlined"
//                       sx={{
//                         width: { xs: "100%", sm: "100%" },
//                         marginBottom: "1rem",
//                       }}
//                     />
//                     <TextField
//                       id="outlined-basic"
//                       label="CVV code*"
//                       variant="outlined"
//                       sx={{
//                         width: { xs: "100%", sm: "100%" },
//                         marginBottom: "1rem",
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* <div>
//             <CheckBox />
//           </div>
//           <div>
//             <CheckBox />
//           </div> */}
//               <div className="p-4 m-4 border border-gray-500 rounded-2xl flex flex-col">
//                 <h1 className="font-bold py-2">Billing</h1>

//                 <TextField
//                   id="outlined-basic"
//                   label="Street address*"
//                   variant="outlined"
//                   sx={{
//                     width: { xs: "100%", sm: "100%" },
//                     marginBottom: "1rem",
//                   }}
//                 />

//                 <TextField
//                   id="outlined-basic"
//                   label="Country*"
//                   variant="outlined"
//                   sx={{
//                     width: { xs: "100%", sm: "100%" },
//                     marginBottom: "1rem",
//                   }}
//                 />

//                 <TextField
//                   id="outlined-basic"
//                   label="State*"
//                   variant="outlined"
//                   sx={{
//                     width: { xs: "100%", sm: "100%" },
//                     marginBottom: "1rem",
//                   }}
//                 />

//                 <TextField
//                   id="outlined-basic"
//                   label="Postal Code*"
//                   variant="outlined"
//                   sx={{
//                     width: { xs: "100%", sm: "100%" },
//                     marginBottom: "1rem",
//                   }}
//                 />

//                 <TextField
//                   id="outlined-basic"
//                   label="Email address*"
//                   variant="outlined"
//                   sx={{
//                     width: { xs: "100%", sm: "100%" },
//                     marginBottom: "1rem",
//                   }}
//                 />

//                 <span className="flex flex-row gap-2">
//                   <TextField
//                     id="outlined-basic"
//                     label="+91"
//                     variant="outlined"
//                     disabled
//                     sx={{
//                       width: { xs: "30%", sm: "30%" },
//                       marginBottom: "1rem",
//                     }}
//                   />
//                   <TextField
//                     id="outlined-basic"
//                     label="Mobile Phone Number*"
//                     variant="outlined"
//                     sx={{
//                       width: { xs: "100%", sm: "100%" },
//                       marginBottom: "1rem",
//                     }}
//                   />
//                 </span>
//               </div>

//               <div className="p-4 m-4 border border-gray-500 rounded-2xl flex flex-col">
//                 <p className="font-bold text-xl py-2">Important Information</p>
//                 <ul className="list-disc pl-6">
//                   <li className="mb-3">
//                     Fully refundable until 11:59 pm (property local time) on
//                     February 26, 2024. After that time, hotel cancellation and
//                     change fees apply as stated in the Booking Conditions.
//                   </li>
//                   <li className="mb-3">
//                     Check-in begins at 4 pm, and check-out is at 12 pm.
//                   </li>
//                   <li>
//                     By selecting Book & Pay, you agree to the Booking
//                     Conditions, Terms & Conditions, and Privacy Policy.
//                   </li>
//                 </ul>
//               </div>

//               <div className="p-4 m-4 border border-gray-500 rounded-2xl flex flex-col">
//                 <button
//                   onClick={bookinConfirmationClcik}
//                   className={`p-4 rounded-full transition duration-300 ease-in-out focus:outline-none ${
//                     isButtonDisabled
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-blue-500 hover:bg-blue-600 text-white"
//                   }`}
//                   disabled={isButtonDisabled}
//                 >
//                   Book & Pay
//                 </button>
//               </div>
//             </div>

//             <div className="border border-red-500 w-6/12 ">
//               <div className="p-3 m-3 border border-gray-500 rounded-2xl">
//                 <span className="flex flex-row justify-between py-1">
//                   <p>Price per night</p>
//                   <p>${roomPricePerNight}</p>
//                 </span>
//                 <span className="flex flex-row justify-between py-1">
//                   <p>Number of rooms</p>
//                   <p>{numberOfRooms}</p>
//                 </span>
//                 <span className="flex flex-row justify-between py-1">
//                   <p>Number of nights</p>
//                   <p>{numberOfNights}</p>
//                 </span>
//                 <span className="flex flex-row justify-between py-1 border-b border-gray-500 ">
//                   <p>Taxes and fees</p>
//                   <p>${totalTaxes}</p>
//                 </span>
//                 <span className="flex flex-row justify-between pt-4">
//                   <p className="text-bold text-green-500">You pay today</p>
//                   <p>${totalPay}</p>
//                 </span>
//                 <span className="flex flex-row justify-between pt-4">
//                   <p>Total discounts</p>
//                   <p>${totalDiscounts}</p>
//                 </span>
//                 {/* <span className="text-end border-b border-gray-500  ">
//                   <p className="text-blue">as low as $144/month</p>
//                 </span> */}
//                 {/* <span className="py-1 flex flex-row justify-between">
//                   <p>You pay today</p>
//                   <p>$1,586.89</p>
//                 </span> */}
//                 <span className="flex flex-row  justify-between border-b border-gray-500 py-3">
//                   <p>Total property fee</p>
//                   <p>${totalPropertyFee}</p>
//                 </span>
//                 <span className="flex flex-row justify-between border-b border-gray-500 py-3">
//                   <p>Total Cost</p>
//                   <p>${totalCost.toFixed(2)}</p>
//                 </span>
//               </div>
//               {/* <div className="p-3 m-3 border border-gray-500 rounded-2xl">
//                 <span className="flex flex-row justify-between py-1">
//                   <p>Price per night</p>
//                   <p>${roomPricePerNight}</p>
//                 </span>
//                 <span className="flex flex-row justify-between py-1">
//                   <p>Number of rooms</p>
//                   <p>{numberOfRooms}</p>
//                 </span>
//                 <span className="flex flex-row justify-between py-1">
//                   <p>Number of nights</p>
//                   <p>{numberOfNights}</p>
//                 </span>
//                 <span className="flex flex-row justify-between py-1 border-b border-gray-500 ">
//                   <p>Taxes and fees</p>
//                   <p>${totalTaxes}</p>
//                 </span>
//                 <span className="flex flex-row justify-between py-1">
//                   <p>Total discounts</p>
//                   <p>${totalDiscounts}</p>
//                 </span>
//                 <span className="flex flex-row justify-between py-1">
//                   <p>Total property fee</p>
//                   <p>${totalPropertyFee}</p>
//                 </span>
//                 <span className="flex flex-row justify-between py-1">
//                   <p className="text-bold text-green-500">Total cost</p>
//                   <p>${totalCost.toFixed(2)}</p>
//                 </span>
//               </div> */}
//               <div className="p-3 m-3 border border-gray-500 rounded-2xl">
//                 <span className="flex flex-row justify-between">
//                   <p>Have a promo code?</p>
//                   <p>
//                     <KeyboardArrowDownIcon />
//                   </p>
//                 </span>
//               </div>
//               <div className="p-3 m-3 border border-gray-500 rounded-2xl">
//                 <span className="flex flex-row justify-between">
//                   <p className="">
//                     <CallIcon />
//                   </p>
//                   <span className="flex flex-col">
//                     <p>Have questions? We're here to help!</p>
//                     <p>1800 365-254</p>
//                   </span>
//                 </span>
//               </div>
//               <div className="p-3 m-3 ">
//                 <span className="border-b border-gray-500">
//                   <p>
//                     Prices in USD. Prices include all taxes and fees (this link
//                     opens in a modal dialog)charged by Priceline.
//                   </p>
//                 </span>
//                 <span className="p-3 m-3 ">
//                   <p>
//                     *Collected at the property. Please bring a valid form of
//                     payment.
//                   </p>
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h1>Checkout Page</h1>
//             {/* <Elements stripe={stripePromise}>
//               <StripePaymentForm />
//             </Elements> */}
//             <Elements stripe={stripePromise} options={options}>
//               <StripePaymentForm />
//             </Elements>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { Button } from "@mui/material";
// import { Container, Typography, Paper, TextField } from "@mui/material";
// import { shadows } from "@mui/system";
// import DemoImage from "../assets/room1.jpg";
// import { CheckBox, Radio } from "@mui/icons-material";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import CallIcon from "@mui/icons-material/Call";
// import CheckIcon from "@mui/icons-material/Check";
// import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import American_express from "../images/american-express.svg";
// import Discover from "../images/discover.svg";
// import Mastercard from "../images/mastercard.svg";
// import Visa from "../images/visa.svg";
// import Navbar from "../components/Navbar/Navbar";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, navigate } from "gatsby";
// import {
//   setSearchTerm,
//   setSelectedHotel,
//   setHotelDetails,
//   setFilteredHotels,
//   setCheckInDate,
//   setCheckOutDate,
//   setFirstName,
//   setLastName,
// } from "../redux/actions";
// import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import StripePaymentForm from "../components/Payment/StripePaymentForm";
// import CloseIcon from "@mui/icons-material/Close";
// import "../components/Payment/checkoutform.css";
// import Loader from "../components/UI_components/Loader";

// const steps = [
//   "Select master blaster campaign settings",
//   "Create an ad group",
//   "Create an ad",
// ];

// const generateRandomId = () => {
//   const randomNumber = Math.floor(Math.random() * 1000000);
//   const timestamp = Date.now();
//   return `id_${timestamp}_${randomNumber}`;
// };

// export default function Cart() {
//   //const stripePromise = loadStripe("pk_test_wEfNm25VgswYweN4IK0JjMzQ");
//   const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

//   const [paymentIntentId, setPaymentIntentId] = useState(null);

//   const dispatch = useDispatch();
//   const randomImage = "https://source.unsplash.com/?hotel,travel";

//   // const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const checkoutData = useSelector((state) => state.checkoutData.checkoutData);
//   console.log("checkoutData", checkoutData);

//   const hotelName = checkoutData?.name || "Default Hotel Name";
//   const addressLine1 =
//     checkoutData?.address?.address_line1 || "Address Not Available";
//   const amenities = checkoutData?.amenities || [];

//   // const formatDate = (date) => {
//   //   const year = date.getFullYear();
//   //   const month = String(date.getMonth() + 1).padStart(2, "0");
//   //   const day = String(date.getDate()).padStart(2, "0");
//   //   return `${year}-${month}-${day}`;
//   // };

//   // const formatDate = (date) => {
//   //   // Check if date is a valid Date object
//   //   if (!(date instanceof Date)) {
//   //     console.error("Invalid date:", date);
//   //     return ""; // Or handle the invalid date based on your requirements
//   //   }

//   //   const year = date.getFullYear();
//   //   const month = String(date.getMonth() + 1).padStart(2, "0");
//   //   const day = String(date.getDate()).padStart(2, "0");
//   //   return `${year}-${month}-${day}`;
//   // };

//   // const bookinConfirmationClcik = () => {

//   //   // const postData = {
//   //   //   type: "reservations_new",
//   //   //   title: hotelName || "",
//   //   //   field_booking_id: "22",
//   //   //   field_lastname: "lastName",
//   //   //   $schema: "firstName",
//   //   //   field_checkin: checkInDate ? formatDate(checkInDate) : "",
//   //   //   field_checkout: checkOutDate ? formatDate(checkOutDate) : "",
//   //   // };

//   //   // axios
//   //   //   .post("https://hotelrepo.sastoo.com/api/create-booking", postData, {
//   //   //     headers: {
//   //   //       "Content-Type": "application/json",
//   //   //     },
//   //   //   })
//   //   //   .then(function (response) {
//   //   //     console.log("Success:", response.data);
//   //   //     console.log("postData:", postData);
//   //   //     toast.success("Booking created successfully");
//   //   //     navigate("/bookingconfirm");
//   //   //   })
//   //   //   .catch(function (error) {
//   //   //     console.error("Error:", error);
//   //   //     toast.error("Failed to create booking");
//   //   //   });
//   // };

//   const handlePaymentSuccess = (paymentIntentId) => {
//     setPaymentIntentId(paymentIntentId);
//     setIsModalOpen(false); // Close modal after payment success
//     // Call bookingConfirmationClick function here
//     //bookingConfirmationClick(paymentIntentId);
//   };

//   const bookingConfirmationClick = () => {
//     // Your booking confirmation logic here
//     const postData = {
//       type: "reservations_new",
//       title: hotelName || "",
//       field_booking_id: "22",
//       field_lastname: "lastName",
//       $schema: "firstName",
//       field_checkin: checkInDate ? checkInDate : "",
//       field_checkout: checkOutDate ? checkOutDate : "",
//     };

//     axios
//       .post("https://hotelrepo.sastoo.com/api/create-booking", postData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then(function (response) {
//         console.log("Success:", response.data);
//         console.log("postData:", postData);
//         //toast.success("Booking created successfully");
//         //navigate("/bookingconfirm");
//       })
//       .catch(function (error) {
//         console.error("Error:", error);
//         toast.error("Failed to create booking");
//       });
//   };

//   const handleBookingConfirmationClick = () => {
//     // Open the modal or popup box
//     if (!localFirstName || !localLastName) {
//       // Show warning if inputs are empty
//       setIsWarningShown(true);
//       return; // Exit function if inputs are empty
//     }
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     // Close the modal or popup box
//     setIsModalOpen(false);
//   };

//   const checkInDate = useSelector((state) => state.date.checkInDate);
//   const checkOutDate = useSelector((state) => state.date.checkOutDate);

//   // Calculate the number of nights
//   const diffTime = Math.abs(checkOutDate - checkInDate);
//   const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//   //Assuming rooms count is obtained from somewhere else in the state
//   const { rooms, adults, children } = useSelector((state) => state.countData);

//   // Get the first name and last name from Redux state
//   const firstName = useSelector((state) => state.name.firstName);
//   const lastName = useSelector((state) => state.name.lastName);

//   // Local state to hold the input values
//   const [localFirstName, setLocalFirstName] = useState(firstName || "");
//   const [localLastName, setLocalLastName] = useState(lastName || "");
//   const [isWarningShown, setIsWarningShown] = useState(false);

//   // Function to handle changes in the first name field
//   const handleFirstNameChange = (event) => {
//     const { value } = event.target;
//     setLocalFirstName(value);
//     // Dispatch action to update first name in Redux
//     dispatch(setFirstName(value));
//     setIsWarningShown(false);
//     checkButtonState(localFirstName, event.target.value);
//   };

//   // Function to handle changes in the last name field
//   const handleLastNameChange = (event) => {
//     const { value } = event.target;
//     setLocalLastName(value);
//     // Dispatch action to update last name in Redux
//     dispatch(setLastName(value));
//     setIsWarningShown(false);
//     checkButtonState(event.target.value, localLastName);
//   };

//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [roomData, setRoomData] = useState(null);
//   const [totalQty, setTotalQty] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [stripe, setStripe] = useState(null);
//   const [sessionId, setSessionId] = useState(null); // Add state to store sessionId

//   const [isLoading, setIsLoading] = useState(true);

//   // Simulate loading process
//   setTimeout(() => {
//     setIsLoading(false); // Set isLoading to false after some time
//   }, 2000); //

//   const checkButtonState = (firstName, lastName) => {
//     if (firstName.trim() !== "" && lastName.trim() !== "") {
//       setIsButtonDisabled(false);
//     } else {
//       setIsButtonDisabled(true);
//     }
//   };

//   const [productCartItem, setProductCartItem] = useState([]);

//   useEffect(() => {
//     // Update productCartItem whenever hotelName or rooms change
//     const random_id = generateRandomId();
//     setProductCartItem([
//       {
//         _id: random_id,
//         name: hotelName,
//         qty: rooms,
//         price: 100, // Assuming the price is fixed for each item
//       },
//     ]);
//   }, [hotelName, rooms]);

//   useEffect(() => {
//     // Load Stripe asynchronously
//     const loadStripePromise = async () => {
//       const stripe = await loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
//       setStripe(stripe);
//     };
//     loadStripePromise();
//   }, []);

//   useEffect(() => {
//     let qty = rooms;
//     let price = 100;
//     productCartItem.forEach((item) => {
//       qty += item.qty;
//       price += item.qty * item.price;
//     });
//     setTotalQty(qty);
//     setTotalPrice(price);
//   }, [productCartItem]);

//   const handlePayment = async () => {
//     if (!stripe) {
//       console.error("Stripe is not yet loaded.");
//       return;
//     }
//     //https://jolly-blue-stockings.cyclic.app/
//     //http://localhost:8080
//     try {
//       // Create a checkout session
//       const response = await fetch(
//         "http://localhost:8080/create-checkout-session",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(productCartItem),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(
//           "Error creating checkout session: " + response.statusText
//         );
//       }

//       const sessionData = await response.json();
//       console.log("Session Data:", sessionData); // Log sessionData to check its structure

//       setSessionId(sessionData.sessionId); // Set sessionId in state
//     } catch (error) {
//       console.error("Payment Error:", error);
//     }
//   };

//   useEffect(() => {
//     if (sessionId) {
//       // Redirect to Checkout if sessionId is available
//       stripe
//         .redirectToCheckout({
//           sessionId: sessionId,
//         })
//         .then((result) => {
//           if (result.error) {
//             console.error(
//               "Error redirecting to Checkout:",
//               result.error.message
//             );
//           }
//         });
//     }
//   }, [sessionId, stripe]);

//   // const roomData = JSON.parse(sessionStorage.getItem("roomData"));
//   // console.log("roomData", roomData);

//   // if (!roomData) {
//   //   return <p>No room data available</p>;
//   // }

//   useEffect(() => {
//     // Check if sessionStorage is available
//     if (typeof window !== "undefined" && window.sessionStorage) {
//       // Access sessionStorage to retrieve room data
//       const storedRoomData = JSON.parse(sessionStorage.getItem("roomData"));
//       console.log("roomData", storedRoomData);
//       // Update roomData state with retrieved data
//       setRoomData(storedRoomData);
//     } else {
//       // Handle cases where sessionStorage is not available
//       console.error("sessionStorage is not available.");
//     }
//   }, []); // Empty dependency array ensures useEffect runs only once after component mounts

//   // Render message if roomData is not available
//   if (!roomData) {
//     return <p>No room data available</p>;
//   }

//   const roomPricePerNight = parseFloat(roomData.room_price); // Convert to float if necessary
//   const numberOfRooms = rooms; // Replace with actual number of rooms
//   const numberOfNights = nights; // Replace with actual number of nights

//   // Constants for taxes, discounts, and property fee
//   const taxPerRoom = 8;
//   const discountPerRoom = 1;
//   const propertyFeePerRoom = 5;

//   // Calculate subtotal before taxes and fees
//   const subtotal = roomPricePerNight * numberOfRooms * numberOfNights;

//   const totalPay =
//     roomPricePerNight * numberOfRooms * numberOfNights + taxPerRoom;
//   // Calculate total taxes
//   const totalTaxes = taxPerRoom * numberOfRooms;

//   // Calculate total discounts
//   const totalDiscounts = discountPerRoom * numberOfRooms;

//   // Calculate total property fee
//   const totalPropertyFee = propertyFeePerRoom * numberOfRooms;
//   // Calculate total cost
//   const totalCost = subtotal + totalTaxes + totalPropertyFee - totalDiscounts;

//   return (
//     <div>
//       {!hotelName || !addressLine1 || amenities.length === 0 ? (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             minHeight: "100vh", // Ensures the div takes up the full height of the viewport
//           }}
//         >
//           <div style={{ textAlign: "center" }}>
//             <p
//               style={{ fontSize: "16px", color: "#333", marginBottom: "10px" }}
//             >
//               <Link
//                 to="/"
//                 style={{
//                   textDecoration: "none",
//                   color: "blue",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Go back to main page
//               </Link>
//             </p>
//           </div>
//         </div>
//       ) : (
//         <div className="container-fluid flex flex-col justify-center items-center">
//           <Navbar />

//           {isLoading ? (
//             // Render loading spinner or message
//             <Loader />
//           ) : (

//           <div>

//           <div className="flex container justify-between gap-4 flex-row md:flex-row sm:flex-col border border-green-500 p-2">
//             <div>SECURE TRANSACTIONS</div>
//             <div>SECURE TRANSACTIONS</div>
//             <div>SECURE TRANSACTIONS</div>
//           </div>

//           <div className="container p-4 sm:p-2 border border-gray-500">
//             <Box>
//               <Stepper activeStep={1} alternativeLabel>
//                 {steps.map((label) => (
//                   <Step key={label}>
//                     <StepLabel>{label}</StepLabel>
//                   </Step>
//                 ))}
//               </Stepper>
//             </Box>
//           </div>

//           <div className="flex flex-row border border-green-600">
//             <div
//               className="border-2 border-gray-400  overflow-auto h-screen "
//               style={{ scrollBehavior: "smooth" }}
//             >
//               <p className="p-2 m-3">
//                 <strong>Almost done!</strong> Enter your details and complete
//                 your booking now.
//               </p>
//               <div className="m-4 border border-gray-500 rounded-2xl ">
//                 <div className="flex flex-row p-4 ">
//                   <img width="234" height="351" src={DemoImage} alt="Hotel" />
//                   <div className="flex flex-col px-3">
//                     <p className="font-bold ">{hotelName}</p>
//                     <p className="py-1">{addressLine1}</p>
//                     <span className="py-1 flex flex-row gap-3">
//                       <p className="px-2 font-bold text-white bg-orange-400 rounded">
//                         8.7
//                       </p>
//                       VERY GOOD | 5-STAR HOTEL
//                     </span>
//                     <p className="py-1 flex text-green">
//                       <CheckIcon className="text-green" />
//                       Fully Refundable until 11:59 PM (property local time) on
//                       Feb 26
//                     </p>
//                   </div>
//                 </div>

//                 {/* <div className="flex flex-row  justify-around m-4 border rounded-2xl bg-slate-200">
//                   <span className="flex flex-col text-center p-2 ">
//                     <p>CHECK-IN</p>
//                     <p>{checkInDate?.toDateString()}</p>
//                   </span>
//                   <span className="flex flex-col p-2 text-center">
//                     <p>CHECK-OUT</p>
//                     <p>{checkOutDate?.toDateString()}</p>
//                   </span>
//                   <span className="flex flex-col p-2 text-center">
//                     <p>NIGHTS</p>
//                     <p>{nights}</p>
//                   </span>
//                   <span className="flex flex-col p-2 text-center">
//                     <p>ROOMS</p>
//                     <p>{rooms}</p>
//                   </span>
//                 </div> */}
//                 <div className="flex flex-row  justify-around m-4 border rounded-2xl bg-slate-200">
//                   <span className="flex flex-col text-center p-2 ">
//                     <p>CHECK-IN</p>
//                     <p>{checkInDate}</p>
//                   </span>
//                   <span className="flex flex-col p-2 text-center">
//                     <p>CHECK-OUT</p>
//                     <p>{checkOutDate}</p>
//                   </span>
//                   <span className="flex flex-col p-2 text-center">
//                     <p>NIGHTS</p>
//                     <p>{nights}</p>
//                   </span>
//                   <span className="flex flex-col p-2 text-center">
//                     <p>ROOMS</p>
//                     <p>{rooms}</p>
//                   </span>
//                 </div>

//                 <div className="m-4 w-auto ">
//                   <h1 className="font-bold py-3">Deluxe Suite with King Bed</h1>

//                   {/* <span className="flex flex-row justify-between">
//                 <ul>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> 1 King
//                     Bed
//                   </li>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> Free
//                     WIFI
//                   </li>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> Hand
//                     sanitizer
//                   </li>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> Room
//                     sanitizing
//                   </li>
//                 </ul>
//                 <ul>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> Free
//                     Wifi
//                   </li>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> Drinking
//                     water included
//                   </li>
//                   <li>
//                     <CheckIcon sx={{ fontSize: 16, color: "green" }} /> Cable TV
//                     channels
//                   </li>
//                 </ul>
//               </span> */}

//                   <div className="  w-full flex flex-row justify-start">
//                     <div className="col-2  w-1/4">
//                       {amenities
//                         .slice(0, Math.ceil(amenities.length / 2))
//                         .map((amenity, index) => (
//                           <ul className="flex flex-col" key={index}>
//                             <li className="flex flex-row">
//                               <CheckIcon
//                                 sx={{ fontSize: 16, color: "green" }}
//                               />
//                               {amenity.name}
//                             </li>
//                           </ul>
//                         ))}
//                     </div>
//                     <div className="col-2 col-2 w-1/4">
//                       {amenities
//                         .slice(Math.ceil(amenities.length / 2))
//                         .map((amenity, index) => (
//                           <ul className="flex flex-col" key={index}>
//                             <li>
//                               <CheckIcon
//                                 sx={{ fontSize: 16, color: "green" }}
//                               />
//                               {amenity.name}
//                             </li>
//                           </ul>
//                         ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-4 m-4 border  border-gray-500 rounded-2xl ">
//                 <div className="p-2 border bg-slate-200 rounded-2xl">
//                   The guest checking into each hotel room must be 21 or older,
//                   present a valid Photo ID and credit card.
//                 </div>
//                 <div className="font-bold py-2">
//                   <h1>Guest Name</h1>
//                 </div>
//                 <span className="flex flex-row gap-2">
//                   <TextField
//                     id="first-name"
//                     label="First Name*"
//                     variant="outlined"
//                     sx={{
//                       width: "50%",
//                       height: "2rem",
//                       borderColor: localFirstName ? "initial" : "red",
//                     }}
//                     value={localFirstName}
//                     onChange={handleFirstNameChange}
//                     InputProps={{
//                       endAdornment: isWarningShown && !localFirstName && (
//                         <p
//                           className="w-full"
//                           style={{ color: "red", margin: 0 }}
//                         >
//                           First name is required!
//                         </p>
//                       ),
//                     }}
//                   />

//                   <TextField
//                     id="last-name"
//                     required
//                     label="Last Name*"
//                     variant="outlined"
//                     sx={{
//                       width: "50%",
//                       height: "2rem",
//                     }}
//                     value={localLastName}
//                     onChange={handleLastNameChange}
//                     InputProps={{
//                       endAdornment: isWarningShown && !localLastName && (
//                         <p
//                           className="w-full"
//                           style={{ color: "red", margin: 0 }}
//                         >
//                           Last name is required!
//                         </p>
//                       ),
//                     }}
//                   />
//                 </span>
//                 <span className="flex flex-row mt-3 py-5">
//                   <Checkbox />
//                   <p>Guest name and name on card are the same</p>
//                 </span>
//               </div>

//               <div className="p-4 m-4 border  border-gray-500 rounded-2xl flex flex-col">
//                 <h1 className="font-bold">Payment Method</h1>
//                 <div className="border m-2 p-2  border-gray-500 rounded-2xl flex flex-col">
//                   <span className="flex flex-row">
//                     <CheckBox />
//                     <span className="flex flex-col">
//                       <p className="font-bold">Credit Card or Debit</p>
//                       <p>
//                         Visa, Mastercard, Diners Club, Discover, American
//                         Express
//                       </p>
//                     </span>
//                   </span>

//                   <div className="p-3 bg-gray-200 rounded-2xl flex flex-col">
//                     <span className="flex flex-row gap-3 py-2">
//                       <img
//                         src={Visa}
//                         alt="Visa"
//                         style={{ height: "2em", width: "2rem" }}
//                       />
//                       <img
//                         src={Mastercard}
//                         alt="MasterCard"
//                         style={{ height: "2em", width: "2rem" }}
//                       />
//                       <img
//                         src={Discover}
//                         alt="Discover"
//                         style={{ height: "2em", width: "2rem" }}
//                       />
//                       <img
//                         src={American_express}
//                         alt="American Express"
//                         style={{ height: "2em", width: "2rem" }}
//                       />
//                     </span>
//                     <TextField
//                       id="outlined-basic"
//                       label="Name on card*"
//                       variant="outlined"
//                       sx={{
//                         width: { xs: "100%", sm: "100%" },
//                         marginBottom: "1rem",
//                       }}
//                     />
//                     <TextField
//                       id="outlined-basic"
//                       label="Card number*"
//                       variant="outlined"
//                       sx={{
//                         width: { xs: "100%", sm: "100%" },
//                         marginBottom: "1rem",
//                       }}
//                     />

//                     <TextField
//                       id="outlined-basic"
//                       label="MM/YYYY*"
//                       variant="outlined"
//                       sx={{
//                         width: { xs: "100%", sm: "100%" },
//                         marginBottom: "1rem",
//                       }}
//                     />
//                     <TextField
//                       id="outlined-basic"
//                       label="CVV code*"
//                       variant="outlined"
//                       sx={{
//                         width: { xs: "100%", sm: "100%" },
//                         marginBottom: "1rem",
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* <div>
//             <CheckBox />
//           </div>
//           <div>
//             <CheckBox />
//           </div> */}
//               <div className="p-4 m-4 border border-gray-500 rounded-2xl flex flex-col">
//                 <h1 className="font-bold py-2">Billing</h1>

//                 <TextField
//                   id="outlined-basic"
//                   label="Street address*"
//                   variant="outlined"
//                   sx={{
//                     width: { xs: "100%", sm: "100%" },
//                     marginBottom: "1rem",
//                   }}
//                 />

//                 <TextField
//                   id="outlined-basic"
//                   label="Country*"
//                   variant="outlined"
//                   sx={{
//                     width: { xs: "100%", sm: "100%" },
//                     marginBottom: "1rem",
//                   }}
//                 />

//                 <TextField
//                   id="outlined-basic"
//                   label="State*"
//                   variant="outlined"
//                   sx={{
//                     width: { xs: "100%", sm: "100%" },
//                     marginBottom: "1rem",
//                   }}
//                 />

//                 <TextField
//                   id="outlined-basic"
//                   label="Postal Code*"
//                   variant="outlined"
//                   sx={{
//                     width: { xs: "100%", sm: "100%" },
//                     marginBottom: "1rem",
//                   }}
//                 />

//                 <TextField
//                   id="outlined-basic"
//                   label="Email address*"
//                   variant="outlined"
//                   sx={{
//                     width: { xs: "100%", sm: "100%" },
//                     marginBottom: "1rem",
//                   }}
//                 />

//                 <span className="flex flex-row gap-2">
//                   <TextField
//                     id="outlined-basic"
//                     label="+91"
//                     variant="outlined"
//                     disabled
//                     sx={{
//                       width: { xs: "30%", sm: "30%" },
//                       marginBottom: "1rem",
//                     }}
//                   />
//                   <TextField
//                     id="outlined-basic"
//                     label="Mobile Phone Number*"
//                     variant="outlined"
//                     sx={{
//                       width: { xs: "100%", sm: "100%" },
//                       marginBottom: "1rem",
//                     }}
//                   />
//                 </span>
//               </div>

//               <div className="p-4 m-4 border border-gray-500 rounded-2xl flex flex-col">
//                 <p className="font-bold text-xl py-2">Important Information</p>
//                 <ul className="list-disc pl-6">
//                   <li className="mb-3">
//                     Fully refundable until 11:59 pm (property local time) on
//                     February 26, 2024. After that time, hotel cancellation and
//                     change fees apply as stated in the Booking Conditions.
//                   </li>
//                   <li className="mb-3">
//                     Check-in begins at 4 pm, and check-out is at 12 pm.
//                   </li>
//                   <li>
//                     By selecting Book & Pay, you agree to the Booking
//                     Conditions, Terms & Conditions, and Privacy Policy.
//                   </li>
//                 </ul>
//               </div>

//               <div className="p-4 m-4 border border-gray-500 rounded-2xl flex flex-col">
//                 <button
//                   onClick={() => {
//                     handlePayment();
//                     bookingConfirmationClick();
//                   }}
//                   // onClick={handlePayment}
//                   //onClick={bookinConfirmationClcik}
//                   //onClick={handleBookingConfirmationClick}
//                   className={`p-4 rounded-full transition duration-300 ease-in-out focus:outline-none ${
//                     isButtonDisabled
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-blue-500 hover:bg-blue-600 text-white"
//                   }`}
//                   disabled={isButtonDisabled}
//                 >
//                   Book & Pay
//                 </button>
//               </div>
//             </div>

//             <div className="border border-red-500 w-6/12 ">
//               <div className="p-3 m-3 border border-gray-500 rounded-2xl">
//                 <span className="flex flex-row justify-between py-1">
//                   <p>Price per night</p>
//                   <p>${roomPricePerNight}</p>
//                 </span>
//                 <span className="flex flex-row justify-between py-1">
//                   <p>Number of rooms</p>
//                   <p>{numberOfRooms}</p>
//                 </span>
//                 <span className="flex flex-row justify-between py-1">
//                   <p>Number of nights</p>
//                   <p>{numberOfNights}</p>
//                 </span>
//                 <span className="flex flex-row justify-between py-1 border-b border-gray-500 ">
//                   <p>Taxes and fees</p>
//                   <p>${totalTaxes}</p>
//                 </span>
//                 <span className="flex flex-row justify-between pt-4">
//                   <p className="text-bold text-green-500">You pay today</p>
//                   <p>${totalPay}</p>
//                 </span>
//                 <span className="flex flex-row justify-between pt-4">
//                   <p>Total discounts</p>
//                   <p>${totalDiscounts}</p>
//                 </span>

//                 <span className="flex flex-row  justify-between border-b border-gray-500 py-3">
//                   <p>Total property fee</p>
//                   <p>${totalPropertyFee}</p>
//                 </span>
//                 <span className="flex flex-row justify-between border-b border-gray-500 py-3">
//                   <p>Total Cost</p>
//                   <p>${totalCost.toFixed(2)}</p>
//                 </span>
//               </div>

//               <div className="p-3 m-3 border border-gray-500 rounded-2xl">
//                 <span className="flex flex-row justify-between">
//                   <p>Have a promo code?</p>
//                   <p>
//                     <KeyboardArrowDownIcon />
//                   </p>
//                 </span>
//               </div>
//               <div className="p-3 m-3 border border-gray-500 rounded-2xl">
//                 <span className="flex flex-row justify-between">
//                   <p className="">
//                     <CallIcon />
//                   </p>
//                   <span className="flex flex-col">
//                     <p>Have questions? We're here to help!</p>
//                     <p>1800 365-254</p>
//                   </span>
//                 </span>
//               </div>
//               <div className="p-3 m-3 ">
//                 <span className="border-b border-gray-500">
//                   <p>
//                     Prices in USD. Prices include all taxes and fees (this link
//                     opens in a modal dialog)charged by Priceline.
//                   </p>
//                 </span>
//                 <span className="p-3 m-3 ">
//                   <p>
//                     *Collected at the property. Please bring a valid form of
//                     payment.
//                   </p>
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* {isModalOpen && (
//             <div className="modal-overlay">
//               <div className="modal-content">
//                 <span
//                   className="close  hover:bg-red-500"
//                   onClick={handleCloseModal}
//                 >
//                   <CloseIcon className=" font-medium" />
//                 </span>
//                 <Elements stripe={stripePromise} options={options}>
//                   <StripePaymentForm />
//                 </Elements>
//               </div>
//             </div>
//           )} */}

//           {/* {isModalOpen && (
//             <div className="modal-overlay">
//               <div className="modal-content">
//                 <span
//                   className="close  hover:bg-red-500"
//                   onClick={handleCloseModal}
//                 >
//                   <CloseIcon className=" font-medium" />
//                 </span>
//                 <Elements stripe={stripePromise}>
//                   <StripePaymentForm onSuccess={handlePaymentSuccess} />
//                 </Elements>
//               </div>
//               {paymentIntentId && (
//                 <div>
//                   Payment successful! PaymentIntent ID: {paymentIntentId}
//                 </div>
//               )}
//             </div>
//           )} */}
//         </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { Button } from "@mui/material";
// import { Container, Typography, Paper, TextField } from "@mui/material";
// import { shadows } from "@mui/system";
// import DemoImage from "../assets/room1.jpg";
// import { CheckBox, Radio } from "@mui/icons-material";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import CallIcon from "@mui/icons-material/Call";
// import CheckIcon from "@mui/icons-material/Check";
// import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import American_express from "../images/american-express.svg";
// import Discover from "../images/discover.svg";
// import Mastercard from "../images/mastercard.svg";
// import Visa from "../images/visa.svg";
// import Navbar from "../components/Navbar/Navbar";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, navigate } from "gatsby";
// import {
//   setSearchTerm,
//   setSelectedHotel,
//   setHotelDetails,
//   setFilteredHotels,
//   setCheckInDate,
//   setCheckOutDate,
//   setFirstName,
//   setLastName,
// } from "../redux/actions";
// import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import StripePaymentForm from "../components/Payment/StripePaymentForm";
// import CloseIcon from "@mui/icons-material/Close";
// import "../components/Payment/checkoutform.css";

// const generateRandomId = () => {
//   const randomNumber = Math.floor(Math.random() * 1000000); // Increased upper limit for more randomness
//   const timestamp = Date.now();
//   return `id_${timestamp}_${randomNumber}`;
// };

// export default function Cart() {
//   //const stripePromise = loadStripe("pk_test_wEfNm25VgswYweN4IK0JjMzQ");

//   const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

//   const [paymentIntentId, setPaymentIntentId] = useState(null);

//   const dispatch = useDispatch();
//   const randomImage = "https://source.unsplash.com/?hotel,travel";

//   // const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const checkoutData = useSelector((state) => state.checkoutData.checkoutData);
//   console.log("checkoutData", checkoutData);

//   const hotelName = checkoutData?.name || "Default Hotel Name";
//   const addressLine1 =
//     checkoutData?.address?.address_line1 || "Address Not Available";
//   const amenities = checkoutData?.amenities || [];

//   const formatDate = (date) => {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const day = String(date.getDate()).padStart(2, "0");
//     return `${year}-${month}-${day}`;
//   };

//   const checkInDate = useSelector((state) => state.date.checkInDate);
//   const checkOutDate = useSelector((state) => state.date.checkOutDate);

//   // Calculate the number of nights
//   const diffTime = Math.abs(checkOutDate - checkInDate);
//   const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//   //Assuming rooms count is obtained from somewhere else in the state
//   const { rooms, adults, children } = useSelector((state) => state.countData);

//   // Get the first name and last name from Redux state
//   const firstName = useSelector((state) => state.name.firstName);
//   const lastName = useSelector((state) => state.name.lastName);

//   // Local state to hold the input values
//   const [localFirstName, setLocalFirstName] = useState(firstName || "");
//   const [localLastName, setLocalLastName] = useState(lastName || "");
//   const [isWarningShown, setIsWarningShown] = useState(false);

//   // Function to handle changes in the first name field
//   const handleFirstNameChange = (event) => {
//     const { value } = event.target;
//     setLocalFirstName(value);
//     // Dispatch action to update first name in Redux
//     dispatch(setFirstName(value));
//     setIsWarningShown(false);
//     checkButtonState(localFirstName, event.target.value);
//   };

//   // Function to handle changes in the last name field
//   const handleLastNameChange = (event) => {
//     const { value } = event.target;
//     setLocalLastName(value);
//     // Dispatch action to update last name in Redux
//     dispatch(setLastName(value));
//     setIsWarningShown(false);
//     checkButtonState(event.target.value, localLastName);
//   };

//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [roomData, setRoomData] = useState(null);
//   const [totalQty, setTotalQty] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [stripe, setStripe] = useState(null);
//   const [sessionId, setSessionId] = useState(null); // Add state to store sessionId

//   const checkButtonState = (firstName, lastName) => {
//     if (firstName.trim() !== "" && lastName.trim() !== "") {
//       setIsButtonDisabled(false);
//     } else {
//       setIsButtonDisabled(true);
//     }
//   };

//   // const [productCartItem] = useState(() => {
//   //   const random_id = generateRandomId();
//   //   return [
//   //     {
//   //       _id: random_id,
//   //       hotelName: hotelName,
//   //       rooms: rooms,
//   //       price: 80,
//   //     },
//   //   ];
//   // });

//   const [productCartItem] = useState([
//     { _id: 1, name: hotelName, qty: rooms, price: 100 },
//   ]);

//   useEffect(() => {
//     // Load Stripe asynchronously
//     const loadStripePromise = async () => {
//       const stripe = await loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
//       setStripe(stripe);
//     };
//     loadStripePromise();
//   }, []);

//   useEffect(() => {
//     let qty = rooms;
//     let price = 100;
//     productCartItem.forEach((item) => {
//       qty += item.qty;
//       price += item.qty * item.price;
//     });
//     setTotalQty(qty);
//     setTotalPrice(price);
//   }, [productCartItem]);

//   const handlePayment = async () => {
//     if (!stripe) {
//       console.error("Stripe is not yet loaded.");
//       return;
//     }

//     try {
//       // Create a checkout session
//       const response = await fetch(
//         "http://localhost:8080/create-checkout-session",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(productCartItem),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(
//           "Error creating checkout session: " + response.statusText
//         );
//       }

//       const sessionData = await response.json();
//       console.log("Session Data:", sessionData); // Log sessionData to check its structure

//       setSessionId(sessionData.sessionId); // Set sessionId in state
//     } catch (error) {
//       console.error("Payment Error:", error);
//     }
//   };

//   useEffect(() => {
//     if (sessionId) {
//       // Redirect to Checkout if sessionId is available
//       stripe
//         .redirectToCheckout({
//           sessionId: sessionId,
//         })
//         .then((result) => {
//           if (result.error) {
//             console.error(
//               "Error redirecting to Checkout:",
//               result.error.message
//             );
//           }
//         });
//     }
//   }, [sessionId, stripe]);

//   useEffect(() => {
//     // Check if sessionStorage is available
//     if (typeof window !== "undefined" && window.sessionStorage) {
//       // Access sessionStorage to retrieve room data
//       const storedRoomData = JSON.parse(sessionStorage.getItem("roomData"));
//       console.log("roomData", storedRoomData);
//       // Update roomData state with retrieved data
//       setRoomData(storedRoomData);
//     } else {
//       // Handle cases where sessionStorage is not available
//       console.error("sessionStorage is not available.");
//     }
//   }, []); // Empty dependency array ensures useEffect runs only once after component mounts

//   // Render message if roomData is not available
//   if (!roomData) {
//     return <p>No room data available</p>;
//   }

//   const roomPricePerNight = parseFloat(roomData.room_price); // Convert to float if necessary
//   const numberOfRooms = rooms; // Replace with actual number of rooms
//   const numberOfNights = nights; // Replace with actual number of nights

//   // Constants for taxes, discounts, and property fee
//   const taxPerRoom = 8;
//   const discountPerRoom = 1;
//   const propertyFeePerRoom = 5;

//   // Calculate subtotal before taxes and fees
//   const subtotal = roomPricePerNight * numberOfRooms * numberOfNights;

//   const totalPay =
//     roomPricePerNight * numberOfRooms * numberOfNights + taxPerRoom;
//   // Calculate total taxes
//   const totalTaxes = taxPerRoom * numberOfRooms;

//   // Calculate total discounts
//   const totalDiscounts = discountPerRoom * numberOfRooms;

//   // Calculate total property fee
//   const totalPropertyFee = propertyFeePerRoom * numberOfRooms;
//   // Calculate total cost
//   const totalCost = subtotal + totalTaxes + totalPropertyFee - totalDiscounts;

//   return (
//     <div>
//       {!hotelName || !addressLine1 || amenities.length === 0 ? (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             minHeight: "100vh", // Ensures the div takes up the full height of the viewport
//           }}
//         >
//           <div style={{ textAlign: "center" }}>
//             <p
//               style={{ fontSize: "16px", color: "#333", marginBottom: "10px" }}
//             >
//               <Link
//                 to="/"
//                 style={{
//                   textDecoration: "none",
//                   color: "blue",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Go back to main page
//               </Link>
//             </p>
//           </div>
//         </div>
//       ) : (
//         <div className="container-fluid flex flex-col justify-center items-center">
//           <Navbar />

//           <div className="flex flex-row border border-green-600">
//             <div className="p-4 m-4 border border-gray-500 rounded-2xl flex flex-col">
//               <button
//                 onClick={handlePayment}
//                 className={`p-4 rounded-full transition duration-300 ease-in-out focus:outline-none ${
//                   isButtonDisabled
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-blue-500 hover:bg-blue-600 text-white"
//                 }`}
//                 // disabled={isButtonDisabled}
//               >
//                 Book & Pay
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { Button } from "@mui/material";
// import { Container, Typography, Paper, TextField } from "@mui/material";
// import { shadows } from "@mui/system";
// import DemoImage from "../assets/room1.jpg";
// import { CheckBox, Radio } from "@mui/icons-material";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import CallIcon from "@mui/icons-material/Call";
// import CheckIcon from "@mui/icons-material/Check";
// import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import American_express from "../images/american-express.svg";
// import Discover from "../images/discover.svg";
// import Mastercard from "../images/mastercard.svg";
// import Visa from "../images/visa.svg";
// import Navbar from "../components/Navbar/Navbar";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, navigate } from "gatsby";
// import {
//   setSearchTerm,
//   setSelectedHotel,
//   setHotelDetails,
//   setFilteredHotels,
//   setCheckInDate,
//   setCheckOutDate,
//   setFirstName,
//   setLastName,
// } from "../redux/actions";
// import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import StripePaymentForm from "../components/Payment/StripePaymentForm";
// import CloseIcon from "@mui/icons-material/Close";
// import "../components/Payment/checkoutform.css";
// import Loader from "../components/UI_components/Loader";

// const steps = [
//   "Select master blaster campaign settings",
//   "Create an ad group",
//   "Create an ad",
// ];

// const generateRandomId = () => {
//   const randomNumber = Math.floor(Math.random() * 1000000);
//   const timestamp = Date.now();
//   return `id_${timestamp}_${randomNumber}`;
// };

// export default function Cart() {
//   //const stripePromise = loadStripe("pk_test_wEfNm25VgswYweN4IK0JjMzQ");
//   const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

//   const [paymentIntentId, setPaymentIntentId] = useState(null);

//   const dispatch = useDispatch();
//   const randomImage = "https://source.unsplash.com/?hotel,travel";

//   // const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const checkoutData = useSelector((state) => state.checkoutData.checkoutData);
//   console.log("checkoutData", checkoutData);

//   const hotelName = checkoutData?.name || "Default Hotel Name";
//   const addressLine1 =
//     checkoutData?.address?.address_line1 || "Address Not Available";
//   const amenities = checkoutData?.amenities || [];

//   // const formatDate = (date) => {
//   //   const year = date.getFullYear();
//   //   const month = String(date.getMonth() + 1).padStart(2, "0");
//   //   const day = String(date.getDate()).padStart(2, "0");
//   //   return `${year}-${month}-${day}`;
//   // };

//   // const formatDate = (date) => {
//   //   // Check if date is a valid Date object
//   //   if (!(date instanceof Date)) {
//   //     console.error("Invalid date:", date);
//   //     return ""; // Or handle the invalid date based on your requirements
//   //   }

//   //   const year = date.getFullYear();
//   //   const month = String(date.getMonth() + 1).padStart(2, "0");
//   //   const day = String(date.getDate()).padStart(2, "0");
//   //   return `${year}-${month}-${day}`;
//   // };

//   // const bookinConfirmationClcik = () => {

//   //   // const postData = {
//   //   //   type: "reservations_new",
//   //   //   title: hotelName || "",
//   //   //   field_booking_id: "22",
//   //   //   field_lastname: "lastName",
//   //   //   $schema: "firstName",
//   //   //   field_checkin: checkInDate ? formatDate(checkInDate) : "",
//   //   //   field_checkout: checkOutDate ? formatDate(checkOutDate) : "",
//   //   // };

//   //   // axios
//   //   //   .post("https://hotelrepo.sastoo.com/api/create-booking", postData, {
//   //   //     headers: {
//   //   //       "Content-Type": "application/json",
//   //   //     },
//   //   //   })
//   //   //   .then(function (response) {
//   //   //     console.log("Success:", response.data);
//   //   //     console.log("postData:", postData);
//   //   //     toast.success("Booking created successfully");
//   //   //     navigate("/bookingconfirm");
//   //   //   })
//   //   //   .catch(function (error) {
//   //   //     console.error("Error:", error);
//   //   //     toast.error("Failed to create booking");
//   //   //   });
//   // };

//   const handlePaymentSuccess = (paymentIntentId) => {
//     setPaymentIntentId(paymentIntentId);
//     setIsModalOpen(false); // Close modal after payment success
//     // Call bookingConfirmationClick function here
//     //bookingConfirmationClick(paymentIntentId);
//   };

//   // const formatDate = (date) => {
//   //   const year = date.getFullYear();
//   //   const month = String(date.getMonth() + 1).padStart(2, "0");
//   //   const day = String(date.getDate()).padStart(2, "0");
//   //   return `${year}-${month}-${day}`;
//   // };

//   // const bookingConfirmationClick = () => {
//   //   if (!localFirstName || !localLastName) {
//   //     // Show warning if inputs are empty
//   //     setIsWarningShown(true);
//   //     return; // Exit function if inputs are empty
//   //   }
//   //   const postData = {
//   //     type: "reservations_new",
//   //     title: hotelName || "",
//   //     field_booking_id: "22",
//   //     field_lastname: "lastName",
//   //     $schema: "firstName",
//   //     field_checkin: checkInDate ? checkInDate : "",
//   //     field_checkout: checkOutDate ? checkOutDate : "",
//   //   };

//   //   axios
//   //     .post("https://hotelrepo.sastoo.com/api/create-booking", postData, {
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //     })
//   //     .then(function (response) {
//   //       console.log("Success:", response.data);
//   //       console.log("postData:", postData);
//   //       toast.success("Booking created successfully");
//   //       navigate("/bookingconfirm");
       
//   //     })
//   //     .catch(function (error) {
//   //       console.error("Error:", error);
//   //       toast.error("Failed to create booking");
//   //     });
//   // };





//   const bookingConfirmationClick = () => {
//     // Your booking confirmation logic here
//     const postData = {
//       type: "reservations_new",
//       title: hotelName || "",
//       field_booking_id: "22",
//       field_lastname: "lastName",
//       $schema: "firstName",
//       field_checkin: checkInDate ? checkInDate : "",
//       field_checkout: checkOutDate ? checkOutDate : "",
//     };

//     axios
//       .post("https://hotelrepo.sastoo.com/api/create-booking", postData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then(function (response) {
//         console.log("Success:", response.data);
//         console.log("postData:", postData);
//         toast.success("Booking created successfully");
//         //navigate("/bookingconfirm");
//       })
//       .catch(function (error) {
//         console.error("Error:", error);
//         toast.error("Failed to create booking");
//       });
//   };

//   const handleBookingConfirmationClick = () => {
//     // Open the modal or popup box
//     if (!localFirstName || !localLastName) {
//       // Show warning if inputs are empty
//       setIsWarningShown(true);
//       return; // Exit function if inputs are empty
//     }
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     // Close the modal or popup box
//     setIsModalOpen(false);
//   };

//   const checkInDate = useSelector((state) => state.date.checkInDate);
//   const checkOutDate = useSelector((state) => state.date.checkOutDate);

//   // Calculate the number of nights
//   const diffTime = Math.abs(checkOutDate - checkInDate);
//   const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//   //Assuming rooms count is obtained from somewhere else in the state
//   const { rooms, adults, children } = useSelector((state) => state.countData);

//   // Get the first name and last name from Redux state
//   const firstName = useSelector((state) => state.name.firstName);
//   const lastName = useSelector((state) => state.name.lastName);

//   // Local state to hold the input values
//   const [localFirstName, setLocalFirstName] = useState(firstName || "");
//   const [localLastName, setLocalLastName] = useState(lastName || "");
//   const [isWarningShown, setIsWarningShown] = useState(false);

//   // Function to handle changes in the first name field
//   const handleFirstNameChange = (event) => {
//     const { value } = event.target;
//     setLocalFirstName(value);
//     // Dispatch action to update first name in Redux
//     dispatch(setFirstName(value));
//     setIsWarningShown(false);
//     checkButtonState(localFirstName, event.target.value);
//   };

//   // Function to handle changes in the last name field
//   const handleLastNameChange = (event) => {
//     const { value } = event.target;
//     setLocalLastName(value);
//     // Dispatch action to update last name in Redux
//     dispatch(setLastName(value));
//     setIsWarningShown(false);
//     checkButtonState(event.target.value, localLastName);
//   };

//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [roomData, setRoomData] = useState(null);
//   const [totalQty, setTotalQty] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [stripe, setStripe] = useState(null);
//   const [sessionId, setSessionId] = useState(null); // Add state to store sessionId

//   const [isLoading, setIsLoading] = useState(true);

//   // Simulate loading process
//   setTimeout(() => {
//     setIsLoading(false); // Set isLoading to false after some time
//   }, 2000); //

//   const checkButtonState = (firstName, lastName) => {
//     if (firstName.trim() !== "" && lastName.trim() !== "") {
//       setIsButtonDisabled(false);
//     } else {
//       setIsButtonDisabled(true);
//     }
//   };

//   const [productCartItem, setProductCartItem] = useState([]);

//   useEffect(() => {
//     // Update productCartItem whenever hotelName or rooms change
//     const random_id = generateRandomId();
//     setProductCartItem([
//       {
//         _id: random_id,
//         name: hotelName,
//         qty: rooms,
//         price: 100, // Assuming the price is fixed for each item
//       },
//     ]);
//   }, [hotelName, rooms]);

//   useEffect(() => {
//     // Load Stripe asynchronously
//     const loadStripePromise = async () => {
//       const stripe = await loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
//       setStripe(stripe);
//     };
//     loadStripePromise();
//   }, []);

//   useEffect(() => {
//     let qty = rooms;
//     let price = 100;
//     productCartItem.forEach((item) => {
//       qty += item.qty;
//       price += item.qty * item.price;
//     });
//     setTotalQty(qty);
//     setTotalPrice(price);
//   }, [productCartItem]);

//   const handlePayment = async () => {
//     if (!stripe) {
//       console.error("Stripe is not yet loaded.");
//       return;
//     }
//     //https://jolly-blue-stockings.cyclic.app/
//     //http://localhost:8080
//     try {
//       // Create a checkout session
//       const response = await fetch(
//         "http://localhost:8080/create-checkout-session",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(productCartItem),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(
//           "Error creating checkout session: " + response.statusText
//         );
//       }

//       const sessionData = await response.json();
//       console.log("Session Data:", sessionData); // Log sessionData to check its structure

//       setSessionId(sessionData.sessionId); // Set sessionId in state
//     } catch (error) {
//       console.error("Payment Error:", error);
//     }
//   };

//   useEffect(() => {
//     if (sessionId) {
//       // Redirect to Checkout if sessionId is available
//       stripe
//         .redirectToCheckout({
//           sessionId: sessionId,
//         })
//         .then((result) => {
//           if (result.error) {
//             console.error(
//               "Error redirecting to Checkout:",
//               result.error.message
//             );
//           }
//         });
//     }
//   }, [sessionId, stripe]);

//   // const roomData = JSON.parse(sessionStorage.getItem("roomData"));
//   // console.log("roomData", roomData);

//   // if (!roomData) {
//   //   return <p>No room data available</p>;
//   // }

//   useEffect(() => {
//     // Check if sessionStorage is available
//     if (typeof window !== "undefined" && window.sessionStorage) {
//       // Access sessionStorage to retrieve room data
//       const storedRoomData = JSON.parse(sessionStorage.getItem("roomData"));
//       console.log("roomData", storedRoomData);
//       // Update roomData state with retrieved data
//       setRoomData(storedRoomData);
//     } else {
//       // Handle cases where sessionStorage is not available
//       console.error("sessionStorage is not available.");
//     }
//   }, []); // Empty dependency array ensures useEffect runs only once after component mounts

//   // Render message if roomData is not available
//   if (!roomData) {
//     return <p>No room data available</p>;
//   }

//   const roomPricePerNight = parseFloat(roomData.room_price); // Convert to float if necessary
//   const numberOfRooms = rooms; // Replace with actual number of rooms
//   const numberOfNights = nights; // Replace with actual number of nights

//   // Constants for taxes, discounts, and property fee
//   const taxPerRoom = 8;
//   const discountPerRoom = 1;
//   const propertyFeePerRoom = 5;

//   // Calculate subtotal before taxes and fees
//   const subtotal = roomPricePerNight * numberOfRooms * numberOfNights;

//   const totalPay =
//     roomPricePerNight * numberOfRooms * numberOfNights + taxPerRoom;
//   // Calculate total taxes
//   const totalTaxes = taxPerRoom * numberOfRooms;

//   // Calculate total discounts
//   const totalDiscounts = discountPerRoom * numberOfRooms;

//   // Calculate total property fee
//   const totalPropertyFee = propertyFeePerRoom * numberOfRooms;
//   // Calculate total cost
//   const totalCost = subtotal + totalTaxes + totalPropertyFee - totalDiscounts;



// //   const handleBookingAndPayment = async () => {
// //     // Your booking confirmation logic here
// //     const postData = {
// //       type: "reservations_new",
// //       title: hotelName || "",
// //       field_booking_id: "22",
// //       field_lastname: "lastName",
// //       $schema: "firstName",
// //       field_checkin: checkInDate ? checkInDate : "",
// //       field_checkout: checkOutDate ? checkOutDate : "",
// //     };

// //     try {
// //       const bookingResponse = await axios.post("https://hotelrepo.sastoo.com/api/create-booking", postData, {
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       });

// //       console.log("Booking Success:", bookingResponse.data);
// //       console.log("Booking postData:", postData);
// //       toast.success("Booking created successfully");
      
// //       // Payment logic
// //       if (!stripe) {
// //         console.error("Stripe is not yet loaded.");
// //         return;
// //       }

// //       // Create a checkout session
// //       const paymentResponse = await fetch("http://localhost:8080/create-checkout-session", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(productCartItem),
// //       });

// //       if (!paymentResponse.ok) {
// //         throw new Error("Error creating checkout session: " + paymentResponse.statusText);
// //       }

// //       const sessionData = await paymentResponse.json();
// //       console.log("Session Data:", sessionData);
// //       setSessionId(sessionData.sessionId);
// //     } catch (error) {
// //       console.error("Error:", error);
// //       toast.error("Failed to create booking or process payment");
// //     }
// // };

// // Call handleBookingAndPayment function



//   return (
//     <div>
//       {!hotelName || !addressLine1 || amenities.length === 0 ? (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             minHeight: "100vh", // Ensures the div takes up the full height of the viewport
//           }}
//         >
//           <div style={{ textAlign: "center" }}>
//             <p
//               style={{ fontSize: "16px", color: "#333", marginBottom: "10px" }}
//             >
//               <Link
//                 to="/"
//                 style={{
//                   textDecoration: "none",
//                   color: "blue",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Go back to main page
//               </Link>
//             </p>
//           </div>
//         </div>
//       ) : (
//         <div className="container-fluid flex flex-col justify-center items-center">
//           <Navbar />

//           {isLoading ? (
//             // Render loading spinner or message
//             <Loader />
//           ) : (
//             <div>
//               <div className="flex container justify-between gap-4 flex-row md:flex-row sm:flex-col border border-green-500 p-2">
//                 <div>SECURE TRANSACTIONS</div>
//                 <div>SECURE TRANSACTIONS</div>
//                 <div>SECURE TRANSACTIONS</div>
//               </div>

//               <div className="container p-4 sm:p-2 border border-gray-500">
//                 <Box>
//                   <Stepper activeStep={1} alternativeLabel>
//                     {steps.map((label) => (
//                       <Step key={label}>
//                         <StepLabel>{label}</StepLabel>
//                       </Step>
//                     ))}
//                   </Stepper>
//                 </Box>
//               </div>

//               <div className="flex flex-row border border-green-600">
//                 <div
//                   className="border-2 border-gray-400  overflow-auto h-screen "
//                   style={{ scrollBehavior: "smooth" }}
//                 >
//                   <p className="p-2 m-3">
//                     <strong>Almost done!</strong> Enter your details and
//                     complete your booking now.
//                   </p>
//                   <div className="m-4 border border-gray-500 rounded-2xl ">
//                     <div className="flex flex-row p-4 ">
//                       <img
//                         width="234"
//                         height="351"
//                         src={DemoImage}
//                         alt="Hotel"
//                       />
//                       <div className="flex flex-col px-3">
//                         <p className="font-bold ">{hotelName}</p>
//                         <p className="py-1">{addressLine1}</p>
//                         <span className="py-1 flex flex-row gap-3">
//                           <p className="px-2 font-bold text-white bg-orange-400 rounded">
//                             8.7
//                           </p>
//                           VERY GOOD | 5-STAR HOTEL
//                         </span>
//                         <p className="py-1 flex text-green">
//                           <CheckIcon className="text-green" />
//                           Fully Refundable until 11:59 PM (property local time)
//                           on Feb 26
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex flex-row  justify-around m-4 border rounded-2xl bg-slate-200">
//                       <span className="flex flex-col text-center p-2 ">
//                         <p>CHECK-IN</p>
//                         <p>
//                           {checkInDate instanceof Date
//                             ? checkInDate.toDateString()
//                             : "Invalid Date"}
//                         </p>
//                       </span>
//                       <span className="flex flex-col p-2 text-center">
//                         <p>CHECK-OUT</p>

//                         <p>
//                           {checkOutDate instanceof Date
//                             ? checkOutDate.toDateString()
//                             : "Invalid Date"}
//                         </p>
//                       </span>
//                       <span className="flex flex-col p-2 text-center">
//                         <p>NIGHTS</p>
//                         <p>{nights}</p>
//                       </span>
//                       <span className="flex flex-col p-2 text-center">
//                         <p>ROOMS</p>
//                         <p>{rooms}</p>
//                       </span>
//                     </div>

//                     {/* <div className="flex flex-row  justify-around m-4 border rounded-2xl bg-slate-200">
//                       <span className="flex flex-col text-center p-2 ">
//                         <p>CHECK-IN</p>
//                         <p>{checkInDate}</p>
//                       </span>
//                       <span className="flex flex-col p-2 text-center">
//                         <p>CHECK-OUT</p>
//                         <p>{checkOutDate}</p>
//                       </span>
//                       <span className="flex flex-col p-2 text-center">
//                         <p>NIGHTS</p>
//                         <p>{nights}</p>
//                       </span>
//                       <span className="flex flex-col p-2 text-center">
//                         <p>ROOMS</p>
//                         <p>{rooms}</p>
//                       </span>
//                     </div> */}

//                     <div className="m-4 w-auto ">
//                       <h1 className="font-bold py-3">
//                         Deluxe Suite with King Bed
//                       </h1>

//                       <div className="  w-full flex flex-row justify-start">
//                         <div className="col-2  w-1/4">
//                           {amenities
//                             .slice(0, Math.ceil(amenities.length / 2))
//                             .map((amenity, index) => (
//                               <ul className="flex flex-col" key={index}>
//                                 <li className="flex flex-row">
//                                   <CheckIcon
//                                     sx={{ fontSize: 16, color: "green" }}
//                                   />
//                                   {amenity.name}
//                                 </li>
//                               </ul>
//                             ))}
//                         </div>
//                         <div className="col-2 col-2 w-1/4">
//                           {amenities
//                             .slice(Math.ceil(amenities.length / 2))
//                             .map((amenity, index) => (
//                               <ul className="flex flex-col" key={index}>
//                                 <li>
//                                   <CheckIcon
//                                     sx={{ fontSize: 16, color: "green" }}
//                                   />
//                                   {amenity.name}
//                                 </li>
//                               </ul>
//                             ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="p-4 m-4 border  border-gray-500 rounded-2xl ">
//                     <div className="p-2 border bg-slate-200 rounded-2xl">
//                       The guest checking into each hotel room must be 21 or
//                       older, present a valid Photo ID and credit card.
//                     </div>
//                     <div className="font-bold py-2">
//                       <h1>Guest Name</h1>
//                     </div>
//                     <span className="flex flex-row gap-2">
//                       <TextField
//                         id="first-name"
//                         label="First Name*"
//                         variant="outlined"
//                         sx={{
//                           width: "50%",
//                           height: "2rem",
//                           borderColor: localFirstName ? "initial" : "red",
//                         }}
//                         value={localFirstName}
//                         onChange={handleFirstNameChange}
//                         InputProps={{
//                           endAdornment: isWarningShown && !localFirstName && (
//                             <p
//                               className="w-full"
//                               style={{ color: "red", margin: 0 }}
//                             >
//                               First name is required!
//                             </p>
//                           ),
//                         }}
//                       />

//                       <TextField
//                         id="last-name"
//                         required
//                         label="Last Name*"
//                         variant="outlined"
//                         sx={{
//                           width: "50%",
//                           height: "2rem",
//                         }}
//                         value={localLastName}
//                         onChange={handleLastNameChange}
//                         InputProps={{
//                           endAdornment: isWarningShown && !localLastName && (
//                             <p
//                               className="w-full"
//                               style={{ color: "red", margin: 0 }}
//                             >
//                               Last name is required!
//                             </p>
//                           ),
//                         }}
//                       />
//                     </span>
//                     <span className="flex flex-row mt-3 py-5">
//                       <Checkbox />
//                       <p>Guest name and name on card are the same</p>
//                     </span>
//                   </div>

//                   <div className="p-4 m-4 border  border-gray-500 rounded-2xl flex flex-col">
//                     <h1 className="font-bold">Payment Method</h1>
//                     <div className="border m-2 p-2  border-gray-500 rounded-2xl flex flex-col">
//                       <span className="flex flex-row">
//                         <CheckBox />
//                         <span className="flex flex-col">
//                           <p className="font-bold">Credit Card or Debit</p>
//                           <p>
//                             Visa, Mastercard, Diners Club, Discover, American
//                             Express
//                           </p>
//                         </span>
//                       </span>

//                       <div className="p-3 bg-gray-200 rounded-2xl flex flex-col">
//                         <span className="flex flex-row gap-3 py-2">
//                           <img
//                             src={Visa}
//                             alt="Visa"
//                             style={{ height: "2em", width: "2rem" }}
//                           />
//                           <img
//                             src={Mastercard}
//                             alt="MasterCard"
//                             style={{ height: "2em", width: "2rem" }}
//                           />
//                           <img
//                             src={Discover}
//                             alt="Discover"
//                             style={{ height: "2em", width: "2rem" }}
//                           />
//                           <img
//                             src={American_express}
//                             alt="American Express"
//                             style={{ height: "2em", width: "2rem" }}
//                           />
//                         </span>
//                         <TextField
//                           id="outlined-basic"
//                           label="Name on card*"
//                           variant="outlined"
//                           sx={{
//                             width: { xs: "100%", sm: "100%" },
//                             marginBottom: "1rem",
//                           }}
//                         />
//                         <TextField
//                           id="outlined-basic"
//                           label="Card number*"
//                           variant="outlined"
//                           sx={{
//                             width: { xs: "100%", sm: "100%" },
//                             marginBottom: "1rem",
//                           }}
//                         />

//                         <TextField
//                           id="outlined-basic"
//                           label="MM/YYYY*"
//                           variant="outlined"
//                           sx={{
//                             width: { xs: "100%", sm: "100%" },
//                             marginBottom: "1rem",
//                           }}
//                         />
//                         <TextField
//                           id="outlined-basic"
//                           label="CVV code*"
//                           variant="outlined"
//                           sx={{
//                             width: { xs: "100%", sm: "100%" },
//                             marginBottom: "1rem",
//                           }}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* <div>
//             <CheckBox />
//           </div>
//           <div>
//             <CheckBox />
//           </div> */}
//                   <div className="p-4 m-4 border border-gray-500 rounded-2xl flex flex-col">
//                     <h1 className="font-bold py-2">Billing</h1>

//                     <TextField
//                       id="outlined-basic"
//                       label="Street address*"
//                       variant="outlined"
//                       sx={{
//                         width: { xs: "100%", sm: "100%" },
//                         marginBottom: "1rem",
//                       }}
//                     />

//                     <TextField
//                       id="outlined-basic"
//                       label="Country*"
//                       variant="outlined"
//                       sx={{
//                         width: { xs: "100%", sm: "100%" },
//                         marginBottom: "1rem",
//                       }}
//                     />

//                     <TextField
//                       id="outlined-basic"
//                       label="State*"
//                       variant="outlined"
//                       sx={{
//                         width: { xs: "100%", sm: "100%" },
//                         marginBottom: "1rem",
//                       }}
//                     />

//                     <TextField
//                       id="outlined-basic"
//                       label="Postal Code*"
//                       variant="outlined"
//                       sx={{
//                         width: { xs: "100%", sm: "100%" },
//                         marginBottom: "1rem",
//                       }}
//                     />

//                     <TextField
//                       id="outlined-basic"
//                       label="Email address*"
//                       variant="outlined"
//                       sx={{
//                         width: { xs: "100%", sm: "100%" },
//                         marginBottom: "1rem",
//                       }}
//                     />

//                     <span className="flex flex-row gap-2">
//                       <TextField
//                         id="outlined-basic"
//                         label="+91"
//                         variant="outlined"
//                         disabled
//                         sx={{
//                           width: { xs: "30%", sm: "30%" },
//                           marginBottom: "1rem",
//                         }}
//                       />
//                       <TextField
//                         id="outlined-basic"
//                         label="Mobile Phone Number*"
//                         variant="outlined"
//                         sx={{
//                           width: { xs: "100%", sm: "100%" },
//                           marginBottom: "1rem",
//                         }}
//                       />
//                     </span>
//                   </div>

//                   <div className="p-4 m-4 border border-gray-500 rounded-2xl flex flex-col">
//                     <p className="font-bold text-xl py-2">
//                       Important Information
//                     </p>
//                     <ul className="list-disc pl-6">
//                       <li className="mb-3">
//                         Fully refundable until 11:59 pm (property local time) on
//                         February 26, 2024. After that time, hotel cancellation
//                         and change fees apply as stated in the Booking
//                         Conditions.
//                       </li>
//                       <li className="mb-3">
//                         Check-in begins at 4 pm, and check-out is at 12 pm.
//                       </li>
//                       <li>
//                         By selecting Book & Pay, you agree to the Booking
//                         Conditions, Terms & Conditions, and Privacy Policy.
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="p-4 m-4 border border-gray-500 rounded-2xl flex flex-col">
//                     <button
//                       onClick={() => {
//                         handlePayment();
//                         bookingConfirmationClick();
//                         //handleBookingAndPayment()
//                       }}
//                       // onClick={handlePayment}
//                       //onClick={bookinConfirmationClcik}
//                       //onClick={handleBookingConfirmationClick}
//                       className={`p-4 rounded-full transition duration-300 ease-in-out focus:outline-none ${
//                         isButtonDisabled
//                           ? "bg-gray-400 cursor-not-allowed"
//                           : "bg-blue-500 hover:bg-blue-600 text-white"
//                       }`}
//                       disabled={isButtonDisabled}
//                     >
//                       Book & Pay
//                     </button>
//                   </div>
//                 </div>

//                 <div className="border border-red-500 w-6/12 ">
//                   <div className="p-3 m-3 border border-gray-500 rounded-2xl">
//                     <span className="flex flex-row justify-between py-1">
//                       <p>Price per night</p>
//                       <p>${roomPricePerNight}</p>
//                     </span>
//                     <span className="flex flex-row justify-between py-1">
//                       <p>Number of rooms</p>
//                       <p>{numberOfRooms}</p>
//                     </span>
//                     <span className="flex flex-row justify-between py-1">
//                       <p>Number of nights</p>
//                       <p>{numberOfNights}</p>
//                     </span>
//                     <span className="flex flex-row justify-between py-1 border-b border-gray-500 ">
//                       <p>Taxes and fees</p>
//                       <p>${totalTaxes}</p>
//                     </span>
//                     <span className="flex flex-row justify-between pt-4">
//                       <p className="text-bold text-green-500">You pay today</p>
//                       <p>${totalPay}</p>
//                     </span>
//                     <span className="flex flex-row justify-between pt-4">
//                       <p>Total discounts</p>
//                       <p>${totalDiscounts}</p>
//                     </span>

//                     <span className="flex flex-row  justify-between border-b border-gray-500 py-3">
//                       <p>Total property fee</p>
//                       <p>${totalPropertyFee}</p>
//                     </span>
//                     <span className="flex flex-row justify-between border-b border-gray-500 py-3">
//                       <p>Total Cost</p>
//                       <p>${totalCost.toFixed(2)}</p>
//                     </span>
//                   </div>

//                   <div className="p-3 m-3 border border-gray-500 rounded-2xl">
//                     <span className="flex flex-row justify-between">
//                       <p>Have a promo code?</p>
//                       <p>
//                         <KeyboardArrowDownIcon />
//                       </p>
//                     </span>
//                   </div>
//                   <div className="p-3 m-3 border border-gray-500 rounded-2xl">
//                     <span className="flex flex-row justify-between">
//                       <p className="">
//                         <CallIcon />
//                       </p>
//                       <span className="flex flex-col">
//                         <p>Have questions? We're here to help!</p>
//                         <p>1800 365-254</p>
//                       </span>
//                     </span>
//                   </div>
//                   <div className="p-3 m-3 ">
//                     <span className="border-b border-gray-500">
//                       <p>
//                         Prices in USD. Prices include all taxes and fees (this
//                         link opens in a modal dialog)charged by Priceline.
//                       </p>
//                     </span>
//                     <span className="p-3 m-3 ">
//                       <p>
//                         *Collected at the property. Please bring a valid form of
//                         payment.
//                       </p>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }





import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import { Container, Typography, Paper, TextField } from "@mui/material";
import { shadows } from "@mui/system";
import DemoImage from "../assets/room1.jpg";
import { CheckBox, Radio } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallIcon from "@mui/icons-material/Call";
import CheckIcon from "@mui/icons-material/Check";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import American_express from "../images/american-express.svg";
import Discover from "../images/discover.svg";
import Mastercard from "../images/mastercard.svg";
import Visa from "../images/visa.svg";
import Navbar from "../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, navigate } from "gatsby";
import {
  setSearchTerm,
  setSelectedHotel,
  setHotelDetails,
  setFilteredHotels,
  setCheckInDate,
  setCheckOutDate,
  setFirstName,
  setLastName,
} from "../redux/actions";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripePaymentForm from "../components/Payment/StripePaymentForm";
import CloseIcon from "@mui/icons-material/Close";
import "../components/Payment/checkoutform.css";
import Loader from "../components/UI_components/Loader";

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
];

const generateRandomId = () => {
  const randomNumber = Math.floor(Math.random() * 1000000);
  const timestamp = Date.now();
  return `id_${timestamp}_${randomNumber}`;
};

export default function Cart() {
  //const stripePromise = loadStripe("pk_test_wEfNm25VgswYweN4IK0JjMzQ");
  const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

  const [paymentIntentId, setPaymentIntentId] = useState(null);

  const dispatch = useDispatch();
  const randomImage = "https://source.unsplash.com/?hotel,travel";

  // const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const checkoutData = useSelector((state) => state.checkoutData.checkoutData);
  console.log("checkoutData", checkoutData);

  const hotelName = checkoutData?.name || "Default Hotel Name";
  const addressLine1 =
    checkoutData?.address?.address_line1 || "Address Not Available";
  const amenities = checkoutData?.amenities || [];



  const checkInDate = useSelector((state) => state.date.checkInDate);
  const checkOutDate = useSelector((state) => state.date.checkOutDate);




  const formattedCheckInDate = checkInDate ? new Date(checkInDate).toISOString().slice(0, 19).replace('T', ' ') : '';
  const formattedCheckOutDate = checkOutDate ? new Date(checkOutDate).toISOString().slice(0, 19).replace('T', ' ') : '';

  const bookingConfirmationClick = () => {
    // Your booking confirmation logic here
    const postData = {
      type: "reservations_new",
      title: hotelName || "",
      field_booking_id: "22",
      field_lastname: "lastName",
      $schema: "firstName",
      field_checkin:formattedCheckInDate,
      field_checkout: formattedCheckOutDate
    };

    axios
      .post("https://hotelrepo.sastoo.com/api/create-booking", postData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log("Success:", response.data);
        console.log("postData:", postData);
        toast.success("Booking created successfully");
        //navigate("/bookingconfirm");
      })
      .catch(function (error) {
        console.error("Error:", error);
        toast.error("Failed to create booking");
      });
  };

  const handleBookingConfirmationClick = () => {
    // Open the modal or popup box
    if (!localFirstName || !localLastName) {
      // Show warning if inputs are empty
      setIsWarningShown(true);
      return; // Exit function if inputs are empty
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    // Close the modal or popup box
    setIsModalOpen(false);
  };

  
  // Calculate the number of nights
  const diffTime = Math.abs(checkOutDate - checkInDate);
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  //Assuming rooms count is obtained from somewhere else in the state
  const { rooms, adults, children } = useSelector((state) => state.countData);

  // Get the first name and last name from Redux state
  const firstName = useSelector((state) => state.name.firstName);
  const lastName = useSelector((state) => state.name.lastName);

  // Local state to hold the input values
  const [localFirstName, setLocalFirstName] = useState(firstName || "");
  const [localLastName, setLocalLastName] = useState(lastName || "");
  const [isWarningShown, setIsWarningShown] = useState(false);

  // Function to handle changes in the first name field
  const handleFirstNameChange = (event) => {
    const { value } = event.target;
    setLocalFirstName(value);
    // Dispatch action to update first name in Redux
    dispatch(setFirstName(value));
    setIsWarningShown(false);
    checkButtonState(localFirstName, event.target.value);
  };

  // Function to handle changes in the last name field
  const handleLastNameChange = (event) => {
    const { value } = event.target;
    setLocalLastName(value);
    // Dispatch action to update last name in Redux
    dispatch(setLastName(value));
    setIsWarningShown(false);
    checkButtonState(event.target.value, localLastName);
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [roomData, setRoomData] = useState(null);
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [stripe, setStripe] = useState(null);
  const [sessionId, setSessionId] = useState(null); // Add state to store sessionId

  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading process
  setTimeout(() => {
    setIsLoading(false); // Set isLoading to false after some time
  }, 300); //

  const checkButtonState = (firstName, lastName) => {
    if (firstName.trim() !== "" && lastName.trim() !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const [productCartItem, setProductCartItem] = useState([]);

  let totalCost;
  useEffect(() => {
    // Update productCartItem whenever hotelName or rooms change
    const random_id = generateRandomId();
    setProductCartItem([
      {
        _id: random_id,
        name: hotelName,
        qty: rooms,
        price: 100, // Assuming the price is fixed for each item
      },
    ]);
  }, [hotelName, rooms,totalCost]);

  useEffect(() => {
    // Load Stripe asynchronously
    const loadStripePromise = async () => {
      const stripe = await loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
      setStripe(stripe);
    };
    loadStripePromise();
  }, []);

  useEffect(() => {
    let qty = rooms;
    let price = 100;
    productCartItem.forEach((item) => {
      qty += item.qty;
      price += item.qty * item.price;
    });
    setTotalQty(qty);
    setTotalPrice(price);
  }, [productCartItem]);

  useEffect(() => {
    if (sessionId) {
      // Redirect to Checkout if sessionId is available
      stripe
        .redirectToCheckout({
          sessionId: sessionId,
        })
        .then((result) => {
          if (result.error) {
            console.error(
              "Error redirecting to Checkout:",
              result.error.message
            );
          }
        });
    }
  }, [sessionId, stripe]);


  useEffect(() => {
    // Check if sessionStorage is available
    if (typeof window !== "undefined" && window.sessionStorage) {
      // Access sessionStorage to retrieve room data
      const storedRoomData = JSON.parse(sessionStorage.getItem("roomData"));
      console.log("roomData", storedRoomData);
      // Update roomData state with retrieved data
      setRoomData(storedRoomData);
    } else {
      // Handle cases where sessionStorage is not available
      console.error("sessionStorage is not available.");
    }
  }, []); // Empty dependency array ensures useEffect runs only once after component mounts

  // Render message if roomData is not available
  if (!roomData) {
    return <p>No room data available</p>;
  }

  const roomPricePerNight = parseFloat(roomData.room_price); // Convert to float if necessary
  const numberOfRooms = rooms; // Replace with actual number of rooms
  const numberOfNights = nights; // Replace with actual number of nights

  // Constants for taxes, discounts, and property fee
  const taxPerRoom = 8;
  const discountPerRoom = 1;
  const propertyFeePerRoom = 5;

  // Calculate subtotal before taxes and fees
  const subtotal = roomPricePerNight * numberOfRooms * numberOfNights;

  const totalPay =
    roomPricePerNight * numberOfRooms * numberOfNights + taxPerRoom;
  // Calculate total taxes
  const totalTaxes = taxPerRoom * numberOfRooms;

  // Calculate total discounts
  const totalDiscounts = discountPerRoom * numberOfRooms;

  // Calculate total property fee
  const totalPropertyFee = propertyFeePerRoom * numberOfRooms;
  // Calculate total cost
   totalCost = subtotal + totalTaxes + totalPropertyFee - totalDiscounts;

   console.log("totalCost",totalCost)

  const handlePayment = async () => {
    if (!stripe) {
      console.error("Stripe is not yet loaded.");
      return;
    }
    //https://jolly-blue-stockings.cyclic.app/
    //http://localhost:8080
    try {
      // Create a checkout session
      const response = await fetch(
        "https://jolly-blue-stockings.cyclic.app/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productCartItem),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Error creating checkout session: " + response.statusText
        );
      }
 console.log("productCartItem", productCartItem);
      const sessionData = await response.json();
      console.log("Session Data:", sessionData); // Log sessionData to check its structure

      setSessionId(sessionData.sessionId); // Set sessionId in state
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  
  


  return (
    <div>
      {!hotelName || !addressLine1 || amenities.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh", // Ensures the div takes up the full height of the viewport
          }}
        >
          <div style={{ textAlign: "center" }}>
            <p
              style={{ fontSize: "16px", color: "#333", marginBottom: "10px" }}
            >
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "blue",
                  fontWeight: "bold",
                }}
              >
                Go back to main page
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div className="container-fluid flex flex-col justify-center items-center">
          <Navbar />

          {isLoading ? (
            // Render loading spinner or message
            <Loader />
          ) : (
            <div>
              <div className="flex container justify-between gap-4 flex-row md:flex-row sm:flex-col border border-green-500 p-2">
                <div>SECURE TRANSACTIONS</div>
                <div>SECURE TRANSACTIONS</div>
                <div>SECURE TRANSACTIONS</div>
              </div>

              <div className="container p-4 sm:p-2 border border-gray-500">
                <Box>
                  <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </div>

              <div className="flex flex-row border border-green-600">
                <div
                  className="border-2 border-gray-400  overflow-auto h-screen "
                  style={{ scrollBehavior: "smooth" }}
                >
                  <p className="p-2 m-3">
                    <strong>Almost done!</strong> Enter your details and
                    complete your booking now.
                  </p>
                  <div className="m-4 border border-gray-500 rounded-2xl ">
                    <div className="flex flex-row p-4 ">
                      <img
                        width="234"
                        height="351"
                        src={DemoImage}
                        alt="Hotel"
                      />
                      <div className="flex flex-col px-3">
                        <p className="font-bold ">{hotelName}</p>
                        <p className="py-1">{addressLine1}</p>
                        <span className="py-1 flex flex-row gap-3">
                          <p className="px-2 font-bold text-white bg-orange-400 rounded">
                            8.7
                          </p>
                          VERY GOOD | 5-STAR HOTEL
                        </span>
                        <p className="py-1 flex text-green">
                          <CheckIcon className="text-green" />
                          Fully Refundable until 11:59 PM (property local time)
                          on Feb 26
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row  justify-around m-4 border rounded-2xl bg-slate-200">
                      <span className="flex flex-col text-center p-2 ">
                        <p>CHECK-IN</p>
                        <p>
                          {checkInDate instanceof Date
                            ? checkInDate.toDateString()
                            : "Invalid Date"}
                        </p>
                      </span>
                      <span className="flex flex-col p-2 text-center">
                        <p>CHECK-OUT</p>

                        <p>
                          {checkOutDate instanceof Date
                            ? checkOutDate.toDateString()
                            : "Invalid Date"}
                        </p>
                      </span>
                      <span className="flex flex-col p-2 text-center">
                        <p>NIGHTS</p>
                        <p>{nights}</p>
                      </span>
                      <span className="flex flex-col p-2 text-center">
                        <p>ROOMS</p>
                        <p>{rooms}</p>
                      </span>
                    </div>

                    {/* <div className="flex flex-row  justify-around m-4 border rounded-2xl bg-slate-200">
                      <span className="flex flex-col text-center p-2 ">
                        <p>CHECK-IN</p>
                        <p>{checkInDate}</p>
                      </span>
                      <span className="flex flex-col p-2 text-center">
                        <p>CHECK-OUT</p>
                        <p>{checkOutDate}</p>
                      </span>
                      <span className="flex flex-col p-2 text-center">
                        <p>NIGHTS</p>
                        <p>{nights}</p>
                      </span>
                      <span className="flex flex-col p-2 text-center">
                        <p>ROOMS</p>
                        <p>{rooms}</p>
                      </span>
                    </div> */}

                    <div className="m-4 w-auto ">
                      <h1 className="font-bold py-3">
                        Deluxe Suite with King Bed
                      </h1>

                      <div className="  w-full flex flex-row justify-start">
                        <div className="col-2  w-1/4">
                          {amenities
                            .slice(0, Math.ceil(amenities.length / 2))
                            .map((amenity, index) => (
                              <ul className="flex flex-col" key={index}>
                                <li className="flex flex-row">
                                  <CheckIcon
                                    sx={{ fontSize: 16, color: "green" }}
                                  />
                                  {amenity.name}
                                </li>
                              </ul>
                            ))}
                        </div>
                        <div className="col-2 col-2 w-1/4">
                          {amenities
                            .slice(Math.ceil(amenities.length / 2))
                            .map((amenity, index) => (
                              <ul className="flex flex-col" key={index}>
                                <li>
                                  <CheckIcon
                                    sx={{ fontSize: 16, color: "green" }}
                                  />
                                  {amenity.name}
                                </li>
                              </ul>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 m-4 border  border-gray-500 rounded-2xl ">
                    <div className="p-2 border bg-slate-200 rounded-2xl">
                      The guest checking into each hotel room must be 21 or
                      older, present a valid Photo ID and credit card.
                    </div>
                    <div className="font-bold py-2">
                      <h1>Guest Name</h1>
                    </div>
                    <span className="flex flex-row gap-2">
                      <TextField
                        id="first-name"
                        label="First Name*"
                        variant="outlined"
                        sx={{
                          width: "50%",
                          height: "2rem",
                          borderColor: localFirstName ? "initial" : "red",
                        }}
                        value={localFirstName}
                        onChange={handleFirstNameChange}
                        InputProps={{
                          endAdornment: isWarningShown && !localFirstName && (
                            <p
                              className="w-full"
                              style={{ color: "red", margin: 0 }}
                            >
                              First name is required!
                            </p>
                          ),
                        }}
                      />

                      <TextField
                        id="last-name"
                        required
                        label="Last Name*"
                        variant="outlined"
                        sx={{
                          width: "50%",
                          height: "2rem",
                        }}
                        value={localLastName}
                        onChange={handleLastNameChange}
                        InputProps={{
                          endAdornment: isWarningShown && !localLastName && (
                            <p
                              className="w-full"
                              style={{ color: "red", margin: 0 }}
                            >
                              Last name is required!
                            </p>
                          ),
                        }}
                      />
                    </span>
                    <span className="flex flex-row mt-3 py-5">
                      <Checkbox />
                      <p>Guest name and name on card are the same</p>
                    </span>
                  </div>

                  <div className="p-4 m-4 border  border-gray-500 rounded-2xl flex flex-col">
                    <h1 className="font-bold">Payment Method</h1>
                    <div className="border m-2 p-2  border-gray-500 rounded-2xl flex flex-col">
                      <span className="flex flex-row">
                        <CheckBox />
                        <span className="flex flex-col">
                          <p className="font-bold">Credit Card or Debit</p>
                          <p>
                            Visa, Mastercard, Diners Club, Discover, American
                            Express
                          </p>
                        </span>
                      </span>

                      <div className="p-3 bg-gray-200 rounded-2xl flex flex-col">
                        <span className="flex flex-row gap-3 py-2">
                          <img
                            src={Visa}
                            alt="Visa"
                            style={{ height: "2em", width: "2rem" }}
                          />
                          <img
                            src={Mastercard}
                            alt="MasterCard"
                            style={{ height: "2em", width: "2rem" }}
                          />
                          <img
                            src={Discover}
                            alt="Discover"
                            style={{ height: "2em", width: "2rem" }}
                          />
                          <img
                            src={American_express}
                            alt="American Express"
                            style={{ height: "2em", width: "2rem" }}
                          />
                        </span>
                        <TextField
                          id="outlined-basic"
                          label="Name on card*"
                          variant="outlined"
                          sx={{
                            width: { xs: "100%", sm: "100%" },
                            marginBottom: "1rem",
                          }}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Card number*"
                          variant="outlined"
                          sx={{
                            width: { xs: "100%", sm: "100%" },
                            marginBottom: "1rem",
                          }}
                        />

                        <TextField
                          id="outlined-basic"
                          label="MM/YYYY*"
                          variant="outlined"
                          sx={{
                            width: { xs: "100%", sm: "100%" },
                            marginBottom: "1rem",
                          }}
                        />
                        <TextField
                          id="outlined-basic"
                          label="CVV code*"
                          variant="outlined"
                          sx={{
                            width: { xs: "100%", sm: "100%" },
                            marginBottom: "1rem",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* <div>
            <CheckBox />
          </div>
          <div>
            <CheckBox />
          </div> */}
                  <div className="p-4 m-4 border border-gray-500 rounded-2xl flex flex-col">
                    <h1 className="font-bold py-2">Billing</h1>

                    <TextField
                      id="outlined-basic"
                      label="Street address*"
                      variant="outlined"
                      sx={{
                        width: { xs: "100%", sm: "100%" },
                        marginBottom: "1rem",
                      }}
                    />

                    <TextField
                      id="outlined-basic"
                      label="Country*"
                      variant="outlined"
                      sx={{
                        width: { xs: "100%", sm: "100%" },
                        marginBottom: "1rem",
                      }}
                    />

                    <TextField
                      id="outlined-basic"
                      label="State*"
                      variant="outlined"
                      sx={{
                        width: { xs: "100%", sm: "100%" },
                        marginBottom: "1rem",
                      }}
                    />

                    <TextField
                      id="outlined-basic"
                      label="Postal Code*"
                      variant="outlined"
                      sx={{
                        width: { xs: "100%", sm: "100%" },
                        marginBottom: "1rem",
                      }}
                    />

                    <TextField
                      id="outlined-basic"
                      label="Email address*"
                      variant="outlined"
                      sx={{
                        width: { xs: "100%", sm: "100%" },
                        marginBottom: "1rem",
                      }}
                    />

                    <span className="flex flex-row gap-2">
                      <TextField
                        id="outlined-basic"
                        label="+91"
                        variant="outlined"
                        disabled
                        sx={{
                          width: { xs: "30%", sm: "30%" },
                          marginBottom: "1rem",
                        }}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Mobile Phone Number*"
                        variant="outlined"
                        sx={{
                          width: { xs: "100%", sm: "100%" },
                          marginBottom: "1rem",
                        }}
                      />
                    </span>
                  </div>

                  <div className="p-4 m-4 border border-gray-500 rounded-2xl flex flex-col">
                    <p className="font-bold text-xl py-2">
                      Important Information
                    </p>
                    <ul className="list-disc pl-6">
                      <li className="mb-3">
                        Fully refundable until 11:59 pm (property local time) on
                        February 26, 2024. After that time, hotel cancellation
                        and change fees apply as stated in the Booking
                        Conditions.
                      </li>
                      <li className="mb-3">
                        Check-in begins at 4 pm, and check-out is at 12 pm.
                      </li>
                      <li>
                        By selecting Book & Pay, you agree to the Booking
                        Conditions, Terms & Conditions, and Privacy Policy.
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 m-4 border border-gray-500 rounded-2xl flex flex-col">
                    <button
                      onClick={() => {
                        handlePayment();
                        bookingConfirmationClick();
                        //handleBookingAndPayment()
                      }}
                      // onClick={handlePayment}
                      //onClick={bookinConfirmationClcik}
                      //onClick={handleBookingConfirmationClick}
                      className={`p-4 rounded-full transition duration-300 ease-in-out focus:outline-none ${
                        isButtonDisabled
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-500 hover:bg-blue-600 text-white"
                      }`}
                      disabled={isButtonDisabled}
                    >
                      Book & Pay
                    </button>
                  </div>
                </div>

                <div className="border border-red-500 w-6/12 ">
                  <div className="p-3 m-3 border border-gray-500 rounded-2xl">
                    <span className="flex flex-row justify-between py-1">
                      <p>Price per night</p>
                      <p>${roomPricePerNight}</p>
                    </span>
                    <span className="flex flex-row justify-between py-1">
                      <p>Number of rooms</p>
                      <p>{numberOfRooms}</p>
                    </span>
                    <span className="flex flex-row justify-between py-1">
                      <p>Number of nights</p>
                      <p>{numberOfNights}</p>
                    </span>
                    <span className="flex flex-row justify-between py-1 border-b border-gray-500 ">
                      <p>Taxes and fees</p>
                      <p>${totalTaxes}</p>
                    </span>
                    <span className="flex flex-row justify-between pt-4">
                      <p className="text-bold text-green-500">You pay today</p>
                      <p>${totalPay}</p>
                    </span>
                    <span className="flex flex-row justify-between pt-4">
                      <p>Total discounts</p>
                      <p>${totalDiscounts}</p>
                    </span>

                    <span className="flex flex-row  justify-between border-b border-gray-500 py-3">
                      <p>Total property fee</p>
                      <p>${totalPropertyFee}</p>
                    </span>
                    <span className="flex flex-row justify-between border-b border-gray-500 py-3">
                      <p>Total Cost</p>
                      <p>${totalCost.toFixed(2)}</p>
                    </span>
                  </div>

                  <div className="p-3 m-3 border border-gray-500 rounded-2xl">
                    <span className="flex flex-row justify-between">
                      <p>Have a promo code?</p>
                      <p>
                        <KeyboardArrowDownIcon />
                      </p>
                    </span>
                  </div>
                  <div className="p-3 m-3 border border-gray-500 rounded-2xl">
                    <span className="flex flex-row justify-between">
                      <p className="">
                        <CallIcon />
                      </p>
                      <span className="flex flex-col">
                        <p>Have questions? We're here to help!</p>
                        <p>1800 365-254</p>
                      </span>
                    </span>
                  </div>
                  <div className="p-3 m-3 ">
                    <span className="border-b border-gray-500">
                      <p>
                        Prices in USD. Prices include all taxes and fees (this
                        link opens in a modal dialog)charged by Priceline.
                      </p>
                    </span>
                    <span className="p-3 m-3 ">
                      <p>
                        *Collected at the property. Please bring a valid form of
                        payment.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
