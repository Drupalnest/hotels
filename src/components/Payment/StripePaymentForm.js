// // components/StripePaymentForm.js
// import React from "react";
// //import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// import {
//   useStripe,
//   useElements,
//   CardNumberElement,
//   CardExpiryElement,
//   CardCvcElement,
// } from "@stripe/react-stripe-js";
// import "./checkoutform.css";

// const StripePaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not yet loaded.
//       // Make sure to disable form submission until Stripe.js has loaded.
//       return;
//     }

//     // Implement your payment logic here
//   };

//   return (
//     <div className="mainDiv">
//       <form id="payment-form">
//         <div id="payment-element"></div>
//         <button id="submit" className="paymentButton">
//           <div class="spinner hidden" id="spinner"></div>
//           <span id="button-text">Pay now</span>
//         </button>
//         <div id="payment-message" class="hidden"></div>
//       </form>
//     </div>
//   );
// };

// export default StripePaymentForm;

// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   PaymentElement,
//   Elements,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import "./checkoutform.css";

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const items = [{ id: "xl-tshirt" }];
//   const [errorMessage, setErrorMessage] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet, or Elements is not yet available
//       return;
//     }

//     try {
//       const { error: submitError } = await elements.submit();
//       if (submitError) {
//         // Show submit error to your customer
//         setErrorMessage(submitError.message);
//         return;
//       }

//       const response = await fetch("http://localhost:4242/create-payment-intent", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ items }), // Assuming items are defined
//       });

//       const { clientSecret } = await response.json();

//       const { error } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(PaymentElement),
//           billing_details: {
//             // Include relevant billing details
//           },
//         },
//       });

//       if (error) {
//         // Show confirmation error to your customer
//         setErrorMessage(error.message);
//       } else {
//         // Payment succeeded
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <PaymentElement />
//       {/* <button className="paymentButton " type="submit" disabled={!stripe || !elements}>
//         Pay
//       </button> */}

//       <div className="mt-3 flex justify-center">
//         <button
//           id="submit"
//           className="border-2 w-full  p-2 bg-blue-600 text-white"
//           type="submit"
//           disabled={!stripe || !elements}
//         >
//           <div className="spinner hidden" id="spinner"></div>
//           <span id="button-text">Pay now</span>
//         </button>
//       </div>
//       {/* Show error message to your customers */}
//       {errorMessage && (
//         <div className="mt-3 flex justify-center">{errorMessage}</div>
//       )}
//     </form>
//   );
// };

// import React, { useState, useEffect } from "react";
// import {
//   useStripe,
//   useElements,
//   PaymentElement,
// } from "@stripe/react-stripe-js";
// import "./checkoutform.css";

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [paymentSuccess, setPaymentSuccess] = useState(false); // State to track payment success

//   useEffect(() => {
//     initialize(); // Initialize Stripe Elements
//   }, []); // Run only once after component mounted

//   const initialize = async () => {
//     try {
//       // Fetch payment intent and capture client secret
//       const response = await fetch("/create-payment-intent", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
//       });
//       const { clientSecret } = await response.json();

//       // Create Payment Element with Stripe Elements
//       const appearance = { theme: "stripe" };
//       const paymentElementOptions = { layout: "tabs" };
//       const paymentElement = elements.create("payment", paymentElementOptions);
//       paymentElement.mount("#payment-element");

//       // Handle form submission
//       const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) return;

//         try {
//           const { error: submitError } = await elements.submit();
//           if (submitError) {
//             setErrorMessage(submitError.message);
//             return;
//           }

//           // Confirm card payment with client secret
//           const { error } = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//               card: elements.getElement(PaymentElement),
//               billing_details: {
//                 // Include relevant billing details
//               },
//             },
//             return_url: "http://localhost:8080",
//           });

//           if (error) {
//             setErrorMessage(error.message);
//           } else {
//             // Payment succeeded
//             setPaymentSuccess(true);
//           }
//         } catch (error) {
//           console.error("Error:", error);
//         }
//       };

