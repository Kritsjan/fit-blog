import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import KetoCalculatorComponent from '../components/KetoCalculator';

function KetoCalculator() {
  useEffect(() => {
    document.title = 'Keto Calculator: Free Keto Macro Calculator for Weight Loss';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your optimal keto macros with our free keto calculator. Get personalized fat, protein, and carb recommendations for ketosis and weight loss success.');
    }
  }, []);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Keto Calculator: Your Free Keto Macro Calculator
          </h1>
          
          <p className="text-lg text-gray-600">
            Welcome to the best free keto calculator! Our keto macro calculator helps you determine 
            the perfect balance of macronutrients for your ketogenic diet success. Whether you're 
            just starting or maintaining your keto lifestyle, this carb calculator for keto will 
            guide you toward your goals.
          </p>
        </div>

        <KetoCalculatorComponent />

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 prose prose-teal max-w-none">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-8">
            Understanding Your Keto Macros: Complete Guide
          </h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">What is the Ketogenic Diet?</h3>
              <p className="text-gray-700">
                The ketogenic diet is a low-carb, high-fat diet that helps your body enter ketosis, 
                a metabolic state where you burn fat for fuel instead of carbohydrates. Our keto macro 
                calculator helps you determine the right balance of fats, proteins, and carbs to achieve 
                and maintain ketosis.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Understanding Keto Macros</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Fat (70-80%)</h4>
                  <p className="text-gray-600 text-sm">Primary energy source in ketosis</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Protein (20-25%)</h4>
                  <p className="text-gray-600 text-sm">Maintain muscle mass</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Net Carbs (5-10%)</h4>
                  <p className="text-gray-600 text-sm">Limit to maintain ketosis</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Tips for Keto Success</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Track your macros daily using our calculator</li>
                <li>Stay hydrated and maintain electrolyte balance</li>
                <li>Focus on healthy fats and quality proteins</li>
                <li>Monitor ketones if possible</li>
                <li>Adjust macros based on your progress</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Common Keto Mistakes to Avoid</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Not tracking net carbs accurately</li>
                <li>Eating too much protein</li>
                <li>Not getting enough electrolytes</li>
                <li>Ignoring fiber intake</li>
                <li>Not adjusting macros as you lose weight</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-700">How often should I recalculate my keto macros?</h4>
                  <p className="text-gray-700">
                    Use our keto calculator every 10-15 pounds of weight loss or if your activity level changes significantly.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">What's the difference between total and net carbs?</h4>
                  <p className="text-gray-700">
                    Net carbs = Total carbs - Fiber - Sugar alcohols. Our keto macro calculator focuses on net carbs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Can I build muscle on keto?</h4>
                  <p className="text-gray-700">
                    Yes! Use our <Link to="/protein-calculator" className="text-teal-600 hover:text-teal-700">protein calculator</Link> alongside 
                    the keto calculator to optimize your protein intake for muscle growth.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default KetoCalculator;