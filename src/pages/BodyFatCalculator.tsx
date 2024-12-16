import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BodyFatCalculatorComponent from '../components/BodyFatCalculator';

function BodyFatCalculator() {
  useEffect(() => {
    document.title = 'Body Fat Calculator: Calculate Your Body Fat Percentage';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your body fat percentage with our free calculator. Get accurate body composition measurements and personalized recommendations for your fitness goals.');
    }
  }, []);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Body Fat Calculator: Measure Your Body Composition
          </h1>
          
          <p className="text-lg text-gray-600">
            Use our accurate body fat percentage calculator to estimate your body composition. Whether you want to 
            calculate your body fat percentage, track weight loss percentage, or determine your body fat index, 
            our body composition calculator provides reliable results.
          </p>
        </div>

        <BodyFatCalculatorComponent />

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 prose prose-teal max-w-none">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-8">
            Understanding Body Fat Percentage: Complete Guide
          </h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">What is Body Fat Percentage?</h3>
              <p className="text-gray-700">
                Body fat percentage represents the proportion of fat tissue in your body compared to your total body weight. 
                Our body fat calculator uses the U.S. Navy Method to provide accurate estimates of your body composition.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Body Fat Categories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Women's Categories:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Essential Fat: 10-13%</li>
                    <li>Athletes: 14-20%</li>
                    <li>Fitness: 21-24%</li>
                    <li>Average: 25-31%</li>
                    <li>Obese: 32%+</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Men's Categories:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Essential Fat: 2-5%</li>
                    <li>Athletes: 6-13%</li>
                    <li>Fitness: 14-17%</li>
                    <li>Average: 18-24%</li>
                    <li>Obese: 25%+</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">How to Take Accurate Measurements</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Measure first thing in the morning</li>
                <li>Use a flexible measuring tape</li>
                <li>Keep the tape parallel to the floor</li>
                <li>Don't pull the tape too tight</li>
                <li>Take multiple measurements for accuracy</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Tips for Reducing Body Fat</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-700">Nutrition</h4>
                  <p className="text-gray-700">
                    Use our <Link to="/macro-calculator" className="text-teal-600 hover:text-teal-700">macro calculator</Link> to 
                    plan your diet and our <Link to="/protein-calculator" className="text-teal-600 hover:text-teal-700">protein calculator</Link> to 
                    maintain muscle mass while losing fat.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Exercise</h4>
                  <p className="text-gray-700">
                    Combine strength training with cardio. Monitor intensity using our <Link to="/max-heart-rate-calculator" className="text-teal-600 hover:text-teal-700">heart rate calculator</Link>.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Lifestyle</h4>
                  <p className="text-gray-700">
                    Consider <Link to="/intermittent-fasting-calculator" className="text-teal-600 hover:text-teal-700">intermittent fasting</Link> or 
                    a <Link to="/keto-calculator" className="text-teal-600 hover:text-teal-700">ketogenic diet</Link> for enhanced fat loss.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-700">How accurate is the body fat calculator?</h4>
                  <p className="text-gray-700">
                    The Navy Method is accurate within 3-4% of hydrostatic weighing when measurements are taken correctly.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">How often should I measure?</h4>
                  <p className="text-gray-700">
                    Measure every 2-4 weeks to track progress. Use our <Link to="/waist-hip-ratio-calculator" className="text-teal-600 hover:text-teal-700">waist-to-hip ratio calculator</Link> for additional tracking.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">What's a healthy rate of fat loss?</h4>
                  <p className="text-gray-700">
                    Aim for 0.5-1% of body weight per week for sustainable fat loss while preserving muscle mass.
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

export default BodyFatCalculator;