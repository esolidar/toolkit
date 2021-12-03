import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../MultiSelectField.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders MultiSelectField default', () => {
  const { queryAllByClass, getByClass } = render(<Default />);

  expect(getByClass('multi-select-component form-group')).toBeInTheDocument();
  expect(queryAllByClass('option-header')).toHaveLength(1);
});
