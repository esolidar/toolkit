import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '../../../../__customQueries__/test-utils';
import { composeStory } from '@storybook/testing-react';
import Meta, {
  PasswordFieldHiddenPassword,
  PasswordFieldShowPassword,
} from '../PasswordField.stories';

const PasswordFieldHiddenPasswordComponent = composeStory(PasswordFieldHiddenPassword, Meta);
const PasswordFieldShowPasswordComponent = composeStory(PasswordFieldShowPassword, Meta);

it('renders Password Field hidden password', () => {
  render(<PasswordFieldHiddenPasswordComponent />);

  const passwordFielnComponent = screen.queryAllByTestId('passwordField');
  expect(passwordFielnComponent).toHaveLength(1);

  const inputType = screen.getByTestId('input-password');
  expect(inputType).toHaveAttribute('type', 'password');

  const eyeBlocked = screen.getByTestId('eye');
  expect(eyeBlocked).toBeInTheDocument();
});

it('renders Password Field show password', () => {
  render(<PasswordFieldShowPasswordComponent />);

  const passwordFielnComponent = screen.queryAllByTestId('passwordField');
  expect(passwordFielnComponent).toHaveLength(1);

  const inputType = screen.getByTestId('input-password');
  expect(inputType).toHaveAttribute('type', 'text');

  const eyeBlocked = screen.getByTestId('eye-blocked');
  expect(eyeBlocked).toBeInTheDocument();
});

it('renders Password Field and click button eye', () => {
  render(<PasswordFieldShowPasswordComponent />);

  fireEvent.click(screen.getByTestId('button'));
  const eye = screen.getByTestId('eye');
  expect(eye).toBeInTheDocument();

  fireEvent.click(screen.getByTestId('button'));
  const eyeBlocked = screen.getByTestId('eye-blocked');
  expect(eyeBlocked).toBeInTheDocument();
});
