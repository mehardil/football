// Aboutus.js

import React from 'react';
import { Link } from 'react-router-dom';

const Aboutus = () => {
  return (
    <div className="bg-green-300 font-sans">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>

        <p className="mb-4">
          Welcome to our company! We are a team of passionate individuals dedicated to providing high-quality products/services to our customers. Our mission is to exceed your expectations and create a positive experience for you.
        </p>

        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel lectus vel libero fringilla dapibus.
          Integer posuere sapien vitae nulla interdum, vel tincidunt justo efficitur.
        </p>

        <p className="mb-4">
          Feel free to reach out to us if you have any questions or if there's anything we can help you with. We appreciate your trust in us and look forward to serving you.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">Our Team</h2>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow bg-yellow-200">
              <h3 className="text-lg font-bold mb-2">Jerrrrrrry</h3>
              <p className="text-gray-700">CEO</p>
            </div>
          </div>
          {/* Add more team members as needed */}
          <div className="w-full flex mt-3">
                    <button  className="w-full  text-green font-bold py-3 px-4" type="button" >
                    <Link to="/Dashboard">back to Dashboard page</Link>
                    </button>
          </div>
        </div>

      </div>
    </div>
  );
};
 
export default Aboutus;
