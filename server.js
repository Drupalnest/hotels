// const express = require("express");
// const cors = require("cors");
// const app = express();
// const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Allow requests from your Gatsby development server
// app.use(cors({
//   origin: "http://localhost:8000",
// }));

// // Route to create a PaymentIntent
// app.post("/create-payment-intent", async (req, res) => {
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: req.body.amount, // Amount in cents
//       currency: "usd",
//     });
//     res.status(200).json({ clientSecret: paymentIntent.client_secret });
//   } catch (err) {
//     console.error("Error creating PaymentIntent:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// const express = require("express");
// const cors = require("cors");
// const app = express();
// const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Allow requests from your frontend origin
// app.use(cors({
//   origin: "http://localhost:8000",
// }));

// const calculateOrderAmount = (items) => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   return 1400;
// };

// // Route to create a PaymentIntent
// app.post("/create-payment-intent", async (req, res) => {
//   const { items } = req.body;
//   console.log("payment details" +req.body);

//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount(items),
//     currency: "usd",
//     // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// const PORT = process.env.PORT || 4242;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// const express = require("express");
// const cors = require("cors");
// const app = express();
// const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Allow requests from your frontend origin
// app.use(
//   cors({
//     origin: "http://localhost:8000",
//   })
// );

// const calculateOrderAmount = (items) => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   return 1400; // Example amount
// };

// // Route to create a PaymentIntent
// app.post("/create-payment-intent", async (req, res) => {
//   const { items } = req.body;
//   console.log("Payment details: ", req.body);

//   try {
//     // Create a PaymentIntent with the order amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: calculateOrderAmount(items),
//       currency: "usd",
//       // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
//       automatic_payment_methods: {
//         enabled: true,
//       },
//     });

//     res.status(200).json({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     console.error("Error creating PaymentIntent:", error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while creating PaymentIntent" });
//   }
// });

// // Route to handle payment intent confirmation
// app.post("/confirm-payment-intent", async (req, res) => {
//   const { paymentIntentId } = req.body;

//   try {
//     // Retrieve the PaymentIntent from Stripe
//     const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

//     // Check if the PaymentIntent is successful
//     if (paymentIntent.status === "succeeded") {
//       // Payment succeeded
//       res.status(200).json({ message: "Payment succeeded" });
//     } else {
//       // Payment failed
//       res.status(400).json({ error: "Payment failed" });
//     }
//   } catch (error) {
//     console.error("Error confirming PaymentIntent:", error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while confirming PaymentIntent" });
//   }
// });

// const PORT = process.env.PORT || 4242;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



const express = require("express");
const cors = require("cors");
const app = express();
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

// Middleware to parse JSON bodies
app.use(express.json());

// Allow requests from your frontend origin
app.use(cors());




// Route to create a PaymentIntent
app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  try {
    // Calculate order amount based on items
    const orderAmount = calculateOrderAmount(items);

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: orderAmount,
      currency: "usd",
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating PaymentIntent:", error);
    res.status(500).json({ error: "Unable to create PaymentIntent" });
  }
});

const PORT = process.env.PORT || 4242;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Helper function to calculate order amount
const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};
