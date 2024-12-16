import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WaistHipRatioCalculatorComponent from '../components/WaistHipRatioCalculator';

function WaistHipRatioCalculator() {
  useEffect(() => {
    document.title = 'Waist-to-Hip Ratio Calculator: Measure Body Shape Risk';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your waist-to-hip ratio with our free WHR calculator. Assess your body shape, fat distribution pattern, and potential health risks with accurate measurements.');
    }
  }, []);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Waist-to-Hip Ratio Calculator: Measure Your Body Shape Risk
          </h1>
          
          <p className="text-lg text-gray-600">
            Use our comprehensive hip waist calculator to determine your body shape and potential health risks. 
            Whether you need to calculate hip to waist ratio or check your measurements against the waist and 
            hip ratio chart, our WHR calculator provides accurate results.
          </p>
        </div>

        <WaistHipRatioCalculatorComponent />

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 prose prose-teal max-w-none">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-8">
            Understanding Your Waist-to-Hip Ratio: Complete Guide
          </h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">What is Waist-to-Hip Ratio?</h3>
              <p className="text-gray-700">
                The waist ratio calculator is a valuable tool for assessing body fat distribution and health risks. Using the hip to waist ratio formula, our calculator helps determine whether you carry more weight around your middle (apple shape) or your hips (pear shape). Understanding how to calculate hip to waist ratio is crucial for evaluating your overall health status.
              </p>
              <p className="text-gray-700 mt-4">
                For a complete body composition assessment, combine our waist and hip ratio calculator with our <Link to="/body-fat-calculator" className="text-teal-600 hover:text-teal-700">body fat calculator</Link> and <Link to="/lean-body-mass-calculator" className="text-teal-600 hover:text-teal-700">lean body mass calculator</Link>.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">How to Measure Correctly</h3>
              <p className="text-gray-700">
                To get accurate results from the hip waist calculator, follow these measurement guidelines:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700">
                <li>Measure waist at the narrowest point</li>
                <li>Measure hips at the widest point around buttocks</li>
                <li>Keep measuring tape parallel to the floor</li>
                <li>Stand straight with relaxed breathing</li>
                <li>Take measurements in the morning</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Use these measurements alongside our <Link to="/obesity-calculator" className="text-teal-600 hover:text-teal-700">obesity calculator</Link> for comprehensive health assessment.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Understanding WHR Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Women's WHR Chart:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Below 0.80: Low Risk (Ideal)</li>
                    <li>0.81-0.85: Moderate Risk</li>
                    <li>Above 0.85: High Risk</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Men's WHR Chart:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Below 0.90: Low Risk (Ideal)</li>
                    <li>0.91-0.95: Moderate Risk</li>
                    <li>Above 0.95: High Risk</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Health Implications of WHR</h3>
              <p className="text-gray-700">
                The weight to hip ratio calculator helps assess various health risks:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700">
                <li>Cardiovascular disease risk</li>
                <li>Type 2 diabetes risk</li>
                <li>Metabolic complications</li>
                <li>Overall mortality risk</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Monitor your progress with our <Link to="/ideal-weight-calculator" className="text-teal-600 hover:text-teal-700">ideal weight calculator</Link> and <Link to="/macro-calculator" className="text-teal-600 hover:text-teal-700">macro calculator</Link> for optimal results.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Improving Your WHR</h3>
              <p className="text-gray-700">
                After using the waist and hip ratio calculator, consider these strategies:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Diet Strategies:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Calculate macros with our <Link to="/macro-calculator" className="text-teal-600 hover:text-teal-700">macro calculator</Link></li>
                    <li>Track protein needs using our <Link to="/protein-calculator" className="text-teal-600 hover:text-teal-700">protein calculator</Link></li>
                    <li>Consider <Link to="/keto-calculator" className="text-teal-600 hover:text-teal-700">keto diet</Link> for fat loss</li>
                    <li>Try <Link to="/intermittent-fasting-calculator" className="text-teal-600 hover:text-teal-700">intermittent fasting</Link></li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Exercise Strategies:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Regular cardiovascular exercise</li>
                    <li>Strength training</li>
                    <li>Core-focused workouts</li>
                    <li>Monitor intensity with our <Link to="/max-heart-rate-calculator" className="text-teal-600 hover:text-teal-700">heart rate calculator</Link></li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-700">How often should I measure my WHR?</h4>
                  <p className="text-gray-700">
                    Use the hip waist calculator monthly to track changes. Significant weight loss or gain warrants more frequent measurements.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Is WHR better than BMI?</h4>
                  <p className="text-gray-700">
                    The waist ratio calculator often provides better insight into health risks than BMI alone. Use both measurements alongside our <Link to="/body-fat-calculator" className="text-teal-600 hover:text-teal-700">body fat calculator</Link> for comprehensive assessment.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">What affects waist-to-hip ratio?</h4>
                  <p className="text-gray-700">
                    Diet, exercise, genetics, and age all influence your weight to hip ratio. Regular monitoring with our hip to waist calculator helps track changes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Can I improve my WHR?</h4>
                  <p className="text-gray-700">
                    Yes! Combine proper nutrition (track with our calculators) and targeted exercise to improve your waist and hip ratio measurements over time.
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

export default WaistHipRatioCalculator;