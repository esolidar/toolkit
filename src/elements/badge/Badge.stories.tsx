import { Story, Meta } from '@storybook/react';
import Badge from './Badge';
import Props from './Badge.types';

export default {
  title: 'Elements/Badge',
  component: Badge,
  parameters: {
    jest: ['Badge.test.js'],
  },
  argTypes: {
    extraClass: {
      options: [
        'black',
        'dark-gray',
        'white',
        'turquoise',
        'green',
        'red',
        'yellow',
        'blue',
        'dark-blue',
        'default',
      ],
      control: { type: 'radio' },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    type: {
      options: ['default', 'text', 'button'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <Badge {...args} />;

export const Default: Story<Props> = Template.bind({});
// export const Squared: Story<Props> = Template.bind({});
export const PlainText: Story<Props> = Template.bind({});
export const Icon: Story<Props> = Template.bind({});
export const FullWidth: Story<Props> = Template.bind({});
export const Button: Story<Props> = Template.bind({});

Default.args = {
  text: 'toolkit.private',
};

// Squared.args = {
//   rounded: false,
//   text: 'toolkit.private',
// };

PlainText.args = {
  plaintext: 'Plaintext',
  extraClass: 'success',
};

Icon.args = {
  text: 'toolkit.private',
  icon: 'StarBold',
  iconDataTestId: 'badge-icon',
};

FullWidth.args = {
  text: 'toolkit.private',
  fullWidth: true,
};

Button.args = {
  plaintext: 'Button',
  type: 'button',
  dataTestId: 'badge-button',
  className: 'btn-badge',
  onClick: () => {
    // eslint-disable-next-line no-alert
    alert('you clicked');
  },
};
