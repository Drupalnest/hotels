import React from "react";
import { Grid } from "@mui/material";
const hotellist = () => {
  return (
    <div>
      <div className="container-fluid h-10 border-2">Navbar</div>
      <div className="container-fluid h-10 border-2">serach</div>
      {/* <div className="flex flex-row">
        <div className="flex flex-col">filter</div>
        <div className="flex flex-row">
          hotellist card
          <div>
            <img />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p>COMFORT</p>
              <p>BUSINESS FRIENDLY</p>
              <p>SPA & WELLNESS</p>
            </div>
          </div>
          <div></div>
        </div>
      </div> */}
      <div container spacing={2}>
      {/* Filter Section */}
      <div item xs={12} sm={12} md={4} lg={3}>
        {/* Your filter content goes here */}
        Filter Content
      </div>

      {/* Hotel List Card Section */}
      <div item xs={12} sm={12} md={8} lg={9}>
        {/* Your hotel list card content goes here */}
        Hotel List Card Content
      </div>
    </div>
    </div>
  );
};

export default hotellist;
