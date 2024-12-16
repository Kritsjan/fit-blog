import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ObesityCalculatorComponent from '../components/ObesityCalculator';

function ObesityCalculator() {
  useEffect(() => {
    document.title = 'Obesity Calculator: BMI Body Mass Index Calculator';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your BMI and assess obesity risk with our free calculator. Get personalized recommendations based on your body mass index and health status.');
    }
  }, []);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Obesity Calculator: Body Mass Index Calculator
          </h1>
          
          <p className="text-lg text-gray-600">
            Use our comprehensive BMI body mass index calculator to assess your weight status and potential health risks. 
            Whether you need a BMI calculator for men or women, our tool provides accurate calculations and personalized 
            recommendations based on your results.
          </p>
        </div>

        <ObesityCalculatorComponent />

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 prose prose-teal max-w-none">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-8">
            Understanding BMI and Obesity Risk
          </h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">What is BMI?</h3>
              <p className="text-gray-700">
                Body Mass Index (BMI) is a simple measure that uses your height and weight to determine if your weight 
                is healthy. While BMI is not a direct measure of body fat, it provides a useful screening tool for 
                weight categories that may lead to health problems.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">BMI Categories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Standard Categories:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Underweight: Below 18.5</li>
                    <li>Normal weight: 18.5-24.9</li>
                    <li>Overweight: 25-29.9</li>
                    <li>Obesity Class I: 30-34.9</li>
                    <li>Obesity Class II: 35-39.9</li>
                    <li>Obesity Class III: 40 or above</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Health Risk Levels:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Low Risk: Normal BMI</li>
                    <li>Increased Risk: Overweight</li>
                    <li>High Risk: Obesity Class I</li>
                    <li>Very High Risk: Obesity Class II</li>
                    <li>Extremely High Risk: Obesity Class III</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">BMI Limitations</h3>
              <p className="text-gray-700">
                While useful, BMI has some limitations. Consider using additional measurements:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Use our <Link to="/body-fat-calculator" className="text-teal-600 hover:text-teal-700">body fat calculator</Link> for body composition</li>
                <li>Check <Link to="/waist-hip-ratio-calculator" className="text-teal-600 hover:text-teal-700">waist-to-hip ratio</Link> for fat distribution</li>
                <li>Track <Link to="/lean-body-mass-calculator" className="text-teal-600 hover:text-teal-700">lean body mass</Link> for muscle content</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Health Improvement Strategies</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-700">Nutrition</h4>
                  <p className="text-gray-700">
                    Use our <Link to="/macro-calculator" className="text-teal-600 hover:text-teal-700">macro calculator</Link> and 
                    <Link to="/protein-calculator" className="text-teal-600 hover:text-teal-700"> protein calculator</Link> for balanced nutrition.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Exercise</h4>
                  <p className="text-gray-700">
                    Monitor intensity with our <Link to="/max-heart-rate-calculator" className="text-teal-600 hover:text-teal-700">heart rate calculator</Link>.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Weight Management</h4>
                  <p className="text-gray-700">
                    Consider <Link to="/keto-calculator" className="text-teal-600 hover:text-teal-700">keto</Link> or 
                    <Link to="/intermittent-fasting-calculator" className="text-teal-600 hover:text-teal-700"> intermittent fasting</Link> for weight loss.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-700">How often should I check my BMI?</h4>
                  <p className="text-gray-700">
                    Monthly checks alongside other measurements provide the best tracking of progress.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">What if I'm muscular with high BMI?</h4>
                  <p className="text-gray-700">
                    Use our body composition calculators for a more accurate health assessment.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">What's a healthy rate of BMI change?</h4>
                  <p className="text-gray-700">
                    Aim for 0.5-1 BMI point per month for sustainable, healthy changes.
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

export default ObesityCalculator;