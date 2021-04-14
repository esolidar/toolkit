import ErrorBoundary from './ErrorBoundary';

export default {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
};

const Template = args => <ErrorBoundary {...args} />;

export const Default = Template.bind({});
Default.args = {
  showError: true,
};
