import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import '@testing-library/jest-dom';

import Meta, { Default as DefaultStory } from '../SupportBox.stories';

const Default = composeStory(DefaultStory, Meta);

it('render elements correctly', () => {
  const { getByAltText, getByTestId, getByText } = render(<Default />);

  expect(getByAltText('Lorem Ipsum')).toBeTruthy();
  expect(getByTestId('recipient-label')).toBeTruthy();
  expect(getByText('Lorem Ipsum')).toBeTruthy();
  expect(getByText('Support this cause:').getAttribute('href')).toBe(
    'https://community.testesolidar.com/npo/detail/1-lorem-ipsum'
  );
  expect(getByText('Support this cause:')).toHaveAttribute('target', '_blank');
});
