import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import planning from '../assets/planning.jpg';
import management from '../assets/management.jpg';
import supervision from '../assets/supervision.jpg';
import consultancy from '../assets/consultancy.png';

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
];

const ServiceSection = () => {
  return (
    <div className="bg-gray-100 text-gray py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="mb-8">Our palette of expertise tailored to elevate your brand and project.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
              <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="mt-2">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center justify-center border border-green-500 text-green-500 font-bold rounded-full px-6 py-2 hover:bg-green-500 hover:text-white transition"
              >
                READ MORE
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;