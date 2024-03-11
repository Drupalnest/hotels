import React from "react";
import Navbar from "../Navbar/Navbar";
import room1 from "../../assets/room1.jpg";

const BookingConfirmation = ({ bookingDetails, success }) => {
  return (
    <div>
      <Navbar />
      <div className="container-lg">
        <div className="flex flex-col p-4">
          <p className="font-bold text-lg text-blue-600 ">Booking Complete</p>
        </div>

        <div>
          <p>Trip Number</p>
          <div className="flex flex-row">
            <div className="border-2 w-3/4 border-red-500">
              <div className="p-3 bg-blue-500">
                <p className="text-lg font-medium text-white">
                  At&t Hotel And Conference Center{" "}
                </p>
              </div>

              <div className="flex flex-row  justify-between p-3 bg-gray-100 rounded-md shadow-md">
                {/* Check-in and Check-out */}
                <div className="flex flex-col">
                  <p className="text-md  mb-2">Check-in</p>
                  <p className="text-md ">Check-out</p>
                </div>

                {/* Check-in Time, Check-out Time, Change dates, and Book again */}
                <div className="flex flex-col items-center">
                  <p className="text-md font-bold mb-2">
                    Fri Jul 1, 2016 - After 03:00 PM
                  </p>
                  <p className="text-md font-bold mb-2">
                    Fri Jul 2, 2016 - After 12:00 PM
                  </p>

                  <div className="flex flex-row gap-2 items-center space-y-2">
                    <button className="text-blue-500 hover:underline">
                      Change dates
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                      Book again
                    </button>
                  </div>
                </div>

                {/* Room Image */}
                <div>
                  <img src={room1} className="w-44 rounded-md" alt="Room" />
                </div>
              </div>

              <div className="flex flex-row  justify-between p-3 bg-gray-100 rounded-md shadow-md">
                {/* Check-in and Check-out */}
                <div className="flex flex-col">
                  <p className="text-md  mb-2">Address</p>
                  <p className="text-md ">Phone number</p>
                </div>

                {/* Check-in Time, Check-out Time, Change dates, and Book again */}
                <div className="flex flex-col items-center">
                  <p className="text-md font-bold mb-2">
                    1900 University Avenue Austin TX
                  </p>
                  <p className="text-md font-bold mb-2">512-435-987-1245</p>
                </div>

                {/* Room Image */}
                <div>
                  <img src={room1} className="w-44 rounded-md" alt="Room" />
                </div>
              </div>

              <div className="flex flex-row">
                <div>
                  <p>Number of rooms:</p>
                  <p>Reservarion name</p>
                  <p>Confirmation number </p>
                </div>
                <div>
                  <p>1 room</p>
                  <p>Lisa Simpson</p>
                  <p>CONFO</p>
                </div>
              </div>

              <div className="flex flex-row">
                <div className="flex flex-row">
                  <div>
                    <p>Ammenities</p>
                  </div>
                  <div>
                    <p>Ammenities</p>
                    <p>Ammenities</p>
                    <p>Ammenities</p>
                    <p>Ammenities</p>
                    <p>Ammenities</p>
                    <p>Ammenities</p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div>
                    <p>Room Types</p>
                  </div>
                  <div>
                    <p>deluxe</p>
                  </div>
                </div>
                <div>
                  <p>Important Information</p>
                  <p>Your Reservation May be</p>
                </div>
              </div>
            </div>
            <div className="border-2 w-1/4 border-blue-500">
              <div>
                <div className="flex flex-row">
                  <p>Summary of Charges</p>
                  <p>Total cost: $1664</p>
                </div>

                <div className="flex flex-row">
                  <p>Purchase date</p>
                  <p>July 1 2016</p>
                </div>

                <div className="flex flex-row">
                  <p>Payment method</p>
                  <p>Mastercard</p>
                </div>
                <div className="flex flex-row">
                  <p>Billing Name </p>
                  <p>Taraya</p>
                </div>
                <div className="flex flex-row">
                  <p>Payment method</p>
                  <p>Mastercard</p>
                </div>
              </div>

              <div>
                <div className="flex flex-row">
                  <p>Room Price</p>
                  <p>$206</p>
                </div>
                <div className="flex flex-row">
                  <p>Number of rooms</p>
                  <p>1 room</p>
                </div>
                <div className="flex flex-row">
                  <p>Number of nights</p>
                  <p>7 nights</p>
                </div>
              </div>

              <div>
                <div className="flex flex-row">
                  <p>Room Subtotal</p>
                  <p>$1,447</p>
                </div>
                <div className="flex flex-row">
                  <p>Taxes</p>
                  <p>$ 217</p>
                </div>
                <div className="flex flex-row">
                  <p>Total Cost</p>
                  <p>$ 1234</p>
                </div>
              </div>

              <div>
                <div>
                  <p>Need Help?</p>
                </div>

                <div>
                  <p>Can I cancle this reservation?</p>
                  <p>Can I change my dates?</p>
                  <p>How do I print a recipt?</p>
                  <p>See all FAQs</p>
                </div>

                <div>
                  <p>Customer Care</p>
                  <p>Give us a call</p>
                  <div>
                    <p>From United States?</p>
                    <p>1800657444022</p>
                  </div>

                  <div>
                    <p>From United States?</p>
                    <p>1800657444022</p>
                  </div>

                  <p>You will need this information</p>

                  <div>
                    <p>Trip Number</p>
                    <p>1800657444022</p>
                  </div>

                  <div>
                    <p>Confirmation Number</p>
                    <p>1800657444022</p>
                  </div>

                  <div>
                    <p>Phone Number used:</p>
                    <p>1800657444022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
