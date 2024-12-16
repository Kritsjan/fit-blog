import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart, Scale, Target, BookOpen, Calculator } from 'lucide-react';
import { useFeaturedPosts } from '../hooks/useFeaturedPosts';

function Home() {
  useEffect(() => {
    document.title = 'Health Calculator: Free Online Health & Fitness Calculators';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Free online health calculators for body composition, macros, heart health, and ideal weight. Get personalized health insights and recommendations instantly.');
    }
  }, []);

  const featuredPosts = useFeaturedPosts();

  const popularTools = [
    {
      title: 'Macro Calculator',
      description: 'Calculate your ideal macronutrient ratios',
      icon: Calculator,
      link: '/macro-calculator',
      category: 'Nutrition'
    },
    {
      title: 'Body Fat Calculator',
      description: 'Estimate your body fat percentage',
      icon: Scale,
      link: '/body-fat-calculator',
      category: 'Body Composition'
    },
    {
      title: 'Max Heart Rate',
      description: 'Find your optimal training zones',
      icon: Heart,
      link: '/max-heart-rate-calculator',
      category: 'Heart Health'
    },
    {
      title: 'Ideal Weight',
      description: 'Discover your healthy weight range',
      icon: Target,
      link: '/ideal-weight-calculator',
      category: 'Weight Management'
    }
  ];

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Welcome to MyHealthCalculator.fit
          </h1>
          
          <p className="text-lg text-gray-600">
            Your go-to free online health calculator! We provide tools to help you understand your health metrics, 
            make informed decisions, and take action for better health.
          </p>
        </div>

        {/* Popular Tools Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Health Tools</h2>
            <p className="text-lg text-gray-600">
              Free calculators to help you reach your fitness goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.link}
                  to={tool.link}
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                          {tool.title}
                        </h3>
                        <p className="text-gray-600">{tool.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-teal-600 font-medium">{tool.category}</span>
                      <span className="text-gray-400 group-hover:text-teal-600 transition-colors">→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-2">
              Unlock Your Health Potential
            </h2>
            <p className="text-gray-600">Discover the hidden stories behind your health data.</p>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-2">
              Crunch the Numbers, Anywhere, Anytime
            </h2>
            <p className="text-gray-600">Access powerful health insights on any device, without spending a dime.</p>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-2">
              Simplicity Meets Sophistication
            </h2>
            <p className="text-gray-600">Complex health metrics, simplified. Get expert-level insights without the confusion.</p>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-2">
              Your Personal Health Detective
            </h2>
            <p className="text-gray-600">Uncover detailed health clues and actionable recommendations tailored just for you.</p>
          </div>
        </div>

        {/* Featured Blog Posts */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-teal-600" />
              Latest Health & Fitness Tips
            </h2>
            <Link 
              to="/blog"
              className="text-teal-600 hover:text-teal-700 font-semibold flex items-center gap-1"
            >
              View All
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPosts.map(post => (
              <Link 
                key={post.id}
                to={`/blog/${post.slug}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-teal-600 bg-teal-50 rounded-full mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="text-sm text-gray-500">
                    {post.readTime} · {post.author}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Track Macros Section */}
          <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <Link 
                to="/category/track-macros" 
                className="flex items-center space-x-2 mb-4 hover:text-cyan-100"
              >
                <Activity className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Track Macros</h2>
              </Link>
              <div className="space-y-3 bg-white/10 rounded-lg p-4">
                <Link to="/keto-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Keto Calculator
                </Link>
                <Link to="/intermittent-fasting-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Intermittent Fasting
                </Link>
                <Link to="/macro-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Macro Calculator
                </Link>
                <Link to="/protein-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Protein Calculator
                </Link>
              </div>
            </div>
          </div>

          {/* Body Composition Section */}
          <div className="bg-gradient-to-br from-cyan-600 to-teal-500 text-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <Link 
                to="/category/body-composition" 
                className="flex items-center space-x-2 mb-4 hover:text-cyan-100"
              >
                <Scale className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Body Composition</h2>
              </Link>
              <div className="space-y-3 bg-white/10 rounded-lg p-4">
                <Link to="/body-fat-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Body Fat Calculator
                </Link>
                <Link to="/waist-hip-ratio-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Waist-to-Hip Ratio
                </Link>
                <Link to="/obesity-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Obesity Calculator
                </Link>
                <Link to="/lean-body-mass-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Lean Body Mass
                </Link>
              </div>
            </div>
          </div>

          {/* Heart Health Section */}
          <div className="bg-gradient-to-br from-teal-600 to-emerald-500 text-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <Link 
                to="/category/heart-health" 
                className="flex items-center space-x-2 mb-4 hover:text-cyan-100"
              >
                <Heart className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Heart Health</h2>
              </Link>
              <div className="space-y-3 bg-white/10 rounded-lg p-4">
                <Link to="/max-heart-rate-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Max Heart Rate Calculator
                </Link>
              </div>
            </div>
          </div>

          {/* Find Ideal Weight Section */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <Link 
                to="/category/ideal-weight" 
                className="flex items-center space-x-2 mb-4 hover:text-cyan-100"
              >
                <Target className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Find Ideal Weight</h2>
              </Link>
              <div className="space-y-3 bg-white/10 rounded-lg p-4">
                <Link to="/ideal-weight-calculator" className="block p-2 rounded-lg hover:bg-white/20 transition-colors">
                  Ideal Weight Calculator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;