/** @type {import('eslint').Linter.FlatConfig} */
const config = [
  {
    // This config object applies to all files
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: {
      react: 'eslint-plugin-react',
      '@typescript-eslint': 'eslint-plugin-typescript',
    },
    rules: {
      // Your custom rules here
    },
  },
  {
    files: ['**/*.tsx', '**/*.jsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Rules specific to React files
    },
  },
];

module.exports = config;
