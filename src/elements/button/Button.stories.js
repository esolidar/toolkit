import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import Icon from '../../components/icon';
import Badge from '../badge';

export default {
  title: 'Elements/Button',
  component: Button,
};

const extraClassesWithoutFull = ['secondary', 'link', 'ghost'];

const Template = args => (
  <>
    {!extraClassesWithoutFull.includes(args.extraClass) && (
      <>
        <ButtonGrid>
          <Button {...args} extraClass={`${args.extraClass}-full`} text="Enabled" />
          <Button {...args} extraClass={`${args.extraClass}-full`} text="Disabled" disabled />
          <Button
            {...args}
            extraClass={`${args.extraClass}-full`}
            text="Left Icon"
            iconLeft={<Icon iconClass="icon-left-arrow" />}
          />
          <Button
            {...args}
            extraClass={`${args.extraClass}-full`}
            text="2 Icons"
            iconLeft={<Icon iconClass="icon-left-arrow" />}
            iconRight={<Icon iconClass="icon-chevron-down" />}
          />
          <Button
            {...args}
            extraClass={`${args.extraClass}-full`}
            text="Right Icon"
            iconRight={<Icon iconClass="icon-right-arrow" />}
          />
          <Button
            {...args}
            type="icon"
            extraClass={`${args.extraClass}-full`}
            icon={<Icon iconClass="icon-left-arrow" />}
          />
          <Button
            {...args}
            extraClass={`${args.extraClass}-full`}
            text="With Badge"
            iconLeft={<Icon iconClass="icon-left-arrow" />}
            badge={<Badge text="2" size="xs" />}
          />
        </ButtonGrid>

        <ButtonGrid>
          <Button {...args} extraClass={`${args.extraClass}-full`} text="Size XL" size="xl" />
          <Button {...args} extraClass={`${args.extraClass}-full`} text="Size LG" size="lg" />
          <Button {...args} extraClass={`${args.extraClass}-full`} text="Size MD" size="md" />
          <Button {...args} extraClass={`${args.extraClass}-full`} text="Size SM" size="sm" />
        </ButtonGrid>
      </>
    )}

    <ButtonGrid>
      <Button {...args} text="Enabled" />
      <Button {...args} text="Disabled" disabled />
      <Button {...args} text="Left Icon" iconLeft={<Icon iconClass="icon-left-arrow" />} />
      <Button
        {...args}
        text="2 Icons"
        iconLeft={<Icon iconClass="icon-left-arrow" />}
        iconRight={<Icon iconClass="icon-chevron-down" />}
      />
      <Button {...args} text="Right Icon" iconRight={<Icon iconClass="icon-right-arrow" />} />
      <Button {...args} type="icon" icon={<Icon iconClass="icon-left-arrow" />} />
      <Button
        {...args}
        text="With Badge"
        iconLeft={<Icon iconClass="icon-left-arrow" />}
        badge={<Badge text="2" size="xs" />}
      />
    </ButtonGrid>

    <ButtonGrid>
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
  onClick: () => {},
};

export const Secondary = Template.bind({});
Secondary.args = {
  extraClass: 'secondary',
  onClick: () => {},
};

export const Ghost = Template.bind({});
Ghost.args = {
  extraClass: 'ghost',
  onClick: () => {},
};

export const Link = Template.bind({});
Link.args = {
  extraClass: 'link',
  target: '_blank',
  href: '#',
};

export const Success = Template.bind({});
Success.args = {
  extraClass: 'success',
  onClick: () => {},
};

export const Warning = Template.bind({});
Warning.args = {
  extraClass: 'warning',
  onClick: () => {},
};

export const Danger = Template.bind({});
Danger.args = {
  extraClass: 'danger',
  onClick: () => {},
};

export const Info = Template.bind({});
Info.args = {
  extraClass: 'info',
  onClick: () => {},
};

export const Dark = Template.bind({});
Dark.args = {
  extraClass: 'dark',
  onClick: () => {},
};

const ButtonGrid = ({ children }) => (
  <div className="p-1 d-flex align-items-center flex-wrap" style={{ gap: '8px' }}>
    {children}
  </div>
);

ButtonGrid.propTypes = {
  children: PropTypes.node,
};
