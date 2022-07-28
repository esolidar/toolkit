import React, { VFC, ReactNode, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { FormProvider, useForm } from 'react-hook-form';
import { Story, Meta } from '@storybook/react';
import InputTags from './InputTags';
import Props from './InputTags.types';

export default {
  title: 'Elements/Forms/InputTags',
  component: InputTags,
  parameters: {
    jest: ['InputTags.test.js'],
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
  const [tags, setTags] = useState(['esg', 'crowdfunding']);

  return (
    <StorybookFormProvider>
      <InputTags {...args} inputTagsProps={{ tags, onChange: setTags }} />
    </StorybookFormProvider>
  );
};

export const Default: Story<Props> = Template.bind({});

Default.args = {
  name: 'default',
  required: false,
  onChange: () => {},
};
