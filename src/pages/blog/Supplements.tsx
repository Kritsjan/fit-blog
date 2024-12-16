import React, { useEffect } from 'react';
import BlogPost from '../../components/blog/BlogPost';
import { Link } from 'react-router-dom';

function Supplements() {
  useEffect(() => {
    document.title = 'Essential Supplements for Muscle Growth - MyHealthCalculator.fit';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover the most effective supplements for muscle growth and recovery. Learn which supplements actually work and how to use them properly for optimal results.');
    }
  }, []);

  const content = (
    <div className="space-y-8">
      <div className="space-y-4">
        <p className="text-xl text-gray-600 leading-relaxed">
          Let's cut through the supplement industry noise and focus on what actually works for muscle growth.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Before we dive in, remember: supplements are just that - supplemental to a solid training program and nutrition plan. Use our <Link to="/macro-calculator" className="text-teal-600 hover:text-teal-700">macro calculator</Link> and <Link to="/protein-calculator" className="text-teal-600 hover:text-teal-700">protein calculator</Link> to dial in your basics first.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">The Foundation: Essential Supplements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">1. Whey Protein</h3>
            <p className="text-gray-600">The gold standard for muscle growth. Fast-absorbing and rich in BCAAs.</p>
            <ul className="list-disc pl-6 mt-4 text-gray-600">
              <li>20-30g per serving</li>
              <li>Post-workout optimal</li>
              <li>High bioavailability</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">2. Creatine Monohydrate</h3>
            <p className="text-gray-600">The most researched supplement for strength and muscle gains.</p>
            <ul className="list-disc pl-6 mt-4 text-gray-600">
              <li>5g daily</li>
              <li>No loading needed</li>
              <li>Timing not critical</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">3. Essential Vitamins</h3>
            <p className="text-gray-600">Fill nutritional gaps for optimal recovery.</p>
            <ul className="list-disc pl-6 mt-4 text-gray-600">
              <li>Vitamin D3</li>
              <li>Magnesium</li>
              <li>Zinc</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Secondary Supplements Worth Considering</h2>
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">4. Beta-Alanine</h3>
              <p className="text-gray-600">Improves muscular endurance during high-intensity training.</p>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>3-5g daily</li>
                <li>May cause harmless tingling</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">5. Caffeine</h3>
              <p className="text-gray-600">Enhances focus and training intensity.</p>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>200-400mg pre-workout</li>
                <li>Cycle to maintain sensitivity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Timing and Implementation</h2>
        <p className="text-gray-600 leading-relaxed">
          The key to supplement success is consistency and proper timing. Here's how to implement each:
        </p>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Morning Protocol</h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Vitamins with breakfast</li>
                <li>Creatine (if not taking post-workout)</li>
                <li>Protein shake if needed for daily goals</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Pre-Workout</h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Caffeine (30-45 mins before)</li>
                <li>Beta-alanine</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Post-Workout</h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Whey protein immediately</li>
                <li>Creatine</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Common Mistakes to Avoid</h2>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="font-bold text-red-500 mr-2">✗</span>
              <span>Relying on supplements before optimizing diet and training</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-red-500 mr-2">✗</span>
              <span>Taking too many supplements at once</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-red-500 mr-2">✗</span>
              <span>Buying based on marketing hype rather than research</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-red-500 mr-2">✗</span>
              <span>Not tracking results and adjusting accordingly</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">Do I need supplements to build muscle?</h3>
            <p className="text-gray-600">
              No, but they can help optimize your results when combined with proper training and nutrition. Focus on hitting your macros first - use our <Link to="/macro-calculator" className="text-teal-600 hover:text-teal-700">macro calculator</Link> to get started.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">When should I take protein powder?</h3>
            <p className="text-gray-600">
              Timing is less important than hitting your total daily protein goals. Calculate your needs using our <Link to="/protein-calculator" className="text-teal-600 hover:text-teal-700">protein calculator</Link>.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">Are pre-workouts necessary?</h3>
            <p className="text-gray-600">
              Pre-workouts can enhance performance but aren't essential. Start with basics like creatine and caffeine before exploring more complex supplements.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">The Bottom Line</h2>
        <p className="text-gray-600 leading-relaxed">
          Remember: supplements are meant to enhance an already solid foundation of training and nutrition. Use our <Link to="/macro-calculator" className="text-teal-600 hover:text-teal-700">macro calculator</Link> and <Link to="/lean-body-mass-calculator" className="text-teal-600 hover:text-teal-700">lean body mass calculator</Link> to dial in your basics first.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Start with the essentials, track your results, and adjust based on your progress. Quality supplements can help, but they're no substitute for consistent training and proper nutrition.
        </p>
      </section>
    </div>
  );

  return (
    <BlogPost
      title="Essential Supplements for Muscle Growth"
      author="Mike Johnson"
      date="March 15, 2024"
      readTime="9 min read"
      category="Supplements"
      content={content}
    />
  );
}

export default Supplements;