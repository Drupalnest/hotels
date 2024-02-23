//AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ




import React from "react";
import { LoadScript, GoogleMap } from "@react-google-maps/api";

const MapComponent = () => {
  const center = {
    lat: 37.7749, // Replace with the desired latitude
    lng: -122.4194, // Replace with the desired longitude
  };

  return (
    <div className="border-2">
      <LoadScript googleMapsApiKey="AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ">
        <GoogleMap
          style={{
            width: "100%",
            height: "100px", // Adjust the height as needed
          }}
          center={center} // Add the center prop
          zoom={10}
        />
      </LoadScript>
    </div>
  );
};

export default MapComponent;
