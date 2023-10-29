const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');
const postcssSass = require('@csstools/postcss-sass');

module.exports = {
  syntax: require('postcss-scss'),
  plugins: [
    autoprefixer,
    postcssPresetEnv({
      stage: 0,
      features: {
        'custom-properties': {
          preserve: true,
        },
      },
    }),
    postcssSass,
  ],
};
