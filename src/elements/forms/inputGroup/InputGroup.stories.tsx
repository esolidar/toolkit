import React, { VFC, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { FormProvider, useForm } from 'react-hook-form';
import { Story, Meta } from '@storybook/react';
import Icon from '../../icon';
import InputGroup from './InputGroup';
import Props from './InputGroup.types';

export default {
  title: 'Elements/Forms/InputGroup',
  component: InputGroup,
  parameters: {
    jest: ['InputGroup.test.js'],
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
    <InputGroup {...args} />
  </StorybookFormProvider>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  name: 'default',
  required: false,
  inputGroupProps: {
    name: 'inputGroup',
    onChange: e => {
      console.log('was changed: ', e.target.value);
    },
    prepend: (
      <>
        <Icon name="PublicBold" size="sm" dataTestId="PublicBold" />
        &nbsp;https://
      </>
    ),
    append: '.com',
  },
  onChange: () => {},
};
