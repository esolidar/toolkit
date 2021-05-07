import InputLabel from './InputLabel';

export default {
  title: 'Elements/InputLabel',
  component: InputLabel,
};

const Template = args => <InputLabel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Lorem Ipsum',
  field: 'Textarea_name',
  showOptionalLabel: true,
};
