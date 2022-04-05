import { VFC, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import Checkbox from './Checkbox';
import Props from './Checkbox.types';
import projectConfig from '../../../../../__mocks__/projectConfig';

const questions = JSON.parse(projectConfig.data.form);
const checkboxes = questions.customQuestions.filter(i => i.type === 'checkboxes')[0].form;

export default {
  title: 'Accelerator/Project/Questions/Checkbox',
  component: Checkbox,
  parameters: {
    jest: ['Checkbox.test.js'],
  },
} as Meta;

const StorybookFormProvider: VFC<{ children: ReactNode }> = ({ children }: any) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(action('[React Hooks Form] Submit'))}>{children}</form>
    </FormProvider>
  );
};

const Template: Story<Props> = (args: Props) => (
  <StorybookFormProvider>
    <div className="content-step-page">
      <Checkbox {...args} />
    </div>
  </StorybookFormProvider>
);

export const Default: Story<Props> = Template.bind({});
export const Exact: Story<Props> = Template.bind({});
export const Range: Story<Props> = Template.bind({});

Default.args = {
  answersAllowed: 'unlimited',
  description: checkboxes.description,
  options: checkboxes.options,
  privacy: checkboxes.privacy,
  question: checkboxes.question,
  exact: null,
  rangeMin: null,
  rangeMax: null,
  required: checkboxes.required,
  id: questions.customQuestions.filter(i => i.type === 'checkboxes')[0].id,
};

Exact.args = {
  answersAllowed: 'exact',
  description: checkboxes.description,
  options: checkboxes.options,
  privacy: checkboxes.privacy,
  question: checkboxes.question,
  exact: 3,
  rangeMin: null,
  rangeMax: null,
  required: checkboxes.required,
  id: questions.customQuestions.filter(i => i.type === 'checkboxes')[0].id,
};

Range.args = {
  answersAllowed: checkboxes.answersAllowed,
  description: null,
  options: checkboxes.options,
  privacy: checkboxes.privacy,
  question: checkboxes.question,
  exact: checkboxes.exact,
  rangeMin: checkboxes.rangeMin,
  rangeMax: checkboxes.rangeMax,
  required: checkboxes.required,
  id: questions.customQuestions.filter(i => i.type === 'checkboxes')[0].id,
};
