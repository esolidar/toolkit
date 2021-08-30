module.exports = {
  extends: ['@esolidar/eslint-config-esolidar'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['@esolidar/eslint-config-esolidar'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      globals: {
        React: true,
        google: true,
        mount: true,
        mountWithRouter: true,
        shallow: true,
        shallowWithRouter: true,
        context: true,
        expect: true,
        jsdom: true,
        JSX: true,
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': ['off', { extensions: ['.tsx'] }],
        // '@typescript-eslint/no-use-before-define': ['error'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
      },
    },
  ],
};
