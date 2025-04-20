import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="p-4 min-h-screen flex flex-col justify-between">
        <div>
          <nav className="flex space-x-4 mb-4">
            <Link to="/register" className="text-blue-500">Register</Link>
            <Link to="/login" className="text-blue-500">Login</Link>
            <Link to="/contact" className="text-blue-500">Contact</Link>
            <Link to="/about" className="text-blue-500">About</Link>
          </nav>
          <Routes>
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <footer className="mt-8 text-center text-gray-500">
          Roll Number: 23071A05P6
        </footer>
      </div>
    </Router>
  );
};

export default App;
