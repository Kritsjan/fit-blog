import React, { useState } from 'react';
import { Calculator, Scale } from 'lucide-react';

interface BodyFatResults {
  bodyFatPercentage: number;
  fatMass: number;
  leanMass: number;
  category: string;
  recommendation: string;
}

const BodyFatCalculator = () => {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [gender, setGender] = useState('female');
  const [age, setAge] = useState('30');
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('170');
  const [neck, setNeck] = useState('35');
  const [waist, setWaist] = useState('80');
  const [hip, setHip] = useState('90');
  const [results, setResults] = useState<BodyFatResults | null>(null);

  const handleUnitSystemChange = (system: 'metric' | 'imperial') => {
    if (system === unitSystem) return;
    
    setUnitSystem(system);
    if (system === 'imperial') {
      setWeight((parseFloat(weight) * 2.20462).toFixed(1));
      setHeight((parseFloat(height) * 0.393701).toFixed(1));
      setNeck((parseFloat(neck) * 0.393701).toFixed(1));
      setWaist((parseFloat(waist) * 0.393701).toFixed(1));
      setHip((parseFloat(hip) * 0.393701).toFixed(1));
    } else {
      setWeight((parseFloat(weight) / 2.20462).toFixed(1));
      setHeight((parseFloat(height) / 0.393701).toFixed(1));
      setNeck((parseFloat(neck) / 0.393701).toFixed(1));
      setWaist((parseFloat(waist) / 0.393701).toFixed(1));
      setHip((parseFloat(hip) / 0.393701).toFixed(1));
    }
  };

  const calculateBodyFat = (e: React.FormEvent) => {
    e.preventDefault();
    
    let bodyFatPercentage: number;
    
    // Convert all measurements to centimeters for calculation
    const heightCm = unitSystem === 'metric' ? parseFloat(height) : parseFloat(height) * 2.54;
    const neckCm = unitSystem === 'metric' ? parseFloat(neck) : parseFloat(neck) * 2.54;
    const waistCm = unitSystem === 'metric' ? parseFloat(waist) : parseFloat(waist) * 2.54;
    const hipCm = unitSystem === 'metric' ? parseFloat(hip) : parseFloat(hip) * 2.54;
    
    // U.S. Navy Method formula
    if (gender === 'female') {
      bodyFatPercentage = 495 / (1.29579 - 0.35004 * Math.log10(waistCm + hipCm - neckCm) + 0.22100 * Math.log10(heightCm)) - 450;
    } else {
      bodyFatPercentage = 495 / (1.0324 - 0.19077 * Math.log10(waistCm - neckCm) + 0.15456 * Math.log10(heightCm)) - 450;
    }
    
    // Calculate fat mass and lean mass
    const weightKg = unitSystem === 'metric' ? parseFloat(weight) : parseFloat(weight) / 2.20462;
    const fatMass = (weightKg * bodyFatPercentage) / 100;
    const leanMass = weightKg - fatMass;
    
    // Determine category
    let category = '';
    if (gender === 'female') {
      if (bodyFatPercentage < 14) category = 'Essential Fat';
      else if (bodyFatPercentage < 21) category = 'Athletes';
      else if (bodyFatPercentage < 25) category = 'Fitness';
      else if (bodyFatPercentage < 32) category = 'Average';
      else category = 'Obese';
    } else {
      if (bodyFatPercentage < 6) category = 'Essential Fat';
      else if (bodyFatPercentage < 14) category = 'Athletes';
      else if (bodyFatPercentage < 18) category = 'Fitness';
      else if (bodyFatPercentage < 25) category = 'Average';
      else category = 'Obese';
    }
    
    // Generate recommendation
    let recommendation = '';
    if (category === 'Essential Fat') {
      recommendation = 'Your body fat percentage is at essential levels. Focus on maintaining healthy habits.';
    } else if (category === 'Athletes' || category === 'Fitness') {
      recommendation = 'You have a healthy body fat percentage. Continue your current fitness routine.';
    } else if (category === 'Average') {
      recommendation = 'Consider implementing a balanced diet and exercise routine to improve body composition.';
    } else {
      recommendation = 'Focus on reducing body fat through a combination of proper nutrition and regular exercise.';
    }
    
    setResults({
      bodyFatPercentage: parseFloat(bodyFatPercentage.toFixed(1)),
      fatMass: parseFloat(fatMass.toFixed(1)),
      leanMass: parseFloat(leanMass.toFixed(1)),
      category,
      recommendation
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4 flex items-center gap-2">
          <Scale className="w-6 h-6 text-teal-600" />
          Body Fat Percentage Calculator
        </h2>
        <p className="text-gray-600">
          Use our accurate body fat calculator to determine your body fat percentage and track your progress. 
          This body composition calculator uses the U.S. Navy Method to estimate your body fat percentage.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex justify-center space-x-2 p-1 bg-gray-100 rounded-lg w-fit mx-auto">
          <button
            onClick={() => handleUnitSystemChange('metric')}
            className={`px-4 py-2 rounded-md transition-all duration-200 ${
              unitSystem === 'metric'
                ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md'
                : 'text-gray-600 hover:text-teal-600'
            }`}
          >
            Metric
          </button>
          <button
            onClick={() => handleUnitSystemChange('imperial')}
            className={`px-4 py-2 rounded-md transition-all duration-200 ${
              unitSystem === 'imperial'
                ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md'
                : 'text-gray-600 hover:text-teal-600'
            }`}
          >
            Imperial
          </button>
        </div>
      </div>

      <form onSubmit={calculateBodyFat} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Weight ({unitSystem === 'metric' ? 'kg' : 'lbs'})
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            step="0.1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Height ({unitSystem === 'metric' ? 'cm' : 'inches'})
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            step="0.1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Neck Circumference ({unitSystem === 'metric' ? 'cm' : 'inches'})
          </label>
          <input
            type="number"
            value={neck}
            onChange={(e) => setNeck(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            step="0.1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Waist Circumference ({unitSystem === 'metric' ? 'cm' : 'inches'})
          </label>
          <input
            type="number"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            step="0.1"
            required
          />
        </div>

        {gender === 'female' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Hip Circumference ({unitSystem === 'metric' ? 'cm' : 'inches'})
            </label>
            <input
              type="number"
              value={hip}
              onChange={(e) => setHip(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              step="0.1"
              required
            />
          </div>
        )}

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-4 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 font-semibold"
          >
            Calculate Body Fat
          </button>
        </div>
      </form>

      {results && (
        <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4">
            Your Body Composition Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
              <div className="mb-4">
                <p className="text-sm text-gray-600">Body Fat Percentage</p>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  {results.bodyFatPercentage}%
                </p>
                <p className="text-sm text-gray-500">Category: {results.category}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Fat Mass</p>
                  <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                    {results.fatMass} kg
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Lean Mass</p>
                  <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                    {results.leanMass} kg
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
              <p className="text-sm text-gray-600 mb-2">Recommendation:</p>
              <p className="text-gray-700">{results.recommendation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BodyFatCalculator;