import React from 'react';
import { Mail } from 'lucide-react';

const NewsletterSignup = () => {
  return (
    <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl shadow-md p-6 text-white">
      <div className="flex items-center space-x-2 mb-4">
        <Mail className="w-6 h-6" />
        <h2 className="text-xl font-bold">Get Weekly Tips</h2>
      </div>
      <p className="text-cyan-50 mb-6">
        Subscribe to receive expert fitness advice and exclusive content directly in your inbox.
      </p>
      <form className="space-y-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-cyan-300"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-white text-teal-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;