import Button from './Button';

export default {
  title: 'Elements/Button',
  component: Button,
};

const Template = args => (
  <div>
    <div className="p-2">
      <Button {...args} extraClass={`${args.extraClass}-full`} text="Squared" rounded={false} />
      <Button {...args} extraClass={`${args.extraClass}-full`} text="Rounded" />
      <Button {...args} extraClass={`${args.extraClass}-full`} text="Disabled" disabled />
      <Button {...args} extraClass={`${args.extraClass}-full`} text="Size LG" size="lg" />
      <Button {...args} extraClass={`${args.extraClass}-full`} text="Size MD" size="md" />
      <Button {...args} extraClass={`${args.extraClass}-full`} text="Size SM" size="sm" />
    </div>
    <div className="p-2">
      <Button {...args} text="Squared" rounded={false} />
      <Button {...args} text="Rounded" />
      <Button {...args} text="Disabled" disabled />
      <Button {...args} text="Size LG" size="lg" />
      <Button {...args} text="Size MD" size="md" />
      <Button {...args} text="Size SM" size="sm" />
    </div>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  extraClass: 'primary',
  target: '_blank',
  href: '#',
};

export const Secondary = Template.bind({});
Secondary.args = {
  extraClass: 'info',
  target: '_blank',
  href: '#',
};

export const Success = Template.bind({});
Success.args = {
  extraClass: 'success',
  target: '_blank',
  href: '#',
};

export const Danger = Template.bind({});
Danger.args = {
  extraClass: 'danger',
  target: '_blank',
  href: '#',
};

export const Warning = Template.bind({});
Warning.args = {
  extraClass: 'warning',
  target: '_blank',
  href: '#',
};

export const Dark = Template.bind({});
Dark.args = {
  extraClass: 'dark',
  target: '_blank',
  href: '#',
};

export const Link = args => (
  <div className="p-2">
    <Button {...args} text="Squared" rounded={false} />
    <Button {...args} text="Rounded" />
    <Button {...args} text="Disabled" disabled />
    <Button {...args} text="Size LG" size="lg" />
    <Button {...args} text="Size MD" size="md" />
    <Button {...args} text="Size SM" size="sm" />
  </div>
);
Link.args = {
  extraClass: 'link',
  target: '_blank',
  href: '#',
};
