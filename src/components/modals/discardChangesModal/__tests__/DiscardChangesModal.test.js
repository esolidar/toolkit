import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../DiscardChangesModal.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders DiscardChangesModal Default', done => {
  const handleClick = () => {
    done();
  };

  const { getByText, getByTestId, getByClass } = render(
    <Default onClose={handleClick} onClickConfirm={handleClick} onClickCancel={handleClick} />
  );
  expect(getByTestId('modal')).toBeInTheDocument();
  expect(getByText('Discard changes?')).toBeInTheDocument();

  const primaryButton = getByText('Discard & Close');
  expect(primaryButton).toBeInTheDocument();
  fireEvent.click(primaryButton);

  const secondaryButton = getByText('Cancel');
  expect(secondaryButton).toBeInTheDocument();
  fireEvent.click(secondaryButton);

  const closeButton = getByClass('btn-esolidar__icon');
  expect(closeButton).toBeInTheDocument();
  fireEvent.click(closeButton);
});
