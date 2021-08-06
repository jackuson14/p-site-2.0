// const withFonts = require('next-fonts');
// module.exports = withFonts();
module.exports = {
  future: {
    webpack5: true,
  },
  webpack: function (config, options) {
    config.experiments = {};
    return config;
  },
};
const path = require("path");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
module.exports = withPWA({
  pwa: {
      dest: "public",
      runtimeCaching,
  },
  
  });