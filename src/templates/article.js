import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from 'components/Layout';
import TableOfContents from 'components/TableOfContents';

const ArticleTemplate = ({ data, pageContext }) => {
  const { markdownRemark } = data;
  const { frontmatter, html, headings } = markdownRemark;
  const { previous, next } = pageContext;

  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
  
      const targetId = decodeURIComponent(anchor.getAttribute('href').substring(1));
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
  
        const nav = document.querySelector('nav');
        const navHeight = nav?.offsetHeight ?? 0;
        const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - navHeight - 8;
  
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
  
        // 해시도 수동으로 갱신
        window.history.replaceState(null, '', `#${targetId}`);
      }
    };
  
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <Layout title={`${frontmatter.title} - Senior Frontend Engineer : HungSun LIM`}>
      <div className="max-w-5xl mx-auto px-2 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* 메인 컨텐츠 */}
          <article className="lg:col-span-4">
            {/* 아티클 헤더 */}
            <header className="mb-8 border-b border-border-strong pb-4">
              <nav className="mb-3">
                <Link to="/articles" className="text-primary hover:underline text-xs font-medium">
                  ← Articles
                </Link>
              </nav>
              <h1 className="text-2xl font-bold mb-2 tracking-tight">{frontmatter.title}</h1>
              <div className="flex items-center space-x-3 text-xs text-subtle mb-4">
                <time>{frontmatter.date}</time>
                {frontmatter.tags && frontmatter.tags.length > 0 && (
                  <div className="flex space-x-1">
                    {frontmatter.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 border border-border bg-surface text-subtle rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {frontmatter.description && <p className="text-base text-subtle mb-2">{frontmatter.description}</p>}
            </header>

            {/* 아티클 본문 */}
            <div className="prose prose-sm dark:prose-invert max-w-none mb-12" dangerouslySetInnerHTML={{ __html: html }} />

            {/* 이전/다음 글 네비게이션 */}
            <nav className="pt-8 border-t border-border-strong mt-8">
              <div className="flex justify-between gap-2">
                {previous ? (
                  <Link
                    to={`/article/${previous.fields.slug}`}
                    className="flex-1 pr-4 text-left text-xs text-subtle hover:text-primary">
                    <div className="mb-1">이전 글</div>
                    <div className="text-primary font-medium truncate">{previous.frontmatter.title}</div>
                  </Link>
                ) : (
                  <div className="flex-1"></div>
                )}
                {next ? (
                  <Link to={`/article/${next.fields.slug}`} className="flex-1 pl-4 text-right text-xs text-subtle hover:text-primary">
                    <div className="mb-1">다음 글</div>
                    <div className="text-primary font-medium truncate">{next.frontmatter.title}</div>
                  </Link>
                ) : (
                  <div className="flex-1"></div>
                )}
              </div>
            </nav>
          </article>

          {/* 사이드바 - 목차 */}
          <aside className="lg:col-span-2 hidden lg:block">
            <div className="sticky top-8">
              <TableOfContents headings={headings} />
            </div>
          </aside>
        </div>

        {/* space for scrollspy / 30vh */}
        <div style={{ height: '30vh' }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
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
