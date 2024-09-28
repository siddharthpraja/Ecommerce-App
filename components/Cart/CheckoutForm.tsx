"use client";
import React, { useState } from "react";

const CheckoutForm = () => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(e.target.value);
  };

  const handleUpiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpiId(e.target.value);
  };

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptedTerms(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert("You must accept the terms and conditions.");
      return;
    }

    // Display the alert
    alert("Form submitted!");

    // Log the address and payment method
    console.log("Address:", address);
    console.log("Payment Method:", paymentMethod);
    if (paymentMethod === "creditCard") {
      console.log("Card Number:", cardNumber);
      console.log("CVV:", cvv);
    } else {
      console.log("UPI ID:", upiId);
    }

    // Clear the form fields
    setAddress({ street: "", city: "", state: "", zip: "" });
    setPaymentMethod("creditCard");
    setCardNumber("");
    setCvv("");
    setUpiId("");
    setAcceptedTerms(false);
  };

  return (
    <div className="w-full items-center flex lg:p-8 justify-between">
      <form onSubmit={handleSubmit} className="mt-8 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Street Address:</label>
          <input
            type="text"
            name="street"
            value={address.street}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">City:</label>
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">State:</label>
          <input
            type="text"
            name="state"
            value={address.state}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Zip Code:</label>
          <input
            type="text"
            name="zip"
            value={address.zip}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={handlePaymentChange}
            className="border p-2 w-full"
          >
            <option value="creditCard">Credit Card</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        {paymentMethod === "creditCard" && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Card Number:</label>
              <input
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                required
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">CVV:</label>
              <input
                type="text"
                value={cvv}
                onChange={handleCvvChange}
                required
                className="border p-2 w-full"
              />
            </div>
          </>
        )}

        {paymentMethod === "upi" && (
          <div className="mb-4">
            <label className="block text-gray-700">UPI ID:</label>
            <input
              type="text"
              value={upiId}
              onChange={handleUpiChange}
              required
              className="border p-2 w-full"
            />
          </div>
        )}

        <div className="mb-4">
          <label>
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={handleTermsChange}
              required
            />
            I accept the terms and conditions
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded"
        >
          Submit
        </button>
      </form>
      <div className="lg:flex hidden justify-between text-center items-center">
        <div>
          <iframe
            width={500}
            height={500}
            src="https://lottie.host/embed/a8bba014-9978-4cdd-a6b3-2702ad2fc298/R1cl4S91Zw.json"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
