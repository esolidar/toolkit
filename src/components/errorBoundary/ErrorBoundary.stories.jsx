import React from 'react';
import ErrorBoundary from './ErrorBoundary';

export default {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
  argTypes: {
    color: {
      control: {
        type: 'object',
      },
    },
  },
};

const Template = args => <ErrorBoundary {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['ErrorBoundary.test.js'],
};
Default.args = {
  showError: true,
};
