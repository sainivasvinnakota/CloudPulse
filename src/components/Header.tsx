import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Cloud className="h-8 w-8 text-green-500" />
          <span className="text-xl font-bold text-gray-800">CloudPulse</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/features" className="text-gray-600 hover:text-green-500">Features</Link>
          <Link to="/how-it-works" className="text-gray-600 hover:text-green-500">How It Works</Link>
          <Link to="/dashboard" className="text-gray-600 hover:text-green-500">Dashboard</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-green-500">Recommendations</Link>
          <Link to="/about" className="text-gray-600 hover:text-green-500">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-green-500">Contact</Link>
        </nav>
        <div className="hidden md:flex space-x-4">
          <Link to="/signin" className="text-green-500 hover:text-green-600 px-2 py-2">Sign In</Link>
          <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Sign Up</Link>
        </div>
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;