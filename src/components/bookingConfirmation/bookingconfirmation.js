import React from "react";
import Navbar from "../Navbar/Navbar";
import room1 from "../../assets/room1.jpg";
const BookingConfirmation = ({ bookingDetails, success }) => {
  console.log("bookingDetails", bookingDetails);
  const {
    taxes,
    hotelName,
    subtotal,
    rooms,
    nights,
    todayDate,
    roomType,
    totalTaxes,
    address,
    firstName,
    lastName,
    amenities,
    totalPrice,
    totalDiscounts
  } = bookingDetails;


  console.log("bookingDetails",bookingDetails)
  const roomData = JSON.parse(sessionStorage.getItem("roomData"));
  console.log("roomData", roomData);

  if (!roomData) {
    return <p>No room data available</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="container-lg">
        <div className="flex flex-col py-4 ">
          <p className="px-2 font-bold text-lg text-blue-600 ">
            Booking Complete
          </p>
        </div>
        <div>
          <p className="p-2 ">Trip Number</p>
          <div className="flex flex-row gap-3">
            <div className="border-2 w-3/4 ">
              <div className="p-3 bg-blue-500">
                <p className="text-lg font-medium text-white">{hotelName}</p>
              </div>
              <div className="flex flex-row border-2 ">
                <div className="border-3  w-3/4">
                  <div className="flex flex-row  justify-between p-3 bg-white rounded-md shadow-md">
                    <div className="flex flex-col w-2/4  ">
                      <p className="text-sm  mb-2">Check-in</p>
                      <p className="text-sm ">Check-out</p>
                    </div>
                    <div className="flex flex-col w-2/4  ">
                      <p className="text-sm  mb-2">
                        {/* Fri Jul 1, 2016 - After 03:00 PM */}
                        {bookingDetails.checkInDate?.toDateString()}
                      </p>
                      <p className="text-sm  mb-2">
                        {bookingDetails.checkOutDate?.toDateString()}
                      </p>
                      <div className="flex flex-row  gap-2  space-y-2">
                        <button className="text-sm text-blue-500 hover:underline">
                          Change dates
                        </button>
                        <button className="text-sm bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                          Book again
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row  justify-between p-3 bg-white rounded-md shadow-md">
                    <div className="flex flex-col  w-2/4">
                      <p className="text-sm  mb-2">Address</p>
                      <p className="text-sm ">Phone number</p>
                    </div>
                    <div className="flex flex-col   w-2/4 ">
                      <p className="text-sm  mb-2">{bookingDetails.address}</p>
                      <p className="text-sm mb-2">
                        {" "}
                        {bookingDetails.phoneNumber}
                      </p>
                    </div>
                  </div>
                  <div className=" flex flex-row  justify-between p-3 bg-white rounded-md shadow-md">
                    <div className="flex flex-col w-2/4 ">
                      <p className="text-sm  mb-2">Number of rooms:</p>
                      <p className="text-sm mb-2 ">Reservation Number</p>
                      <p className="text-sm mb-2">Confirmation Number</p>
                    </div>
                    <div className="flex flex-col w-2/4  ">
                      <p className="text-sm  mb-2">{bookingDetails.rooms}</p>
                      <p className="text-sm mb-2">Lisa Simpson</p>
                      <p className="text-sm mb-2">CONFO</p>
                    </div>
                  </div>
                  <div className=" flex flex-row  justify-between p-3 bg-white rounded-md shadow-md">
                    <div className="flex flex-col w-2/4">
                      <p className="text-sm  mb-2">Ammenities</p>
                    </div>
                    <div className="flex flex-col w-2/4">
                      {amenities.map((amenity, index) => (
                        <p key={index} className="text-sm mb-2">
                          {amenity.name}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className=" flex flex-row  justify-between p-3 bg-white rounded-md shadow-md">
                    <div className="flex flex-col w-2/4">
                      <p className="text-sm  mb-2">Room Type</p>
                    </div>
                    <div className="flex flex-col w-2/4">
                      <p className="text-sm  mb-2">{roomType}</p>
                      <p className="text-sm mb-2">Hotel</p>
                    </div>
                  </div>
                  <div className="w-full flex flex-row  justify-between p-3 bg-white  shadow-md">
                    <div className="flex flex-col w-2/4">
                      <p>Important Information</p>
                      <p>Your Reservation May be</p>
                    </div>
                  </div>
                </div>
                <div className="w-1/4 flex flex-col p-3  border-2  border-3 ">
                  <div>
                    <img
                      src={room1}
                      className="w-44 rounded-md mb-3"
                      alt="Room"
                    />
                  </div>
                  <div>
                    <img src={room1} className="w-44 rounded-md" alt="Room" />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2 w-1/4 ">
              <div>
                <div className="flex flex-col p-2 bg-blue-500">
                  <p className="text-white text-lg">Summary of Charges</p>
                  <p className="text-white text-md">
                    Total cost: ${totalPrice}
                  </p>
                </div>
                <div className="p-2">
                  <div className="flex flex-row justify-between  ">
                    <p className="text-sm ">Purchase date</p>
                    <p className="text-sm">{todayDate}</p>
                  </div>
                  <div className="flex flex-row justify-between  ">
                    <p className="text-sm">Payment method</p>
                    <p className="text-sm">Mastercard</p>
                  </div>
                  <div className="flex flex-row justify-between  ">
                    <p className="text-sm">Billing Name </p>
                    <p className="text-sm text-start">
                      {firstName} {lastName}
                    </p>
                  </div>
                  <div className="flex flex-row justify-between  ">
                    <p className="text-sm">Payment method</p>
                    <p className="text-sm">Mastercard</p>
                  </div>
                </div>
                <div className="p-2 mt-2">
                  <div className="flex flex-row justify-between ">
                    <p className="text-sm text-green-600">Room Price</p>
                    <p className="text-sm text-green-600">
                    ${roomData.room_price}
                    </p>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <p className="text-sm">Number of rooms</p>
                    <p className="text-sm">{rooms}</p>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <p className="text-sm">Number of nights</p>
                    <p className="text-sm">{nights}</p>
                  </div>
                </div>
                <div className="p-2 mt-2">
                  <div className="flex flex-row justify-between">
                    <p className="text-sm">Room Subtotal</p>
                    <p className="text-sm">$ {subtotal}</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p className="text-sm">Taxes</p>
                    <p className="text-sm">$ {taxes}</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p className="text-sm text-green-600">Discount</p>
                    <p className="text-sm text-green-600">$ {totalDiscounts}</p>
                  </div>

                  <div className="flex flex-row justify-between">
                    <p className="text-sm text-green-600">Total Cost</p>
                    <p className="text-sm text-green-600">$ {totalPrice}</p>
                  </div>
                </div>
                <div className="p-2 mt-5">
                  <div className="p-2 bg-blue-500">
                    <p className="text-white text-md">Need Help?</p>
                  </div>
                  <div className="p-2 ">
                    <p className=" text-md border-b border-black">Top FAQ</p>
                  </div>
                  <div className="p-2">
                    <p className="text-blue-500  ">
                      Can I cancle this reservation?
                    </p>
                    <p className="text-blue-500  ">Can I change my dates?</p>
                    <p className="text-blue-500 "> How do I print a recipt?</p>
                    <p className="text-blue-500  ">See all FAQs</p>
                  </div>
                  <div className="p-2 mt-3 space-y-4">
                    <p className="text-md border-b border-black">
                      Customer Care
                    </p>
                    <p className="font-bold mt-3">Give us a call</p>
                    <div>
                      <p className="text-sm">From United States?</p>
                      <p className="text-sm">18003657444022</p>
                    </div>
                    <div>
                      <p className="text-sm">From United States?</p>
                      <p className="text-sm">18006537444022</p>
                    </div>
                    <p className="text-sm"> You will need this information</p>
                    <div>
                      <p className="text-sm">Trip Number</p>
                      <p className="text-sm">18006537444022</p>
                    </div>
                    <div>
                      <p className="text-sm">Confirmation Number</p>
                      <p className="text-sm">1800657444022</p>
                    </div>
                    <div>
                      <p className="text-sm">Phone Number used:</p>
                      <p className="text-sm">18006537444022</p>
                    </div>
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
