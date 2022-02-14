import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../WizardFooter.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders WizardFooter default component', () => {
  const { getByClass, getAllByClass } = render(<Default />);

  expect(getByClass('wizard__footer')).toBeTruthy();
  expect(getAllByClass(/btn-dark/)).toBeTruthy();
  expect(getByClass(/btn-primary-full/)).toBeTruthy();
  expect(getByClass('wizard__footer__continue')).toHaveTextContent('Step 2 of 4');
});
