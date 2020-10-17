module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly'
  },
  overrides: [
    {
      files: [
        '*.ts',
        '*.tsx',
        '*.d.ts'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
      },
      plugins: [
        'react',
        '@typescript-eslint',
        'prettier'
      ],
      rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
          'warn',
          { extensions: ['.jsx', '.js'] }
        ],
        'import/prefer-default-export': 'off',
        semi: "off"
      },
    },
};
