import { Story, Meta } from '@storybook/react';
import Toast from './Toast';
import Props from './Toast.types';

export default {
  title: 'Elements/Toast/Description',
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
      primaryButton={{ label: 'Button', onClick: () => {} }}
      secondaryButton={{ label: 'Button', onClick: () => {} }}
      onClose={() => {}}
    />
    <Toast {...args} onClose={() => {}} style={{ top: '180px' }} />
    <Toast
      {...args}
      primaryButton={{ label: 'Button', onClick: () => {} }}
      secondaryButton={{ label: 'Button', onClick: () => {} }}
      style={{ top: '305px' }}
    />
    <Toast {...args} style={{ top: '455px' }} />
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
  variant: 'description',
};

Success.args = {
  title: 'Header',
  subtitle: 'Description',
  status: 'success',
  variant: 'description',
};

Warning.args = {
  title: 'Header',
  subtitle: 'Description',
  status: 'warning',
  variant: 'description',
};

Danger.args = {
  title: 'Header',
  subtitle: 'Description',
  status: 'danger',
  variant: 'description',
};

const Grid = ({ children }: any) => (
  <div className="d-flex flex-column" style={{ gap: '8px' }}>
    {children}
  </div>
);
