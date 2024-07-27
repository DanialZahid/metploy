module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  env: { browser: true, es2023: true },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],

  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'tailwind.config.js',
    'postcss.config.js',
  ],

  parser: '@typescript-eslint/parser',

  plugins: ['react-refresh'],

  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
