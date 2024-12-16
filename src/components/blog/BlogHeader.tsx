import React from 'react';
import { Dumbbell } from 'lucide-react';

const BlogHeader = () => {
  return (
    <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Life with Expert Fitness & Health Tips
          </h1>
          <p className="text-xl text-cyan-50 mb-8">
            Evidence-based articles on workout optimization, nutrition science, and healthy living
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Dumbbell className="w-6 h-6" />
            <span className="text-lg">Your trusted source for fitness knowledge</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;