import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../DeleteModal.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders DeleteModal Default', done => {
  const handleClick = () => {
    done();
  };

  const { getByText, getByTestId } = render(
    <Default onClose={handleClick} onClickConfirm={handleClick} onClickCancel={handleClick} />
  );
  expect(getByTestId('modal')).toBeInTheDocument();
  expect(getByText('Delete Project?')).toBeInTheDocument();
  expect(
    getByText('By deleting, you won’t recover the project’s data and files.')
  ).toBeInTheDocument();

  const primaryButton = getByText('Delete');
  expect(primaryButton).toBeInTheDocument();
  fireEvent.click(primaryButton);

  const secondaryButton = getByText('Cancel');
  expect(secondaryButton).toBeInTheDocument();
  fireEvent.click(secondaryButton);
});
