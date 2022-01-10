import { Story, Meta } from '@storybook/react';
import Select from './Select';
import Icon from '../../components/icon';
import Props from './Select.types';

export default {
  title: 'Elements/Select',
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
    leftIcon: <Icon iconClass="icon-httpslock" />,
    isLabelBold: false,
  },
  {
    value: 'third',
    label: 'This enabled option has an icon and description',
    description: 'Only visible to Acme Inc admins',
    leftIcon: <Icon iconClass="icon-httpslock" />,
  },
  {
    value: 'fourth',
    label: 'This disabled option has no icon nor description',
    isDisabled: true,
  },
  {
    value: 'fifth',
    label: 'This disabled option has an icon',
    leftIcon: <Icon iconClass="icon-httpslock" />,
    isDisabled: true,
  },
  {
    value: 'sixth',
    label: 'This disabled option has an icon and description',
    description: 'Only visible to Acme Inc admins',
    leftIcon: <Icon iconClass="icon-httpslock" />,
    isDisabled: true,
  },
];

const Template: Story<Props> = (args: Props) => <Select {...args} />;

export const Default: Story<Props> = Template.bind({});
export const Clearable: Story<Props> = Template.bind({});
export const Searchable: Story<Props> = Template.bind({});
export const Disabled: Story<Props> = Template.bind({});
export const WithInputLabel: Story<Props> = Template.bind({});
export const WithHelperText: Story<Props> = Template.bind({});
export const WithError: Story<Props> = Template.bind({});
export const WithPlaceholderIcon: Story<Props> = Template.bind({});
export const WithoutOptions: Story<Props> = Template.bind({});
export const MenuWidth: Story<Props> = Template.bind({});

Default.args = {
  onChange: value => alert(`New value: ${value}`),
  options,
  value: '',
};

Clearable.args = {
  isClearable: true,
  onChange: value => alert(`New value: ${value}`),
  onClear: () => alert('Value cleared!'),
  options,
  value: '',
};

Searchable.args = {
  isSearchable: true,
  onChange: value => alert(`New value: ${value}`),
  options,
  value: '',
};

Disabled.args = {
  isDisabled: true,
  value: '',
};

WithInputLabel.args = {
  inputLabelProps: {
    label: 'I am the input label',
    showOptionalLabel: true,
  },
  onChange: value => alert(`New value: ${value}`),
  options,
  value: '',
};

WithHelperText.args = {
  helperText: 'I am an helper text',
  onChange: value => alert(`New value: ${value}`),
  options,
  value: '',
};

WithError.args = {
  error: 'Required field',
  onChange: value => alert(`New value: ${value}`),
  options,
  value: '',
};

WithPlaceholderIcon.args = {
  onChange: value => alert(`New value: ${value}`),
  options,
  placeholderLeftIcon: <Icon iconClass="icon-search" />,
  value: '',
};

WithoutOptions.args = {
  value: '',
};

MenuWidth.args = {
  value: '',
  size: 'sm',
  options,
  menuWidth: '500px',
};
