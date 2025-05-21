import React from 'react';

const ContactUs =()=> {
    return(
              <div className="flex items-center justify-between h-full p-10 max-w-7xl mx-auto ">

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
export default ContactUs;