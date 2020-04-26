require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Home | Online-store',
    description: 'A starter kit for TypeScript-based Gatsby projects with sensible defaults.',
    keywords: 'onlinestore',
    siteUrl: 'http://localhost:8000',
    author: {
      name: 'Minh Trung',
      url: '',
      email: 'minhtrung.imalive@gmail.com',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-emotion',
      options: {},
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/category/*`] },
    },
  ],
};
