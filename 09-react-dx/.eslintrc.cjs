module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: { react: { version: 'detect' } },
  plugins: ['react', 'react-refresh'],
  rules: {
    'react/jsx-uses-react': 'off', // Desativa a necessidade de React estar em escopo
    'react/react-in-jsx-scope': 'off', // Desativa a necessidade de React estar em escopo para JSX
    'react/jsx-uses-vars': 'error', // Garante que variáveis usadas em JSX são marcadas como utilizadas,
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
      },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
