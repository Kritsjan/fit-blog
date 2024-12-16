import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Apple, Heart, Brain, Scale } from 'lucide-react';

const BlogCategories = () => {
  const categories = [
    { name: 'Workout Tips', icon: Dumbbell, count: 12, slug: 'workout-tips' },
    { name: 'Nutrition', icon: Apple, count: 15, slug: 'nutrition' },
    { name: 'Health & Wellness', icon: Heart, count: 8, slug: 'health-wellness' },
    { name: 'Mental Fitness', icon: Brain, count: 6, slug: 'mental-fitness' },
    { name: 'Weight Management', icon: Scale, count: 10, slug: 'weight-management' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <div className="space-y-2">
        {categories.map(category => {
          const Icon = category.icon;
          return (
            <Link
              key={category.slug}
              to={`/blog/category/${category.slug}`}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-teal-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5 text-teal-600" />
                <span className="text-gray-700">{category.name}</span>
              </div>
              <span className="text-sm text-gray-500">{category.count}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogCategories;