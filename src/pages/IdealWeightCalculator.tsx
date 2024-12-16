import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import IdealWeightCalculatorComponent from '../components/IdealWeightCalculator';

function IdealWeightCalculator() {
  useEffect(() => {
    document.title = 'Ideal Weight Calculator: Find Your Healthy Weight Range';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your ideal weight with our free calculator. Get personalized healthy weight ranges based on your height, gender, and frame size for optimal health.');
    }
  }, []);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Ideal Weight Calculator: Find Your Healthy Weight Range
          </h1>
          
          <p className="text-lg text-gray-600">
            Use our comprehensive healthy weight calculator to determine your ideal body weight and optimal 
            weight range. Whether you're looking to find your ideal weight for height or create a body weight 
            planner, our calculator provides personalized recommendations for your goals.
          </p>
        </div>

        <IdealWeightCalculatorComponent />

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 prose prose-teal max-w-none">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-8">
            Understanding Your Ideal Weight: A Complete Guide
          </h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">What is Ideal Body Weight?</h3>
              <p className="text-gray-700">
                The ideal weight calculator helps determine your optimal weight range based on height, gender, age, and frame size. Understanding how to calculate ideal weight is crucial for setting realistic health goals. Our healthy weight calculator uses multiple scientifically validated formulas to provide accurate recommendations.
              </p>
              <p className="text-gray-700 mt-4">
                For a complete body composition assessment, combine our ideal weight for height calculator with our <Link to="/body-fat-calculator" className="text-teal-600 hover:text-teal-700">body fat calculator</Link> and <Link to="/lean-body-mass-calculator" className="text-teal-600 hover:text-teal-700">lean body mass calculator</Link>.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Understanding Weight Range Categories</h3>
              <div className="bg-teal-50 p-4 rounded-lg">
                <h4 className="font-semibold text-teal-800 mb-2">Healthy Weight Ranges by Frame Size:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Small Frame: Lower end of ideal range</li>
                  <li>Medium Frame: Middle of ideal range</li>
                  <li>Large Frame: Upper end of ideal range</li>
                </ul>
                <p className="mt-4 text-gray-700">
                  Use our <Link to="/obesity-calculator" className="text-teal-600 hover:text-teal-700">obesity calculator</Link> alongside the ideal weight calculator to assess your current status.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Factors Affecting Ideal Weight</h3>
              <p className="text-gray-700">
                When using the goal weight calculator, consider these key factors:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700">
                <li>Height and gender differences</li>
                <li>Body frame size variations</li>
                <li>Muscle mass (track with our <Link to="/lean-body-mass-calculator" className="text-teal-600 hover:text-teal-700">lean body mass calculator</Link>)</li>
                <li>Body fat distribution (check with our <Link to="/waist-hip-ratio-calculator" className="text-teal-600 hover:text-teal-700">waist-to-hip ratio calculator</Link>)</li>
                <li>Age-related changes</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Reaching Your Ideal Weight</h3>
              <p className="text-gray-700">
                After using our body weight planner, follow these steps:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Weight Loss Tips:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Calculate macros with our <Link to="/macro-calculator" className="text-teal-600 hover:text-teal-700">macro calculator</Link></li>
                    <li>Track protein needs using our <Link to="/protein-calculator" className="text-teal-600 hover:text-teal-700">protein calculator</Link></li>
                    <li>Consider <Link to="/intermittent-fasting-calculator" className="text-teal-600 hover:text-teal-700">intermittent fasting</Link></li>
                    <li>Monitor heart health during exercise with our <Link to="/max-heart-rate-calculator" className="text-teal-600 hover:text-teal-700">max heart rate calculator</Link></li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Weight Gain Tips:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Increase caloric intake gradually</li>
                    <li>Focus on nutrient-dense foods</li>
                    <li>Incorporate strength training</li>
                    <li>Track progress regularly</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Monitoring Progress</h3>
              <p className="text-gray-700">
                Track your journey to your ideal weight using multiple metrics:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700">
                <li>Regular weigh-ins</li>
                <li>Body measurements</li>
                <li>Progress photos</li>
                <li>Body composition changes</li>
                <li>Energy levels and performance</li>
              </ul>
              <p className="text-gray-700 mt-4">
                For those following specific diets, check our <Link to="/keto-calculator" className="text-teal-600 hover:text-teal-700">keto calculator</Link> for specialized guidance.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-700">How accurate is the ideal weight calculator?</h4>
                  <p className="text-gray-700">
                    Our healthy weight calculator uses multiple validated formulas to provide comprehensive recommendations. For best results, combine with body composition measurements.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">What's the difference between ideal BMI for men and women?</h4>
                  <p className="text-gray-700">
                    While BMI ranges are similar, the ideal weight for height calculator accounts for gender-specific differences in body composition and frame size.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">How often should I check my ideal weight?</h4>
                  <p className="text-gray-700">
                    Use the body weight planner monthly or when significant changes occur in your lifestyle, activity level, or body composition.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">What if I'm outside my ideal weight range?</h4>
                  <p className="text-gray-700">
                    Focus on gradual, sustainable changes. Use our comprehensive suite of calculators to track various health metrics and make informed adjustments to your lifestyle.
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

export default IdealWeightCalculator;