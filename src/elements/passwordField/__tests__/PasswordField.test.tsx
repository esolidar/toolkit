import '@testing-library/jest-dom';
import translation from '@esolidar/i18n/projects/toolkit/en';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStory } from '@storybook/testing-react';
import { IntlProvider } from 'react-intl';
import Meta, {
  PasswordFieldHiddenPassword,
  PasswordFieldShowPassword,
} from '../PasswordField.stories';

const PasswordFieldHiddenPasswordComponent = composeStory(PasswordFieldHiddenPassword, Meta);
const PasswordFieldShowPasswordComponent = composeStory(PasswordFieldShowPassword, Meta);

it('renders Password Field hidden password', () => {
  render(
    <IntlProvider locale="en" messages={translation}>
      <PasswordFieldHiddenPasswordComponent />
    </IntlProvider>
  );

  const passwordFielnComponent = screen.queryAllByTestId('passwordField');
  expect(passwordFielnComponent).toHaveLength(1);

  const inputType = screen.getByTestId('input-password');
  expect(inputType).toHaveAttribute('type', 'password');

  const eyeBlocked = screen.getByTestId('eye');
  expect(eyeBlocked).toBeInTheDocument();
});

it('renders Password Field show password', () => {
  render(
    <IntlProvider locale="en" messages={translation}>
      <PasswordFieldShowPasswordComponent />
    </IntlProvider>
  );

  const passwordFielnComponent = screen.queryAllByTestId('passwordField');
  expect(passwordFielnComponent).toHaveLength(1);

  const inputType = screen.getByTestId('input-password');
  expect(inputType).toHaveAttribute('type', 'text');

  const eyeBlocked = screen.getByTestId('eye-blocked');
  expect(eyeBlocked).toBeInTheDocument();
});

it('renders Password Field and click button eye', () => {
  render(
    <IntlProvider locale="en" messages={translation}>
      <PasswordFieldShowPasswordComponent />
    </IntlProvider>
  );

  fireEvent.click(screen.getByRole('button'));
  const eye = screen.getByTestId('eye');
  expect(eye).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button'));
  const eyeBlocked = screen.getByTestId('eye-blocked');
  expect(eyeBlocked).toBeInTheDocument();
});
