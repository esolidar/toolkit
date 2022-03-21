import { VFC, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { FormProvider, useForm } from 'react-hook-form';
import { Story, Meta } from '@storybook/react';
import Select from './Select';
import Icon from '../../icon';
import Props from './Select.types';

export default {
  title: 'Elements/Forms/Select',
  component: Select,
  parameters: {
    jest: ['Select.test.tsx'],
  },
} as Meta;

const options = [
  {
    value: 'first',
    label: 'This enabled option has no icon nor description',
    className: 'option-label-bold',
    isLabelBold: true,
  },
  {
    value: 'second',
    label: 'This enabled option has an icon',
    leftIcon: <Icon name="PublicBold" size="sm" dataTestId="PublicBold" />,
    isLabelBold: false,
  },
  {
    value: 'third',
    label: 'This enabled option has an icon and description',
    description: 'Only visible to Acme Inc admins',
    leftIcon: <Icon name="PublicBold" size="sm" dataTestId="PublicBold" />,
  },
  {
    value: 'fourth',
    label: 'This disabled option has no icon nor description',
    isDisabled: true,
  },
  {
    value: 'fifth',
    label: 'This disabled option has an icon',
    leftIcon: <Icon name="Lock" size="sm" dataTestId="Lock" />,
    isDisabled: true,
  },
  {
    value: 'sixth',
    label: 'This disabled option has an icon and description',
    description: 'Only visible to Acme Inc admins',
    leftIcon: <Icon name="Lock" size="sm" dataTestId="Lock" />,
    isDisabled: true,
  },
];

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
    <Select {...args} />
  </StorybookFormProvider>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  name: 'default',
  required: false,
  selectFormProps: {
    menuWidth: '320px',
    options,
  },
  onChange: () => {},
};
