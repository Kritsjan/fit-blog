import React, { useState } from 'react';
import { Scale, AlertCircle } from 'lucide-react';

interface ObesityResults {
  bmi: number;
  category: string;
  healthRisk: string;
  recommendation: string;
  idealWeightRange: {
    min: number;
    max: number;
  };
}

const ObesityCalculator = () => {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('170');
  const [age, setAge] = useState('30');
  const [gender, setGender] = useState('female');
  const [results, setResults] = useState<ObesityResults | null>(null);

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

  const calculateObesity = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert to metric for calculations
    let weightKg = parseFloat(weight);
    let heightCm = parseFloat(height);
    
    if (unitSystem === 'imperial') {
      weightKg = weightKg / 2.20462;
      heightCm = heightCm * 2.54;
    }
    
    // Calculate BMI
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    
    // Determine category and recommendations
    let category = '';
    let healthRisk = '';
    let recommendation = '';
    
    if (bmi < 18.5) {
      category = 'Underweight';
      healthRisk = 'Risk of nutritional deficiency';
      recommendation = 'Consider increasing caloric intake with nutrient-rich foods. Consult a healthcare provider.';
    } else if (bmi < 25) {
      category = 'Normal Weight';
      healthRisk = 'Low Risk';
      recommendation = 'Maintain healthy eating habits and regular physical activity.';
    } else if (bmi < 30) {
      category = 'Overweight';
      healthRisk = 'Increased risk of health issues';
      recommendation = 'Focus on balanced nutrition and regular exercise to achieve a healthy weight.';
    } else if (bmi < 35) {
      category = 'Class I Obesity';
      healthRisk = 'High risk of health issues';
      recommendation = 'Consider lifestyle changes and consult healthcare providers for weight management strategies.';
    } else if (bmi < 40) {
      category = 'Class II Obesity';
      healthRisk = 'Very high risk of health issues';
      recommendation = 'Seek medical guidance for a comprehensive weight management plan.';
    } else {
      category = 'Class III Obesity';
      healthRisk = 'Extremely high risk of health issues';
      recommendation = 'Immediate medical consultation recommended for weight management intervention.';
    }
    
    // Calculate ideal weight range (BMI 18.5-24.9)
    const idealWeightRange = {
      min: parseFloat((18.5 * heightM * heightM).toFixed(1)),
      max: parseFloat((24.9 * heightM * heightM).toFixed(1))
    };
    
    setResults({
      bmi: parseFloat(bmi.toFixed(1)),
      category,
      healthRisk,
      recommendation,
      idealWeightRange
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4 flex items-center gap-2">
          <Scale className="w-6 h-6 text-teal-600" />
          Obesity Calculator: Body Weight Index Calculator
        </h2>
        <p className="text-gray-600">
          Calculate your body weight index and assess obesity risk with our comprehensive calculator. 
          This tool helps determine if your weight falls within a healthy range based on your height and age.
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

      <form onSubmit={calculateObesity} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-4 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 font-semibold"
          >
            Calculate Body Weight Index
          </button>
        </div>
      </form>

      {results && (
        <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4">
            Your Body Weight Index Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
              <div className="mb-4">
                <p className="text-sm text-gray-600">Your BWI</p>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  {results.bmi}
                </p>
                <p className="text-sm text-gray-500">Category: {results.category}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Ideal Weight Range</p>
                <p className="text-lg font-semibold text-gray-800">
                  {results.idealWeightRange.min} - {results.idealWeightRange.max} kg
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
              <div className="mb-4">
                <p className="text-sm text-gray-600">Health Risk Level</p>
                <p className="text-lg font-semibold text-gray-800">{results.healthRisk}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Recommendation:</p>
                <p className="text-gray-700">{results.recommendation}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ObesityCalculator;