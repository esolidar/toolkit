import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Button from './Button';
import Icon from '../icon';
import Badge from '../badge';

export default {
  title: 'Elements/Button',
  component: Button,
};

const showGhostLight = ['primary-full', 'secondary', 'negative'];
const showGhostDark = ['secondary'];

const Template = args => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  return (
    <>
      <h5 className="p-1">Normal</h5>
      <ButtonGrid>
        <Button {...args} text="Enabled" />
        <Button {...args} text="Disabled" disabled />
        <Button
          {...args}
          text="With loading"
          withLoading={true}
          isLoading={isLoading}
          onClick={() => setIsLoading(true)}
        />
        <Button {...args} text="Left Icon" iconLeft={<Icon name="ArrowLeft" />} />
        <Button
          {...args}
          text="2 Icons"
          iconLeft={<Icon name="ArrowLeft" />}
          iconRight={<Icon name="ChevronDown" />}
        />
        <Button {...args} text="Right Icon" iconRight={<Icon name="ArrowRight" />} />
        <Button {...args} type="icon" icon={<Icon name="ArrowLeft" />} />
        <Button
          {...args}
          text="With Badge"
          iconLeft={<Icon name="ArrowLeft" />}
          badge={<Badge text="2" size="xs" extraClass="success" />}
        />
      </ButtonGrid>

      <ButtonGrid>
        <Button {...args} text="Size XL" size="xl" />
        <Button {...args} text="Size LG" size="lg" />
        <Button {...args} text="Size MD" size="md" />
        <Button {...args} text="Size SM" size="sm" />
      </ButtonGrid>

      {showGhostLight.includes(args.extraClass) && (
        <>
          <h5 className="p-1 mt-3">Ghost Light</h5>
          <ButtonGrid>
            <Button {...args} text="Enabled" ghost theme="light" />
            <Button {...args} text="Disabled" disabled ghost theme="light" />
            <Button
              {...args}
              text="With loading"
              withLoading={true}
              isLoading={isLoading}
              onClick={() => setIsLoading(true)}
              ghost
              theme="light"
            />
            <Button
              {...args}
              text="Left Icon"
              iconLeft={<Icon name="ArrowLeft" />}
              ghost
              theme="light"
            />
            <Button
              {...args}
              text="2 Icons"
              iconLeft={<Icon name="ArrowLeft" />}
              iconRight={<Icon name="ChevronDown" />}
              ghost
              theme="light"
            />
            <Button
              {...args}
              text="Right Icon"
              iconRight={<Icon name="ArrowRight" />}
              ghost
              theme="light"
            />
            <Button {...args} type="icon" icon={<Icon name="ArrowLeft" />} ghost theme="light" />
            <Button
              {...args}
              text="With Badge"
              iconLeft={<Icon name="ArrowLeft" />}
              badge={<Badge text="2" size="xs" extraClass="success" />}
              ghost
              theme="light"
            />
          </ButtonGrid>

          <ButtonGrid>
            <Button {...args} text="Size XL" size="xl" ghost theme="light" />
            <Button {...args} text="Size LG" size="lg" ghost theme="light" />
            <Button {...args} text="Size MD" size="md" ghost theme="light" />
            <Button {...args} text="Size SM" size="sm" ghost theme="light" />
          </ButtonGrid>
        </>
      )}

      {showGhostDark.includes(args.extraClass) && (
        <>
          <h5 className="p-1 mt-3">Ghost Dark</h5>
          <ButtonGrid>
            <Button {...args} text="Enabled" ghost theme="dark" />
            <Button {...args} text="Disabled" disabled ghost theme="dark" />
            <Button
              {...args}
              text="With loading"
              withLoading={true}
              isLoading={isLoading}
              onClick={() => setIsLoading(true)}
              ghost
              theme="dark"
            />
            <Button
              {...args}
              text="Left Icon"
              iconLeft={<Icon name="ArrowLeft" />}
              ghost
              theme="dark"
            />
            <Button
              {...args}
              text="2 Icons"
              iconLeft={<Icon name="ArrowLeft" />}
              iconRight={<Icon name="ChevronDown" />}
              ghost
              theme="dark"
            />
            <Button
              {...args}
              text="Right Icon"
              iconRight={<Icon name="ArrowRight" />}
              ghost
              theme="dark"
            />
            <Button {...args} type="icon" icon={<Icon name="ArrowLeft" />} ghost theme="dark" />
            <Button
              {...args}
              text="With Badge"
              iconLeft={<Icon name="ArrowLeft" />}
              badge={<Badge text="2" size="xs" extraClass="success" />}
              ghost
              theme="dark"
            />
          </ButtonGrid>

          <ButtonGrid>
            <Button {...args} text="Size XL" size="xl" ghost theme="dark" />
            <Button {...args} text="Size LG" size="lg" ghost theme="dark" />
            <Button {...args} text="Size MD" size="md" ghost theme="dark" />
            <Button {...args} text="Size SM" size="sm" ghost theme="dark" />
          </ButtonGrid>
        </>
      )}
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  extraClass: 'primary-full',
  onClick: () => {},
};

export const Secondary = Template.bind({});
Secondary.args = {
  extraClass: 'secondary',
  onClick: () => {},
};

export const Negative = Template.bind({});
Negative.args = {
  extraClass: 'negative',
  onClick: () => {},
};

export const Link = Template.bind({});
Link.args = {
  extraClass: 'link',
  target: '_blank',
  href: '#',
};

const ButtonGrid = ({ children }) => (
  <div className="p-1 d-flex align-items-center flex-wrap" style={{ gap: '8px' }}>
    {children}
  </div>
);

ButtonGrid.propTypes = {
  children: PropTypes.node,
};
