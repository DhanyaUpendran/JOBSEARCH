import React from "react";
import { useNavigate } from 'react-router-dom'; // Hook for programmatic navigation
import JobList from "../components/JobList.jsx"; // Component that displays list of jobs
import Footer from "../components/Footer.jsx"; 

const Job = () => {
  const navigate = useNavigate(); // Initialize navigation hook

  return (
    <>
      {/* Top navigation bar with a back button */}
      <div className="bg-gray-100 py-4 px-6 md z-10 relative">
        <button
          onClick={() => navigate("/")} // Navigate to home page when clicked
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          ← Back to Home
        </button>
      </div>

      {/* Job list component which renders all available jobs */}
      <JobList />

      {/* Footer at the bottom of the page */}
      <Footer />
    </>
  );
};

export default Job;
