const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/websocket",
    createProxyMiddleware({
      target: "ws://local:5000",
      changeOrigin: true,
      ws: true,
    })
  );
};
