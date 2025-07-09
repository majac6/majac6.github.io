import React from 'react';
import { Link } from 'gatsby';

const ArticleCard = ({ article }) => {
  const { frontmatter, fields, excerpt } = article;
  
  return (
    <article className="bg-white border border-gray-200 rounded-lg p-6 transition-shadow">
      <div className="mb-3">
        <Link 
          to={`/article/${fields.slug}`}
          className="text-lg font-bold text-gray-900 hover:text-primary-600 transition-colors"
        >
          {frontmatter.title}
        </Link>
      </div>
      
      <p className="text-gray-600 text-base mb-4 line-clamp-3">
        {frontmatter.description || excerpt}
      </p>
      
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-3">
          <time className="text-xs text-gray-400">
            {frontmatter.date}
          </time>
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex space-x-1">
              {frontmatter.tags.slice(0, 3).map((tag) => (
                <span 
                  key={tag}
                  className="px-2 py-0.5 border border-gray-200 bg-gray-50 text-gray-500 text-xs rounded-full font-normal"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <Link 
          to={`/article/${fields.slug}`}
          className="text-primary-600 hover:text-primary-700 text-xs font-medium underline underline-offset-2"
        >
          읽기 →
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard; 