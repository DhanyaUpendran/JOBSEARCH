import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header.jsx';
import Footer from "../components/Footer.jsx";

function JobForm() {
  //Initialize form state for job details
  const [formData, setFormData] = useState({ title: '', company: '', category: '', location: '', description: '' });
  //State to hold available job categories fetched from backend
  const [categories, setCategories] = useState([]);


  //Fetch categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("http://localhost:3000/categories");
      setCategories(res.data);  // Store the fetched categories
    };
    fetchCategories();  // Call the function
  }, []);

// Handle input changes and update the corresponding field in formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form reload
    await axios.post('http://localhost:3000/jobs', formData);  // Send job data to backend
    setFormData({ title: '', company: '', category: '', location: '', description: '' });  // Clear the form after submission
  };

  return (
    <>
    < Header/>

{/* Centered form on the page */}

    <div className="min-h-screen bg-white flex items-center justify-center">
  <form onSubmit={handleSubmit} className="p-6 max-w-xl w-full text-black bg-white shadow-md rounded">
    <h2 className="text-2xl mb-4 font-semibold">Post a Job</h2>

 {/* Job Title input */}

    <input
      type="text"
      name="title"
      placeholder="Job Title"
      value={formData.title}
      onChange={handleChange}
      className="w-full p-2 mb-2 border rounded"
      required
    />
    
 {/* Company Name input */}
    <input
      type="text"
      name="company"
      placeholder="Company Name"
      value={formData.company}
      onChange={handleChange}
      className="w-full p-2 mb-2 border rounded"
      required
    />
{/* Category dropdown */}
    <select
      name="category"
      value={formData.category}
      onChange={handleChange}
      className="w-full p-2 mb-2 border rounded"
      required
    >
      <option value="">Select Category</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
{/* Job Location input */}
    <input
      type="text"
      name="location"
      placeholder="Location"
      value={formData.location}
      onChange={handleChange}
      className="w-full p-2 mb-2 border rounded"
      required
    />
    
  {/* Job Description textarea */}
    <textarea
      name="description"
      placeholder="Job Description"
      value={formData.description}
      onChange={handleChange}
      className="w-full p-2 mb-2 border rounded"
      required
    ></textarea>

{/* Submit button */}
    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
      Submit Job
    </button>
  </form>
</div>

    < Footer />
    </>
  );
}

export default JobForm;
