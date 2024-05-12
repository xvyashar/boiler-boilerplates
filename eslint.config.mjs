import globals from 'globals';

export default [
  { files: ['src/**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
];
