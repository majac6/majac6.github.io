import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from './components/Layout';
import TableOfContents from './components/TableOfContents';

const ArticleTemplate = ({ data, pageContext }) => {
  const { markdownRemark } = data;
  const { frontmatter, html, headings } = markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Layout title={`${frontmatter.title} - Senior Frontend Engineer : HungSun LIM`}>
      <div className="max-w-5xl mx-auto px-2 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 메인 컨텐츠 */}
          <article className="lg:col-span-3">
            {/* 아티클 헤더 */}
            <header className="mb-8 border-b border-gray-100 pb-4">
              <nav className="mb-3">
                <Link 
                  to="/articles" 
                  className="text-primary-600 hover:underline text-xs font-medium"
                >
                  ← Articles
                </Link>
              </nav>
              <h1 className="text-2xl font-bold mb-2 tracking-tight">
                {frontmatter.title}
              </h1>
              <div className="flex items-center space-x-3 text-xs text-gray-400 mb-4">
                <time>{frontmatter.date}</time>
                {frontmatter.tags && frontmatter.tags.length > 0 && (
                  <div className="flex space-x-1">
                    {frontmatter.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-0.5 border border-gray-200 bg-gray-50 text-gray-500 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {frontmatter.description && (
                <p className="text-base text-gray-600 mb-2">
                  {frontmatter.description}
                </p>
              )}
            </header>

            {/* 아티클 본문 */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* 이전/다음 글 네비게이션 */}
            <nav className="pt-8 border-t border-gray-100 mt-8">
              <div className="flex justify-between gap-2">
                {previous ? (
                  <Link
                    to={`/article/${previous.fields.slug}`}
                    className="flex-1 pr-4 text-left text-xs text-gray-500 hover:text-primary-600"
                  >
                    <div className="mb-1">이전 글</div>
                    <div className="text-primary-600 font-medium truncate">
                      {previous.frontmatter.title}
                    </div>
                  </Link>
                ) : (
                  <div className="flex-1"></div>
                )}
                {next ? (
                  <Link
                    to={`/article/${next.fields.slug}`}
                    className="flex-1 pl-4 text-right text-xs text-gray-500 hover:text-primary-600"
                  >
                    <div className="mb-1">다음 글</div>
                    <div className="text-primary-600 font-medium truncate">
                      {next.frontmatter.title}
                    </div>
                  </Link>
                ) : (
                  <div className="flex-1"></div>
                )}
              </div>
            </nav>
          </article>

          {/* 사이드바 - 목차 */}
          <aside className="lg:col-span-1 hidden lg:block">
            <TableOfContents headings={headings} />
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
        description
        tags
      }
      tableOfContents
      headings {
        id
        value
        depth
      }
    }
  }
`;

export default ArticleTemplate; 