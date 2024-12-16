import React from 'react';
import CardiacRiskCalculatorComponent from '../components/CardiacRiskCalculator';

function CardiacRiskCalculator() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Revised Cardiac Risk Index Calculator: Assess Surgery Risk
          </h1>
          
          <p className="text-lg text-gray-600">
            Use our comprehensive RCRI calculator to evaluate perioperative cardiac risk. This revised cardiac 
            risk calculator helps healthcare providers assess the risk of cardiac complications during non-cardiac 
            surgery using the validated RCRI risk calculator methodology.
          </p>
        </div>

        <CardiacRiskCalculatorComponent />

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 prose prose-teal max-w-none">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-8">
            Understanding the Revised Cardiac Risk Index Calculator
          </h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">What is the RCRI Calculator?</h3>
              <p className="text-gray-600">
                The Revised Cardiac Risk Index (RCRI) calculator is a validated tool used to assess the risk of major 
                cardiac complications during non-cardiac surgery. This rcri risk calculator helps healthcare providers 
                make informed decisions about preoperative cardiac evaluation and perioperative management.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Risk Factors Evaluated</h3>
              <p className="text-gray-600">
                The revised cardiac risk calculator considers six independent predictors:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-600">
                <li>High-risk surgical procedures</li>
                <li>History of ischemic heart disease</li>
                <li>History of congestive heart failure</li>
                <li>History of cerebrovascular disease</li>
                <li>Insulin-dependent diabetes mellitus</li>
                <li>Preoperative renal dysfunction</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Risk Classification</h3>
              <p className="text-gray-600">
                The RCRI calculator classifies patients into risk categories based on the number of risk factors:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-600">
                <li>Class I (0 factors): 0.4% risk</li>
                <li>Class II (1 factor): 0.9% risk</li>
                <li>Class III (2 factors): 6.6% risk</li>
                <li>Class IV (≥3 factors): 11% or higher risk</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Clinical Applications</h3>
              <p className="text-gray-600">
                Healthcare providers use the revised cardiac risk calculator to:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-600">
                <li>Guide preoperative cardiac evaluation</li>
                <li>Inform perioperative management decisions</li>
                <li>Identify patients who need additional cardiac testing</li>
                <li>Plan appropriate postoperative monitoring</li>
                <li>Facilitate informed consent discussions</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-700">How accurate is the RCRI calculator?</h4>
                  <p className="text-gray-600">
                    The revised cardiac risk index calculator has been extensively validated across multiple 
                    surgical populations and provides reliable risk stratification for major cardiac complications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-teal-700">When should the RCRI risk calculator be used?</h4>
                  <p className="text-gray-600">
                    The rcri calculator should be used before non-cardiac surgery to assess perioperative cardiac 
                    risk and guide preoperative evaluation strategies.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-teal-700">Can the revised cardiac risk calculator be used for all surgeries?</h4>
                  <p className="text-gray-600">
                    While the RCRI calculator is validated for non-cardiac surgery, it may not be as accurate for 
                    certain procedures like transplant surgery or emergency operations.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-teal-700">How does the rcri calculator influence surgical planning?</h4>
                  <p className="text-gray-600">
                    Results from the revised cardiac risk index calculator may influence decisions about:
                    - Timing of surgery
                    - Need for additional cardiac testing
                    - Level of postoperative care
                    - Perioperative monitoring requirements
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CardiacRiskCalculator;