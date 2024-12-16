import React, { useState } from 'react';
import { Calculator, Target } from 'lucide-react';

interface IdealWeightResults {
  idealWeight: {
    robinson: number;
    miller: number;
    devine: number;
    hamwi: number;
    average: number;
  };
  healthyRange: {
    min: number;
    max: number;
  };
  bmi: {
    current: number;
    category: string;
  };
  weightToLose: number;
  timeToGoal: number;
}

const IdealWeightCalculator = () => {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [gender, setGender] = useState('female');
  const [height, setHeight] = useState('170');
  const [weight, setWeight] = useState('70');
  const [frame, setFrame] = useState('medium');
  const [age, setAge] = useState('30');
  const [results, setResults] = useState<IdealWeightResults | null>(null);

  const handleUnitSystemChange = (system: 'metric' | 'imperial') => {
    if (system === unitSystem) return;
    
    setUnitSystem(system);
    if (system === 'imperial') {
      setHeight((parseFloat(height) * 0.393701).toFixed(1));
      setWeight((parseFloat(weight) * 2.20462).toFixed(1));
    } else {
      setHeight((parseFloat(height) / 0.393701).toFixed(1));
      setWeight((parseFloat(weight) / 2.20462).toFixed(1));
    }
  };

  const calculateIdealWeight = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert to metric for calculations
    let heightCm = parseFloat(height);
    let weightKg = parseFloat(weight);
    
    if (unitSystem === 'imperial') {
      heightCm = heightCm * 2.54;
      weightKg = weightKg / 2.20462;
    }
    
    // Calculate ideal weight using different formulas
    const heightM = heightCm / 100;
    const heightInches = heightCm / 2.54;
    const heightOverFiveFeet = Math.max(0, heightInches - 60);
    
    let robinson, miller, devine, hamwi;
    
    if (gender === 'female') {
      robinson = 49 + 1.7 * heightOverFiveFeet;
      miller = 53.1 + 1.36 * heightOverFiveFeet;
      devine = 45.5 + 2.2 * heightOverFiveFeet;
      hamwi = 45.5 + 2.2 * heightOverFiveFeet;
    } else {
      robinson = 52 + 1.9 * heightOverFiveFeet;
      miller = 56.2 + 1.41 * heightOverFiveFeet;
      devine = 50 + 2.3 * heightOverFiveFeet;
      hamwi = 48 + 2.7 * heightOverFiveFeet;
    }
    
    // Adjust for frame size
    const frameAdjustment = {
      small: 0.9,
      medium: 1.0,
      large: 1.1
    };
    
    robinson *= frameAdjustment[frame as keyof typeof frameAdjustment];
    miller *= frameAdjustment[frame as keyof typeof frameAdjustment];
    devine *= frameAdjustment[frame as keyof typeof frameAdjustment];
    hamwi *= frameAdjustment[frame as keyof typeof frameAdjustment];
    
    const average = (robinson + miller + devine + hamwi) / 4;
    
    // Calculate BMI
    const bmi = weightKg / (heightM * heightM);
    let bmiCategory = '';
    if (bmi < 18.5) bmiCategory = 'Underweight';
    else if (bmi < 25) bmiCategory = 'Normal weight';
    else if (bmi < 30) bmiCategory = 'Overweight';
    else bmiCategory = 'Obese';
    
    // Calculate healthy weight range (BMI 18.5-24.9)
    const healthyRange = {
      min: parseFloat((18.5 * heightM * heightM).toFixed(1)),
      max: parseFloat((24.9 * heightM * heightM).toFixed(1))
    };
    
    // Calculate weight to lose/gain
    const weightToLose = weightKg - average;
    
    // Estimate time to goal (based on healthy rate of 0.5-1kg per week)
    const timeToGoal = Math.abs(weightToLose) / 0.75; // Average of 0.75kg per week
    
    setResults({
      idealWeight: {
        robinson: parseFloat(robinson.toFixed(1)),
        miller: parseFloat(miller.toFixed(1)),
        devine: parseFloat(devine.toFixed(1)),
        hamwi: parseFloat(hamwi.toFixed(1)),
        average: parseFloat(average.toFixed(1))
      },
      healthyRange,
      bmi: {
        current: parseFloat(bmi.toFixed(1)),
        category: bmiCategory
      },
      weightToLose: parseFloat(weightToLose.toFixed(1)),
      timeToGoal: parseFloat(timeToGoal.toFixed(1))
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-teal-600" />
          Ideal Weight Calculator
        </h2>
        <p className="text-gray-600">
          Use our healthy weight calculator to determine your ideal body weight based on height, gender, 
          and frame size. This ideal body weight calculator provides personalized recommendations for 
          achieving your optimal weight.
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

      <form onSubmit={calculateIdealWeight} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            Current Weight ({unitSystem === 'metric' ? 'kg' : 'lbs'})
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
          <label className="block text-sm font-medium text-gray-700">Frame Size</label>
          <select
            value={frame}
            onChange={(e) => setFrame(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          >
            <option value="small">Small Frame</option>
            <option value="medium">Medium Frame</option>
            <option value="large">Large Frame</option>
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

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-4 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 font-semibold"
          >
            Calculate Ideal Weight
          </button>
        </div>
      </form>

      {results && (
        <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4">
            Your Ideal Weight Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
              <div className="mb-4">
                <p className="text-sm text-gray-600">Average Ideal Weight</p>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  {results.idealWeight.average} {unitSystem === 'metric' ? 'kg' : 'lbs'}
                </p>
                <p className="text-sm text-gray-500">
                  Healthy range: {results.healthyRange.min}-{results.healthyRange.max} {unitSystem === 'metric' ? 'kg' : 'lbs'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Current BMI: {results.bmi.current}</p>
                <p className="text-lg font-semibold text-gray-800">Category: {results.bmi.category}</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
              <div className="mb-4">
                <p className="text-sm text-gray-600">Weight Change Needed</p>
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  {Math.abs(results.weightToLose)} {unitSystem === 'metric' ? 'kg' : 'lbs'} to {results.weightToLose > 0 ? 'lose' : 'gain'}
                </p>
                <p className="text-sm text-gray-500">
                  Estimated time: {results.timeToGoal} weeks at a healthy rate
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Different Methods:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Robinson: {results.idealWeight.robinson} {unitSystem === 'metric' ? 'kg' : 'lbs'}</li>
                  <li>Miller: {results.idealWeight.miller} {unitSystem === 'metric' ? 'kg' : 'lbs'}</li>
                  <li>Devine: {results.idealWeight.devine} {unitSystem === 'metric' ? 'kg' : 'lbs'}</li>
                  <li>Hamwi: {results.idealWeight.hamwi} {unitSystem === 'metric' ? 'kg' : 'lbs'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IdealWeightCalculator;