import SitemapWebpackPlugin from 'sitemap-webpack-plugin';

const homepage = {
  path: '/',
  lastMod: new Date(),
  priority: 1.0,
  changeFreq: 'daily',
};

export default {
  configureWebpack: {
    plugins: [
      new SitemapWebpackPlugin({
        base: 'https://talzie.com/', // Replace with your website's base URL
        paths: [homepage],
        options: {
          filename: 'sitemap.xml',
          lastMod: true,
          priority: true,
          changeFreq: true,
        },
      }),
    ],
  },
};
