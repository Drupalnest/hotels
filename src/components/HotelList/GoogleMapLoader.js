// GoogleMapLoader.js

import React from "react";
import { LoadScript } from "@react-google-maps/api";

const GoogleMapLoader = ({ children }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ">
      {children}
    </LoadScript>
  );
};

export default GoogleMapLoader;
