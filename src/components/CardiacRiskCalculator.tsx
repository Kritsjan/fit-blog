import React, { useState } from 'react';
import { Heart, AlertCircle } from 'lucide-react';

interface RiskFactors {
  highRiskSurgery: boolean;
  ischemicHeartDisease: boolean;
  heartFailure: boolean;
  cerebrovascularDisease: boolean;
  insulinDependentDiabetes: boolean;
  renalFailure: boolean;
}

interface RiskResults {
  riskClass: number;
  complications: number;
  recommendation: string;
}

const CardiacRiskCalculator = () => {
  const [riskFactors, setRiskFactors] = useState<RiskFactors>({
    highRiskSurgery: false,
    ischemicHeartDisease: false,
    heartFailure: false,
    cerebrovascularDisease: false,
    insulinDependentDiabetes: false,
    renalFailure: false
  });

  const [results, setResults] = useState<RiskResults | null>(null);

  const calculateRisk = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Count risk factors
    const riskCount = Object.values(riskFactors).filter(Boolean).length;
    
    // Calculate risk class and complications
    let riskClass = riskCount;
    let complications = 0;
    
    switch (riskCount) {
      case 0:
        complications = 0.4;
        break;
      case 1:
        complications = 0.9;
        break;
      case 2:
        complications = 6.6;
        break;
      case 3:
        complications = 11.0;
        break;
      default:
        complications = 15.3;
        break;
    }
    
    // Generate recommendation
    let recommendation = '';
    if (riskCount === 0) {
      recommendation = 'Low risk for cardiac complications. Proceed with standard pre-operative evaluation.';
    } else if (riskCount === 1) {
      recommendation = 'Slightly elevated risk. Consider basic cardiac evaluation before surgery.';
    } else if (riskCount === 2) {
      recommendation = 'Moderate risk. Cardiac evaluation recommended before surgery.';
    } else {
      recommendation = 'High risk. Comprehensive cardiac evaluation strongly recommended before surgery.';
    }
    
    setResults({
      riskClass,
      complications,
      recommendation
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4 flex items-center gap-2">
          <Heart className="w-6 h-6 text-teal-600" />
          Revised Cardiac Risk Index Calculator
        </h2>
        <p className="text-gray-600">
          Use our RCRI calculator to assess perioperative cardiac risk. This revised cardiac risk calculator 
          helps evaluate the risk of cardiac complications during non-cardiac surgery.
        </p>
      </div>

      <form onSubmit={calculateRisk} className="space-y-6">
        <div className="bg-teal-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-teal-800 mb-4">Select All Risk Factors That Apply:</h3>
          
          <div className="space-y-4">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={riskFactors.highRiskSurgery}
                onChange={(e) => setRiskFactors({...riskFactors, highRiskSurgery: e.target.checked})}
                className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700">High-risk surgery (intraperitoneal, intrathoracic, or suprainguinal vascular)</span>
            </label>
            
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={riskFactors.ischemicHeartDisease}
                onChange={(e) => setRiskFactors({...riskFactors, ischemicHeartDisease: e.target.checked})}
                className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700">History of ischemic heart disease</span>
            </label>
            
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={riskFactors.heartFailure}
                onChange={(e) => setRiskFactors({...riskFactors, heartFailure: e.target.checked})}
                className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700">History of congestive heart failure</span>
            </label>
            
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={riskFactors.cerebrovascularDisease}
                onChange={(e) => setRiskFactors({...riskFactors, cerebrovascularDisease: e.target.checked})}
                className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700">History of cerebrovascular disease</span>
            </label>
            
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={riskFactors.insulinDependentDiabetes}
                onChange={(e) => setRiskFactors({...riskFactors, insulinDependentDiabetes: e.target.checked})}
                className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700">Insulin therapy for diabetes</span>
            </label>
            
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={riskFactors.renalFailure}
                onChange={(e) => setRiskFactors({...riskFactors, renalFailure: e.target.checked})}
                className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700">Preoperative serum creatinine greater than 2.0 mg/dL</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-4 rounded-md hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 font-semibold"
        >
          Calculate Cardiac Risk
        </button>
      </form>

      {results && (
        <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4">
            Your Cardiac Risk Assessment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
              <div className="mb-4">
                <p className="text-sm text-gray-600">Risk Class</p>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  Class {results.riskClass}
                </p>
                <p className="text-sm text-gray-500">
                  Estimated complication rate: {results.complications}%
                </p>
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

export default CardiacRiskCalculator;