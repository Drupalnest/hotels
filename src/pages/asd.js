import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const [productCartItem] = useState([
    { _id: 1, name: "Product 1", qty: 2, price: 50 },
    { _id: 2, name: "Product 2", qty: 1, price: 20 },
  ]);
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [stripe, setStripe] = useState(null);
  const [sessionId, setSessionId] = useState(null); // Add state to store sessionId

  useEffect(() => {
    // Load Stripe asynchronously
    const loadStripePromise = async () => {
      const stripe = await loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
      setStripe(stripe);
    };
    loadStripePromise();
  }, []);

  useEffect(() => {
    let qty = 0;
    let price = 0;
    productCartItem.forEach((item) => {
      qty += item.qty;
      price += item.qty * item.price;
    });
    setTotalQty(qty);
    setTotalPrice(price);
  }, [productCartItem]);

  const handlePayment = async () => {
    if (!stripe) {
      console.error("Stripe is not yet loaded.");
      return;
    }
  
    try {
      // Create a checkout session
      const response = await fetch(
        "http://localhost:8080/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productCartItem),
        }
      );
  
      if (!response.ok) {
        throw new Error("Error creating checkout session: " + response.statusText);
      }
  
      const sessionData = await response.json();
      console.log("Session Data:", sessionData); // Log sessionData to check its structure
      
      setSessionId(sessionData.sessionId); // Set sessionId in state
  
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  useEffect(() => {
    if (sessionId) {
      // Redirect to Checkout if sessionId is available
      stripe.redirectToCheckout({
        sessionId: sessionId,
      })
      .then((result) => {
        if (result.error) {
          console.error("Error redirecting to Checkout:", result.error.message);
        }
      });
    }
  }, [sessionId, stripe]);

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-lg md:text-2xl font-bold text-slate-600">
        Your Cart Items
      </h2>

      {productCartItem.length > 0 ? (
        <div className="my-4 flex gap-3">
          {/* Display cart items */}
          <div className="w-full max-w-3xl">
            {productCartItem.map((el) => (
              <div key={el._id} className="flex items-center border-b py-2">
                <div className="w-1/2">{el.name}</div>
                <div className="w-1/4">Qty: {el.qty}</div>
                <div className="w-1/4">Price: ₹{el.price}</div>
              </div>
            ))}
          </div>

          {/* Total cart item */}
          <div className="w-full max-w-md ml-auto">
            <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
            <div className="flex w-full py-2 text-lg border-b">
              <p>Total Qty :</p>
              <p className="ml-auto w-32 font-bold">{totalQty}</p>
            </div>
            <div className="flex w-full py-2 text-lg border-b">
              <p>Total Price</p>
              <p className="ml-auto w-32 font-bold">
                <span className="text-red-500">₹</span> {totalPrice}
              </p>
            </div>
            <button
              className="bg-red-500 w-full text-lg font-bold py-2 text-white"
              onClick={handlePayment}
            >
              Payment
            </button>
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-center items-center flex-col">
          <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
