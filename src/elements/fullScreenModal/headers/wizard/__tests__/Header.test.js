import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../Header.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders WizardHeader default component', () => {
  const { getByClass } = render(<Default />);

  expect(getByClass('wizard__header')).toBeTruthy();
  expect(getByClass('wizard__header__title')).toBeTruthy();
  expect(getByClass('wizard__header__title__subtitle')).toHaveTextContent('Volunteering');
  expect(
    getByClass('badge type-default__white badge__sm type-default btn-badge')
  ).toHaveTextContent('Draft');
});
