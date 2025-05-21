import React from 'react';
import logo from '../assets/image.png';

const CompanyInfo = () => {
  return (
    <div className="flex flex-col items-center   text-center p-4 bg-white shadow-md">
      {/* Logo */}
      <img
        alt="MY Consulting"
        src={logo}
        className="h-16 w-auto mb-2"  // Adjust height as needed
      />
      
      {/* Company Title */}
      <div className="text-xl font-bold">
        MY. CONSULTING ARCHITECTS & ENGINEERS PLC
      </div>
      <div className="text-lg text-gray-600">
        መንግስታዊ አርክቲክት እና እንግነት አይነት
      </div>

      {/* Separator Line */}
      <hr className="my-2 w-full border-t border-gray-300" />

      {/* Contact Information */}
      <div className="text-sm text-gray-700">
        <p>📞 +251 118 220 900 | +251 220 128 363</p>
        <p>✉️ myconsulting2004@gmail.com</p>
        <p>📍 Gologol Building 8th Floor 801, Addis Ababa, Ethiopia</p>
        <p>Adi House Building 2nd Floor, Adama, Ethiopia</p>
      </div>
    </div>
  );
};

export default CompanyInfo;