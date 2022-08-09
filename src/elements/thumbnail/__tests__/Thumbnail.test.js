import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  NoImage as NoImageStory,
  WithLabel as WithLabelStory,
  Upload as UploadStory,
} from '../Thumbnail.stories';

const Default = composeStory(DefaultStory, Meta);
const NoImage = composeStory(NoImageStory, Meta);
const WithLabel = composeStory(WithLabelStory, Meta);
const Upload = composeStory(UploadStory, Meta);

it('renders Thumbnail Default', () => {
  const { getByClass } = render(<Default />);

  expect(getByClass('thumbnail')).toBeInTheDocument();
  expect(getByClass('thumbnail__img')).toBeInTheDocument();
  expect(getByClass('thumbnail_thumb')).toBeInTheDocument();
  expect(getByClass('thumbnail__body')).toBeInTheDocument();
  expect(getByClass('thumbnail__body--title')).toBeInTheDocument();
  expect(getByClass('thumbnail__body--description')).toBeInTheDocument();
  expect(getByClass('thumbnail__body--helper')).toBeInTheDocument();
});

it('renders Thumbnail no texts', () => {
  const { queryByClass } = render(<Default title="" description="" url="" />);

  expect(queryByClass('thumbnail__body--title')).not.toBeInTheDocument();
  expect(queryByClass('thumbnail__body--description')).not.toBeInTheDocument();
  expect(queryByClass('thumbnail__body--helper')).not.toBeInTheDocument();
});

it('renders Thumbnail NoImage', () => {
  const { getByClass } = render(<NoImage />);

  expect(getByClass('thumbnail')).toBeInTheDocument();
  expect(getByClass('thumbnail__img minHeight')).toBeInTheDocument();
  expect(getByClass('thumbnail__no-img')).toBeInTheDocument();
});

it('renders Thumbnail WithLabel', () => {
  const { getByClass } = render(<WithLabel />);

  expect(getByClass('input-label-component')).toBeInTheDocument();
  expect(getByClass('control-label')).toBeInTheDocument();
  expect(getByClass('label-optional')).toBeInTheDocument();
  expect(getByClass('help size-lg')).toBeInTheDocument();
});

it('renders Thumbnail with upload button', () => {
  const { getByClass } = render(<Upload />);

  expect(getByClass('thumbnail__img-upload')).toBeInTheDocument();
  expect(getByClass(/dropzone-box/)).toBeInTheDocument();
});
