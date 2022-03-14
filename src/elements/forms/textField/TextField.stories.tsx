import { VFC, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import TextField from './TextField';
import Props from './TextField.types';

export default {
  title: 'Elements/Forms/TextField',
  component: TextField,
  parameters: {
    jest: ['TextField.test.js'],
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

const Template: Story<Props> = (args: Props) => {
  return (
    <StorybookFormProvider>
      <TextField {...args} />
    </StorybookFormProvider>
  );
};

export const Default: Story<Props> = Template.bind({});

Default.args = {
  dataTestId: 'text-form-field',
  required: false,
  onChange: () => {},
};
