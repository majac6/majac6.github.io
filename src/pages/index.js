import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from 'components/Layout';

const IndexPage = ({ data }) => {
  const articles = data?.allMarkdownRemark?.edges || [];

  return (
    <Layout title="Home - Senior Frontend Engineer : HungSun LIM">
      <div className="max-w-1xl mx-auto px-2 py-8">
        {/* 히어로 섹션 */}
        <section className="text-center mb-16">
          <div className="mb-8">
            <img
              src="https://s.gravatar.com/avatar/ac88fef73fb20037feaf38ff349b129c?s=500&r=pg"
              alt="HungSun LIM"
              className="w-28 h-28 rounded-full mx-auto mb-5 border border-border"
            />
          </div>
          <h1 className="text-3xl font-bold mb-3 tracking-tight">
            안녕하세요, 임흥선입니다 <span className="align-middle">👋</span>
          </h1>
          <p className="text-lg text-subtle mb-7 max-w-xl mx-auto">
            Senior Frontend Engineer로서 다양한 기술과 경험을 공유하는 공간입니다.
            <br />
            프론트엔드 개발, React, 그리고 웹 기술에 대한 이야기를 담고 있습니다.
          </p>
          <div className="flex justify-center gap-2">
            <Link
              to="/articles"
              className="px-5 py-2 border border-primary text-primary font-semibold rounded hover:bg-primary-bg transition-colors text-base">
              글 보기
            </Link>
            <Link
              to="/about"
              className="px-5 py-2 border border-border text-muted font-medium rounded hover:bg-card-bg transition-colors text-base">
              이력서 보기
            </Link>
          </div>
        </section>

        {/* 최근 글 섹션 */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 border-b border-border-strong pb-2">최근 글</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {articles.length > 0 ? (
              articles.map(({ node }) => (
                <Link
                  key={node.id}
                  to={`/article/${node.fields.slug}`}
                  className="group bg-card-bg border border-card-border rounded-lg p-5 block transition-all duration-200 hover:shadow-lg hover:border-primary-hover hover:bg-primary-bg focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label={`'${node.frontmatter.title}' 글 상세보기`}
                >
                  <h3 className="text-base font-semibold mb-1 group-hover:text-primary-hover transition-colors">{node.frontmatter.title}</h3>
                  <p className="text-subtle text-sm mb-3">{node.frontmatter.description || node.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-subtle">{node.frontmatter.date}</span>
                    {/* 읽기 버튼 제거 */}
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-subtle text-base">아직 작성된 글이 없습니다.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 2) {
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

export default IndexPage;
