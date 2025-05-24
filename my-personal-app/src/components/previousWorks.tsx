import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../assets/consultancy.png";
import img2 from "../assets/management.jpg";  
import img3 from "../assets/supervision.jpg";
import img4 from "../assets/1000_F_333094597_8WdnUbpBaNg0HPLlXe9BFVhQzAnQPV6O.jpg";
const OurWorks: React.FC = () => {
  const works = [
    {
      title: "Strategic Planning",
      description:
        "Crafting tailored strategies to navigate your business challenges effectively.",
      tags: ["Consulting", "Strategy"],
      image: img1, // replace with your actual path
      featured: true,
    },
    {
      title: "Market Analysis",
      description: "In-depth market studies to identify opportunities and threats.",
      tags: ["Research", "Analysis"],
      image: img2, // replace with your actual path
      featured: false,
    },
    {
      title: "Brand Development",
      description: "Creating impactful brand identities that resonate with your audience.",
      tags: ["Branding", "Marketing"],
      image: img3, 
      featured: false,
    },
    {
      title: "Digital Transformation",
      description: "Guiding businesses through their digital evolution.",
      tags: ["Technology", "Innovation"],
      image: img4, 
      featured: false,
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-white text-black">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Works</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Discover how MY Consulting transforms businesses through innovative strategies and solutions.
        </p>
      </div>

      {/* Works Section */}
      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-4">
        {works.map((work, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-72 md:w-80 h-96 rounded-3xl overflow-hidden relative`}
          >
            <img
              src={work.image}
              alt={work.title || "Work"}
              className="object-cover w-full h-full"
            />

            {work.featured && (
              <div className="absolute inset-0 bg-black/60 text-white flex flex-col justify-end p-4 rounded-3xl">
                <h3 className="text-xl font-semibold">{work.title}</h3>
                <p className="text-sm text-gray-300">{work.description}</p>
                <div className="flex gap-2 mt-2">
                  {work.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/20 px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex justify-end">
                  <FaArrowRight className="text-xl" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorks;