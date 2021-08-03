import React from 'react';
import { composeStory } from '@storybook/testing-react';
import translation from '@esolidar/i18n/projects/toolkit/en';
import { IntlProvider } from 'react-intl';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../ShareNetwork.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders ShareNetwork default', () => {
  const { getByLabelText, getAllByClass } = render(
    <IntlProvider locale="en" messages={translation}>
      <Default />
    </IntlProvider>
  );

  expect(getByLabelText('facebook')).toBeTruthy();
  expect(getByLabelText('twitter')).toBeTruthy();
  expect(getByLabelText('whatsapp')).toBeTruthy();
  expect(getByLabelText('copyToClipboard')).toBeTruthy();
  expect(getAllByClass(/share-icon/)).toHaveLength(4);
});
