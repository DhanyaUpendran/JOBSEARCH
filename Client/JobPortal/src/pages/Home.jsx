import React from 'react'
import Header from '../components/Header.jsx'; //Reusable header component
import JobList from '../components/JobList.jsx';// Reusable JobList component
import Footer from '../components/Footer.jsx'; // Reusable Footer component
const Home = ()=> {
  return (
    <div>
      <Header/>          {/* Display site header */}
      <JobList />        {/* Display site JobList */}
      <Footer />        {/* Display site Footer*/}
    </div>
  )
}

export default Home
