import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity } from 'lucide-react';

function HeartHealth() {
  useEffect(() => {
    document.title = 'Heart Health Calculators: Max Heart Rate & Training Zones';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Free heart health calculators for determining maximum heart rate and optimal training zones. Get personalized cardio recommendations.');
    }
  }, []);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Heart Health Calculators
          </h1>
          
          <p className="text-lg text-gray-600">
            Use our heart health calculators to optimize your cardio training and monitor your heart health. 
            Get personalized recommendations for different training intensities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Max Heart Rate Calculator Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <Link 
                to="/max-heart-rate-calculator" 
                className="flex items-center space-x-2 mb-4 text-teal-600 hover:text-teal-700"
              >
                <Heart className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Max Heart Rate Calculator</h2>
              </Link>
              <p className="text-gray-600 mb-4">
                Calculate your maximum heart rate and determine optimal training zones for different workout intensities.
              </p>
              <Link 
                to="/max-heart-rate-calculator"
                className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200"
              >
                Calculate Heart Rate Zones
              </Link>
            </div>
          </div>

          {/* Training Zone Guide Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4 text-teal-600">
                <Activity className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Training Zone Guide</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700">Zone 1: Warm Up (50-60%)</h3>
                  <p className="text-gray-600 text-sm">Perfect for warm-up and recovery</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Zone 2: Fat Burn (60-70%)</h3>
                  <p className="text-gray-600 text-sm">Ideal for endurance and fat burning</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Zone 3: Cardio (70-85%)</h3>
                  <p className="text-gray-600 text-sm">Improves cardiovascular fitness</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Zone 4: Peak (85-95%)</h3>
                  <p className="text-gray-600 text-sm">High-intensity interval training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeartHealth;