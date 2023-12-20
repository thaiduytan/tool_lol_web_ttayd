// module.exports = {
//   extends: ['mantine', 'plugin:@next/next/recommended', 'plugin:jest/recommended'],
//   plugins: ['testing-library', 'jest'],
//   overrides: [
//     {
//       files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
//       extends: ['plugin:testing-library/react'],
//     },
//   ],
//   parserOptions: {
//     project: './tsconfig.json',
//   },
//   rules: {
//     'react/react-in-jsx-scope': 'off',
//     'import/extensions': 'off',
//   },
// };
module.exports = {
  extends: 'google',
  quotes: [2, 'single'],
  globals: {
    SwaggerEditor: false
  },
  env: {
    browser: true
  },
  rules:{
    "linebreak-style": 0
  }
};
