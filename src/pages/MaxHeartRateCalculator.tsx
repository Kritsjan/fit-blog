import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MaxHeartRateCalculatorComponent from '../components/MaxHeartRateCalculator';

function MaxHeartRateCalculator() {
  useEffect(() => {
    document.title = 'Max Heart Rate Calculator: Find Your Target Heart Rate Zones';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your maximum heart rate and optimal training zones with our free calculator. Get personalized heart rate recommendations for different exercise intensities.');
    }
  }, []);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Max Heart Rate Calculator: Find Your Training Zones
          </h1>
          
          <p className="text-lg text-gray-600">
            Use our target heart-rate calculator to determine your optimal training zones. Whether you need to 
            calculate max heart rate, find target heart rate, or figure target heart rate for different workouts, 
            our heart range calculator provides personalized recommendations.
          </p>
        </div>

        <MaxHeartRateCalculatorComponent />

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 prose prose-teal max-w-none">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-8">
            Understanding Heart Rate Training Zones
          </h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">What is Maximum Heart Rate?</h3>
              <p className="text-gray-700">
                Maximum heart rate (MHR) is the highest number of times your heart can beat in one minute during 
                maximum physical exertion. Our heart rate calculator uses multiple validated formulas to provide 
                accurate estimates based on your age and fitness level.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Training Zone Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Zone 1: Warm Up (50-60% MHR)</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Recovery and warm-up</li>
                    <li>Very light intensity</li>
                    <li>Improves basic endurance</li>
                    <li>Enhances recovery</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Zone 2: Fat Burn (60-70% MHR)</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Light aerobic exercise</li>
                    <li>Optimal fat burning</li>
                    <li>Builds endurance</li>
                    <li>Sustainable pace</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Zone 3: Cardio (70-85% MHR)</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Moderate to hard intensity</li>
                    <li>Improves aerobic fitness</li>
                    <li>Increases stamina</li>
                    <li>Builds power</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Zone 4: Peak (85-95% MHR)</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>High-intensity training</li>
                    <li>Increases speed</li>
                    <li>Improves anaerobic threshold</li>
                    <li>Short duration intervals</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Benefits of Heart Rate Training</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Optimizes workout intensity</li>
                <li>Prevents overtraining</li>
                <li>Improves cardiovascular fitness</li>
                <li>Enhances fat burning</li>
                <li>Tracks fitness progress</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Training Tips by Goal</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-700">Fat Loss</h4>
                  <p className="text-gray-700">
                    Focus on Zone 2 with intervals in Zone 3. Use our <Link to="/body-fat-calculator" className="text-teal-600 hover:text-teal-700">body fat calculator</Link> to 
                    track progress.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Endurance</h4>
                  <p className="text-gray-700">
                    Spend most time in Zones 2-3. Monitor nutrition with our <Link to="/macro-calculator" className="text-teal-600 hover:text-teal-700">macro calculator</Link>.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Performance</h4>
                  <p className="text-gray-700">
                    Include all zones with focus on Zone 3-4 intervals. Track protein needs with our <Link to="/protein-calculator" className="text-teal-600 hover:text-teal-700">protein calculator</Link>.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-700">How accurate is the max heart rate calculation?</h4>
                  <p className="text-gray-700">
                    Our calculator uses multiple formulas and considers fitness level for enhanced accuracy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">Should I always train in the fat-burning zone?</h4>
                  <p className="text-gray-700">
                    Mix different zones for optimal results. Higher intensities burn more total calories.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">How often should I update my zones?</h4>
                  <p className="text-gray-700">
                    Recalculate every 8-12 weeks or when fitness level changes significantly.
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

export default MaxHeartRateCalculator;