import React from "react";
import img1 from "../assets/management.jpg";
import img2 from "../assets/download.jpg";  
import img3 from "../assets/download (1).png";
import img4 from "../assets/1000_F_333094597_8WdnUbpBaNg0HPLlXe9BFVhQzAnQPV6O.jpg";
const AboutUs: React.FC = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-16 text-black">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[64px] font-extrabold leading-none">ABOUT</h1>
        <h1 className="text-[64px] font-extrabold leading-none">US</h1>
        <p className="mt-4 max-w-lg text-gray-600">
          Luxurious Interior and Industrial Design
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Modern Elegance: Designs featuring clean lines, neutral palettes, and
          high-quality materials.
        </p>
      </div>

      {/* Image and Philosophy */}
      <div className="grid md:grid-cols-2 gap-6 items-start mb-20">
        <img
          src={img1}
          alt="Interior Left"
          className="rounded-2xl object-cover w-full h-60"
        />
        <div className="space-y-4">
          <img
            src={img4}
            alt="Interior Right"
            className="rounded-2xl object-cover w-full h-60 mb-4"
          />
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Our Philosophy</h2>
            <p className="text-gray-600">
              At Britto Charette, we believe in creating luxurious, personalized
              environments that reflect our clients’ tastes and lifestyles.
            </p>
          </div>
        </div>
      </div>

      {/* Meet the Principals */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">MEET THE PRINCIPALS</h2>
        <p className="text-gray-600 max-w-2xl mb-10">
          As principal and licensed designer, the founder oversees the
          day-to-day operations of Britto Charette and the design and
          manufacture of our firm’s custom furniture and award-winning
          accessories.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Principal 1 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <img
              src={img2}
              alt="Jay Britto"
              className="rounded-2xl w-40 h-40 object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">Yemane Addis</h3>
              <p className="text-sm text-gray-500">FOUNDER AND PRINCIPAL</p>
            </div>
          </div>

          {/* Principal 2 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <img
              src={img3}
              alt="David Charette"
              className="rounded-2xl w-40 h-40 object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">Mesheg</h3>
              <p className="text-sm text-gray-500">FOUNDER AND PRINCIPAL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
