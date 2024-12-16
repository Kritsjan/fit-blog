import React, { useState } from 'react';
import { Calculator, Clock } from 'lucide-react';

interface FastingSchedule {
  fastingHours: number;
  eatingHours: number;
  recommendedStartTime: string;
  recommendedEndTime: string;
  expectedWeightLoss: string;
}

const FastingCalculator = () => {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('170');
  const [age, setAge] = useState('30');
  const [gender, setGender] = useState('female');
  const [activity, setActivity] = useState('moderate');
  const [fastingPattern, setFastingPattern] = useState('16:8');
  const [wakeTime, setWakeTime] = useState('07:00');
  const [results, setResults] = useState<FastingSchedule | null>(null);

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

  const calculateFastingSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert imperial to metric for calculations if needed
    let weightKg = parseFloat(weight);
    if (unitSystem === 'imperial') {
      weightKg = weightKg / 2.20462;
    }
    
    // Parse fasting pattern
    const [fastHours, eatHours] = fastingPattern.split(':').map(Number);
    
    // Calculate recommended time window based on wake time
    const wakeHour = parseInt(wakeTime.split(':')[0]);
    const wakeMinute = parseInt(wakeTime.split(':')[1]);
    
    const fastStartDate = new Date();
    fastStartDate.setHours(wakeHour + eatHours, wakeMinute, 0);
    
    const fastEndDate = new Date(fastStartDate);
    fastEndDate.setHours(fastStartDate.getHours() + fastHours);
    
    // Calculate expected weight loss (rough estimate)
    const weeklyLoss = (weightKg * 0.005).toFixed(1); // Approximate 0.5% per week
    const monthlyLoss = (weightKg * 0.02).toFixed(1); // Approximate 2% per month
    
    setResults({
      fastingHours: fastHours,
      eatingHours: eatHours,
      recommendedStartTime: fastStartDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      recommendedEndTime: fastEndDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      expectedWeightLoss: `${weeklyLoss}-${monthlyLoss} kg per month`
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4 flex items-center gap-2">
          <Clock className="w-6 h-6 text-teal-600" />
          Free Intermittent Fasting Calculator
        </h2>
        <p className="text-gray-600">
          Calculate your personalized intermittent fasting schedule and track your potential weight loss 
          with our free intermittent fasting calculator. This tool helps you determine the optimal 
          fasting windows for your lifestyle.
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

      <form onSubmit={calculateFastingSchedule} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <label className="block text-sm font-medium text-gray-700">Fasting Pattern</label>
          <select
            value={fastingPattern}
            onChange={(e) => setFastingPattern(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          >
            <option value="16:8">16:8 (Most Popular)</option>
            <option value="18:6">18:6 (Advanced)</option>
            <option value="20:4">20:4 (Warrior Diet)</option>
            <option value="14:10">14:10 (Beginner Friendly)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Wake-up Time</label>
          <input
            type="time"
            value={wakeTime}
            onChange={(e) => setWakeTime(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
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
          </select>
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

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-4 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 font-semibold"
          >
            Calculate Fasting Schedule
          </button>
        </div>
      </form>

      {results && (
        <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4">
            Your Personalized Fasting Schedule
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md border border-teal-100">
              <p className="text-sm text-gray-600">Fasting Window</p>
              <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                {results.recommendedStartTime} - {results.recommendedEndTime}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {results.fastingHours} hours fasting, {results.eatingHours} hours eating
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-teal-100">
              <p className="text-sm text-gray-600">Estimated Monthly Weight Loss</p>
              <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                {results.expectedWeightLoss}
              </p>
              <p className="text-sm text-gray-500 mt-1">Results may vary based on diet and exercise</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FastingCalculator;