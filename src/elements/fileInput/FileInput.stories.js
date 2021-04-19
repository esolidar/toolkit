import FileInput from './FileInput';
import { cdnStaticUrl } from '../../constants/env';

export default {
  title: 'Elements/FileInput',
  component: FileInput,
};

const Template = args => <FileInput {...args} />;

export const Logo = Template.bind({});
Logo.args = {
  name: 'logo_image',
  accept: '.png,.jpg,.jpeg',
  disabled: '',
  placeholder: '',
  onChange: () => {},
  styleLogo: { backgroundImage: `url(${cdnStaticUrl}/frontend/assets/brand-logo.jpg)` },
};

export const Cover = Template.bind({});
Cover.args = {
  name: 'cover',
  accept: '.png,.jpg,.jpeg',
  className: 'input-image',
  disabled: '',
  placeholder: '',
  onChange: () => {},
  styleLogo: { backgroundImage: `url(${cdnStaticUrl}/frontend/assets/standard-brand.jpg)` },
};
