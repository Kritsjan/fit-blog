import React, { useEffect } from 'react';
import { Heart, Calculator, Shield, Brain } from 'lucide-react';

function About() {
  useEffect(() => {
    document.title = 'About MyHealthCalculator.fit - Free Health & Fitness Tools';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about our free health calculators and tools. Discover how we help you track fitness goals, monitor body composition, and maintain heart health.');
    }
  }, []);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            About MyHealthCalculator.fit
          </h1>
          
          <div className="text-lg text-gray-600 space-y-4">
            <p>
              Welcome to myhealthcalculator.fit, your go-to free online health calculator!
            </p>
            <p>
              We provide tools to help you understand your health metrics, make informed decisions, 
              and take action for better health. Our user-friendly platform supports your journey 
              to better health and improved well-being.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Calculator className="w-6 h-6 text-teal-600" />
              <h2 className="text-xl font-bold text-gray-800">Accurate Calculations</h2>
            </div>
            <p className="text-gray-600">
              Our calculators use scientifically validated formulas to provide accurate results for your health metrics.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-teal-600" />
              <h2 className="text-xl font-bold text-gray-800">Privacy First</h2>
            </div>
            <p className="text-gray-600">
              Your health data stays private. We don't store any personal information or share it with third parties.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="w-6 h-6 text-teal-600" />
              <h2 className="text-xl font-bold text-gray-800">Comprehensive Health Tools</h2>
            </div>
            <p className="text-gray-600">
              From body composition to heart health, our suite of calculators covers all aspects of your health journey.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="w-6 h-6 text-teal-600" />
              <h2 className="text-xl font-bold text-gray-800">Educational Resources</h2>
            </div>
            <p className="text-gray-600">
              Each calculator comes with detailed explanations and recommendations to help you understand your results.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment</h2>
          <p className="text-gray-600 mb-6">
            We're committed to providing free, accurate, and user-friendly health calculators to help you make informed decisions about your health and fitness journey.
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="mt-1 w-2 h-2 bg-teal-500 rounded-full"></div>
              <p className="text-gray-600">Regular updates to ensure accuracy and reliability</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-1 w-2 h-2 bg-teal-500 rounded-full"></div>
              <p className="text-gray-600">Evidence-based calculations and recommendations</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-1 w-2 h-2 bg-teal-500 rounded-full"></div>
              <p className="text-gray-600">Continuous improvement based on user feedback</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-1 w-2 h-2 bg-teal-500 rounded-full"></div>
              <p className="text-gray-600">Accessible and easy-to-use interface</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;