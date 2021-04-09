import Button from './Button';

export default {
  title: 'Elements/Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  extraClass: 'info-full',
  target: '_blank',
  href: '#',
  text: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  extraClass: 'dark-full',
  target: '_blank',
  href: '#',
  text: 'Secondary',
};

export const Success = Template.bind({});
Success.args = {
  extraClass: 'success-full',
  target: '_blank',
  href: '#',
  text: 'Success',
};

export const Danger = Template.bind({});
Danger.args = {
  extraClass: 'danger-full',
  target: '_blank',
  href: '#',
  text: 'Danger',
};

export const Warning = Template.bind({});
Warning.args = {
  extraClass: 'warning-full',
  target: '_blank',
  href: '#',
  text: 'Warning',
};

export const Squared = Template.bind({});
Squared.args = {
  extraClass: 'info-full',
  target: '_blank',
  href: '#',
  text: 'Squared',
  rounded: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  extraClass: 'info',
  target: '_blank',
  href: '#',
  text: 'Outlined',
};
