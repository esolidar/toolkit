import { Story, Meta } from '@storybook/react';
import Title from './title';
import Props from './title.types';

export default {
  title: 'Unreleased/Title',
  component: Title,
  parameters: {
    jest: ['Title.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div>
    <Title {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const WithSubtitle: Story<Props> = Template.bind({});
export const WithoutSupportUrl: Story<Props> = Template.bind({});
export const WithoutGoBackFunc: Story<Props> = Template.bind({});
export const TitleWithIcon: Story<Props> = Template.bind({});
export const TitleWithIconDisabled: Story<Props> = Template.bind({});
export const TitleOnly: Story<Props> = Template.bind({});
export const WithRating: Story<Props> = Template.bind({});

Default.args = {
  title: 'Crowdfunding title',
  supportingName: 'Helpo',
  supportingUrl: 'https://community.testesolidar.com/pt/npo/detail/30-helpo/',
  goBackUrl: '#',
};

WithSubtitle.args = {
  title: 'Crowdfunding title',
  subtitle: 'Help support the Acme Inc. initiatives',
};

WithoutSupportUrl.args = {
  title: 'Crowdfunding title',
  supportingName: 'Joel Calheiros',
  goBackUrl: '#',
};

WithoutGoBackFunc.args = {
  title: 'Crowdfunding title',
  supportingName: 'Joel Calheiros',
  onClickGoBack: () => {},
};

TitleWithIcon.args = {
  title: 'Crowdfunding title',
  icon: {
    class: 'icon-external-link',
    href: '/',
  },
};

TitleWithIconDisabled.args = {
  title: 'Crowdfunding title',
  icon: {
    class: 'icon-external-link',
    href: '/',
    disabled: true,
    disabledText: 'Unavailable',
  },
};

TitleOnly.args = {
  title: 'Crowdfunding title',
};
WithRating.args = {
  title: 'Crowdfunding title',
  rating: 4,
  showRating: true,
};
