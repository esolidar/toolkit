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
  <div className="mt-5">
    <ShareNetwork {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Campanha Solidária de Crowdfunding',
  windowLocationHref:
    'https://community.testesolidar.com/pt/crowdfunding/detail/137-teste-campanha-real-3',
};
