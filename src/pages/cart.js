import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function Cart() {
  return (
    <div className="container-fluid flex justify-center">
      <div>
        <div className="container  border border-gray-500">
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
        <div>
          <div>
            <p>
              Almost done! Enter your details and complete your booking now.
            </p>
            <div className="">
              <div className="border border-gray-500">
                <div>
                  <img></img>
                  <div>
                    <span>NOPSI Hotel, New Orleans</span>
                    <p>Downtown New Orleans</p>
                    <span>VERY GOOD | 5-STAR HOTEL</span>
                    <span>
                      Fully Refundable until 11:59PM (property local time) on
                      Feb 26
                    </span>
                  </div>
                </div>
                <div>
                  Fri, Mar 1, 2024 CHECK-OUT Tue, Mar 5, 2024 NIGHTS 4 ROOMS 1
                </div>
                <div>
                  <h1>Deluxe Suite with King Bed</h1>
                  <span>
                    1 King Bed Free WIFI Hand sanitizer Room sanitizing Free
                    Wifi Drinking water included Cable TV channels
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
