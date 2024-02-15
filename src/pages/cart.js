import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import { Container, Typography, Paper } from "@mui/material";
import { shadows } from "@mui/system";
import DemoImage from "../assets/room1.jpg";
import { CheckBox } from "@mui/icons-material";

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function Cart() {
  const randomImage = "https://source.unsplash.com/?hotel,travel";
  return (
    <div className="container-fluid flex flex-col justify-center items-center">
      <div className="flex container justify-between gap-4 flex-row md:flex-row sm:flex-col border border-green-500 p-2">
        <div>SECURE TRANSACTIONS</div>
        <div>SECURE TRANSACTIONS</div>
        <div>SECURE TRANSACTIONS</div>
      </div>

      <div className="container p-4 sm:p-2 border border-gray-500">
        <Box>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>

      <div className="flex flex-row border border-green-600">
        <div className="border border-yellow-400">
          <p>
            <strong>Almost done!</strong> Enter your details and complete your
            booking now.
          </p>
          <div className="border border-gray-500 p-4">
            <div className="flex flex-row ">
              <img width="234" height="351" src={DemoImage} alt="Hotel" />
              <div className="flex flex-col">
                <span>NOPSI Hotel, New Orleans</span>
                <p>Downtown New Orleans</p>
                <span>VERY GOOD | 5-STAR HOTEL</span>
                <span>
                  Fully Refundable until 11:59 PM (property local time) on Feb
                  26
                </span>
              </div>
            </div>
            <div className="flex flex-row p-4 border border-green-500 rounded bg-slate-300">
              <span className="flex flex-col">
                <p>CHECK-IN</p>
                <p>Fri, Mar 1, 2024</p>
              </span>
              <span className="flex flex-col">
                <p>CHECK-OUT</p>
                <p>Tue, Mar 5, 2024</p>
              </span>
              <span className="flex flex-col">
                <p>NIGHTS</p>
                <p>4</p>
              </span>
              <span className="flex flex-col">
                <p>ROOMS</p>
                <p>1</p>
              </span>
            </div>
            <div>
              <h1>Deluxe Suite with King Bed</h1>
              <span className="flex flex-row">
                <ul>
                  <li>1 King Bed</li>
                  <li>Free WIFI</li>
                  <li>Hand sanitizer</li>
                  <li>Room sanitizing</li>
                </ul>
                <ul>
                  <li>Free Wifi</li>
                  <li>Drinking water included</li>
                  <li>Cable TV channels</li>
                </ul>
              </span>
            </div>
          </div>

          <div className="border border-red-600">
            <span className="p-2">
              The guest checking into each hotel room must be 21 or older,
              present a valid Photo ID and credit card.
            </span>
            <span>
              <h1>Guest Name</h1>
            </span>
            <span class="flex flex-row">
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
            </span>
            <span className="flex flex-row">
              <CheckBox />
              <p>Guest name and name on card are the same</p>
            </span>
          </div>
          <div className="border border-pink-700 flex flex-col">
            <h1>Payment Method</h1>
            <span className="flex flex-row">
              <CheckBox />
              <span className="flex flex-col">
                <p>Credit Card or Debit</p>
                <p>Visa, Mastercard, Diners Club, Discover, American Express</p>
              </span>
            </span>
            <span>
              <input placeholder="Name on card*" />
              <input placeholder="card number*" />
              <input placeholder="MM/YYYY*" />
              <input placeholder="CVV code*" />
            </span>
          </div>
          <div>
            <CheckBox />
          </div>
          <div>
            <CheckBox />
          </div>
          <div>
            <h1>Billing</h1>
            <input placeholder="Street address*" />
            <input placeholder="Country*" />
            <input placeholder="State*" />
            <input placeholder="Postal Code*" />
            <input placeholder="Email address*" />
            <span className="flex flex-row">
              <span>+91</span>
              <span>Mobile phone number</span>
            </span>
          </div>
          <div>
            <p>Important Information</p>
            <li>
              Fully Refundable until 11:59pm (property local time) on
              02-26-2024. After that time hotel cancellation and change fees
              apply as stated in the Booking Conditions (this link opens in a
              modal dialog).
            </li>
            <li>Check-in begins at 4pm and check-out is at 12pm.</li>
            <li>
              By selecting Book & Pay you agree to theBooking Conditions (this
              link opens in a modal dialog),Terms & Conditions and Privacy
              Policy.
            </li>
          </div>
          <div className="p-3">
            <button>Book & Pay</button>
          </div>
        </div>

        <div className="border border-red-500">
          <div>
            <span className="flex flex-row">
              <p>Price per night</p>
              <p>$340.55</p>
            </span>
            <span className="flex flex-row">
              <p>1 room</p>
            </span>
            <span className="flex flex-row">
              <p>Number of nights</p>
              <p>4</p>
            </span>
            <span className="flex flex-row">
              <p>Taxes and fees</p>
              <p>$224.69</p>
            </span>
            <span className="flex flex-row">
              <p>You pay today</p>
              <p>$1,586.89</p>
            </span>
            <span className="flex flex-row">
              <p>You pay today</p>
              <p>$1,586.89</p>
            </span>
            <span className="flex flex-row">
              <p>Property Fee*</p>
              <p>$100.00</p>
            </span>
            <span className="flex flex-row">
              <p>Total Cost</p>
              <p>$1,686.89</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
