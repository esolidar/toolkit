import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Info as InfoStory,
  Success as SuccessStory,
  Warning as WarningStory,
  Danger as DangerStory,
} from '../Toast.stories';

const Info = composeStory(InfoStory, Meta);
const Success = composeStory(SuccessStory, Meta);
const Warning = composeStory(WarningStory, Meta);
const Danger = composeStory(DangerStory, Meta);

it('renders Toast Info', () => {
  const { getByTestId, getByText, getByClass } = render(<Info />);

  expect(getByTestId('alertBox-component')).toBeInTheDocument();
  expect(getByClass(/alertBox__info/)).toBeInTheDocument();
  expect(getByTestId('Info')).toBeInTheDocument();
  expect(getByText('Undergoing maintenance')).toBeInTheDocument();
  expect(getByText('Thank you for your patience, we’ll be back soon.')).toBeInTheDocument();
});

it('renders Toast Success', () => {
  const { getByTestId, getByText, getByClass } = render(<Success />);

  expect(getByTestId('alertBox-component')).toBeInTheDocument();
  expect(getByClass(/alertBox__success/)).toBeInTheDocument();
  expect(getByTestId('CheckCircle')).toBeInTheDocument();
  expect(getByText('Account created')).toBeInTheDocument();
  expect(getByText('You may now log in with the username you’ve chosen.')).toBeInTheDocument();
});

it('renders Toast Warning', () => {
  const { getByTestId, getByText, getByClass } = render(<Warning />);

  expect(getByTestId('alertBox-component')).toBeInTheDocument();
  expect(getByClass(/alertBox__warning/)).toBeInTheDocument();
  expect(getByTestId('AlertTriangle')).toBeInTheDocument();
  expect(getByText('Your credit card is about to expire')).toBeInTheDocument();
  expect(getByText('Update your payment information or contact support.')).toBeInTheDocument();
});

it('renders Toast Danger', () => {
  const { getByTestId, getByText, getByClass } = render(<Danger />);

  expect(getByTestId('alertBox-component')).toBeInTheDocument();
  expect(getByClass(/alertBox__danger/)).toBeInTheDocument();
  expect(getByClass(/icon-component/)).toBeInTheDocument();
  expect(getByText('Could not connect')).toBeInTheDocument();
  expect(
    getByText('Make sure your network connection is active and try again.')
  ).toBeInTheDocument();
});
