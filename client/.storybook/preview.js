/** @type { import('@storybook/react').Preview } */

import { Preview } from '@storybook/react';
import "../src/components/styles.scss";

import '../src/components/styles.scss';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
