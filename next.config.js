const withTM = require("next-transpile-modules");
const withCss = require("@zeit/next-css");

module.exports = withCss(
  withTM({
    pageExtensions: ["jsx", "js", "bs.js"],
    transpileModules: ["bs-platform"]
  })
);
