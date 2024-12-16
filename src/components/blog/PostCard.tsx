import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';

interface PostCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  readTime: string;
  slug: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  excerpt,
  image,
  category,
  author,
  readTime,
  slug
}) => {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-teal-600 bg-teal-50 rounded-full mb-4">
          {category}
        </span>
        <Link to={`/blog/${slug}`} className="block">
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-teal-600">{title}</h3>
        </Link>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500">
          <div className="flex items-center mr-4">
            <User className="w-4 h-4 mr-1" />
            {author}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {readTime}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;