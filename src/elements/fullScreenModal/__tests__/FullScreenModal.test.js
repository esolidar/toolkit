import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Open as OpenStory,
  Close as CloseStory,
  NoHeader as NoHeaderStory,
} from '../FullScreenModal.stories';

const Open = composeStory(OpenStory, Meta);
const Close = composeStory(CloseStory, Meta);
const NoHeader = composeStory(NoHeaderStory, Meta);

it('renders Open modal', () => {
  const { getByClass } = render(<Open />);

  expect(getByClass('fullscreen-modal open')).toBeTruthy();
  expect(getByClass('fullscreen-modal__body')).toBeTruthy();
});

it('renders Close modal', () => {
  const { getByClass } = render(<Close />);

  expect(getByClass('fullscreen-modal closed')).toBeTruthy();
});

it('renders NoHeaderl modal', () => {
  const { getByClass } = render(<NoHeader />);

  expect(getByClass('fullscreen-modal open')).toBeTruthy();
  expect(getByClass('fullscreen-modal__header')).toBeTruthy();
});
