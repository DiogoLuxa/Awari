const { node } = require('prop-types');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off', // Desativa a regra de segurança para links com target="_blank"
    'no-unused-vars': 'off', // desativa a regra 'no-unused-vars'
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        endOfLine: 'auto',
      },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
