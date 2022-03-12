const { createProxyMiddleware } = require("http-proxy-middleware");
const { IP_PORT } = require("./src_shortcut");

module.exports = function (app) {
  // app.use("/api", createProxyMiddleware({ target: "http://localhost:3001" }));
  app.use("/api", createProxyMiddleware({ target: IP_PORT, changeOrigin: true}));
};
