//AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ

import React from "react";
import { LoadScript, GoogleMap } from "@react-google-maps/api";

const MapComponent = () => {
  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <div
      className="border-2  "
      style={{ width: "100%", height: "150px", borderRadius: "4%" }}
    >
      <LoadScript googleMapsApiKey="AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ">
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
            borderRadius: "4%",
          }}
          center={center}
          zoom={10}
        />
      </LoadScript>
    </div>
  );
};

export default MapComponent;
