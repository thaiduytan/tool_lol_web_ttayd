'use client';

import { createTheme, MantineProvider, rem } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
  colors: {
    // Add your color
    black: ['#rgba(30, 30, 30, 0.67)', '#C1CCF6'],
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
});
