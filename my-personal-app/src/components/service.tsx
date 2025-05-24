import React from "react";
import { FaTools, FaWrench, FaBolt, FaHome, FaPaintRoller, FaHammer } from "react-icons/fa";

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gray-100 px-6 md:px-20 py-16 text-black">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600">
          At MY Consulting, we offer a variety of professional services tailored to your needs.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Service Card 1 */}
        <div className="bg-blue-600 rounded-xl p-6 text-white shadow-md flex flex-col gap-2">
          <div className="flex items-center justify-center text-3xl mb-2">
            <FaTools />
          </div>
          <h3 className="text-xl font-semibold">Consultation Services</h3>
          <p className="text-sm">
            We provide thorough consultations to understand your goals and challenges.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-gray-200 rounded-xl p-6 shadow-md flex flex-col gap-2">
          <div className="flex items-center justify-center text-3xl text-blue-600 mb-2">
            <FaWrench />
          </div>
          <h3 className="text-xl font-semibold">Project Management</h3>
          <p className="text-sm text-gray-600">
            Our team ensures that your projects are completed on time and within budget.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-gray-200 rounded-xl p-6 shadow-md flex flex-col gap-2">
          <div className="flex items-center justify-center text-3xl text-blue-600 mb-2">
            <FaBolt />
          </div>
          <h3 className="text-xl font-semibold">Strategic Planning</h3>
          <p className="text-sm text-gray-600">
            We offer expert guidance to develop effective strategies for your business.
          </p>
        </div>

        {/* Service Card 4 */}
        <div className="bg-gray-200 rounded-xl p-6 shadow-md flex flex-col gap-2">
          <div className="flex items-center justify-center text-3xl text-blue-600 mb-2">
            <FaHome />
          </div>
          <h3 className="text-xl font-semibold">Market Analysis</h3>
          <p className="text-sm text-gray-600">
            We conduct comprehensive market analyses to identify opportunities and risks.
          </p>
        </div>

        {/* Service Card 5 */}
        <div className="bg-gray-200 rounded-xl p-6 shadow-md flex flex-col gap-2">
          <div className="flex items-center justify-center text-3xl text-blue-600 mb-2">
            <FaPaintRoller />
          </div>
          <h3 className="text-xl font-semibold">Brand Development</h3>
          <p className="text-sm text-gray-600">
            We help create and refine your brand identity to resonate with your audience.
          </p>
        </div>

        {/* Service Card 6 */}
        <div className="bg-gray-200 rounded-xl p-6 shadow-md flex flex-col gap-2">
          <div className="flex items-center justify-center text-3xl text-blue-600 mb-2">
            <FaHammer />
          </div>
          <h3 className="text-xl font-semibold">Digital Transformation</h3>
          <p className="text-sm text-gray-600">
            Our solutions will guide you through the digital transformation journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;