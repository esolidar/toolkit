import { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import CheckboxCard from './CheckboxCard';
import Props from './CheckboxCard.types';
import { cdnStaticUrl, cdnUploadsUrl } from '../../constants/env';

export default {
  title: 'Elements/CheckboxCard',
  component: CheckboxCard,
  parameters: {
    jest: ['CheckboxCard.test.js'],
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeCheckbox = value => setIsChecked(value);

  return <CheckboxCard {...args} isChecked={isChecked} onChange={handleChangeCheckbox} />;
};

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
export const LargeWithDropdown = Template.bind({});

Small.args = {
  id: 'checkboxCard-sm',
  defaultImg: `${cdnUploadsUrl}/interests/test-interests.svg`,
  disabledImg: `${cdnUploadsUrl}/interests/test-interests-disabled.svg`,
  checkedImg: `${cdnUploadsUrl}/interests/test-interests-checked.svg`,
  size: 'sm',
  title: 'Reading & Writing',
};

Medium.args = {
  id: 'checkboxCard-md',
  defaultImg: `${cdnStaticUrl}/frontend/assets/ods/pt/ods-1.png`,
  subtitle: 'Subtitle',
  title: 'Title',
};

Large.args = {
  id: 'checkboxCard-lg',
  defaultImg: `${cdnStaticUrl}/frontend/assets/ods/pt/ods-1.png`,
  size: 'lg',
  subtitle:
    'End hunger, achieve food security and improved nutrition and promote sustainable agriculture',
  title: 'Zero hunger',
  className: 'large',
};

LargeWithDropdown.args = {
  id: 'checkboxCard-lg',
  defaultImg: `${cdnStaticUrl}/frontend/assets/ods/pt/ods-1.png`,
  size: 'lg',
  subtitle:
    'End hunger, achieve food security and improved nutrition and promote sustainable agriculture',
  title: 'Zero hunger',
  className: 'large',
  dropdownItems: [
    {
      id: 0,
      text: 'Delete',
      leftIcon: 'Trash',
      onClick: () => alert('You clicked delete!'),
    },
  ],
};
