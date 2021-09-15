import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../../auction/CardAuction.stories';
import auction from '../../../../../__mocks__/auction';

const Default = composeStory(DefaultStory, Meta);

it('renders Auction public', () => {
  const { getAllByClass, getByClass } = render(<Default />);

  expect(getAllByClass('card-component')).toBeTruthy();
  expect(getAllByClass('card-component-image')).toHaveLength(1);
  expect(getAllByClass('bg-image')).toHaveLength(1);
  expect(getAllByClass('card-component-body')).toHaveLength(1);
  expect(getAllByClass('card-component-title')).toHaveLength(1);
  expect(getByClass('card-component-title')).toHaveTextContent(auction.title_en);
  expect(getAllByClass('card-component-body-middle')).toHaveLength(1);
  expect(getAllByClass('countdown-component border')).toHaveLength(1);
  expect(getAllByClass('card-component-support')).toHaveLength(1);
});
