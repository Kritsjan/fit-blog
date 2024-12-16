import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FastingCalculatorComponent from '../components/FastingCalculator';

function IntermittentFasting() {
  useEffect(() => {
    document.title = 'Intermittent Fasting Calculator: Plan Your Fasting Schedule';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Plan your intermittent fasting schedule with our free calculator. Calculate fasting windows, eating periods, and potential weight loss for optimal fasting results.');
    }
  }, []);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Intermittent Fasting Calculator: Plan Your Schedule
          </h1>
          
          <p className="text-lg text-gray-600">
            Use our free intermittent fasting calculator to determine your optimal fasting windows and track potential 
            weight loss. Whether you're new to intermittent fasting or looking to optimize your schedule, our 
            calculator provides personalized recommendations.
          </p>
        </div>

        <FastingCalculatorComponent />

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 prose prose-teal max-w-none">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-8">
            Complete Guide to Intermittent Fasting
          </h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Understanding Intermittent Fasting</h3>
              <p className="text-gray-700">
                Intermittent fasting is an eating pattern that cycles between periods of fasting and eating. 
                Our fasting calculator helps you determine the best schedule based on your lifestyle and goals.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Popular Fasting Methods</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">16/8 Method</h4>
                  <p className="text-gray-600 text-sm">16 hours fasting, 8 hours eating</p>
                  <p className="text-gray-600 text-sm">Most popular and sustainable</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">18/6 Method</h4>
                  <p className="text-gray-600 text-sm">18 hours fasting, 6 hours eating</p>
                  <p className="text-gray-600 text-sm">Enhanced fat burning</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">20/4 Method</h4>
                  <p className="text-gray-600 text-sm">20 hours fasting, 4 hours eating</p>
                  <p className="text-gray-600 text-sm">Advanced practitioners</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">14/10 Method</h4>
                  <p className="text-gray-600 text-sm">14 hours fasting, 10 hours eating</p>
                  <p className="text-gray-600 text-sm">Beginner-friendly approach</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Benefits of Intermittent Fasting</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Weight loss and fat burning</li>
                <li>Improved insulin sensitivity</li>
                <li>Cellular repair processes</li>
                <li>Potential longevity benefits</li>
                <li>Simplified daily schedule</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Tips for Successful Fasting</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-700">Stay Hydrated</h4>
                  <p className="text-gray-700">
                    Drink plenty of water, black coffee, or tea during fasting periods.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Start Gradually</h4>
                  <p className="text-gray-700">
                    Begin with shorter fasting periods and gradually increase duration.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Plan Meals</h4>
                  <p className="text-gray-700">
                    Use our <Link to="/macro-calculator" className="text-teal-600 hover:text-teal-700">macro calculator</Link> to 
                    plan nutritious meals during eating windows.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Track Progress</h4>
                  <p className="text-gray-700">
                    Monitor results with our <Link to="/body-fat-calculator" className="text-teal-600 hover:text-teal-700">body fat calculator</Link> and 
                    other tracking tools.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-700">Can I exercise while fasting?</h4>
                  <p className="text-gray-700">
                    Yes, but monitor intensity. Use our <Link to="/max-heart-rate-calculator" className="text-teal-600 hover:text-teal-700">heart rate calculator</Link> to 
                    optimize workout timing.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Will I lose muscle mass?</h4>
                  <p className="text-gray-700">
                    Not if you maintain adequate protein intake. Track with our <Link to="/protein-calculator" className="text-teal-600 hover:text-teal-700">protein calculator</Link>.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Can I combine IF with keto?</h4>
                  <p className="text-gray-700">
                    Yes! Use our <Link to="/keto-calculator" className="text-teal-600 hover:text-teal-700">keto calculator</Link> alongside 
                    fasting for enhanced results.
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

export default IntermittentFasting;