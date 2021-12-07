import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../Tooltip.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders Tooltip default', () => {
  const { getByTestId, getByText, getByClass } = render(<Default />);

  expect(getByTestId('tooltipOverlay')).toBeInTheDocument();
  fireEvent.mouseOver(getByText('Hover here'));
  expect(getByClass('rc-tooltip tooltip esolidar-tooltip')).toBeInTheDocument();
  expect(getByText('Text')).toBeInTheDocument();
});
