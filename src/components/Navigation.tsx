import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calculator, Heart, Activity, Scale, Target, Menu, X, BookOpen } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Calculator className="w-6 h-6" />
            <span className="font-bold text-xl">MyHealthCalculator.fit</span>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('/category/track-macros')}
              className="flex items-center space-x-1 hover:text-cyan-100"
            >
              <Activity className="w-4 h-4" />
              <span>Track Macros</span>
            </button>

            <button 
              onClick={() => handleNavigation('/category/body-composition')}
              className="flex items-center space-x-1 hover:text-cyan-100"
            >
              <Scale className="w-4 h-4" />
              <span>Body Composition</span>
            </button>

            <button 
              onClick={() => handleNavigation('/category/heart-health')}
              className="flex items-center space-x-1 hover:text-cyan-100"
            >
              <Heart className="w-4 h-4" />
              <span>Heart Health</span>
            </button>

            <button 
              onClick={() => handleNavigation('/category/ideal-weight')}
              className="flex items-center space-x-1 hover:text-cyan-100"
            >
              <Target className="w-4 h-4" />
              <span>Find Ideal Weight</span>
            </button>

            <Link 
              to="/blog"
              className="flex items-center space-x-1 hover:text-cyan-100"
            >
              <BookOpen className="w-4 h-4" />
              <span>Blog</span>
            </Link>

            <button 
              onClick={() => handleNavigation('/about')}
              className="hover:text-cyan-100"
            >
              <span>About</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button
            onClick={() => handleNavigation('/category/track-macros')}
            className="block w-full text-left px-3 py-2 rounded-md text-white hover:bg-cyan-700"
          >
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4" />
              <span>Track Macros</span>
            </div>
          </button>

          <button
            onClick={() => handleNavigation('/category/body-composition')}
            className="block w-full text-left px-3 py-2 rounded-md text-white hover:bg-cyan-700"
          >
            <div className="flex items-center space-x-2">
              <Scale className="w-4 h-4" />
              <span>Body Composition</span>
            </div>
          </button>

          <button
            onClick={() => handleNavigation('/category/heart-health')}
            className="block w-full text-left px-3 py-2 rounded-md text-white hover:bg-cyan-700"
          >
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>Heart Health</span>
            </div>
          </button>

          <button
            onClick={() => handleNavigation('/category/ideal-weight')}
            className="block w-full text-left px-3 py-2 rounded-md text-white hover:bg-cyan-700"
          >
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span>Find Ideal Weight</span>
            </div>
          </button>

          <Link
            to="/blog"
            className="block w-full text-left px-3 py-2 rounded-md text-white hover:bg-cyan-700"
          >
            <div className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>Blog</span>
            </div>
          </Link>

          <button
            onClick={() => handleNavigation('/about')}
            className="block w-full text-left px-3 py-2 rounded-md text-white hover:bg-cyan-700"
          >
            <span>About</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;