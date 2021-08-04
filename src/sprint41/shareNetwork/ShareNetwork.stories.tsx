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
  showFacebook: true,
  showTwitter: true,
  showWhatsapp: true,
  showCopyToClipboard: true,
  windowLocationHref:
    'https://community.testesolidar.com/pt/crowdfunding/detail/137-teste-campanha-real-3',
};

NotShowFacebook.args = {
  title: 'Campanha Solidária de Crowdfunding',
  showFacebook: false,
  showTwitter: true,
  showWhatsapp: true,
  showCopyToClipboard: true,
  windowLocationHref:
    'https://community.testesolidar.com/pt/crowdfunding/detail/137-teste-campanha-real-3',
};

NotShowTwitter.args = {
  title: 'Campanha Solidária de Crowdfunding',
  showFacebook: true,
  showTwitter: false,
  showWhatsapp: true,
  showCopyToClipboard: true,
  windowLocationHref:
    'https://community.testesolidar.com/pt/crowdfunding/detail/137-teste-campanha-real-3',
};

NotShowWhatsapp.args = {
  title: 'Campanha Solidária de Crowdfunding',
  showFacebook: true,
  showTwitter: true,
  showWhatsapp: false,
  showCopyToClipboard: true,
  windowLocationHref:
    'https://community.testesolidar.com/pt/crowdfunding/detail/137-teste-campanha-real-3',
};

NotShowCopyToClipboard.args = {
  title: 'Campanha Solidária de Crowdfunding',
  showFacebook: true,
  showTwitter: true,
  showWhatsapp: true,
  showCopyToClipboard: false,
  windowLocationHref:
    'https://community.testesolidar.com/pt/crowdfunding/detail/137-teste-campanha-real-3',
};
