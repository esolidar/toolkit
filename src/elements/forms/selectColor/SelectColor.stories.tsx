import React, { VFC, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { FormProvider, useForm } from 'react-hook-form';
import { Story, Meta } from '@storybook/react';
import SelectColor from './SelectColor';
import Props from './SelectColor.types';

export default {
  title: 'Elements/Forms/SelectColor',
  component: SelectColor,
  parameters: {
    jest: ['SelectColor.test.js'],
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
    <SelectColor {...args} />
  </StorybookFormProvider>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  name: 'default',
  required: false,
  selectColorProps: {
    name: 'selectColor',
    value: '#8ED1FC',
    onChange: color => {
      console.log('was changed: ', color);
    },
  },
  onChange: () => {},
};
