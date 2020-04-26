const fs = require('fs-extra');
const path = require('path');

const BASE_DIR = './src/routes';
const dirRouteParser = (baseDirectory, directoryName) => {
  return `${baseDirectory}/${directoryName}/index.tsx`;
};

exports.onPostBuild = () => {
  fs.copySync(path.join(__dirname, '/src/locales'), path.join(__dirname, '/public/locales'));
};

exports.onCreateWebpackConfig = ({ getConfig }) => {
  const config = getConfig();
  config.node = {
    fs: 'empty',
  };
};

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const rootRoutes = [
    {
      path: '/',
      component: dirRouteParser(BASE_DIR, 'LandingPage'),
    },
    {
      path: '/gallery',
      component: dirRouteParser(BASE_DIR, 'GalleryPage'),
    },
    {
      path: '/detail',
      component: dirRouteParser(BASE_DIR, 'DetailPage'),
    },
  ];
  rootRoutes.forEach(route => {
    createPage({
      path: route.path,
      component: path.resolve(route.component),
      context: route.context ? route.context : null,
    });
  });
};
