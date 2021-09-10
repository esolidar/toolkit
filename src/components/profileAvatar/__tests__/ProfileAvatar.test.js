import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  WithoutThumb as WithoutThumbStory,
  WithoutName as WithoutNameStory,
} from '../ProfileAvatar.stories';

const Default = composeStory(DefaultStory, Meta);
const WithoutThumb = composeStory(WithoutThumbStory, Meta);
const WithoutName = composeStory(WithoutNameStory, Meta);

it('renders ProfileAvatar default', () => {
  const { getByTestId, getByClass, getByText, getByAltText } = render(<Default />);
  expect(getByTestId('profile-avatar')).toBeInTheDocument();

  expect(getByClass('profile-avatar__thumb thumb-lg')).toBeInTheDocument();
  expect(getByAltText('Joel F. Calheiros')).toBeInTheDocument();

  expect(getByClass('profile-avatar__name margin')).toBeInTheDocument();
  expect(getByText('Joel F. Calheiros')).toBeInTheDocument();
});

it('renders ProfileAvatar without thumb', () => {
  const { getByTestId, getByClass, queryByClass, getByText, queryByAltText } = render(
    <WithoutThumb />
  );
  expect(getByTestId('profile-avatar')).toBeInTheDocument();

  expect(queryByClass('profile-avatar__thumb thumb-lg')).not.toBeInTheDocument();
  expect(queryByAltText('Joel F. Calheiros')).not.toBeInTheDocument();

  expect(getByClass('profile-avatar__name')).toBeInTheDocument();
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
