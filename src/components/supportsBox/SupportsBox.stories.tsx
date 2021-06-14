import { Story, Meta } from '@storybook/react';
import SupportsBox from './SupportsBox';
import Props from './interfaces';

export default {
  title: 'Components/SupportsBox',
  component: SupportsBox,
  parameters: {
    jest: ['SupportsBox.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <SupportsBox {...args} />;

export const Default: Story<Props> = Template.bind({});
Default.args = {
  campaign: {
    institution: {
      thumbs: {
        thumb:
          'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
      },
      name: 'Lorem Ipsum',
      id: 1,
    },
  },
};
