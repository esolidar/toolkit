import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../ShareModal.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders Example default', () => {
  const { getByTestId, getByText, getByClass, getAllByClass } = render(<Default />);

  expect(getByClass(/ shareModal /)).toBeInTheDocument();
  expect(getByClass(/ codebox-button/)).toBeInTheDocument();
  expect(getAllByClass('btn-esolidar__icon')).toHaveLength(6);
  expect(getAllByClass(/btn-esolidar /)).toHaveLength(7);
  expect(getByTestId('share-twitter')).toBeInTheDocument();
  expect(getByTestId('share-facebook')).toBeInTheDocument();
  expect(getByTestId('share-linkedin')).toBeInTheDocument();
  expect(getByTestId('share-whatsapp')).toBeInTheDocument();
  expect(getByTestId('share-email')).toBeInTheDocument();
  expect(getByText('Copy')).toBeInTheDocument();
  expect(getByText('Facebook')).toBeInTheDocument();
  expect(getByText('Twitter')).toBeInTheDocument();
  expect(getByText('Linkedin')).toBeInTheDocument();
  expect(getByText('WhatsApp')).toBeInTheDocument();
  expect(getByText('Email')).toBeInTheDocument();
});
