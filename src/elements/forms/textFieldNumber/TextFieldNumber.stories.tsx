import { VFC, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { FormProvider, useForm } from 'react-hook-form';
import { Story, Meta } from '@storybook/react';
import TextFieldNumber from './TextFieldNumber';
import Props from './TextFieldNumber.types';

export default {
  title: 'Elements/Forms/TextFieldNumber',
  component: TextFieldNumber,
  parameters: {
    jest: ['TextFieldNumber.test.tsx'],
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
    <TextFieldNumber {...args} />
  </StorybookFormProvider>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  name: 'textFieldNumber',
  required: false,
  textFieldProps: {
    showArrows: true,
    min: 12,
    max: 30,
  },
  onChange: () => {},
  onBlur: () => {},
};
