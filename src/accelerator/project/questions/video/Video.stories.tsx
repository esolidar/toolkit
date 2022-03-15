import { VFC, ReactNode, useState, useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import Video from './Video';
import Props from './Video.types';

export default {
  title: 'Accelerator/Project/Questions/Video',
  component: Video,
  parameters: {
    jest: ['Video.test.js'],
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
  const [reply, setReply] = useState('');

  useEffect(() => {
    setReply(args.reply);
  }, [args.reply]);

  return (
    <StorybookFormProvider>
      <div className="content-step-page">
        <Video {...args} reply={reply} onDeletePreview={() => setReply('')} />
      </div>
    </StorybookFormProvider>
  );
};

export const Default: Story<Props> = Template.bind({});

Default.args = {
  id: 'video',
  required: false,
  reply: 'https://youtu.be/f7x5IeWi0v8',
  name: 'video',
};
