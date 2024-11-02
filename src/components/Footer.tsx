import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CloudPulse</h3>
            <p className="text-sm">Powering a Greener Cloud</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="hover:text-green-400">Features</Link></li>
              <li><Link to="/how-it-works" className="hover:text-green-400">How It Works</Link></li>
              <li><Link to="/pricing" className="hover:text-green-400">Pricing</Link></li>
              <li><Link to="/about" className="hover:text-green-400">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-green-400">Contact Us</Link></li>
              <li><a href="#" className="hover:text-green-400">FAQ</a></li>
              <li><a href="#" className="hover:text-green-400">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400"><Facebook /></a>
              <a href="#" className="hover:text-green-400"><Twitter /></a>
              <a href="#" className="hover:text-green-400"><Linkedin /></a>
              <a href="#" className="hover:text-green-400"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; 2024 CloudPulse. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-green-400 mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-green-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;