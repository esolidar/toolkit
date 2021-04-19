import SocialNetworks from './SocialNetworks';

export default {
  title: 'Components/SocialNetworks',
  component: SocialNetworks,
};

const Template = args => <SocialNetworks {...args} />;

export const Default = Template.bind({});
Default.args = {
  icons: [
    { class: 'icon-facebook', url: 'https://www.facebook.com/esolidar' },
    { class: 'icon-twitter', url: '#' },
    { class: 'icon-linkedin2', url: '#' },
    { class: 'icon-google-plus', url: '#' },
  ],
  headingText: 'All rights reserved.',
};
