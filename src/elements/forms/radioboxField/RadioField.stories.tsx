import { VFC, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import RadioField from './RadioField';
import Props from './RadioField.types';

export default {
  title: 'Elements/Forms/RadioField',
  component: RadioField,
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
      <RadioField {...args} />
    </StorybookFormProvider>
  );
};

export const Default: Story<Props> = Template.bind({});

Default.args = {
  radioboxFieldProps: {
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    error: 'This field is required',
    name: 'RadioboxField_name',
    value: 'RadioboxField_value',
    checked: false,
    disabled: false,
    dataTestId: 'radiobox-field',
  },
  dataTestId: 'radio-form-field',
  required: false,
  onChange: () => {},
};
