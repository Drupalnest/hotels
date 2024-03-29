// CheckoutForm.js
import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import "./checkoutform.css";

const CheckoutForm = ({ onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(null);

    if (!stripe || !elements) {
      return;
    }

    try {
      // Create payment intent on your backend
      const response = await fetch(
        // "http://localhost:4242/create-payment-intent",

        // "http://localhost:8888/.netlify/functions/createPaymentIntent",
         "https://tense-zipper-pig.cyclic.app/createpaymentintent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // Replace * with the appropriate domain
            "Access-Control-Allow-Headers": "Content-Type",
          },
          body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        }
      );

      const { clientSecret } = await response.json();

      // Confirm card payment with client secret
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        }
      );

      if (error) {
        setErrorMessage(error.message);
      } else {
        onSuccess(paymentIntent.id);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while processing the payment.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;




