import TextareaField from './TextareaField';

export default {
  title: 'Elements/TextareaField',
  component: TextareaField,
};

const Template = args => <TextareaField {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'textareaField-id',
  label: 'Lorem Ipsum',
  error: 'error',
  placeholder: 'Placeholder',
  onChange: () => console.log('test'),
  field: 'Textarea_name',
  defaultValue: 'Textarea',
  message: 'Mensagem',
  maxLength: 100,
  required: true,
  value:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla lorem quis magna rhoncus, iaculis ullamcorper tortor venenatis. Duis quis sem non lorem venenatis scelerisque vel euismod magna. Fusce aliquet nunc rutrum libero scelerisque ornare. Nullam ac lacus quis dolor egestas tempor eget et ligula. Sed eget convallis elit. Quisque finibus in metus quis blandit. Fusce porta lobortis nisl id pellentesque. Cras venenatis eros in dolor scelerisque gravida. orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla lorem quis magna rhoncus, iaculis ullamcorper tortor venenatis. Duis quis sem non lorem venenatis scelerisque vel euismod magna. Fusce aliquet nunc rutrum libero scelerisque ornare. Nullam ac lacus quis dolor egestas tempor eget et ligula. Sed eget convallis elit. Quisque finibus in metus quis blandit. Fusce porta lobortis nisl id pellentesque. Cras venenatis eros in dolor scelerisque gravida.',
};
