import React from 'react';
import backgroundImage from '../assets/p4.jpg'; // Adjust the path to your image

const LandingSection = () => {
  return (
        // <div className="absolute inset-0 bg-black opacity-50"></div>

    <div
      className=" flex items-center justify-center no-repeat bg-center  bg-gray-100 "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

      <div className="flex items-center justify-between  p-10 max-w-7xl mx-auto h-auto"> 
        {/* Left Side: Text Content */}
        <div className="text-white max-w-3x1  space-x-95 md:mt-36 ">
          <h1 className="text-4x1 md:text-5xl font-bold mb-4 " >
            YOUR FIRST AND ONLY CHOICE FOR ENGINEERING & ARCHITECTURAL CONSULTING
          </h1>
          <ul className="mt-4 space-y-2 text-lg list-disc pl-5">
            <li>✅ Comprehensive project management</li>
            <li>✅ Innovative design solutions</li>
            <li>✅ Expert guidance through every phase</li>
          </ul>
          <a
            href="#"
            className="mt-6 inline-block bg-yellow-500 text-black font-bold rounded-md px-6 py-2 hover:bg-yellow-600 transition"
          >
            GET STARTED
          </a>
        </div>
      </div>
      
{/* Free Estimate Form positioned to partially overlap Services section */}
<div className="absolute bottom-0 left-3/4 transform -translate-x-1/2 bg-blue-800 text-white p-6  shadow-lg w-auto h-auto" style={{ marginBottom: '-40px' }}>
  <h2 className="text-xl font-bold mb-4 text-center">GET A FREE ESTIMATE</h2>
  <form className="grid grid-cols-2 gap-4">
    <input
      type="text"
      placeholder="Full Name"
      className="p-4 rounded-md border border-gray-300 w-full"
      required
    />
    <input
      type="tel"
      placeholder="Phone"
      className="p-4 rounded-md border border-gray-300 w-full"
      required
    />
    <input
      type="email"
      placeholder="Email"
      className="p-4 rounded-md border border-gray-300 w-full"
      required
    />
    <input
      type="text"
      placeholder="Project Address"
      className="p-4 rounded-md border border-gray-300 w-full"
      required
    />
    <button
      type="submit"
      className="col-span-2 bg-yellow-500 text-black font-bold rounded-md px-4 py-2 hover:bg-yellow-600 transition"
    >
      Submit
    </button>
  </form>
</div>
    </div>
  );
};

export default LandingSection;