import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import ArticleCard from 'components/ArticleCard';
import Pagination from 'components/Pagination';

const ArticlesPage = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;
  
  const articles = data.allMarkdownRemark.edges;
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = articles.slice(startIndex, endIndex);

  return (
    <Layout title="Articles - Senior Frontend Engineer : HungSun LIM">
      <div className="max-w-3xl mx-auto px-2 py-8">
        {/* 페이지 헤더 */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold mb-2 tracking-tight">Articles</h1>
          <p className="text-base text-gray-600">
            프론트엔드 개발, React, 그리고 웹 기술에 대한 글들을 공유합니다.
          </p>
        </div>

        {/* 아티클 목록 */}
        <div className="mb-8 space-y-4">
          {currentArticles.length > 0 ? (
            currentArticles.map(({ node }) => (
              <ArticleCard key={node.id} article={node} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-base">아직 작성된 글이 없습니다.</p>
            </div>
          )}
        </div>

        {/* 페이지네이션 */}
        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            description
            tags
          }
          fields {
            slug
          }
          excerpt(pruneLength: 160)
        }
      }
    }
  }
`;

export default ArticlesPage; 