import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Compare = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'http://127.0.0.1:8000/combine';
        const response = await axios.get(apiUrl);
        setData(response.data);
        console.log("data")
        console.log(response.data, 'here data 222');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, [])

  const tableHeader = (
    <thead>
      <tr>
        <th className="border px-4 py-2 bg-blue-500 text-white text-center">Team A</th>
        <th className="border px-4 py-2 bg-yellow-500 text-white text-center">Team B</th>
        <th className="border px-4 py-2 bg-gray-500 text-white text-center">Disappearing Marker bet365</th>
        <th className="border px-4 py-2 bg-gray-500 text-white text-center">Disappearing Marker labbrokes</th>
        <th className="border px-4 py-2 bg-blue-500 text-white text-center">Time Count Bet365</th>
        <th className="border px-4 py-2 bg-yellow-500 text-white text-center">Time Count ladbrokes</th>
        <th className="border px-4 py-2 bg-gray-500 text-white text-center">Time Difference</th>

      </tr>
    </thead>
  );

  const tableBody = (
    <tbody>
      {data.map((item, index) => (
        <tr key={index} className="bg-gray-100">
          <td className="border px-4 py-2 text-center">{item["Team-A"]}</td>
          <td className="border px-4 py-2 text-center">{item["Team-B"]}</td>
          <td className="border px-4 py-2 text-center">{item["Disappearing Marker bet365"]}</td>
          <td className="border px-4 py-2 text-center">{item["Disappearing Marker ladbrokes"]}</td>
          <td className="border px-4 py-2 text-center">{item["Time Count Bet365"]}</td>
          <td className="border px-4 py-2 text-center">{item["Time Count ladbrokes"]}</td>
          <td className="border px-4 py-2 text-center">{item["Time Difference"]}</td>

  </tr>
      ))}
    </tbody>
  );

  return (
    <div>
      {/* Top bar with link to the next page */}
      <div className="bg-gray-700 text-white p-4 flex justify-between">
        <Link to="https://www.bet365.it/#/IP/B1" className="border-b-2 border-red-500 p-2 rounded-xl text-blue-500 hover:text-gray-300 hover:border-gray-300">Website link</Link>
        <Link to="/Dashboard" className="border-b-2 border-white p-2 rounded-xl">Back</Link>
        <Link to={"/"} className="border-b-2 border-red-500 p-2 rounded-xl text-red-500 hover:text-blue-500 hover:border-gray-300">Logout</Link>
      </div>
      <div className="container mx-auto my-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Compare Table</h2>
        <table className="min-w-full bg-white border border-gray-300">
          {tableHeader}
          {tableBody}
        </table>
      </div>
    </div>
  );
};

export default Compare;
