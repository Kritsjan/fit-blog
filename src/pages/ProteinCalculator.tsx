import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProteinCalculatorComponent from '../components/ProteinCalculator';

function ProteinCalculator() {
  useEffect(() => {
    document.title = 'Protein Calculator: Daily Protein Intake Calculator';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your optimal daily protein intake with our free calculator. Get personalized protein recommendations for muscle building, weight loss, or maintenance goals.');
    }
  }, []);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Protein Intake Calculator: How Much Protein Do I Need?
          </h1>
          
          <p className="text-lg text-gray-600">
            Use our comprehensive protein calculator to determine how many grams of protein you need a day. 
            Whether you're using our protein calculator for weight loss or muscle gain, get personalized 
            recommendations based on your goals and activity level.
          </p>
        </div>

        <ProteinCalculatorComponent />

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 prose prose-teal max-w-none">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-8">
            Complete Guide: How to Calculate Your Daily Protein Needs
          </h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Understanding Protein Requirements</h3>
              <p className="text-gray-700">
                Learning how to calculate protein intake is essential for achieving your fitness goals. Our protein calculator helps determine how many grams of protein you need per day based on your specific needs. Whether you're wondering how much protein to build muscle or how to calculate protein intake for weight loss, accurate protein calculations are crucial.
              </p>
              <p className="text-gray-700 mt-4">
                For comprehensive body composition tracking, combine our protein intake calculator with our <Link to="/body-fat-calculator" className="text-teal-600 hover:text-teal-700">body fat calculator</Link> and <Link to="/lean-body-mass-calculator" className="text-teal-600 hover:text-teal-700">lean body mass calculator</Link>.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Daily Protein Requirements by Goal</h3>
              <div className="bg-teal-50 p-4 rounded-lg">
                <h4 className="font-semibold text-teal-800 mb-2">Muscle Building:</h4>
                <p className="text-gray-700">
                  When using the protein calculator for muscle gain, aim for 1.6-2.2g of protein per kg of body weight. Track your progress with our <Link to="/lean-body-mass-calculator" className="text-teal-600 hover:text-teal-700">lean body mass calculator</Link>.
                </p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg mt-4">
                <h4 className="font-semibold text-teal-800 mb-2">Weight Loss:</h4>
                <p className="text-gray-700">
                  The protein calculator for weight loss suggests higher intake (2.0-2.4g/kg) to preserve muscle. Combine with our <Link to="/macro-calculator" className="text-teal-600 hover:text-teal-700">macro calculator</Link> for optimal results.
                </p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg mt-4">
                <h4 className="font-semibold text-teal-800 mb-2">Maintenance:</h4>
                <p className="text-gray-700">
                  For maintaining current muscle mass, calculate protein needs at 1.4-1.6g/kg. Use our <Link to="/ideal-weight-calculator" className="text-teal-600 hover:text-teal-700">ideal weight calculator</Link> to set appropriate targets.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Optimizing Protein Timing</h3>
              <p className="text-gray-700">
                When calculating how much protein you need a day, consider these timing strategies:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700">
                <li>Pre-workout: 20-30g protein (2-3 hours before)</li>
                <li>Post-workout: 20-40g protein (within 2 hours)</li>
                <li>Between meals: Space protein intake 3-4 hours apart</li>
                <li>Before bed: 30-40g slow-digesting protein</li>
              </ul>
              <p className="text-gray-700 mt-4">
                For those following specific diets, check our <Link to="/keto-calculator" className="text-teal-600 hover:text-teal-700">keto calculator</Link> or <Link to="/intermittent-fasting-calculator" className="text-teal-600 hover:text-teal-700">intermittent fasting calculator</Link> for timing adjustments.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Quality Protein Sources</h3>
              <p className="text-gray-700">
                After using our protein intake calculator, focus on these protein sources:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Animal Sources:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Chicken breast (31g per 100g)</li>
                    <li>Lean beef (26g per 100g)</li>
                    <li>Fish (20-25g per 100g)</li>
                    <li>Egg whites (11g per 100g)</li>
                    <li>Greek yogurt (10g per 100g)</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Plant Sources:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Tempeh (19g per 100g)</li>
                    <li>Lentils (9g per 100g)</li>
                    <li>Quinoa (4.4g per 100g)</li>
                    <li>Chickpeas (15g per 100g)</li>
                    <li>Hemp seeds (31g per 100g)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Monitoring Progress</h3>
              <p className="text-gray-700">
                Track your results using multiple metrics:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700">
                <li>Body composition changes (use our <Link to="/body-fat-calculator" className="text-teal-600 hover:text-teal-700">body fat calculator</Link>)</li>
                <li>Strength improvements</li>
                <li>Recovery time between workouts</li>
                <li>Energy levels and performance</li>
                <li>Body measurements (track with our <Link to="/waist-hip-ratio-calculator" className="text-teal-600 hover:text-teal-700">waist-to-hip ratio calculator</Link>)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-700">How accurate is the protein calculator?</h4>
                  <p className="text-gray-700">
                    Our calculator uses scientifically validated formulas to determine how much protein you need per day. For best results, combine with our <Link to="/macro-calculator" className="text-teal-600 hover:text-teal-700">macro calculator</Link>.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Can I build muscle with plant-based protein?</h4>
                  <p className="text-gray-700">
                    Yes! The protein calculator for muscle gain works for both animal and plant proteins. Focus on complete protein sources and consider slightly higher intake to account for lower digestibility.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Should I adjust protein during weight loss?</h4>
                  <p className="text-gray-700">
                    Yes, maintaining high protein intake while cutting calories helps preserve muscle mass. Use our <Link to="/obesity-calculator" className="text-teal-600 hover:text-teal-700">obesity calculator</Link> alongside protein calculations for optimal results.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Do I need protein supplements?</h4>
                  <p className="text-gray-700">
                    While whole foods are preferred, supplements can help meet your daily protein needs when calculated using our protein intake calculator. Focus on quality sources first.
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

export default ProteinCalculator;