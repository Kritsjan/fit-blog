import React, { useState } from 'react';
import { Heart, Activity } from 'lucide-react';

interface HeartRateResults {
  maxHeartRate: number;
  zones: {
    warmUp: { min: number; max: number };
    fatBurn: { min: number; max: number };
    cardio: { min: number; max: number };
    peak: { min: number; max: number };
  };
}

const MaxHeartRateCalculator = () => {
  const [age, setAge] = useState('30');
  const [restingHeartRate, setRestingHeartRate] = useState('60');
  const [fitnessLevel, setFitnessLevel] = useState('moderate');
  const [results, setResults] = useState<HeartRateResults | null>(null);

  const calculateHeartRates = (e: React.FormEvent) => {
    e.preventDefault();
    
    const ageNum = parseInt(age);
    const restingHR = parseInt(restingHeartRate);
    
    // Calculate max heart rate using different formulas
    const tanaka = 208 - (0.7 * ageNum); // Tanaka formula
    const gellish = 207 - (0.7 * ageNum); // Gellish formula
    const hunt = 211 - (0.64 * ageNum); // Hunt formula
    
    // Use average of formulas for more accurate prediction
    const maxHR = Math.round((tanaka + gellish + hunt) / 3);
    
    // Calculate heart rate reserve (Karvonen formula)
    const hrReserve = maxHR - restingHR;
    
    // Calculate training zones
    const zones = {
      warmUp: {
        min: Math.round(restingHR + (hrReserve * 0.5)),
        max: Math.round(restingHR + (hrReserve * 0.6))
      },
      fatBurn: {
        min: Math.round(restingHR + (hrReserve * 0.6)),
        max: Math.round(restingHR + (hrReserve * 0.7))
      },
      cardio: {
        min: Math.round(restingHR + (hrReserve * 0.7)),
        max: Math.round(restingHR + (hrReserve * 0.85))
      },
      peak: {
        min: Math.round(restingHR + (hrReserve * 0.85)),
        max: maxHR
      }
    };
    
    setResults({
      maxHeartRate: maxHR,
      zones
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4 flex items-center gap-2">
          <Heart className="w-6 h-6 text-teal-600" />
          Maximum Heart Rate Calculator
        </h2>
        <p className="text-gray-600">
          Use our target heart-rate calculator to determine your maximum heart rate and optimal training zones. 
          This heart range calculator helps you find target heart rate for effective workouts.
        </p>
      </div>

      <form onSubmit={calculateHeartRates} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            required
            min="1"
            max="120"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Resting Heart Rate (bpm)</label>
          <input
            type="number"
            value={restingHeartRate}
            onChange={(e) => setRestingHeartRate(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            required
            min="40"
            max="120"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Fitness Level</label>
          <select
            value={fitnessLevel}
            onChange={(e) => setFitnessLevel(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          >
            <option value="beginner">Beginner</option>
            <option value="moderate">Moderate</option>
            <option value="advanced">Advanced</option>
            <option value="athlete">Athlete</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-4 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 font-semibold"
          >
            Calculate Heart Rate Zones
          </button>
        </div>
      </form>

      {results && (
        <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4">
            Your Heart Rate Training Zones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
              <div className="mb-4">
                <p className="text-sm text-gray-600">Maximum Heart Rate</p>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  {results.maxHeartRate} BPM
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
              <p className="text-sm text-gray-600 mb-2">Training Zones (BPM):</p>
              <ul className="space-y-2">
                <li className="text-gray-700">
                  Warm Up: {results.zones.warmUp.min}-{results.zones.warmUp.max}
                </li>
                <li className="text-gray-700">
                  Fat Burn: {results.zones.fatBurn.min}-{results.zones.fatBurn.max}
                </li>
                <li className="text-gray-700">
                  Cardio: {results.zones.cardio.min}-{results.zones.cardio.max}
                </li>
                <li className="text-gray-700">
                  Peak: {results.zones.peak.min}-{results.zones.peak.max}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MaxHeartRateCalculator;