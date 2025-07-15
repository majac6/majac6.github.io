import React from 'react';
import { Link } from 'gatsby';

const ArticleCard = ({ article }) => {
  return (
    <Link
      to={`/article/${article.fields.slug}`}
      className="group bg-card-bg border border-card-border rounded-lg p-5 block transition-all duration-200 hover:shadow-lg hover:border-primary-hover hover:bg-primary-bg focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label={`'${article.frontmatter.title}' 글 상세보기`}
    >
      <h3 className="text-base font-semibold mb-1 group-hover:text-primary-hover transition-colors">{article.frontmatter.title}</h3>
      <p className="text-subtle text-sm mb-3">{article.frontmatter.description || article.excerpt}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs text-subtle">{article.frontmatter.date}</span>
        {/* 읽기 버튼 제거 */}
      </div>
    </Link>
  );
};

export default ArticleCard; 