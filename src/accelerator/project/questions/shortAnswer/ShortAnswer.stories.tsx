import { VFC, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import ShortAnswer from './ShortAnswer';
import Props from './ShortAnswer.types';
import projectConfig from '../../../../../__mocks__/projectConfig';

const questions = JSON.parse(projectConfig.data.form);
const shortAnswer = questions.customQuestions.filter(i => i.type === 'shortAnswer')[0].form;

export default {
  title: 'Accelerator/Project/Questions/ShortAnswer',
  component: ShortAnswer,
  parameters: {
    jest: ['ShortAnswer.test.js'],
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
      <ShortAnswer {...args} />
    </div>
  </StorybookFormProvider>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  ...shortAnswer,
  requiredField: false,
};
