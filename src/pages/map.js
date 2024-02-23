//AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ

import React from "react";
import { LoadScript, GoogleMap } from "@react-google-maps/api";
import AllFilter from "../components/FilterComponents/AllFilter";
import Search from "../components/SearchComponents/Search";
const hotellist = () => {
  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <div className="flex  flex-col items-center justify-center border border-red-500 ">
      <div className="w-full container-fluid h-10 border-2">Navbar</div>
    <Search/>
      <div className="border border-blue-500 flex flex-row  w-full  justify-center">
        <div className="flex flex-col border-2 w-1/1 py-2 px-4">
          <div>
            <AllFilter />
          </div>
        </div>
        <div className="w-full flex flex-row border border-red-500">
          <LoadScript googleMapsApiKey="AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ">
            <GoogleMap
              mapContainerStyle={{
                width: "100%",
                height: "800px",
                borderRadius: "4%",
              }}
              center={center}
              zoom={10}
            />
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default hotellist;
