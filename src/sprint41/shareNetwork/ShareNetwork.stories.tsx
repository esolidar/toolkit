import { Story, Meta } from '@storybook/react';
import ShareNetwork from './ShareNetwork';
import Props from './ShareNetwork.types';

export default {
  title: 'Sprint41/ShareNetwork',
  component: ShareNetwork,
  parameters: {
    jest: ['ShareNetwork.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="w-25 mt-5">
    <ShareNetwork {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  title: 'teste',
};
