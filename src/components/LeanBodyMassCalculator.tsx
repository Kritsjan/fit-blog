import React, { useState } from 'react';
import { Scale, Activity } from 'lucide-react';

interface LeanMassResults {
  leanBodyMass: {
    boer: number;
    james: number;
    hume: number;
    average: number;
  };
  bodyFatMass: number;
  bodyFatPercentage: number;
  leanMassIndex: number;
  category: string;
}

const LeanBodyMassCalculator = () => {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [gender, setGender] = useState('female');
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('170');
  const [bodyFat, setBodyFat] = useState('20');
  const [results, setResults] = useState<LeanMassResults | null>(null);

  const handleUnitSystemChange = (system: 'metric' | 'imperial') => {
    if (system === unitSystem) return;
    
    setUnitSystem(system);
    if (system === 'imperial') {
      setWeight((parseFloat(weight) * 2.20462).toFixed(1));
      setHeight((parseFloat(height) * 0.393701).toFixed(1));
    } else {
      setWeight((parseFloat(weight) / 2.20462).toFixed(1));
      setHeight((parseFloat(height) / 0.393701).toFixed(1));
    }
  };

  const calculateLeanMass = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert to metric for calculations
    let weightKg = parseFloat(weight);
    let heightCm = parseFloat(height);
    
    if (unitSystem === 'imperial') {
      weightKg = weightKg / 2.20462;
      heightCm = heightCm * 2.54;
    }
    
    const heightM = heightCm / 100;
    const bodyFatPercent = parseFloat(bodyFat);
    
    // Calculate using different formulas
    let boer, james, hume;
    
    // Boer Formula
    if (gender === 'male') {
      boer = (0.407 * weightKg) + (0.267 * heightCm) - 19.2;
    } else {
      boer = (0.252 * weightKg) + (0.473 * heightCm) - 48.3;
    }
    
    // James Formula
    if (gender === 'male') {
      james = 1.1 * weightKg - 128 * (weightKg / heightCm) * (weightKg / heightCm);
    } else {
      james = 1.07 * weightKg - 148 * (weightKg / heightCm) * (weightKg / heightCm);
    }
    
    // Hume Formula
    if (gender === 'male') {
      hume = (0.3281 * weightKg) + (0.33929 * heightCm) - 29.5336;
    } else {
      hume = (0.29569 * weightKg) + (0.41813 * heightCm) - 43.2933;
    }
    
    // Calculate average LBM
    const averageLBM = (boer + james + hume) / 3;
    
    // Calculate body fat mass
    const fatMass = (weightKg * bodyFatPercent) / 100;
    
    // Calculate lean mass index (LBM/height²)
    const leanMassIndex = averageLBM / (heightM * heightM);
    
    // Determine category based on lean mass index
    let category = '';
    if (gender === 'male') {
      if (leanMassIndex < 16) category = 'Below Normal';
      else if (leanMassIndex < 19) category = 'Normal';
      else if (leanMassIndex < 22) category = 'Above Normal';
      else category = 'High Muscle Mass';
    } else {
      if (leanMassIndex < 14) category = 'Below Normal';
      else if (leanMassIndex < 17) category = 'Normal';
      else if (leanMassIndex < 20) category = 'Above Normal';
      else category = 'High Muscle Mass';
    }
    
    setResults({
      leanBodyMass: {
        boer: parseFloat(boer.toFixed(1)),
        james: parseFloat(james.toFixed(1)),
        hume: parseFloat(hume.toFixed(1)),
        average: parseFloat(averageLBM.toFixed(1))
      },
      bodyFatMass: parseFloat(fatMass.toFixed(1)),
      bodyFatPercentage: bodyFatPercent,
      leanMassIndex: parseFloat(leanMassIndex.toFixed(1)),
      category
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4 flex items-center gap-2">
          <Activity className="w-6 h-6 text-teal-600" />
          Lean Body Mass Calculator
        </h2>
        <p className="text-gray-600">
          Use our comprehensive lean mass calculator to determine your lean body weight and body composition. 
          This body fat lean mass calculator helps you track your progress and set realistic fitness goals.
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

      <form onSubmit={calculateLeanMass} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <label className="block text-sm font-medium text-gray-700">Body Fat Percentage (%)</label>
          <input
            type="number"
            value={bodyFat}
            onChange={(e) => setBodyFat(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            step="0.1"
            min="1"
            max="60"
            required
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-4 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 font-semibold"
          >
            Calculate Lean Body Mass
          </button>
        </div>
      </form>

      {results && (
        <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4">
            Your Lean Body Mass Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
              <div className="mb-4">
                <p className="text-sm text-gray-600">Average Lean Body Mass</p>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  {results.leanBodyMass.average} {unitSystem === 'metric' ? 'kg' : 'lbs'}
                </p>
                <p className="text-sm text-gray-500">Category: {results.category}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Lean Mass Index</p>
                <p className="text-lg font-semibold text-gray-800">{results.leanMassIndex}</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
              <div className="mb-4">
                <p className="text-sm text-gray-600">Body Composition</p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    Fat Mass: {results.bodyFatMass} {unitSystem === 'metric' ? 'kg' : 'lbs'} 
                    ({results.bodyFatPercentage}%)
                  </p>
                  <p className="text-gray-700">Different Methods:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Boer: {results.leanBodyMass.boer} {unitSystem === 'metric' ? 'kg' : 'lbs'}</li>
                    <li>James: {results.leanBodyMass.james} {unitSystem === 'metric' ? 'kg' : 'lbs'}</li>
                    <li>Hume: {results.leanBodyMass.hume} {unitSystem === 'metric' ? 'kg' : 'lbs'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeanBodyMassCalculator;