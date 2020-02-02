const tailwindcss = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    require('postcss-import'),
    tailwindcss('./src/style/tailwind.config.js'),
    require('autoprefixer'),
    require('postcss-apply'),
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
    cssnano,
  ],
};
//
