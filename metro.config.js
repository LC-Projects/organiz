const { getDefaultConfig, mergeConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    assetExts: [...defaultConfig.resolver.assetExts, "lottie"],
  },
};

module.exports = config;