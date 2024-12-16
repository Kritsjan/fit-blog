import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scale, Calculator } from 'lucide-react';

function BodyComposition() {
  useEffect(() => {
    document.title = 'Body Composition Calculators: Body Fat, WHR & More';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Free body composition calculators for measuring body fat, waist-to-hip ratio, obesity risk, and lean body mass. Get accurate measurements and health insights.');
    }
  }, []);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Body Composition Calculators
          </h1>
          
          <p className="text-lg text-gray-600">
            Use our comprehensive suite of body composition calculators to track your fitness progress. 
            Get accurate measurements of body fat, lean mass, and other key metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Body Fat Calculator Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <Link 
                to="/body-fat-calculator" 
                className="flex items-center space-x-2 mb-4 text-teal-600 hover:text-teal-700"
              >
                <Scale className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Body Fat Calculator</h2>
              </Link>
              <p className="text-gray-600 mb-4">
                Calculate your body fat percentage and track your progress over time.
              </p>
              <Link 
                to="/body-fat-calculator"
                className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200"
              >
                Calculate Body Fat
              </Link>
            </div>
          </div>

          {/* Waist-Hip Ratio Calculator Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <Link 
                to="/waist-hip-ratio-calculator" 
                className="flex items-center space-x-2 mb-4 text-teal-600 hover:text-teal-700"
              >
                <Calculator className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Waist-to-Hip Ratio</h2>
              </Link>
              <p className="text-gray-600 mb-4">
                Measure your body shape and assess potential health risks.
              </p>
              <Link 
                to="/waist-hip-ratio-calculator"
                className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200"
              >
                Calculate WHR
              </Link>
            </div>
          </div>

          {/* Obesity Calculator Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <Link 
                to="/obesity-calculator" 
                className="flex items-center space-x-2 mb-4 text-teal-600 hover:text-teal-700"
              >
                <Scale className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Obesity Calculator</h2>
              </Link>
              <p className="text-gray-600 mb-4">
                Calculate your BMI and assess your weight status.
              </p>
              <Link 
                to="/obesity-calculator"
                className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200"
              >
                Calculate BMI
              </Link>
            </div>
          </div>

          {/* Lean Body Mass Calculator Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <Link 
                to="/lean-body-mass-calculator" 
                className="flex items-center space-x-2 mb-4 text-teal-600 hover:text-teal-700"
              >
                <Calculator className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Lean Body Mass</h2>
              </Link>
              <p className="text-gray-600 mb-4">
                Calculate your lean muscle mass and track muscle growth.
              </p>
              <Link 
                to="/lean-body-mass-calculator"
                className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200"
              >
                Calculate LBM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BodyComposition;