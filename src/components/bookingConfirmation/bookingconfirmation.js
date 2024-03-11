import React from "react";
import Navbar from "../Navbar/Navbar";

const BookingConfirmation = ({ bookingDetails, success }) => {
  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        maxWidth: "600px",
        margin: "auto",
        marginTop: "16px",
        textAlign: "left",
      }}
    >
      <h2>Booking Confirmation</h2>
      <div style={{ marginBottom: "8px" }}>
        {/* Display booking details here */}
        <p>Booking ID: {bookingDetails.bookingId}</p>
        <p>Room Type: {bookingDetails.roomType}</p>
        {/* Add more details as needed */}
      </div>
      <div
        style={{
          color: success ? "green" : "inherit",
          marginBottom: success ? "8px" : "inherit",
        }}
      >
        <p>
          Your room has been {success ? "successfully" : ""} booked. Thank you
          for choosing our hotel!
        </p>
      </div>
      {success && (
        <div style={{ color: "gray" }}>
          <p>
            For any inquiries or modifications to your booking, please contact
            our customer support.
          </p>
        </div>
      )}

      <div>
        <Navbar />
        <div className="container">
          <div className="flex flex-col p-4">
            <p className="font-bold text-lg text-blue-600 ">Booking Complete</p>
          </div>

          <div>
            <p>Confirmation Number</p>
            <div className="flex flex-row">
              <div className="border-2 w-3/4">
                <div>
                  <p className="p-3">Hotel Name</p>
                </div>
                <div className="flex flex-row">
                  <div>
                    <p>Check-in</p>
                    <p>Check-out</p>
                  </div>
                  <div>
                    <p>Check-in Time</p>
                    <p>Check-out Time</p>
                    <div>
                      <p>Change dates</p>
                      <button>Book again</button>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="border-2 w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
