import React from 'react';
import HtmlEditor from './HtmlEditor';

export default {
  title: 'Components/HtmlEditor',
  component: HtmlEditor,
  parameters: {
    jest: ['HtmlEditor.test.tsx'],
  },
};

const Template = args => <HtmlEditor {...args} />;

export const Default = Template.bind({});
export const WithInputLabel = Template.bind({});

Default.args = {};
WithInputLabel.args = {
  inputLabelProps: {
    label: 'Description',
  },
};
