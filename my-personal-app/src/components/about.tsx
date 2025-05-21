import React from 'react';
import image from '../assets/image.png'
const AboutPage = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: image }} // Ensure the path is correct
    >
      <div className="max-w-7xl mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          We Are Your Connection with the Creative Underworld
        </h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img 
              src={image}
              alt="Yemane Addis" 
              className="rounded-full w-48 h-48 object-cover mx-auto shadow-md" 
            />
          </div>
          <div className="md:w-1/2 md:pl-6">
            <h2 className="text-2xl font-semibold mb-2">Yemane Addis</h2>
            <h3 className="text-lg text-gray-600 mb-4">Civil Engineer</h3>
            <p className="text-gray-800 mb-4">
              Yemane has worked on various infrastructure projects, contributing his expertise to both large-scale and community-focused initiatives. He graduated from a renowned university with a degree in civil engineering and has since become a key player in the field. His dedication to sustainable design is matched by a commitment to quality and safety.
            </p>
            <p className="text-gray-800">
              Yemane believes that a solid foundation of experience guides his innovative approach to engineering challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;