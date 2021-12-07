import { Story, Meta } from '@storybook/react';
import user from '../../../__mocks__/user';
import Tag from './Tag';
import Props from './Tag.types';

export default {
  title: 'Elements/Tag',
  component: Tag,
  parameters: {
    jest: ['Tag.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <Tag {...args} />;

export const Default: Story<Props> = Template.bind({});
export const Disabled: Story<Props> = Template.bind({});
export const Checked: Story<Props> = Template.bind({});
export const PlainText: Story<Props> = Template.bind({});
export const RightIcon: Story<Props> = Template.bind({});
export const LeftImage: Story<Props> = Template.bind({});
export const LeftImageWithClose: Story<Props> = Template.bind({});
export const LeftIcon: Story<Props> = Template.bind({});

Default.args = {
  text: 'toolkit.private',
};

Disabled.args = {
  disabled: true,
  text: 'toolkit.private',
};

PlainText.args = {
  plaintext: 'Tag',
  extraClass: 'success',
};

Checked.args = {
  plaintext: 'Tag',
  extraClass: 'success',
  checked: true,
};

RightIcon.args = {
  plaintext: 'Tag',
  rightIcon: 'icon-equalizer',
  iconDataTestId: 'badge-icon',
};

LeftImage.args = {
  plaintext: 'John Doe',
  leftImage: user.thumbs.thumb,
  iconDataTestId: 'badge-icon',
};

LeftImageWithClose.args = {
  plaintext: 'John Doe',
  leftImage: user.thumbs.thumb,
  rightIcon: 'icon-plus1',
  iconDataTestId: 'badge-icon',
};

LeftIcon.args = {
  plaintext: 'Acme Corporation',
  leftIcon: 'icon-equalizer2',
  iconDataTestId: 'badge-icon',
};
