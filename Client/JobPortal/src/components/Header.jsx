import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handlePostJob = () => {
    navigate('/jobForm');
  };

  return (
    <header className="bg-blue-600 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">
          <Link to="/">JobBoard</Link>
        </h1>

        <nav className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/jobs" className="hover:underline">
            Jobs
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <button
            onClick={handlePostJob}
            className="bg-white text-blue-600 font-medium px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Post a Job
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
