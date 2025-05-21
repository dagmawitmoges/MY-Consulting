import React, { useState, useEffect } from 'react';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';      
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg'; 

const previousWorks = [
  {
    title: 'Urban Park Design',
    description: 'Designed a vibrant urban park that serves as a community hub, featuring walking trails and recreational areas.',
    image: p5,
  },
  {
    title: 'Commercial Office Building',
    description: 'Managed the construction of a state-of-the-art office building, focusing on sustainability and energy efficiency.',
    image: p3,
  },
  {
    title: 'Residential Development',
    description: 'Oversaw the planning and design of a modern residential community with eco-friendly features.',
    image: p4,
  },
  {
    title: 'Church Engineering Project',
    description: 'Engineered a complex bridge design that enhances connectivity while ensuring safety and durability.',
    image: p2,
  },
  {
    title: 'Church Engineering Project',
    description: 'Engineered a complex bridge design that enhances connectivity while ensuring safety and durability.',
    image: p2,
  },
  {
    title: 'Residential Development',
    description: 'Oversaw the planning and design of a modern residential community with eco-friendly features.',
    image: p4,
  },
];

const PreviousWorksSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextWork = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(previousWorks.length / 3));
  };

  useEffect(() => {
    const interval = setInterval(nextWork, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <><div className="flex items-center justify-center my-10 bg-gray-100 p-4">
      <hr className="flex-grow border-t border-gray-300" />
      <h2 className="mx-4 text-3xl font-bold text-center text-gray-800">
        OUR PREVIOUS  <span className="text-blue-600">WORKS.</span>
      </h2>
      <hr className="flex-grow border-t border-gray-300" />
    </div>
    <div className="max-w-7xl mx-auto p-6">

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {previousWorks.map((work, index) => (
              <div key={index} className="flex-none w-1/3 p-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={work.image} alt={work.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{work.title}</h3>
                    <p className="mt-2 text-gray-600">{work.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div></>
  );
};

export default PreviousWorksSection;