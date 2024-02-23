import React from "react";
import room1 from "../assets/room1.jpg";
import Filter from "../components/HotelList/Filter";

const hotellist = () => {
  return (
    <div className="flex flex-col items-center justify-center border border-red-500 ">
      <div className="w-full container-fluid h-10 border-2">Navbar</div>
      <div className="w-full container-fluid h-10 border-2">Search</div>
      <div className="border border-blue-500 flex flex-row  w-full  justify-center">
        <div className="flex flex-col border-2 w-1/1 py-2 px-4">
          <div>
            <Filter />
          </div>
        </div>
        <div className="flex flex-row border-2">
          <div>
            <img
              src={room1}
              className=""
              style={{
                border: "2px solid red",
                width: "200px",
                height: "150px",
              }}
            />
          </div>
          <div className="flex flex-col border-2">
            <div className="flex flex-row border-2">
              <p>COMFORT</p>
              <p>BUSINESS FRIENDLY</p>
              <p>SPA & WELLNESS</p>
            </div>
            <div>
              <span>
                <p>Courtyard by Marriott Indianapolis South</p>
              </span>
              <span>
                <p>Indianapolis South</p>
              </span>
              <span>
                <p>Free Internet Access,Free Parking Amenities</p>
                <p>Fully Refundable Rates,Pay Later Available</p>
              </span>
              <span className="flex flex-row">
                <p>7.9</p>
                <p>291 Rating</p>
                <p>3-Star Hotel</p>
              </span>
            </div>
          </div>
          <div>
            <div>
              <p>₹11533</p>
              <p>₹123,066 for 2 nights</p>
              <button>Choose your room</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hotellist;