//       document
//         .querySelector("#payment-form")
//         .addEventListener("submit", handleSubmit);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       {!paymentSuccess ? ( // Display the form if payment is not successful
//         <form id="payment-form" >
//           {/* Stripe Payment Element */}
//           <div id="payment-element">
//             <PaymentElement />
//           </div>

//           {/* Payment Button */}
//           <div className="mt-3 flex justify-center">
//             <button
//               id="submit"
//               className="border-2 w-full  p-2 bg-blue-600 text-white"
//               type="submit"
//               disabled={!stripe || !elements}
//             >
//               <div className="spinner hidden" id="spinner"></div>
//               <span id="button-text">Pay now</span>
//             </button>
//           </div>
//           {/* Error Message Display */}
//           {errorMessage && (
//             <div className="mt-3 flex justify-center">{errorMessage}</div>
//           )}
//         </form>
//       ) : (
//         // Display a success message if payment is successful
//         <div className="flex justify-center items-center h-full">
//           <h2 className="text-2xl font-bold text-green-600">
//             Payment successful!
//           </h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckoutForm;

// import React, { useState, useEffect } from "react";
// import {
//   useStripe,
//   useElements,
//   PaymentElement,
//   CardElement,
// } from "@stripe/react-stripe-js";
// import "./checkoutform.css";

// const CheckoutForm = ({ onSuccess }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [paymentSuccess, setPaymentSuccess] = useState(false); // State to track payment success

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setErrorMessage(null);

//     if (!stripe || !elements) {
//       return;
//     }

//     try {
//       // Create payment intent on your backend
//       const response = await fetch(
//         "http://localhost:4242/create-payment-intent",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
//         }
//       );

//       const { clientSecret } = await response.json();

//       // Confirm card payment with client secret
//       const { error, paymentIntent } = await stripe.confirmCardPayment(
//         clientSecret,
//         {
//           payment_method: {
//             card: elements.getElement(CardElement),
//           },
//         }
//       );

//       if (error) {
//         setErrorMessage(error.message);
//       } else {
//         onSuccess(paymentIntent.id);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setErrorMessage("An error occurred while processing the payment.");
//     }
//   };

//   return (
//     // <div className="w-full">
//     //   {/* {!paymentSuccess ? (
//     //     <form id="payment-form" onSubmit={handleSubmit}>
//     //       <div id="payment-element">
//     //         <PaymentElement />
//     //       </div>

//     //       <div className="mt-3 flex justify-center">
//     //         <button
//     //           id="submit"
//     //           className="border-2 w-full  p-2 bg-blue-600 text-white"
//     //           type="submit"
//     //           disabled={!stripe || !elements}
//     //         >
//     //           <div className="spinner hidden" id="spinner"></div>
//     //           <span id="button-text">Pay now</span>
//     //         </button>
//     //       </div>

//     //       {errorMessage && (
//     //         <div className="mt-3 flex justify-center">{errorMessage}</div>
//     //       )}
//     //     </form>
//     //   ) : (
//     //     <div className="flex justify-center items-center h-full">
//     //       <h2 className="text-2xl font-bold text-green-600">
//     //         Payment successful!
//     //       </h2>
//     //     </div>
//     //   )} */}

//     //   <form onSubmit={handleSubmit}>
//     //     <CardElement />
//     //     <button type="submit" disabled={!stripe}>
//     //       Pay Now
//     //     </button>
//     //     {errorMessage && <div>{errorMessage}</div>}
//     //   </form>
//     // </div>
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay Now
//       </button>
//       {errorMessage && <div>{errorMessage}</div>}
//     </form>
//   );
// };

// export default CheckoutForm;

import React, { useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  CardElement,
} from "@stripe/react-stripe-js";
import "./checkoutform.css";

const CheckoutForm = ({ onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false); // State to track payment success

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(null);

    if (!stripe || !elements) {
      return;
    }

    try {
      // Create payment intent on your backend
      const response = await fetch(
        "http://localhost:4242/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
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
      <CardElement
        className="card-element flex flex-col border-2 border-red-600"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="border-2 w-full  p-2 bg-blue-600 text-white"
        type="submit"
        disabled={!stripe}
      >
        Pay Now
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;
