import { VFC, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { FormProvider, useForm } from 'react-hook-form';
import { Story, Meta } from '@storybook/react';
import HtmlEditor from './HtmlEditor';
import Props from './HtmlEditor.types';

export default {
  title: 'Elements/Forms/HtmlEditor',
  component: HtmlEditor,
  parameters: {
    jest: ['HtmlEditor.test.js'],
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
    <HtmlEditor {...args} />
  </StorybookFormProvider>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  name: 'HtmlEditor',
  required: false,
  htmlEditorProps: {},
  onChange: () => {},
  onBlur: () => {},
};
