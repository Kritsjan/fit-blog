import React, { useState } from 'react';
import { Calculator, Activity } from 'lucide-react';

interface ProteinResults {
  dailyProtein: number;
  proteinPerMeal: number;
  calories: number;
  recommendedRange: string;
  mealSuggestions: string[];
}

const ProteinCalculator = () => {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('170');
  const [age, setAge] = useState('30');
  const [gender, setGender] = useState('female');
  const [activity, setActivity] = useState('moderate');
  const [goal, setGoal] = useState('maintain');
  const [mealsPerDay, setMealsPerDay] = useState('4');
  const [results, setResults] = useState<ProteinResults | null>(null);

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

  const calculateProtein = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert imperial to metric for calculations if needed
    let weightKg = parseFloat(weight);
    if (unitSystem === 'imperial') {
      weightKg = weightKg / 2.20462;
    }
    
    // Base protein calculation based on goal and activity level
    let proteinMultiplier = 0;
    let recommendedRange = '';
    
    switch (goal) {
      case 'lose':
        proteinMultiplier = activity === 'sedentary' ? 2.0 : 2.2;
        recommendedRange = '1.8-2.2g per kg';
        break;
      case 'maintain':
        proteinMultiplier = activity === 'sedentary' ? 1.6 : 1.8;
        recommendedRange = '1.6-2.0g per kg';
        break;
      case 'gain':
        proteinMultiplier = activity === 'sedentary' ? 2.2 : 2.4;
        recommendedRange = '2.0-2.4g per kg';
        break;
    }
    
    // Additional adjustment for activity level
    if (activity === 'active' || activity === 'veryActive') {
      proteinMultiplier += 0.2;
    }
    
    const dailyProtein = Math.round(weightKg * proteinMultiplier);
    const proteinPerMeal = Math.round(dailyProtein / parseInt(mealsPerDay));
    const calories = Math.round(dailyProtein * 4); // 4 calories per gram of protein
    
    // Generate meal suggestions based on protein per meal
    const mealSuggestions = [
      `${proteinPerMeal}g chicken breast (${Math.round(proteinPerMeal * 3.5)}g raw)`,
      `${Math.round(proteinPerMeal * 1.2)}g whey protein powder`,
      `${Math.round(proteinPerMeal * 4)}g lean fish`,
      `${Math.round(proteinPerMeal * 5)}g egg whites + 1 whole egg`,
    ];
    
    setResults({
      dailyProtein,
      proteinPerMeal,
      calories,
      recommendedRange,
      mealSuggestions
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-teal-600" />
          Protein Intake Calculator
        </h2>
        <p className="text-gray-600">
          Calculate how much protein you need per day based on your weight, activity level, and fitness goals. 
          Our protein calculator for weight loss and muscle gain provides personalized recommendations.
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

      <form onSubmit={calculateProtein} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <option value="sedentary">Sedentary (Office Job)</option>
            <option value="light">Light Activity (1-2 days/week)</option>
            <option value="moderate">Moderate (3-5 days/week)</option>
            <option value="active">Very Active (6-7 days/week)</option>
            <option value="veryActive">Extra Active (Athletes)</option>
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
            <option value="maintain">Maintain Weight</option>
            <option value="gain">Build Muscle</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Meals per Day</label>
          <select
            value={mealsPerDay}
            onChange={(e) => setMealsPerDay(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          >
            <option value="3">3 meals</option>
            <option value="4">4 meals</option>
            <option value="5">5 meals</option>
            <option value="6">6 meals</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-4 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 font-semibold"
          >
            Calculate Protein Needs
          </button>
        </div>
      </form>

      {results && (
        <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4">
            Your Daily Protein Requirements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
              <div className="mb-4">
                <p className="text-sm text-gray-600">Daily Protein Target</p>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  {results.dailyProtein}g
                </p>
                <p className="text-sm text-gray-500">Recommended range: {results.recommendedRange}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Per Meal (for {mealsPerDay} meals)</p>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  {results.proteinPerMeal}g
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
              <p className="text-sm text-gray-600 mb-2">Sample Protein Sources per Meal:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {results.mealSuggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProteinCalculator;