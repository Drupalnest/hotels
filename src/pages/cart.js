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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallIcon from "@mui/icons-material/Call";
import CheckIcon from "@mui/icons-material/Check";

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
          <p className="p-2 m-3">
            <strong>Almost done!</strong> Enter your details and complete your
            booking now.
          </p>
          <div className="border border-gray-500 rounded-2xl ">
            <div className="flex flex-row p-4 ">
              <img width="234" height="351" src={DemoImage} alt="Hotel" />
              <div className="flex flex-col px-3">
                <p className="font-bold ">NOPSI Hotel, New Orleans</p>
                <p className="py-1">Downtown New Orleans</p>
                <span className="py-1 flex flex-row gap-3">
                  <p className="px-2 font-bold text-white bg-orange-400 rounded">
                    8.7
                  </p>
                  VERY GOOD | 5-STAR HOTEL
                </span>
                <p className="py-1 flex text-green">
                  <CheckIcon className="text-green" />
                  Fully Refundable until 11:59 PM (property local time) on Feb
                  26
                </p>
              </div>
            </div>

            <div className="flex flex-row  justify-around m-4 border rounded-2xl bg-slate-200">
              <span className="flex flex-col text-center p-2 ">
                <p>CHECK-IN</p>
                <p>Fri, Mar 1, 2024</p>
              </span>
              <span className="flex flex-col p-2 text-center">
                <p>CHECK-OUT</p>
                <p>Tue, Mar 5, 2024</p>
              </span>
              <span className="flex flex-col p-2 text-center">
                <p>NIGHTS</p>
                <p>4</p>
              </span>
              <span className="flex flex-col p-2 text-center">
                <p>ROOMS</p>
                <p>1</p>
              </span>
            </div>

            <div className="m-4">
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

          <div className="border border-red-600 ">
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

        <div className="border border-red-500 w-6/12 ">
          <div className="p-3 m-3 border border-gray-500 rounded-2xl">
            <span className="flex flex-row justify-between py-1">
              <p>Price per night</p>
              <p>$340.55</p>
            </span>
            <span className="flex flex-row justify-between py-1">
              <p>1 room</p>
            </span>
            <span className="flex flex-row justify-between py-1">
              <p>Number of nights</p>
              <p>4</p>
            </span>
            <span className="flex flex-row justify-between py-1 border-b border-gray-500 ">
              <p>Taxes and fees</p>
              <p>$224.69</p>
            </span>
            <span className="flex flex-row justify-between pt-4">
              <p className="text-bold text-green-500">You pay today</p>
              <p>$1,586.89</p>
            </span>
            <span className="text-end border-b border-gray-500  ">
              <p className="text-blue">as low as $144/month</p>
            </span>
            <span className="flex flex-row justify-between">
              <p>You pay today</p>
              <p>$1,586.89</p>
            </span>
            <span className="flex flex-row  justify-between border-b border-gray-500 py-3">
              <p>Property Fee*</p>
              <p>$100.00</p>
            </span>
            <span className="flex flex-row justify-between border-b border-gray-500 py-3">
              <p>Total Cost</p>
              <p>$1,686.89</p>
            </span>
          </div>
          <div className="p-3 m-3 border border-gray-500 rounded-2xl">
            <span className="flex flex-row justify-between">
              <p>Have a promo code?</p>
              <p>
                <KeyboardArrowDownIcon />
              </p>
            </span>
          </div>
          <div className="p-3 m-3 border border-gray-500 rounded-2xl">
            <span className="flex flex-row justify-between">
              <p>
                <CallIcon />
              </p>
              <span className="flex flex-col">
                <p>Have questions? We're here to help!</p>
                <p>1800 365-254</p>
              </span>
            </span>
          </div>
          <div className="p-3 m-3 ">
            <span className="border-b border-gray-500">
              <p>
                Prices in USD. Prices include all taxes and fees (this link
                opens in a modal dialog)charged by Priceline.
              </p>
            </span>
            <span className="p-3 m-3 ">
              <p>
                *Collected at the property. Please bring a valid form of
                payment.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
