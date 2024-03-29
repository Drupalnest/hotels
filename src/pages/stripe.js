// App.js
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/Payment/CheckoutForm";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

function Stripe() {
  const [paymentIntentId, setPaymentIntentId] = useState(null);

  const handlePaymentSuccess = (paymentIntentId) => {
    setPaymentIntentId(paymentIntentId);
  };

  return (
    <div className="App">
      <h1>Stripe Payment Demo</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm onSuccess={handlePaymentSuccess} />
      </Elements>
      {paymentIntentId && (
        <div>Payment successful! PaymentIntent ID: {paymentIntentId}</div>
      )}
    </div>
  );
}

export default Stripe;
