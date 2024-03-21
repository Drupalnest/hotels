import React from 'react';
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
  const addressLine1 = checkoutData.address.address_line1;

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
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);

  // Mock booking details (replace with actual data)
  const bookingDetails = {
    hotelName: hotelName,
    roomType: 'Deluxe Room',
    address:addressLine1,
    amenities:amenities,
    rooms:rooms,
    phoneNumber:phoneNumber,
    checkInDate: checkInDate,
    checkOutDate: checkOutDate,
    totalGuests: 2,
    totalPrice: '$500.00',
  };

  return (
    <div>
      {/* Other components or content */}
      <BookingConfirmation bookingDetails={bookingDetails} />
    </div>
  );
};

export default YourBookingComponent;
