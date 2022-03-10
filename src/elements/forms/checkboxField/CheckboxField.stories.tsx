import { VFC, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import Checkbox from './CheckboxField';
import Props from './CheckboxField.types';

export default {
  title: 'Elements/Forms/CheckboxField',
  component: Checkbox,
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

const Template: Story<Props> = (args: Props) => {
  return (
    <StorybookFormProvider>
      <Checkbox {...args} />
    </StorybookFormProvider>
  );
};

export const Default: Story<Props> = Template.bind({});

Default.args = {
  checkboxFieldProps: {
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    error: 'error',
    name: 'CheckboxField_name',
    value: 'CheckboxField_value',
    checked: false,
    disabled: false,
    dataTestId: 'checkbox-field',
  },
  dataTestId: 'checkbox-form-field',
  required: false,
  onChange: () => {},
};
