import React from 'react';

const BookingConfirmation = ({ bookingDetails, success }) => {
  return (
    <div
      style={{
        padding: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        maxWidth: '600px',
        margin: 'auto',
        marginTop: '16px',
        textAlign: 'left',
      }}
    >
      <h2>Booking Confirmation</h2>
      <div style={{ marginBottom: '8px' }}>
        {/* Display booking details here */}
        <p>Booking ID: {bookingDetails.bookingId}</p>
        <p>Room Type: {bookingDetails.roomType}</p>
        {/* Add more details as needed */}
      </div>
      <div
        style={{
          color: success ? 'green' : 'inherit',
          marginBottom: success ? '8px' : 'inherit',
        }}
      >
        <p>Your room has been {success ? 'successfully' : ''} booked. Thank you for choosing our hotel!</p>
      </div>
      {success && (
        <div style={{ color: 'gray' }}>
          <p>For any inquiries or modifications to your booking, please contact our customer support.</p>
        </div>
      )}
    </div>
  );
};

export default BookingConfirmation;
