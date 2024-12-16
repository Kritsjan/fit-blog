import React from 'react';
import PostCard from './PostCard';
import { useFeaturedPosts } from '../../hooks/useFeaturedPosts';

const FeaturedPosts = () => {
  const featuredPosts = useFeaturedPosts();

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredPosts.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;