import React, { useEffect, useState } from 'react';
import BookingConfirmation from '../components/bookingConfirmation/bookingconfirmation';
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
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/UI_components/Loader';


const YourBookingComponent = () => {

  const dispatch = useDispatch();
  const checkInDate = useSelector((state) => state.date.checkInDate);
  const checkOutDate = useSelector((state) => state.date.checkOutDate);

  // Calculate the number of nights
  const diffTime = Math.abs(checkOutDate - checkInDate);
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  
  const checkoutData = useSelector((state) => state.checkoutData.checkoutData);
  console.log("checkoutData", checkoutData);

  const hotelName = checkoutData.name || "Default Hotel Name";

  
  // Make sure to check if checkoutData and checkoutData.address are defined
  let addressLine1;
  if (checkoutData && checkoutData.address && checkoutData.address.address_line1) {
    addressLine1 = checkoutData.address.address_line1;
  } else {
    // Handle the case where address_line1 is undefined
    console.error('Address line 1 is not available.');
  }
  

  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading process
  setTimeout(() => {
    setIsLoading(false); // Set isLoading to false after some time
  }, 500); //


  const amenities = checkoutData.amenities;
  const phoneNumber = checkoutData.phone;

  

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  //Assuming rooms count is obtained from somewhere else in the state
  const { rooms, adults, children } = useSelector((state) => state.countData);

  // Get the first name and last name from Redux state
  const firstName = useSelector((state) => state.name.firstName);
  const lastName = useSelector((state) => state.name.lastName);

console.log("firstName",firstName)
 
// const roomData = JSON.parse(sessionStorage.getItem("roomData"));
//   console.log("roomData", roomData);

//   if (!roomData) {
//     return <p>No room data available</p>;
//   }


const [roomData, setRoomData] = useState(null);

useEffect(() => {
  // Check if sessionStorage is available
  if (typeof window !== 'undefined' && window.sessionStorage) {
    // Access sessionStorage to retrieve room data
    const storedRoomData = JSON.parse(sessionStorage.getItem('roomData'));
    console.log('roomData', storedRoomData);
    // Update roomData state with retrieved data
    setRoomData(storedRoomData);
  } else {
    // Handle cases where sessionStorage is not available
    console.error('sessionStorage is not available.');
  }
}, []); // Empty dependency array ensures useEffect runs only once after component mounts

// Render message if roomData is not available
if (!roomData) {
  return <p>No room data available</p>;
}

 

  const roomType=roomData.room_type

  const roomPricePerNight = parseFloat(roomData.room_price); // Convert to float if necessary
  const numberOfRooms = rooms; // Replace with actual number of rooms
  const numberOfNights = nights; // Replace with actual number of nights

  // Constants for taxes, discounts, and property fee
  const taxPerRoom = 8;
  const discountPerRoom = 1;
  const propertyFeePerRoom = 5;

  const propertyTax=propertyFeePerRoom*numberOfRooms

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
  const totalCost = subtotal + totalTaxes + totalPropertyFee - totalDiscounts;

  const taxes= totalTaxes + propertyTax

  const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1
const day = String(today.getDate()).padStart(2, '0');

const todayDate = `${year}-${month}-${day}`;
console.log(todayDate); // Output format: YYYY-MM-DD



  // Mock booking details (replace with actual data)
  const bookingDetails = {
    hotelName: hotelName,
    roomType: roomType,
    address:addressLine1,
    amenities:amenities,
    rooms:rooms,
    phoneNumber:phoneNumber,
    checkInDate: checkInDate,
    checkOutDate: checkOutDate,
    totalGuests: 2,
    totalPrice: totalCost,
    todayDate:todayDate,
    firstName:firstName,
    lastName:lastName,
    nights:nights,
    totalTaxes:totalTaxes,
    subtotal:subtotal,
    taxes:taxes,
    totalDiscounts:totalDiscounts

  };

  return (
    <div>
      {/* Other components or content */}
      {isLoading ? (
            // Render loading spinner or message
            <Loader />
          ) : (
      <BookingConfirmation bookingDetails={bookingDetails} />
          )}
    </div>
  );
};

export default YourBookingComponent;
