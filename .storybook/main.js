module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    'storybook-addon-intl',
    'storybook-addon-jsx',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
    '@storybook/addon-queryparams',
    '@storybook/addon-links',
    'storybook-dark-mode',
    '@storybook/addon-viewport',
  ],
  core: {
    builder: 'storybook-builder-vite',
  },

  async viteFinal(config, { configType }) {
    return config;
  },
};
