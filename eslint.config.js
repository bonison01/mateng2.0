/** @type {import('eslint').Linter.FlatConfig} */
const config = [
  {
    // This config object applies to all files
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'), // Require the TypeScript parser
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: { // Move ecmaFeatures here
        ecmaFeatures: {
          jsx: true, // Enable JSX
        },
      },
    },
    plugins: {
      react: require('eslint-plugin-react'), // Require the React plugin
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'), // Require the TypeScript plugin
    },
    rules: {
      // Your custom rules can go here
    },
  },
  {
    files: ['**/*.tsx', '**/*.jsx'], // Additional config for React files
    languageOptions: {
      parser: require('@typescript-eslint/parser'), // Ensure the parser is set for React files
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Rules specific to React files can go here
    },
  },
];

module.exports = config;
