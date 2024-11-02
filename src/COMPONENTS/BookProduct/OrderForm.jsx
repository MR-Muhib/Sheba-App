import React, { useState } from "react";
import { Link } from "react-router-dom";

function OrderForm() {
  // State to store form data
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  });

  // Handler to update state as user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", formData);
    // Here you could add logic to send form data to a server or clear form
    setFormData({ name: "", email: "", service: "" }); // Clear form after submit

    // Show popup and hide it after 3 seconds
    setShowPopup(true);
    // setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md relative">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-6 rounded shadow-md"
        >
          <h2 className="text-lg mb-4">Place Your Order</h2>

          <div className="mb-4">
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Locations:</label>
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Your home location"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit Order
          </button>
        </form>
        {/* Popup message */}
        {showPopup && (
          <div className="absolute mx-auto top-36 left-20  mt-4 mr-4 bg-green-500 text-white p-5 rounded shadow-xl h-[200px]">
            <h1 className=""> Order submitted successfully!</h1>
            <Link
              to="/"
              href="#"
              className="text-black bg-cyan-400 py-2 w-[85%] absolute bottom-5 mx-auto block shadow-xl uppercase text-center hover:text-blue-700"
            >
              Back to home page
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default OrderForm;
