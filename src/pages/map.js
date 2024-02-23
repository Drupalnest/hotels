import React from "react";
import room1 from "../assets/room1.jpg";
import Filter from "../components/HotelList/Filter";
import MapComponent from "../components/HotelList/MapComponent";

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
        <div
          className=" flex flex-row border border-red-500"
          style={{ width: "500px" }}
        >
            <MapComponent/>
        </div>
      </div>
    </div>
  );
};

export default hotellist;
