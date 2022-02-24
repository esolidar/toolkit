import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Small as SmallStory,
  Medium as MediumStory,
  Large as LargeStory,
} from '../CheckboxCard.stories';

const Small = composeStory(SmallStory, Meta);
const Medium = composeStory(MediumStory, Meta);
const Large = composeStory(LargeStory, Meta);

it('renders CheckboxCard Small', () => {
  const { getById, getByText, getByClass, queryByClass } = render(<Small />);

  const card = getById('checkboxCard-sm');
  expect(card).toBeInTheDocument();
  expect(getByClass('checkbox-card__image')).toBeInTheDocument();
  expect(getByClass(/sm/)).toBeInTheDocument();
  expect(getByText('Reading & Writing')).toBeInTheDocument();

  expect(queryByClass(/active/)).not.toBeInTheDocument();
  userEvent.click(card);
  expect(getByClass(/active/)).toBeInTheDocument();
});

it('renders CheckboxCard Medium', () => {
  const { getById, getByText, getByClass, queryByClass } = render(<Medium />);

  const card = getById('checkboxCard-md');
  expect(card).toBeInTheDocument();
  expect(getByClass('checkbox-card__image')).toBeInTheDocument();
  expect(getByClass(/md/)).toBeInTheDocument();
  expect(getByText('Title')).toBeInTheDocument();
  expect(getByText('Subtitle')).toBeInTheDocument();

  expect(queryByClass(/active/)).not.toBeInTheDocument();
  userEvent.click(card);
  expect(getByClass(/active/)).toBeInTheDocument();
});

it('renders CheckboxCard Large', () => {
  const { getById, getByText, getByClass, queryByClass } = render(<Large />);

  const card = getById('checkboxCard-lg');
  expect(card).toBeInTheDocument();
  expect(getByClass('checkbox-card__image')).toBeInTheDocument();
  expect(getByClass(/lg/)).toBeInTheDocument();
  expect(getByText('Zero hunger')).toBeInTheDocument();
  expect(
    getByText(
      'End hunger, achieve food security and improved nutrition and promote sustainable agriculture'
    )
  ).toBeInTheDocument();

  expect(queryByClass(/active/)).not.toBeInTheDocument();
  userEvent.click(card);
  expect(getByClass(/active/)).toBeInTheDocument();
  expect(getByClass(/large/)).toBeInTheDocument();
});
