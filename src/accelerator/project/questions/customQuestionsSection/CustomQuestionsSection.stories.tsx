import { Story, Meta } from '@storybook/react';
import CustomQuestionsSection from './CustomQuestionsSection';
import CustomQuestionsSectionProps from './CustomQuestionsSection.types';
import projectConfig from '../../../../../__mocks__/projectConfig';

const questions = JSON.parse(projectConfig.data.form);
const customQuestions = questions.customQuestions.filter(i => i.type === 'section')[0].form;

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
  title: customQuestions.title,
  description: customQuestions.description,
  privacy: customQuestions.privacy,
  required: false,
};

TitleOnly.args = {
  title: customQuestions.title,
  description: '',
  privacy: 'private',
};
