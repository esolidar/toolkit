import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { composeStory } from '@storybook/testing-react';

import Meta, { Default as DefaultStory } from '../SupportsBox.stories';

const Default = composeStory(DefaultStory, Meta);

test('render elements correctly', async () => {
  const { getByAltText, getByTestId, getByText } = render(
    <IntlProvider locale="en">
      <Default />
    </IntlProvider>
  );

  expect(getByAltText('Lorem Ipsum')).toBeInTheDocument();
  expect(getByTestId('recipient-label')).toBeTruthy();
  expect(getByText('Lorem Ipsum')).toBeInTheDocument();
  expect(getByText('Support this cause').getAttribute('href')).toBe('/npo/detail/1-lorem-ipsum');
});
