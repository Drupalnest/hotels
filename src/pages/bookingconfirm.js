import React from 'react';
import BookingConfirmation from '../components/bookingConfirmation/bookingconfirmation';

const YourBookingComponent = () => {
  // Mock booking details (replace with actual data)
  const bookingDetails = {
    hotelName: 'Sample Hotel',
    roomType: 'Deluxe Room',
    checkInDate: '2024-03-01',
    checkOutDate: '2024-03-05',
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
