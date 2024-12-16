import React, { useState } from 'react';
import { Calculator, Scale } from 'lucide-react';

interface WHRResults {
  ratio: number;
  category: string;
  healthRisk: string;
  recommendation: string;
}

const WaistHipRatioCalculator = () => {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [gender, setGender] = useState('female');
  const [waist, setWaist] = useState('80');
  const [hip, setHip] = useState('100');
  const [results, setResults] = useState<WHRResults | null>(null);

  const handleUnitSystemChange = (system: 'metric' | 'imperial') => {
    if (system === unitSystem) return;
    
    setUnitSystem(system);
    if (system === 'imperial') {
      setWaist((parseFloat(waist) * 0.393701).toFixed(1));
      setHip((parseFloat(hip) * 0.393701).toFixed(1));
    } else {
      setWaist((parseFloat(waist) / 0.393701).toFixed(1));
      setHip((parseFloat(hip) / 0.393701).toFixed(1));
    }
  };

  const calculateWHR = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert measurements to centimeters for calculation
    const waistCm = unitSystem === 'metric' ? parseFloat(waist) : parseFloat(waist) * 2.54;
    const hipCm = unitSystem === 'metric' ? parseFloat(hip) : parseFloat(hip) * 2.54;
    
    const ratio = waistCm / hipCm;
    
    // Determine category and health risk based on gender and ratio
    let category = '';
    let healthRisk = '';
    let recommendation = '';
    
    if (gender === 'female') {
      if (ratio <= 0.80) {
        category = 'Low Risk (Pear Shape)';
        healthRisk = 'Low health risk';
        recommendation = 'Maintain your current healthy lifestyle with balanced diet and regular exercise.';
      } else if (ratio <= 0.85) {
        category = 'Moderate Risk';
        healthRisk = 'Moderate health risk';
        recommendation = 'Consider increasing physical activity and maintaining a balanced diet.';
      } else {
        category = 'High Risk (Apple Shape)';
        healthRisk = 'High health risk';
        recommendation = 'Focus on reducing waist circumference through diet and exercise. Consult a healthcare provider.';
      }
    } else {
      if (ratio <= 0.90) {
        category = 'Low Risk (Pear Shape)';
        healthRisk = 'Low health risk';
        recommendation = 'Maintain your current healthy lifestyle with balanced diet and regular exercise.';
      } else if (ratio <= 0.95) {
        category = 'Moderate Risk';
        healthRisk = 'Moderate health risk';
        recommendation = 'Consider increasing physical activity and maintaining a balanced diet.';
      } else {
        category = 'High Risk (Apple Shape)';
        healthRisk = 'High health risk';
        recommendation = 'Focus on reducing waist circumference through diet and exercise. Consult a healthcare provider.';
      }
    }
    
    setResults({
      ratio: parseFloat(ratio.toFixed(2)),
      category,
      healthRisk,
      recommendation
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4 flex items-center gap-2">
          <Scale className="w-6 h-6 text-teal-600" />
          Waist-to-Hip Ratio Calculator
        </h2>
        <p className="text-gray-600">
          Use our hip ratio calculator to determine your waist-to-hip ratio (WHR) and assess your body fat distribution. 
          This waist ratio calculator helps evaluate health risks associated with your body shape.
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
            Metric (cm)
          </button>
          <button
            onClick={() => handleUnitSystemChange('imperial')}
            className={`px-4 py-2 rounded-md transition-all duration-200 ${
              unitSystem === 'imperial'
                ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md'
                : 'text-gray-600 hover:text-teal-600'
            }`}
          >
            Imperial (inches)
          </button>
        </div>
      </div>

      <form onSubmit={calculateWHR} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-4 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 font-semibold"
          >
            Calculate Waist-to-Hip Ratio
          </button>
        </div>
      </form>

      {results && (
        <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4">
            Your Waist-to-Hip Ratio Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
              <div className="mb-4">
                <p className="text-sm text-gray-600">Your WHR</p>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  {results.ratio}
                </p>
                <p className="text-sm text-gray-500">Category: {results.category}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Health Risk Level</p>
                <p className="text-lg font-semibold text-gray-800">{results.healthRisk}</p>
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

export default WaistHipRatioCalculator;