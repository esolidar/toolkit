const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-intl',
    'storybook-addon-jsx',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
    '@storybook/addon-queryparams',
    '@storybook/addon-links',
    'storybook-dark-mode',
    '@storybook/addon-viewport',
    'storybook-addon-themes',
    'storybook-fixtures',
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: [
        {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]',
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};
