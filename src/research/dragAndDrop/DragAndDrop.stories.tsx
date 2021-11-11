import { Meta } from '@storybook/react';
import DragAndDrop from './DragAndDrop';

export default {
  title: 'Research/DragAndDrop',
  component: DragAndDrop,
  parameters: {
    jest: ['DragAndDrop.test.tsx'],
  },
} as Meta;

const Template = args => <DragAndDrop {...args} />;

export const Default = Template.bind({});
