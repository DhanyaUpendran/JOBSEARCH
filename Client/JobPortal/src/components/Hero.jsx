import React from 'react';
// Hero section that includes a heading and a search input
function Hero({ onSearch }) {
  return (
    // Full-width section with center alignment and padding
    <section className="text-center  py-10 bg-gray-100 text-black">
      <h2 className="text-3xl font-bold mb-2">Find Your Dream Job.</h2>
      <p className="mb-4">Search by job title or company</p>
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)} // Lifts the value to parent via props
        placeholder="Search jobs..."
        className="px-4 py-2 border rounded w-80"
      />
    </section>
  );
}

export default Hero;