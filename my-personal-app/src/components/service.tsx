import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import planning from '../assets/planning.jpg';
import management from '../assets/management.jpg';
import supervision from '../assets/supervision.jpg';
import consultancy from '../assets/consultancy.png';
import bg from '../assets/A construction site with huge cranes.jpeg';

const services = [
  {
    title: 'Project Planning',
    description: 'Comprehensive planning services to ensure your project runs smoothly from start to finish.',
    image: planning,
  },
  {
    title: 'Construction Management',
    description: 'Expert management to ensure quality and adherence to specifications throughout the construction process.',
    image: management,
  },
  {
    title: 'Site Supervision',
    description: 'Professional oversight to maintain safety and quality on-site, ensuring projects stay on track.',
    image: supervision,
  },
  {
    title: 'Design & Build',
    description: 'Integrated design and construction services that streamline your project and reduce costs.',
    image: consultancy,
  },
  {
    title: 'Renovation & Remodeling',
    description: 'Transform your space with our expert renovation and remodeling services tailored to your needs.',
    image: supervision,
  },
];

const ServiceSection = () => {
  return (
    <div
      className="flex items-center justify-center no-repeat bg-center  bg-gray-100"
     style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover', // Ensures the image covers the entire section
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        minHeight: '100vh', // Ensures it covers at least the full viewport height
      }}
    >
      <div className="w-full p-6 mt-29" 
       >
        <h1 className="text-5xl font-bold text-center mb-4 ">We Provide Superior Construction Services</h1>
        <p className="text-center mb-8 text-gray-600 mt-5">
          Our experienced team is dedicated to delivering top-notch construction services that meet your needs and expectations.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 w-full sm:w-1/2 lg:w-1/3">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center justify-center border border-blue-500 text-blue-500 font-bold rounded-full px-6 py-2 hover:bg-blue-500 hover:text-white transition"
                >
                  READ MORE
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </a>
              </div>
              <span className="absolute top-4 right-4 bg-blue-500 text-white rounded-full px-3 py-1 text-xs font-semibold">
                Limited Time Offer
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;