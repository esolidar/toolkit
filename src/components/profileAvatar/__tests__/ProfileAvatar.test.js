import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  WithLink as WithLinkStory,
  WithDefaultThumb as WithDefaultThumbStory,
  WithoutName as WithoutNameStory,
} from '../ProfileAvatar.stories';

const Default = composeStory(DefaultStory, Meta);
const WithLink = composeStory(WithLinkStory, Meta);
const WithDefaultThumb = composeStory(WithDefaultThumbStory, Meta);
const WithoutName = composeStory(WithoutNameStory, Meta);

it('renders ProfileAvatar default', () => {
  const { getByTestId, getByClass, getByText, getByAltText } = render(<Default />);
  expect(getByTestId('profile-avatar')).toBeInTheDocument();

  expect(getByClass('profile-avatar__thumb thumb-lg')).toBeInTheDocument();
  expect(getByAltText('Joel F. Calheiros')).toBeInTheDocument();

  expect(
    getByClass('profile-avatar__name client__primary--color-hover margin')
  ).toBeInTheDocument();
  expect(getByText('Joel F. Calheiros')).toBeInTheDocument();
});

it('renders ProfileAvatar with link', () => {
  const { getByTestId, getByClass, getByAltText, getByText } = render(<WithLink />);
  expect(getByTestId('profile-avatar')).toBeInTheDocument();

  expect(getByClass('profile-avatar__thumb thumb-lg click')).toBeInTheDocument();
  expect(getByAltText('Joel F. Calheiros')).toBeInTheDocument();

  expect(
    getByClass('profile-avatar__name client__primary--color-hover margin click')
  ).toBeInTheDocument();
  expect(getByText('Joel F. Calheiros')).toBeInTheDocument();
});

it('renders ProfileAvatar without thumb', () => {
  const { getByTestId, getByClass, queryByClass, getByText, queryByAltText } = render(
    <WithDefaultThumb />
  );
  expect(getByTestId('profile-avatar')).toBeInTheDocument();

  expect(queryByClass('profile-avatar__thumb thumb-lg')).toBeInTheDocument();
  expect(queryByAltText('Joel F. Calheiros')).toBeInTheDocument();

  expect(
    getByClass('profile-avatar__name client__primary--color-hover margin')
  ).toBeInTheDocument();
  expect(getByText('Joel F. Calheiros')).toBeInTheDocument();
});

it('renders ProfileAvatar without name', () => {
  const { getByTestId, getByClass, queryByClass, queryByText, getByAltText } = render(
    <WithoutName />
  );
  expect(getByTestId('profile-avatar')).toBeInTheDocument();

  expect(getByClass('profile-avatar__thumb thumb-lg')).toBeInTheDocument();
  expect(getByAltText('Profile picture')).toBeInTheDocument();

  expect(queryByClass('profile-avatar__name')).not.toBeInTheDocument();
  expect(queryByText('Joel F. Calheiros')).not.toBeInTheDocument();
});
