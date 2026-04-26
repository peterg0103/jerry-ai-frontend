const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/lt",
    createProxyMiddleware({
      target: "https://jerry-ai.net",
      changeOrigin: true,
      secure: true,
    })
  );
};