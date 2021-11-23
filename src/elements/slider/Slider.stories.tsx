import { Story, Meta } from '@storybook/react';
import Slider from './Slider';
import Props from './Slider.types';

export default {
  title: 'Elements/Slider',
  component: Slider,
  parameters: {
    jest: ['Slider.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5" style={{ width: '300px' }}>
    <Slider {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
// export const Disable: Story<Props> = Template.bind({});

Default.args = {
  min: 0,
  max: 100,
  defaultValue: 50,
  handleChange: value => {
    console.log('value', value);
  },
};

// Disable.args = {
//   isChecked: false,
//   name: 'toggle',
//   onChange: () => {},
//   isDisabled: true,
// };
