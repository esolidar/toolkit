import { Story, Meta } from '@storybook/react';
import { useIntl } from 'react-intl';
import LoginToInteract from './LoginToInteract';
import Props from './LoginToInteract.types';

export default {
  title: 'Components/LoginToInteract',
  component: LoginToInteract,
  parameters: {
    jest: ['LoginToInteract.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <LoginToInteract {...args} />;
const intl = useIntl();

export const Default: Story<Props> = Template.bind({});

Default.args = {
  text: intl.formatMessage({ id: 'feed.create.post.without.login' }),
  onClick: () => {
    alert('You clicked the button!');
  },
};
