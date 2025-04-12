import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importing page components
import Home from './pages/Home.jsx';
import JobForm from './pages/JobForm.jsx';
import Contact from './pages/Contact.jsx';
import Job from './pages/Jobs.jsx';
function App() {
  return (
     // Router wraps the entire application for enabling routing
   <Router>
    <Routes>
      
    <Route path="/" element={<Home />} />          {/* Route for Home page */}
    <Route path="/jobForm" element={<JobForm />} />  {/* Route for Job posting form page */}
    <Route path="/jobs" element={<Job />} />           {/* Route for viewing all jobs */}
    <Route path="/contact" element={<Contact />} />      {/* Route for Contact page */}
    </Routes>
    </Router>
  )
}

export default App
