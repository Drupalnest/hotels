import React from "react";
import room1 from "../assets/room1.jpg";
const hotellist = () => {
  return (
    <div>
      <div className="container-fluid h-10 border-2">Navbar</div>
      <div className="container-fluid h-10 border-2">serach</div>
      <div className="flex flex-row border-2">
        <div className="flex flex-col border-2 w-1/3">
          <div>
            
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
