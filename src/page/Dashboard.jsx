import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Bet360 from './Bet360';
import backgroundImage from "../assets/football_login.jpg"
import TopBar from '../Components/Sidebar/Topbar';


const Dashboard = () => {
   return (

    
    <div

      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
       <>
       <TopBar />
       </>  
      <div className="p-8 rounded-tl-3xl border-t border-r bg-white shadow-md">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-4 text-blue-500">BET365</h2>
            <Link to="/bet360" className="text-blue-500 hover:underline">View Details</Link>
          </div>

          {/* Average Grade Card */}
          <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-4 text-green-500">LABBROKES</h2>
            <Link to="/labbroke" className="text-blue-500 hover:underline">View Details</Link>
          </div>

          {/* Upcoming Events Card */}
          <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-4 text-purple-500">Comparing Script</h2>
            <Link to="/compare" className="text-blue-500 hover:underline">View Details</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
