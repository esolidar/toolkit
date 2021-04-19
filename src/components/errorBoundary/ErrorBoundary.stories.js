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
Default.args = {
  showError: true,
};
