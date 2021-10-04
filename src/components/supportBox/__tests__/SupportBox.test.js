import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import '@testing-library/jest-dom';

import Meta, { Default as DefaultStory } from '../SupportBox.stories';

const Default = composeStory(DefaultStory, Meta);

it('render elements correctly', () => {
  const { getByAltText, getByTestId, getByText, getByClass } = render(<Default />);

  expect(getByAltText('Lorem Ipsum')).toBeTruthy();
  expect(getByTestId('recipient-label')).toBeTruthy();
  expect(getByText('Lorem Ipsum')).toBeTruthy();
  expect(getByClass(/support-btn/).getAttribute('href')).toBe(
    'https://community.testesolidar.com/npo/detail/1-lorem-ipsum'
  );
  expect(getByClass(/support-btn/)).toHaveAttribute('target', '_blank');
  expect(getByText('Support this nonprofit:')).toBeInTheDocument();
});
