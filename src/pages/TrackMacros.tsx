import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Calculator } from 'lucide-react';

function TrackMacros() {
  useEffect(() => {
    document.title = 'Track Macros: Keto, Protein & Macro Calculators';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Free calculators for tracking macros, keto diet, protein intake, and intermittent fasting. Get personalized nutrition recommendations for your fitness goals.');
    }
  }, []);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Track Your Macros: Nutrition Calculators
          </h1>
          
          <p className="text-lg text-gray-600">
            Use our comprehensive suite of macro tracking calculators to optimize your nutrition. 
            Whether you're following a keto diet, counting macros, or tracking protein intake, 
            we have the tools you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Keto Calculator Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <Link 
                to="/keto-calculator" 
                className="flex items-center space-x-2 mb-4 text-teal-600 hover:text-teal-700"
              >
                <Calculator className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Keto Calculator</h2>
              </Link>
              <p className="text-gray-600 mb-4">
                Calculate your optimal keto macros for effective weight loss and ketosis maintenance.
              </p>
              <Link 
                to="/keto-calculator"
                className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200"
              >
                Calculate Keto Macros
              </Link>
            </div>
          </div>

          {/* Intermittent Fasting Calculator Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <Link 
                to="/intermittent-fasting-calculator" 
                className="flex items-center space-x-2 mb-4 text-teal-600 hover:text-teal-700"
              >
                <Activity className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Intermittent Fasting</h2>
              </Link>
              <p className="text-gray-600 mb-4">
                Plan your fasting schedule and calculate optimal eating windows for maximum benefits.
              </p>
              <Link 
                to="/intermittent-fasting-calculator"
                className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200"
              >
                Plan Fasting Schedule
              </Link>
            </div>
          </div>

          {/* Macro Calculator Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <Link 
                to="/macro-calculator" 
                className="flex items-center space-x-2 mb-4 text-teal-600 hover:text-teal-700"
              >
                <Calculator className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Macro Calculator</h2>
              </Link>
              <p className="text-gray-600 mb-4">
                Get personalized macronutrient ratios based on your goals and body type.
              </p>
              <Link 
                to="/macro-calculator"
                className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200"
              >
                Calculate Macros
              </Link>
            </div>
          </div>

          {/* Protein Calculator Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <Link 
                to="/protein-calculator" 
                className="flex items-center space-x-2 mb-4 text-teal-600 hover:text-teal-700"
              >
                <Activity className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Protein Calculator</h2>
              </Link>
              <p className="text-gray-600 mb-4">
                Calculate your optimal daily protein intake for muscle growth or maintenance.
              </p>
              <Link 
                to="/protein-calculator"
                className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200"
              >
                Calculate Protein Needs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TrackMacros;