import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart, Scale, Target, Calculator } from 'lucide-react';

function Sitemap() {
  useEffect(() => {
    document.title = 'Sitemap - MyHealthCalculator.fit Health Tools Directory';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Browse our complete collection of free health and fitness calculators. Find tools for body composition, macros, heart health, and ideal weight calculation.');
    }
  }, []);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Site Directory
          </h1>
          <p className="text-lg text-gray-600">
            Find all our health and fitness calculators in one place.
          </p>
        </div>

        <div className="space-y-8">
          {/* Main Pages */}
          <section>
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Main Pages</h2>
            <div className="bg-white rounded-lg shadow-md p-4">
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-teal-600 hover:text-teal-700">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="text-teal-600 hover:text-teal-700">About Us</Link>
                </li>
              </ul>
            </div>
          </section>

          {/* Track Macros */}
          <section>
            <h2 className="text-2xl font-bold text-teal-800 mb-4 flex items-center gap-2">
              <Activity className="w-6 h-6" />
              Track Macros
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4">
              <ul className="space-y-2">
                <li>
                  <Link to="/category/track-macros" className="text-teal-600 hover:text-teal-700 font-semibold">Category Overview</Link>
                </li>
                <li>
                  <Link to="/keto-calculator" className="text-teal-600 hover:text-teal-700">Keto Calculator</Link>
                </li>
                <li>
                  <Link to="/intermittent-fasting-calculator" className="text-teal-600 hover:text-teal-700">Intermittent Fasting Calculator</Link>
                </li>
                <li>
                  <Link to="/macro-calculator" className="text-teal-600 hover:text-teal-700">Macro Calculator</Link>
                </li>
                <li>
                  <Link to="/protein-calculator" className="text-teal-600 hover:text-teal-700">Protein Calculator</Link>
                </li>
              </ul>
            </div>
          </section>

          {/* Body Composition */}
          <section>
            <h2 className="text-2xl font-bold text-teal-800 mb-4 flex items-center gap-2">
              <Scale className="w-6 h-6" />
              Body Composition
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4">
              <ul className="space-y-2">
                <li>
                  <Link to="/category/body-composition" className="text-teal-600 hover:text-teal-700 font-semibold">Category Overview</Link>
                </li>
                <li>
                  <Link to="/body-fat-calculator" className="text-teal-600 hover:text-teal-700">Body Fat Calculator</Link>
                </li>
                <li>
                  <Link to="/waist-hip-ratio-calculator" className="text-teal-600 hover:text-teal-700">Waist-to-Hip Ratio Calculator</Link>
                </li>
                <li>
                  <Link to="/obesity-calculator" className="text-teal-600 hover:text-teal-700">Obesity Calculator</Link>
                </li>
                <li>
                  <Link to="/lean-body-mass-calculator" className="text-teal-600 hover:text-teal-700">Lean Body Mass Calculator</Link>
                </li>
              </ul>
            </div>
          </section>

          {/* Heart Health */}
          <section>
            <h2 className="text-2xl font-bold text-teal-800 mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Heart Health
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4">
              <ul className="space-y-2">
                <li>
                  <Link to="/category/heart-health" className="text-teal-600 hover:text-teal-700 font-semibold">Category Overview</Link>
                </li>
                <li>
                  <Link to="/max-heart-rate-calculator" className="text-teal-600 hover:text-teal-700">Max Heart Rate Calculator</Link>
                </li>
              </ul>
            </div>
          </section>

          {/* Ideal Weight */}
          <section>
            <h2 className="text-2xl font-bold text-teal-800 mb-4 flex items-center gap-2">
              <Target className="w-6 h-6" />
              Find Ideal Weight
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4">
              <ul className="space-y-2">
                <li>
                  <Link to="/category/ideal-weight" className="text-teal-600 hover:text-teal-700 font-semibold">Category Overview</Link>
                </li>
                <li>
                  <Link to="/ideal-weight-calculator" className="text-teal-600 hover:text-teal-700">Ideal Weight Calculator</Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Sitemap;