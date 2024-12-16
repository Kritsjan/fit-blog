import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-900 to-cyan-900 text-cyan-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Calculator className="w-6 h-6" />
              <span className="font-bold text-xl">MyHealthCalculator.fit</span>
            </div>
            <p className="mt-4">Your trusted companion for health and wellness calculations.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/keto-calculator" className="hover:text-white">Keto Calculator</Link></li>
              <li><Link to="/obesity-calculator" className="hover:text-white">BMI Calculator</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/sitemap" className="hover:text-white">Sitemap</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Disclaimer</h3>
            <p className="text-sm">
              The calculators and information on this website are provided for educational purposes only. 
              These tools are experimental and should not be used as a substitute for professional medical advice. 
              Always consult with healthcare professionals for medical decisions. Use your own judgment 
              alongside these tools.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-cyan-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MyHealthCalculator.fit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;