
import React from 'react';
import Header from '../components/Header.jsx'; // Reusable header component
import Footer from "../components/Footer.jsx"; // Reusable footer component

function Contact() {
  return (
    <>
      <Header /> {/* Display site header */}

      {/* Main container with vertical padding and white background */}
      <div className="min-h-screen bg-white py-10 px-4">

        {/* Page title */}
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Contact Us
        </h2>

        {/* Contact form container with max width, padding, and shadow styling */}
        <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded shadow-md text-black">
          <form>
            {/* Name input field */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded"
                required
              />
            </div>

            {/* Email input field */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded"
                required
              />
            </div>

            {/* Message textarea field */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full p-2 border rounded"
                required
              ></textarea>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer /> {/* Display site footer */}
    </>
  );
}

export default Contact;
