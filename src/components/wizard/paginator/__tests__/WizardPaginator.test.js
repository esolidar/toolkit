import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../WizardPaginator.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders WizardPaginator default component', () => {
  const { getByClass, queryAllByClass } = render(<Default />);

  expect(getByClass('wizard__paginator')).toBeTruthy();
  expect(queryAllByClass(/wizard__paginator__item /)).toHaveLength(5);
});
