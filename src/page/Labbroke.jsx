import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Labbroke = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'http://127.0.0.1:8000/labbrok';
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
        <th className="border px-4 py-2 bg-blue-500 text-white text-center">Team-A</th>
        <th className="border px-4 py-2 bg-green-500 text-white text-center">Team-A Goals</th>
        <th className="border px-4 py-2 bg-yellow-500 text-white text-center">Team-B</th>
        <th className="border px-4 py-2 bg-red-500 text-white text-center">Team-B Goals</th>
        <th className="border px-4 py-2 bg-indigo-500 text-white text-center">Match Timer</th>
        <th className="border px-4 py-2 bg-purple-500 text-white text-center">Value-1</th>
        <th className="border px-4 py-2 bg-pink-500 text-white text-center">Value-X</th>
        <th className="border px-4 py-2 bg-orange-500 text-white text-center">Value-2</th>
        <th className="border px-4 py-2 bg-gray-500 text-white text-center">Disappearing Marker</th>
        <th className="border px-4 py-2 bg-orange-500 text-white text-center">Timer</th>
      </tr>
    </thead>
  );

  const tableBody = (
    <tbody>
      {data.map((item, index) => (
        <tr key={index} className="bg-gray-100">
          <td className="border px-4 py-2 text-center">{item["Team-A"]}</td>
          <td className="border px-4 py-2 text-center">{item["Team-A Goals"]}</td>
          <td className="border px-4 py-2 text-center">{item["Team-B"]}</td>
          <td className="border px-4 py-2 text-center">{item["Team-B Goals"]}</td>
          <td className="border px-4 py-2 text-center">{item["Match Timer"]}</td>
          <td className="border px-4 py-2 text-center">{item["Value-1"]}</td>
          <td className="border px-4 py-2 text-center">{item["Value-X"]}</td>
          <td className="border px-4 py-2 text-center">{item["Value-2"]}</td>
          <td className="border px-4 py-2 text-center">{item["Disappearing Marker ladbrokes"]}</td>
          <td className="border px-4 py-2 text-center">{item["Time_labbroke"]}</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div>
      {/* Top bar with link to the next page */}
      <div className="bg-gray-700 text-white p-4 flex justify-between">
        <Link to="https://www.ladbrokes.be/en/sports-live/#!" className="border-b-2 border-red-500 p-2 rounded-xl text-blue-500 hover:text-gray-300 hover:border-gray-300">Website link</Link>
        <Link to="/Dashboard" className="border-b-2 border-white p-2 rounded-xl">Back</Link>
        <Link to={"/"} className="border-b-2 border-red-500 p-2 rounded-xl text-red-500 hover:text-blue-500 hover:border-gray-300">Logout</Link>
      </div>

      <div className="container mx-auto my-4">
        <h2 className="text-2xl font-bold mb-4 text-center">LABBROKES Table</h2>
        <table className="min-w-full bg-white border border-gray-300">
          {tableHeader}
          {tableBody}
        </table>
      </div>
    </div>
  );
};

export default Labbroke;
