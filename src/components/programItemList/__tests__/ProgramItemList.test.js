import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory, Draft as DraftStory } from '../ProgramItemList.stories';

const Default = composeStory(DefaultStory, Meta);
const Draft = composeStory(DraftStory, Meta);

it('renders ProgramItemList default component', () => {
  const { getByText, getByTestId, getByClass } = render(<Default />);

  expect(getByText('Some title')).toBeInTheDocument();
  expect(getByText('Some description text')).toBeInTheDocument();
  expect(getByTestId('btnOpenWizard')).toBeInTheDocument();
  expect(getByText('Live')).toBeInTheDocument();

  userEvent.click(getByClass('esolidar-dropdown__toggle'));
  expect(getByClass(/esolidar-dropdown__menu /)).toBeInTheDocument();
});

it('renders ItemList draft', () => {
  const { getByText, getByTestId } = render(<Draft />);

  expect(getByText('Untitled')).toBeInTheDocument();
  expect(getByTestId('btnOpenWizard')).toBeInTheDocument();
  expect(getByText('Draft')).toBeInTheDocument();
});
