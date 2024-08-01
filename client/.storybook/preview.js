/** @type { import('@storybook/react').Preview } */

import { Preview } from '@storybook/react';
import "../src/components/styles.scss";

import '../src/output.css'; // replace with the name of your tailwind css file

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
