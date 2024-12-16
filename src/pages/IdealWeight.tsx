import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Scale } from 'lucide-react';

function IdealWeight() {
  useEffect(() => {
    document.title = 'Ideal Weight Calculator: Find Your Healthy Weight Range';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your ideal weight range with our free calculator. Get personalized recommendations based on your height, frame size, and body composition.');
    }
  }, []);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Find Your Ideal Weight
          </h1>
          
          <p className="text-lg text-gray-600">
            Use our ideal weight calculator to determine your healthy weight range based on your height, 
            gender, and frame size. Get personalized recommendations for achieving your optimal weight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Ideal Weight Calculator Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <Link 
                to="/ideal-weight-calculator" 
                className="flex items-center space-x-2 mb-4 text-teal-600 hover:text-teal-700"
              >
                <Target className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Ideal Weight Calculator</h2>
              </Link>
              <p className="text-gray-600 mb-4">
                Calculate your ideal weight range based on scientific formulas and your body type.
              </p>
              <Link 
                to="/ideal-weight-calculator"
                className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200"
              >
                Calculate Ideal Weight
              </Link>
            </div>
          </div>

          {/* Weight Range Guide Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4 text-teal-600">
                <Scale className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Weight Range Guide</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700">Small Frame</h3>
                  <p className="text-gray-600 text-sm">Lower end of the healthy weight range</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Medium Frame</h3>
                  <p className="text-gray-600 text-sm">Middle of the healthy weight range</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Large Frame</h3>
                  <p className="text-gray-600 text-sm">Upper end of the healthy weight range</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Additional Factors</h3>
                  <p className="text-gray-600 text-sm">Age, muscle mass, and activity level</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default IdealWeight;