import CheckboxImage from './CheckboxImage';
import { cdnStaticUrl } from '../../constants/env';

export default {
  title: 'Elements/CheckboxImage',
  component: CheckboxImage,
};

const Template = args => <CheckboxImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Lorem Ipsum',
  img: `${cdnStaticUrl}/frontend/assets/ods/pt/ods-1.png`,
  onChange: () => console.log('test'),
  field: 'Textarea_name',
  value: 'Textarea',
};
