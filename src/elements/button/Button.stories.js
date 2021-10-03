import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import Icon from '../../components/icon';
import Badge from '../badge';

export default {
  title: 'Elements/Button',
  component: Button,
};

const Template = args => (
  <>
    <ButtonGrid>
      <Button {...args} extraClass={`${args.extraClass}-full`} text="Enabled" />
      <Button {...args} extraClass={`${args.extraClass}-full`} text="Disabled" disabled />
      <Button {...args} extraClass={`${args.extraClass}-full`} text="Size XL" size="xl" />
      <Button {...args} extraClass={`${args.extraClass}-full`} text="Size LG" size="lg" />
      <Button {...args} extraClass={`${args.extraClass}-full`} text="Size MD" size="md" />
      <Button {...args} extraClass={`${args.extraClass}-full`} text="Size SM" size="sm" />
    </ButtonGrid>
    <ButtonGrid>
      <Button {...args} text="Enabled" />
      <Button {...args} text="Disabled" disabled />
      <Button {...args} text="Size XL" size="xl" />
      <Button {...args} text="Size LG" size="lg" />
      <Button {...args} text="Size MD" size="md" />
      <Button {...args} text="Size SM" size="sm" />
    </ButtonGrid>
  </>
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
  <ButtonGrid>
    <Button {...args} text="Enabled" />
    <Button {...args} text="Disabled" disabled />
    <Button {...args} text="Size XL" size="xl" />
    <Button {...args} text="Size LG" size="lg" />
    <Button {...args} text="Size MD" size="md" />
    <Button {...args} text="Size SM" size="sm" />
  </ButtonGrid>
);
Link.args = {
  extraClass: 'link',
  target: '_blank',
  href: '#',
  iconLeft: <Icon iconClass="icon-left-arrow" />,
};

export const WithIcon = args => (
  <ButtonGrid>
    <Button {...args} text="Enabled" />
    <Button {...args} text="Disabled" disabled />
    <Button {...args} text="Size XL" size="xl" />
    <Button {...args} text="Size LG" size="lg" />
    <Button {...args} text="Size MD" size="md" />
    <Button {...args} text="Size SM" size="sm" />
  </ButtonGrid>
);
WithIcon.args = {
  extraClass: 'primary-full',
  iconLeft: <Icon iconClass="icon-left-arrow" />,
  iconRight: <Icon iconClass="icon-chevron-down" />,
};

export const WithBadge = args => (
  <ButtonGrid>
    <Button {...args} text="Enabled" />
    <Button {...args} text="Disabled" disabled />
    <Button {...args} text="Size XL" size="xl" />
    <Button {...args} text="Size LG" size="lg" />
    <Button {...args} text="Size MD" size="md" />
    <Button {...args} text="Size SM" size="sm" />
  </ButtonGrid>
);
WithBadge.args = {
  extraClass: 'primary-full',
  badge: <Badge text="2" size="xs" />,
};

const ButtonGrid = ({ children }) => (
  <div className="p-2 d-flex align-items-center flex-wrap" style={{ gap: '4px' }}>
    {children}
  </div>
);

ButtonGrid.propTypes = {
  children: PropTypes.node,
};
