import React, { useState } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const YOUR_ITEMS = [
    { id: 1, name: 'Item 1', quantity: 2, price: 10 },
    { id: 2, name: 'Item 2', quantity: 1, price: 20 },
  ];
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    if (!stripe || !elements) {
      setLoading(false);
      return;
    }
    //https://tense-zipper-pig.cyclic.app/create-payment-intent
    //http://localhost:3333/create-payment-intent
    try {
      // Retrieve client secret from your backend
      const response = await fetch('https://tense-zipper-pig.cyclic.app/create-payment-intent/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'https://master.d27tbmvojyduy0.amplifyapp.com'
        },
        body: JSON.stringify({ items: YOUR_ITEMS }),
      });
      const data = await response.json();
      const { clientSecret } = data; // Define clientSecret here
  
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: 'John Doe',
          },
        },
      });
  
      if (error) {
        setPaymentError(error.message);
        setLoading(false);
        return;
      }
  
      if (paymentIntent.status === 'succeeded') {
        setPaymentSuccess(true);
        setLoading(false);
        // Perform any additional actions after successful payment
      }
    } catch (error) {
      setPaymentError('An error occurred while processing the payment.');
      setLoading(false);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>Pay</button>
      {loading && <p>Loading...</p>}
      {paymentError && <p>Error: {paymentError}</p>}
      {paymentSuccess && <p>Payment successful!</p>}
    </form>
  );
};

const PaymentPage = () => {
  return (
    <div>
      <h2>Payment Form</h2>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default PaymentPage;
