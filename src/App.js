import React from 'react';
import { BrowserRouter as Router, Route, Link ,Routes } from 'react-router-dom';
import Signup from './page/Signup';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import Bet360 from './page/Bet360';
import Labbroke from './page/Labbroke';
import Compare from './page/Compare';
import TopBar from './Components/Sidebar/Topbar';
import Aboutus from './page/Aboutus';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={ <Login/>} />
        <Route path="/Signup" element = { <Signup/>}  />
        <Route path="/Dashboard" element = { <Dashboard/>}  />
        <Route path="/bet360" element={<Bet360 />} />
        <Route path="/labbroke" element={<Labbroke />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
