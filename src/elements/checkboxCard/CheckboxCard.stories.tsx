import { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import CheckboxCard from './CheckboxCard';
import Props from './CheckboxCard.types';
import { cdnStaticUrl } from '../../constants/env';

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

Small.args = {
  id: 'checkboxCard-sm',
  img: `${cdnStaticUrl}/frontend/assets/ods/pt/ods-1.png`,
  isChecked: false,
  onChange: value => alert(`New value: ${value}`),
  size: 'sm',
  title: 'Animals & Wildlife',
};

Medium.args = {
  id: 'checkboxCard-md',
  img: `${cdnStaticUrl}/frontend/assets/ods/pt/ods-1.png`,
  isChecked: false,
  onChange: value => alert(`New value: ${value}`),
  subtitle: 'Subtitle',
  title: 'Title',
};

Large.args = {
  id: 'checkboxCard-lg',
  img: `${cdnStaticUrl}/frontend/assets/ods/pt/ods-1.png`,
  isChecked: false,
  onChange: value => alert(`New value: ${value}`),
  size: 'lg',
  subtitle:
    'End hunger, achieve food security and improved nutrition and promote sustainable agriculture',
  title: 'Zero hunger',
};
