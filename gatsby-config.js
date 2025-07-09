module.exports = {
  siteMetadata: {
    title: `Senior Frontend Engineer : HungSun LIM`,
    siteUrl: `https://majac6.github.io`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: './src/content/articles/',
      },
    },
  ],
};
