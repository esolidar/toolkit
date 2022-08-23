import React, { useState } from 'react';
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
export const CardGridItem = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
export const RowItem = Template.bind({});
export const LargeWithDropdown = Template.bind({});

Small.args = {
  id: 'checkboxCard-sm',
  defaultImg: `${cdnUploadsUrl}/interests/v2/default/biodiversity-ecosystems.svg`,
  disabledImg: `${cdnUploadsUrl}/interests/v2/disabled/biodiversity-ecosystems.svg`,
  checkedImg: `${cdnUploadsUrl}/interests/v2/active/biodiversity-ecosystems.svg`,
  size: 'sm',
  title: 'Reading & Writing',
};

CardGridItem.args = {
  id: 'checkboxCard-CardGridItem',
  icon: 'Nonprofit',
  title: 'Nonprofits',
  fullWith: true,
  size: 'sm',
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
RowItem.args = {
  id: 'checkboxCard-RowItem',
  defaultImg:
    'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/institutions/5db97fcf-b9b4-4ae5-8c49-23e4ac1f17c3.png',
  size: 'lg',
  title: 'Fundo Brasileiro para a Biodiversidade',
  className: 'large',
  fullWith: true,
  roundedIcon: true,
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
