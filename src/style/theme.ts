const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');
export default resolveConfig(tailwindConfig).theme;
