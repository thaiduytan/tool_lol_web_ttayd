'use client';

import { createTheme, MantineProvider, rem } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
  colors: {
    // Add your color
    black: ['#1E1E1EAB', '#C1CCF6'],
    blue: ['#6EC3FD4D'],
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: "'Outfit', sans-serif",
    sizes: {
      h1: { fontSize: rem(36) },
      h2: { fontSize: rem(34) },
      h3: { fontSize: rem(30) },
    },
  },

  fontSizes: {
    normal: 'normal',
    title_30: rem(30),
    desc_16: rem(16),
    text_20: rem(20),
  },

  fontWeights: {
    normal: 400,
    bold: 700,
  },

  marginTop: {
    marginTop_60: rem('60'),
    marginTop_35: rem('35'),
  },

  borderRadius: {
    borderRadius_10: '10px',
    borderRadius_389: '389px',
  },
  borderColor: {
    borderColor_0: '#5D8FDA',
  },

  fillter: {
    blur_100: 'blur(100)',
  },
});
