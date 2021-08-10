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
export const NotShowFacebook: Story<Props> = Template.bind({});
export const NotShowTwitter: Story<Props> = Template.bind({});
export const NotShowWhatsapp: Story<Props> = Template.bind({});
export const NotShowCopyToClipboard: Story<Props> = Template.bind({});

Default.args = {
  title: 'Campanha Solidária de Crowdfunding',
  windowLocationHref:
    'https://community.testesolidar.com/pt/crowdfunding/detail/137-teste-campanha-real-3',
};

NotShowFacebook.args = {
  title: 'Campanha Solidária de Crowdfunding',
  showFacebook: false,
  windowLocationHref:
    'https://community.testesolidar.com/pt/crowdfunding/detail/137-teste-campanha-real-3',
};

NotShowTwitter.args = {
  title: 'Campanha Solidária de Crowdfunding',
  showTwitter: false,
  windowLocationHref:
    'https://community.testesolidar.com/pt/crowdfunding/detail/137-teste-campanha-real-3',
};

NotShowWhatsapp.args = {
  title: 'Campanha Solidária de Crowdfunding',
  showWhatsapp: false,
  windowLocationHref:
    'https://community.testesolidar.com/pt/crowdfunding/detail/137-teste-campanha-real-3',
};

NotShowCopyToClipboard.args = {
  title: 'Campanha Solidária de Crowdfunding',
  showCopyToClipboard: false,
  windowLocationHref:
    'https://community.testesolidar.com/pt/crowdfunding/detail/137-teste-campanha-real-3',
};
