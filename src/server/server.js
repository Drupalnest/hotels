const express = require("express");
const app = express();
const stripe = require("stripe")('sk_test_tR3PYbcVNZZ796tH88S4VQ2u');

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  return 1400; // Replace this with your actual order calculation logic
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
