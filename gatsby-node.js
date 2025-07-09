const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // 아티클 페이지 생성
  const result = await graphql(`
    query {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              description
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const articles = result.data.allMarkdownRemark.edges;

  // 각 아티클에 대한 개별 페이지 생성
  articles.forEach(({ node }, index) => {
    const previous = index === articles.length - 1 ? null : articles[index + 1].node;
    const next = index === 0 ? null : articles[index - 1].node;

    createPage({
      path: `/article/${node.fields.slug}`,
      component: path.resolve('./src/pages/article.js'),
      context: {
        id: node.id,
        slug: node.fields.slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    // slug 필드 생성
    const slug = node.frontmatter.title
      .toLowerCase()
      .replace(/[^a-z0-9가-힣]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
}; 