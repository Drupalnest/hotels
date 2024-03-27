// import React from "react";
// import { loadStripe } from "@stripe/stripe-js";

// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

// const PaymentForm = () => {
//   const stripePromise = loadStripe("pk_test_wEfNm25VgswYweN4IK0JjMzQ");
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return;
//     }

//     // Use elements.getElement to get a reference to the CardElement.
//     const cardElement = elements.getElement(CardElement);

//     // Use Stripe.js to create a token or a payment method
//     // as an additional step for successful payment handling

//     // Handle payment submission here
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// };

// export default PaymentForm;

import React from 'react'

const stripe = () => {
  return (
    <div>
      <h1>xfhfghfg</h1>
    </div>
  )
}

export default stripe
