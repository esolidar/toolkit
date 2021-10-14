import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../TextWithBreakLine.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders ProgressBar default', () => {
  const { getByTestId } = render(<Default />);

  expect(getByTestId('textWithBreakLine-0')).toBeInTheDocument();
  expect(getByTestId('textWithBreakLine-1')).toBeInTheDocument();
  expect(getByTestId('textWithBreakLine-2')).toBeInTheDocument();
  expect(getByTestId('textWithBreakLine-3')).toBeInTheDocument();
});
