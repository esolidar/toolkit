/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import CustomQuestionsSection from './CustomQuestionsSection';
import CustomQuestionsSectionProps from './CustomQuestionsSection.types';

export default {
  title: 'Accelerator/Project/Submit/CustomQuestionsSection',
  component: CustomQuestionsSection,
  parameters: {
    jest: ['CustomQuestionsSection.test.js'],
  },
} as Meta;

const Template: Story<CustomQuestionsSectionProps> = (args: CustomQuestionsSectionProps) => (
  <div>
    <CustomQuestionsSection {...args} />
  </div>
);

export const Default: Story<CustomQuestionsSectionProps> = Template.bind({});
export const TitleOnly: Story<CustomQuestionsSectionProps> = Template.bind({});

Default.args = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  description: {
    blocks: [
      {
        key: '11dm0',
        text: 'Nulla nec sapien pharetra, lobortis diam eget, tincidunt neque. Cras vestibulum congue tellus a faucibus. Curabitur vitae convallis nulla. Ut elit est, volutpat mollis vestibulum id, efficitur vel arcu.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '2i4ut',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'fqidp',
        text: 'Suspendisse interdum purus commodo, eleifend enim sit amet, pharetra lorem. Aenean viverra id magna at posuere. Praesent a laoreet purus. Donec vitae felis malesuada, efficitur nibh vel, convallis metus.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '2sh3j',
        text: 'Quisque et urna quis elit mollis congue ut vitae odio.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  },
  privacy: 'private',
};

TitleOnly.args = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  description: '',
  privacy: 'private',
};
