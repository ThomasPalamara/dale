import { configure } from '@storybook/react';
import '../src/style/index.css';

// automatically import all files ending in *.stories.js
configure(
  require.context('../src/components', true, /\.stories\.(js|ts)x?$/),
  module
);
