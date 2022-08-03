import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import SelectColor from './SelectColor';
import Props from './SelectColor.types';

export default {
  title: 'Elements/SelectColor',
  component: SelectColor,
  parameters: {
    jest: ['Slider.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => {
  const [color, setColor] = useState('#17C3B2');

  return (
    <div className="m-5">
      <SelectColor {...args} value={color} onChange={setColor} />
    </div>
  );
};

export const Default: Story<Props> = Template.bind({});
export const WithLabel: Story<Props> = Template.bind({});
export const Disabled: Story<Props> = Template.bind({});
export const Error: Story<Props> = Template.bind({});

Default.args = {
  name: 'color',
  TextFieldProps: {
    placeholder: '#HEXCOLOR',
    dataTestId: 'input-disabled',
  },
};

WithLabel.args = {
  name: 'color',
  inputLabelProps: {
    field: 'tags',
    label: 'Lorem Ipsum',
    help: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie justo at risus rutrum luctus.',
    showOptionalLabel: true,
  },
  TextFieldProps: {
    placeholder: '#HEXCOLOR',
  },
};

Disabled.args = {
  name: 'color',
  TextFieldProps: {
    disabled: true,
    placeholder: '#HEXCOLOR',
    dataTestId: 'input-disabled',
  },
};

Error.args = {
  name: 'color',
  TextFieldProps: {
    error: 'Helper text',
    placeholder: '#HEXCOLOR',
  },
};
