import { Story, Meta } from '@storybook/react';
import Toast from './Toast';
import Props from './Toast.types';

export default {
  title: 'Elements/Toast/SnackBar',
  component: Toast,
  parameters: {
    jest: ['Toast.test.js'],
    actions: { argTypesRegex: null },
  },
  argTypes: {
    status: {
      options: ['info', 'success', 'warning', 'danger'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <Grid>
    <Toast
      {...args}
      primaryButton={{
        label: 'Button',
        onClick: () => {
          alert('You clicked in the button');
        },
      }}
      onClose={() => {
        alert('You closed the toast');
      }}
    />
    <Toast
      {...args}
      primaryButton={{
        label: 'Button',
        onClick: () => {
          alert('You clicked in the button');
        },
      }}
    />
    <Toast {...args} />
    <Toast
      {...args}
      onClose={() => {
        alert('You closed the toast');
      }}
    />
  </Grid>
);

export const Info: Story<Props> = Template.bind({});
export const Success: Story<Props> = Template.bind({});
export const Warning: Story<Props> = Template.bind({});
export const Danger: Story<Props> = Template.bind({});

Info.args = {
  title: 'Header',
  subtitle: 'Description',
  status: 'info',
};

Success.args = {
  title: 'Header',
  subtitle: 'Description',
  status: 'success',
};

Warning.args = {
  title: 'Header',
  subtitle: 'Description',
  status: 'warning',
};

Danger.args = {
  title: 'Header',
  subtitle: 'Description',
  status: 'danger',
};

const Grid = ({ children }: any) => (
  <div className="d-flex flex-column" style={{ gap: '8px' }}>
    {children}
  </div>
);
