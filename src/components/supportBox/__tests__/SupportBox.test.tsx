import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { composeStory } from '@storybook/testing-react';

import Meta, { Default as DefaultStory } from '../SupportBox.stories';

const Default = composeStory(DefaultStory, Meta);

it('render elements correctly', () => {
  const { getByAltText, getByTestId, getByText } = render(
    <IntlProvider locale="en">
      <Default />
    </IntlProvider>
  );

  expect(getByAltText('Lorem Ipsum')).toBeTruthy();
  expect(getByTestId('recipient-label')).toBeTruthy();
  expect(getByText('Lorem Ipsum')).toBeTruthy();
  expect(getByText('Support this cause').getAttribute('href')).toBe(
    'https://community.testesolidar.com/pt/npo/detail/1-lorem-ipsum'
  );
});
