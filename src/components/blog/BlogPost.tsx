import React from 'react';
import { Clock, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: React.ReactNode;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, author, date, readTime, category, content }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/blog" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </Link>
      
      <header className="mb-8">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-teal-600 bg-teal-50 rounded-full mb-4">
          {category}
        </span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <div className="flex items-center space-x-4 text-gray-600">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            {author}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {readTime}
          </div>
          <span>{date}</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        {content}
      </div>
    </article>
  );
};

export default BlogPost;