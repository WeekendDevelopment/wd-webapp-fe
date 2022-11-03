const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '^/api/',
    createProxyMiddleware({
      target: 'https://wd-webapp-be.herokuapp.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api/': '/', // remove base path
      }
    })
  );
};