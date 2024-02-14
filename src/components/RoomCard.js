import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import WifiIcon from "@mui/icons-material/Wifi";
import { green } from "@mui/material/colors";

const RoomCard = ({ imageIndex }) => (
  <div className="mb-4">
    <Card style={{ height: "100%" }}>
      <CardMedia
        component="img"
        alt={`Room ${imageIndex + 1}`}
        style={{ height: "200px" }} // Set a fixed height for the image
        // Use the actual image paths
        image={require(`../assets/room${imageIndex + 1}.jpg`).default}
      />
      <CardContent className="flex flex-col">
        <div className="flex items-center mb-2">
          <WifiIcon sx={{ color: green[500], marginRight: 1 }} />
          <p className="text-green-500">Free WIFI</p>
        </div>
        <p className="mb-4 text-blue-500">View Room Details and Photos</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select dates for prices</button>
      </CardContent>
    </Card>
  </div>
);

export default RoomCard;
