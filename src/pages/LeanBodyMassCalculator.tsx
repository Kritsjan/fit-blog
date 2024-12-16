import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeanBodyMassCalculatorComponent from '../components/LeanBodyMassCalculator';

function LeanBodyMassCalculator() {
  useEffect(() => {
    document.title = 'Lean Body Mass Calculator: Calculate Lean Muscle Mass';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your lean body mass with our free calculator. Get accurate measurements of muscle mass, lean tissue, and body composition for fitness tracking.');
    }
  }, []);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Lean Body Mass Calculator: Track Your Muscle Mass
          </h1>
          
          <p className="text-lg text-gray-600">
            Use our comprehensive lean mass calculator to determine your lean body weight and track your fitness progress. 
            Whether you need to calculate lean muscle mass or estimate lean body mass, our calculator provides accurate 
            results using multiple scientific formulas.
          </p>
        </div>

        <LeanBodyMassCalculatorComponent />

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 prose prose-teal max-w-none">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-8">
            Understanding Lean Body Mass: Complete Guide
          </h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">What is Lean Body Mass?</h3>
              <p className="text-gray-700">
                Lean body mass (LBM) is everything in your body except fat tissue, including muscles, bones, organs, 
                and water. Our lean mass calculator helps you track this important metric for better fitness results.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Why Track Lean Body Mass?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Fitness Goals:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Track muscle growth</li>
                    <li>Monitor training progress</li>
                    <li>Adjust workout intensity</li>
                    <li>Optimize nutrition plans</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Health Benefits:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Better metabolic health</li>
                    <li>Increased strength</li>
                    <li>Improved body composition</li>
                    <li>Enhanced athletic performance</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Optimizing Lean Mass Growth</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-700">Nutrition</h4>
                  <p className="text-gray-700">
                    Calculate your needs using our <Link to="/protein-calculator" className="text-teal-600 hover:text-teal-700">protein calculator</Link> and 
                    <Link to="/macro-calculator" className="text-teal-600 hover:text-teal-700"> macro calculator</Link> for optimal muscle growth.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Training</h4>
                  <p className="text-gray-700">
                    Focus on progressive overload and compound exercises. Monitor heart rate during cardio using our 
                    <Link to="/max-heart-rate-calculator" className="text-teal-600 hover:text-teal-700"> heart rate calculator</Link>.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Recovery</h4>
                  <p className="text-gray-700">
                    Ensure adequate rest and consider <Link to="/intermittent-fasting-calculator" className="text-teal-600 hover:text-teal-700">intermittent fasting</Link> for 
                    enhanced recovery and growth hormone production.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Tracking Progress</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Measure LBM monthly</li>
                <li>Track strength gains</li>
                <li>Monitor body measurements</li>
                <li>Take progress photos</li>
                <li>Keep a workout log</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-700">How fast can I build lean mass?</h4>
                  <p className="text-gray-700">
                    Natural muscle gain typically ranges from 0.25-0.5% of body weight per week under optimal conditions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Will cardio reduce lean mass?</h4>
                  <p className="text-gray-700">
                    Not if you maintain adequate protein intake and don't overdo it. Use our calculators to find the right balance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">How accurate is the calculator?</h4>
                  <p className="text-gray-700">
                    Our calculator uses multiple validated formulas for enhanced accuracy. Combine with our 
                    <Link to="/body-fat-calculator" className="text-teal-600 hover:text-teal-700"> body fat calculator</Link> for best results.
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

export default LeanBodyMassCalculator;