import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./Hero.jsx";

// Main JobList component
const JobList = () => {
  const [jobs, setJobs] = useState([]);             //State to store all jobs fetched from backend
  const [searchTerm, setSearchTerm] = useState(""); //State to store the current search term entered by user
  const [selectedJob, setSelectedJob] = useState(null); // State to store the job selected for modal view  
  const [showModal, setShowModal] = useState(false);    // State to control modal visibility
  const [categories, setCategories] = useState([]); // All unique categories for filtering
  const [selectedCategory, setSelectedCategory] = useState("All"); // Selected category (default is 'All')

    // Fetch jobs when component mounts or search/category changes
  useEffect(() => {
    fetchJobs();
  },  [selectedCategory, searchTerm]);

// Function to fetch jobs from backend API
  const fetchJobs = async () => {
    try {
      const params = {};
      // Add category filter if not 'All'
      if (selectedCategory !== "All") {
        params.category = selectedCategory;
      }
       // Add search filter if text is entered
      if (searchTerm.trim() !== "") {
        params.search = searchTerm;
      }
  // API call to fetch jobs
      const response = await axios.get("http://localhost:3000/jobs", { params });
      
      setJobs(response.data);// Set fetched jobs to state

   // Create a list of unique categories from job data
      const uniqueCategories = [
        "All",
        ...new Set(response.data.map((job) => job.category))
      ];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };
  
  // Open modal with selected job
  const openModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };
// Close modal and reset selected job
  const closeModal = () => {
    setSelectedJob(null);
    setShowModal(false);
  };

  return (
    <>
    {/* Hero section with search input */}
    <Hero onSearch={setSearchTerm} />
     {/* Main container with job listings */}
      <div className="w-full min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
         {/* Title and category filter */}
        <h2 className="text-2xl font-bold text-black">Job Listings</h2>
        <select
          value={selectedCategory}  // The selected value from dropdown is controlled by selectedCategory state

          onChange={(e) => setSelectedCategory(e.target.value)}   // When user selects a different category, update the state e.target.value` gets the value of the selected <option>
          className="border border-gray-600 rounded px-3 py-2 bg-white text-blue-600"
        >
           {/* 
    Dynamically create <option> elements from categories array.
    Each category is used both as the display text and the value.
    'key' is set to 'cat' to help React track each item.
  */}
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

{/* Job cards grid */}
        {/*
    Loop through the `jobs` array and render a job card for each job.
    Each card needs a unique `key`, so we use job._id (MongoDB's unique ID).
  */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-500"
          >

            {/* Job info */}

            <h3 className="text-xl font-semibold mb-1 text-blue-600">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-sm text-blue-600 font-medium mt-1">
              {job.category} | {job.location}
            </p>

            {/* View details button */}

            <button
              onClick={() => openModal(job)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

       {/* Modal for job details */}

      {showModal && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
          <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-600 hover:text-black"
            >
              ✕
            </button>

             {/* Modal job details */}

            <h2 className="text-2xl font-bold mb-2 text-blue-700">{selectedJob.title}</h2>
            <p className="text-gray-700 mb-1">Company: {selectedJob.company}</p>
            <p className="text-gray-700 mb-1">Category: {selectedJob.category}</p>
            <p className="text-gray-700 mb-1">Location: {selectedJob.location}</p>
            <p className="text-gray-800 mt-4">DESCRIPTION: {selectedJob.description}</p>
          </div>
        </div>
      )}
    </div>
 
    </>
  );
};

export default JobList;
