import { VFC, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import Radiobox from './Radiobox';
import Props from './Radiobox.types';
import projectConfig from '../../../../../__mocks__/projectConfig';

const questions = JSON.parse(projectConfig.data.form);
const multiChoice = questions.customQuestions.filter(i => i.type === 'multiChoice')[0];

export default {
  title: 'Accelerator/Project/Questions/Radiobox',
  component: Radiobox,
  parameters: {
    jest: ['Radiobox.test.js'],
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
      <Radiobox {...args} />
    </div>
  </StorybookFormProvider>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  description: multiChoice.form.description,
  options: multiChoice.form.options,
  privacy: multiChoice.form.privacy,
  question: multiChoice.form.question,
  required: multiChoice.form.required,
  reply: multiChoice.reply,
};
