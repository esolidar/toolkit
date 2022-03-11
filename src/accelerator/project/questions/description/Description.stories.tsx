import { VFC, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import Description from './Description';
import Props from './Description.types';
import user from '../../../../../__mocks__/user';

export default {
  title: 'Accelerator/Project/Questions/Description',
  component: Description,
  parameters: {
    jest: ['Section.test.js'],
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
      <Description {...args} />
    </div>
  </StorybookFormProvider>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  userName: user.firstName,
  // description: multiChoice.description,
  // options: multiChoice.options,
  // privacy: multiChoice.privacy,
  // question: multiChoice.question,
  // required: multiChoice.required,
  id: 'description',
};
