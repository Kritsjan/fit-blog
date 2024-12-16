import React, { useState } from 'react';
import { Calculator, Info } from 'lucide-react';

interface MacroResults {
  calories: number;
  protein: number;
  fats: number;
  carbs: number;
}

const KetoCalculator = () => {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('170');
  const [age, setAge] = useState('30');
  const [gender, setGender] = useState('female');
  const [activity, setActivity] = useState('moderate');
  const [goal, setGoal] = useState('maintain');
  const [results, setResults] = useState<MacroResults | null>(null);

  const handleUnitSystemChange = (system: 'metric' | 'imperial') => {
    if (system === unitSystem) return;
    
    setUnitSystem(system);
    // Convert values when switching unit systems
    if (system === 'imperial') {
      setWeight((parseFloat(weight) * 2.20462).toFixed(1)); // kg to lbs
      setHeight((parseFloat(height) * 0.393701).toFixed(1)); // cm to inches
    } else {
      setWeight((parseFloat(weight) / 2.20462).toFixed(1)); // lbs to kg
      setHeight((parseFloat(height) / 0.393701).toFixed(1)); // inches to cm
    }
  };

  const calculateMacros = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert imperial to metric for calculations if needed
    let weightKg = parseFloat(weight);
    let heightCm = parseFloat(height);
    
    if (unitSystem === 'imperial') {
      weightKg = weightKg / 2.20462; // lbs to kg
      heightCm = heightCm * 2.54; // inches to cm
    }
    
    const ageYears = parseFloat(age);
    
    // Basic BMR calculation using Mifflin-St Jeor Equation
    let bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageYears;
    bmr = gender === 'female' ? bmr - 161 : bmr + 5;
    
    // Activity multiplier
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };
    
    let tdee = bmr * activityMultipliers[activity as keyof typeof activityMultipliers];
    
    // Adjust for goal
    const goalMultipliers = {
      lose: 0.8,
      maintain: 1,
      gain: 1.2
    };
    
    let targetCalories = tdee * goalMultipliers[goal as keyof typeof goalMultipliers];
    
    // Keto macros distribution
    const macros = {
      calories: Math.round(targetCalories),
      protein: Math.round((targetCalories * 0.25) / 4), // 25% of calories from protein
      fats: Math.round((targetCalories * 0.70) / 9), // 70% of calories from fat
      carbs: Math.round((targetCalories * 0.05) / 4) // 5% of calories from carbs
    };
    
    setResults(macros);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-teal-600" />
          Free Keto Macro Calculator
        </h2>
        <p className="text-gray-600">
          Calculate your personalized keto macros with our best free keto calculator. 
          This carb calculator for keto will help you determine the ideal macronutrient ratios 
          for your ketogenic diet.
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

      <form onSubmit={calculateMacros} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
        </div>

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
          <label className="block text-sm font-medium text-gray-700">Activity Level</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          >
            <option value="sedentary">Sedentary</option>
            <option value="light">Lightly Active</option>
            <option value="moderate">Moderately Active</option>
            <option value="active">Very Active</option>
            <option value="veryActive">Extra Active</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Goal</label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          >
            <option value="lose">Weight Loss</option>
            <option value="maintain">Maintain</option>
            <option value="gain">Weight Gain</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-4 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 font-semibold"
          >
            Calculate Keto Macros
          </button>
        </div>
      </form>

      {results && (
        <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4">Your Keto Macros</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md border border-teal-100">
              <p className="text-sm text-gray-600">Daily Calories</p>
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">{results.calories}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-teal-100">
              <p className="text-sm text-gray-600">Protein (g)</p>
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">{results.protein}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-teal-100">
              <p className="text-sm text-gray-600">Fats (g)</p>
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">{results.fats}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-teal-100">
              <p className="text-sm text-gray-600">Net Carbs (g)</p>
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">{results.carbs}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KetoCalculator;