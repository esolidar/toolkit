import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  NotShowFacebook as NotShowFacebookStory,
  NotShowTwitter as NotShowTwitterStory,
  NotShowWhatsapp as NotShowWhatsappStory,
  NotShowCopyToClipboard as NotShowCopyToClipboardStory,
} from '../ShareNetwork.stories';

const Default = composeStory(DefaultStory, Meta);
const NotShowFacebook = composeStory(NotShowFacebookStory, Meta);
const NotShowTwitter = composeStory(NotShowTwitterStory, Meta);
const NotShowWhatsapp = composeStory(NotShowWhatsappStory, Meta);
const NotShowCopyToClipboard = composeStory(NotShowCopyToClipboardStory, Meta);

it('renders ShareNetwork default', () => {
  const { getByLabelText } = render(<Default />);

  expect(getByLabelText('facebook')).toBeTruthy();
  expect(getByLabelText('twitter')).toBeTruthy();
  expect(getByLabelText('whatsapp')).toBeTruthy();
  expect(getByLabelText('copyToClipboard')).toBeTruthy();
});

it('renders ShareNetwork and dont show facebook button', () => {
  const { getByLabelText, queryByTestId } = render(<NotShowFacebook />);

  expect(queryByTestId('share-facebook')).not.toBeInTheDocument();
  expect(getByLabelText('twitter')).toBeTruthy();
  expect(getByLabelText('whatsapp')).toBeTruthy();
  expect(getByLabelText('copyToClipboard')).toBeTruthy();
});

it('renders ShareNetwork and dont show twitter button', () => {
  const { getByLabelText, queryByTestId } = render(<NotShowTwitter />);

  expect(getByLabelText('facebook')).toBeTruthy();
  expect(queryByTestId('share-twitter')).not.toBeInTheDocument();
  expect(getByLabelText('whatsapp')).toBeTruthy();
  expect(getByLabelText('copyToClipboard')).toBeTruthy();
});

it('renders ShareNetwork and dont show Whatsapp button', () => {
  const { getByLabelText, queryByTestId } = render(<NotShowWhatsapp />);

  expect(getByLabelText('facebook')).toBeTruthy();
  expect(getByLabelText('twitter')).toBeTruthy();
  expect(queryByTestId('share-whatsapp')).not.toBeInTheDocument();
  expect(getByLabelText('copyToClipboard')).toBeTruthy();
});

it('renders ShareNetwork and dont show copyToClipboard button', () => {
  const { getByLabelText, queryByTestId } = render(<NotShowCopyToClipboard />);

  expect(getByLabelText('facebook')).toBeTruthy();
  expect(getByLabelText('twitter')).toBeTruthy();
  expect(getByLabelText('whatsapp')).toBeTruthy();
  expect(queryByTestId('share-link')).not.toBeInTheDocument();
});
