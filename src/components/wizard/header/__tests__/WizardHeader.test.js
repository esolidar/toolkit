import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../WizardHeader.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders WizardHeader default component', () => {
  const { getByClass } = render(<Default />);

  expect(getByClass('wizard__header')).toBeTruthy();
  expect(getByClass('wizard__header__title')).toBeTruthy();
  expect(getByClass('wizard__header__title__subtitle')).toHaveTextContent('Volunteering');
  expect(getByClass('badge badge__default badge__md btn-badge')).toHaveTextContent('Draft');
});
