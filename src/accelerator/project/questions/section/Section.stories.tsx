import { Story, Meta } from '@storybook/react';
import CustomQuestionsSection from './Section';
import Props from './Section.types';
import projectConfig from '../../../../../__mocks__/projectConfig';

const questions = JSON.parse(projectConfig.data.form);
const customQuestions = questions.customQuestions.filter(i => i.type === 'section')[0].form;

export default {
  title: 'Accelerator/Project/Questions/Section',
  component: CustomQuestionsSection,
  parameters: {
    jest: ['CustomQuestionsSection.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="content-step-page">
    <CustomQuestionsSection {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const TitleOnly: Story<Props> = Template.bind({});

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
