import React from 'react';
import { Link } from 'react-router-dom';

const CommonButton = ({ text = "Book Consultation", className = "" }) => {
  return (
    <Link 
      to="/contact"
      className={`inline-block bg-[#FF5900] hover:bg-[#b08d4a] text-white px-8 py-4 text-sm tracking-wider uppercase rounded-sm transition-all duration-300 shadow-md hover:shadow-lg text-center font-medium ${className}`}
    >
      {text}
    </Link>
  );
};

export default CommonButton;