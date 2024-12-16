import React, { useEffect } from 'react';
import BlogHeader from '../components/blog/BlogHeader';
import FeaturedPosts from '../components/blog/FeaturedPosts';
import BlogGrid from '../components/blog/BlogGrid';
import BlogCategories from '../components/blog/BlogCategories';
import NewsletterSignup from '../components/blog/NewsletterSignup';

function Blog() {
  useEffect(() => {
    document.title = 'Fitness & Health Blog - Expert Tips for a Healthy Lifestyle';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover expert tips on fitness, nutrition, workout plans, and healthy living. Learn how to track macros, build muscle, and achieve your fitness goals.');
    }
  }, []);

  return (
    <main className="flex-grow">
      <BlogHeader />
      <div className="container mx-auto px-4 py-8">
        <FeaturedPosts />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
          <div className="lg:col-span-3">
            <BlogGrid />
          </div>
          <aside className="space-y-8">
            <BlogCategories />
            <NewsletterSignup />
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Blog;