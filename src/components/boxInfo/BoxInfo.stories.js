import React from 'react';
import BoxInfo from './BoxInfo';
import Button from '../../elements/button';

export default {
  title: 'Components/BoxInfo',
  component: BoxInfo,
};

const Template = args => <BoxInfo {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['BoxInfo.test.js'],
};
Default.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor ornare enim bibendum consequat. Proin dictum malesuada mollis. Donec pellentesque lacus non purus tincidunt, a sagittis massa molestie. Morbi varius vulputate ex vel accumsan.',
  button: <Button extraClass="success-full" text="Action button" onClick={() => {}} />,
};
