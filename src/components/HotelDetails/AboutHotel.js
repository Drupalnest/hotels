import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const AboutHotel = ({description}) => (
  <div className="m-2 py-4 border-gray-500 border-b  border-t">
    <p variant="h5" className="mb-4 font-bold text-3xl ">
      About the Hotel
    </p>
    <p variant="h5" className="mb-4 font-bold text-xl">
      Hotel Features
    </p>
    <Typography variant="body1" className="mb-4">
      {description}
    </Typography>
  </div>
);

export default AboutHotel;
