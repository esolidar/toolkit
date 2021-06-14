import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { composeStory } from '@storybook/testing-react';

import Meta, { Default as DefaultStory } from '../SupportsBox.stories';

const Default = composeStory(DefaultStory, Meta);

test('render elements correctly', async () => {
  render(
    <IntlProvider locale="en">
      <Default />
    </IntlProvider>
  );

  screen.debug();

  const campaignThumbs = screen.getByAltText('Lorem Ipsum');
  expect(campaignThumbs).toBeInTheDocument();

  const campaignname = screen.getByText('Lorem Ipsum');
  expect(campaignname).toBeInTheDocument();
});
