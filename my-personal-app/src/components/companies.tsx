import React from "react";
import img1 from "../assets/image-removebg-preview (41).png";
import img2 from "../assets/image-removebg-preview (41).png";
import img3 from "../assets/image-removebg-preview (42).png";
import img4 from "../assets/image-removebg-preview (43).png";
import img5 from "../assets/image-removebg-preview (44).png";
import backgroundImage from "../assets/1000_F_333094597_8WdnUbpBaNg0HPLlXe9BFVhQzAnQPV6O.jpg"; // Your provided background image

const CompaniesWeWorkWith: React.FC = () => {
  const partners = [
    { name: "MY Consulting", logo: img1 },
    { name: "Innovate Corp", logo: img2 },
    { name: "Future Solutions", logo: img3 },
    { name: "Creative Minds", logo: img4 },
    { name: "Visionary Group", logo: img5 },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gray-800/70"></div>

      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-2 text-white tracking-wide uppercase">
          OUR PARTNERS
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-300 mb-8 max-w-md">
          We collaborate with industry leaders to deliver exceptional solutions and services.
        </p>

        {/* Logo Row */}
        <div className="bg-white py-6 px-5 md:px-10 rounded shadow-md flex flex-wrap justify-center gap-12 max-w-5xl w-full h-39">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 md:h-30 object-contain grayscale contrast-150"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesWeWorkWith;