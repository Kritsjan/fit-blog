import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MacroCalculatorComponent from '../components/MacroCalculator';

function MacroCalculator() {
  useEffect(() => {
    document.title = 'Macro Calculator: Daily Calorie & Macronutrient Calculator';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your ideal daily macros with our free calculator. Get personalized protein, carb, and fat recommendations for weight loss, muscle gain, or maintenance.');
    }
  }, []);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Macro Calculator: Your Complete Daily Macronutrient Guide
          </h1>
          
          <p className="text-lg text-gray-600">
            Use our comprehensive macronutrient ratio calculator to determine your ideal daily macros. 
            Whether you're using our macro calculator for weight loss or muscle gain, get personalized 
            recommendations based on your body type and goals.
          </p>
        </div>

        <MacroCalculatorComponent />

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 prose prose-teal max-w-none">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-8">
            Understanding Macros: Your Complete Guide to Macronutrient Calculation
          </h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">What Are Macronutrients?</h3>
              <p className="text-gray-700">
                Our macro calculator helps you understand and optimize the three essential macronutrients: proteins, carbohydrates, and fats. Using a daily calorie calculator alongside macro tracking is crucial for achieving your fitness goals. Whether you're looking to build muscle, lose weight, or maintain your current physique, understanding your macronutrient ratio is key to success.
              </p>
              <p className="text-gray-700 mt-4">
                For those following specific diets, we also offer specialized tools like our <Link to="/keto-calculator" className="text-teal-600 hover:text-teal-700">keto calculator</Link> for low-carb lifestyles and our <Link to="/protein-calculator" className="text-teal-600 hover:text-teal-700">protein calculator</Link> for precise protein intake calculations.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">How to Calculate Your Daily Macros</h3>
              <p className="text-gray-700">
                Our macronutrient ratio calculator takes multiple factors into account to provide accurate recommendations. When using the macro calculator for weight loss or muscle gain, consider these key elements:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700">
                <li>Total daily calorie needs based on activity level</li>
                <li>Individual body composition (use our <Link to="/body-fat-calculator" className="text-teal-600 hover:text-teal-700">body fat calculator</Link> for accuracy)</li>
                <li>Specific fitness goals and training intensity</li>
                <li>Current weight and target weight</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Optimizing Your Macro Ratios</h3>
              <p className="text-gray-700">
                The daily calorie needs calculator provides different macro ratios based on your goals:
              </p>
              <div className="bg-teal-50 p-4 rounded-lg mt-4">
                <h4 className="font-semibold text-teal-800 mb-2">Weight Loss Macros:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Protein: 30-35% (track with our <Link to="/protein-calculator" className="text-teal-600 hover:text-teal-700">protein calculator</Link>)</li>
                  <li>Carbohydrates: 25-30%</li>
                  <li>Fats: 35-40%</li>
                </ul>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg mt-4">
                <h4 className="font-semibold text-teal-800 mb-2">Muscle Gain Macros:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Protein: 25-30%</li>
                  <li>Carbohydrates: 45-50%</li>
                  <li>Fats: 20-25%</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Tracking Progress with Macro Calculations</h3>
              <p className="text-gray-700">
                Using our carbohydrate calculator alongside body composition measurements provides the most accurate progress tracking. Consider combining macro tracking with our <Link to="/waist-hip-ratio-calculator" className="text-teal-600 hover:text-teal-700">waist-to-hip ratio calculator</Link> and <Link to="/lean-body-mass-calculator" className="text-teal-600 hover:text-teal-700">lean body mass calculator</Link> for comprehensive progress monitoring.
              </p>
              <p className="text-gray-700 mt-4">
                For those interested in intermittent fasting, our <Link to="/intermittent-fasting-calculator" className="text-teal-600 hover:text-teal-700">intermittent fasting calculator</Link> can help optimize meal timing while maintaining proper macro ratios.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Common Macro Calculation Mistakes to Avoid</h3>
              <p className="text-gray-700">
                When using a fat intake calculator or macro tracking tool, avoid these common pitfalls:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700">
                <li>Ignoring total calorie intake while focusing only on macro ratios</li>
                <li>Not adjusting macros based on activity level and exercise intensity</li>
                <li>Failing to account for body composition changes (use our <Link to="/obesity-calculator" className="text-teal-600 hover:text-teal-700">obesity calculator</Link> for BMI tracking)</li>
                <li>Overlooking the importance of meal timing and distribution</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Frequently Asked Questions About Macro Calculation</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-700">How often should I recalculate my macros?</h4>
                  <p className="text-gray-700">
                    Use our macronutrient ratio calculator every 4-6 weeks or when your weight changes by more than 5 pounds. Regular updates ensure optimal progress toward your goals.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Should I adjust macros on training days?</h4>
                  <p className="text-gray-700">
                    Yes, many people benefit from carbohydrate cycling based on training intensity. Use our <Link to="/max-heart-rate-calculator" className="text-teal-600 hover:text-teal-700">max heart rate calculator</Link> to optimize workout intensity and adjust macros accordingly.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">How do I track macros for weight loss?</h4>
                  <p className="text-gray-700">
                    Combine our macro calculator for weight loss with regular body composition measurements. Track progress using our <Link to="/ideal-weight-calculator" className="text-teal-600 hover:text-teal-700">ideal weight calculator</Link> for comprehensive monitoring.
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

export default MacroCalculator;