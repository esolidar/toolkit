import { VFC, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { FormProvider, useForm } from 'react-hook-form';
import { Story, Meta } from '@storybook/react';
import Toggle from './Toggle';
import Props from './Toggle.types';

export default {
  title: 'Elements/Forms/Toggle',
  component: Toggle,
  parameters: {
    jest: ['Toggle.test.tsx'],
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
    <Toggle {...args} />
  </StorybookFormProvider>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  name: 'toggleForm',
  required: false,
  toggleProps: {},
  onChange: () => {},
};
