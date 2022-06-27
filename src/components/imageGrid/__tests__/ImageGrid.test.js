import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent, waitFor } from '../../../../__customQueries__/test-utils';
import Meta, {
  OneImage as OneImageStory,
  TwoImages as TwoImagesStory,
  ThreeImages as ThreeImagesStory,
  Multiple as MultipleStory,
  Inline as InlineStory,
} from '../ImageGrid.stories';

const OneImage = composeStory(OneImageStory, Meta);
const TwoImages = composeStory(TwoImagesStory, Meta);
const ThreeImages = composeStory(ThreeImagesStory, Meta);
const Multiple = composeStory(MultipleStory, Meta);
const Inline = composeStory(InlineStory, Meta);

it('renders imageGrid one image only', () => {
  const { getByClass, getByAltText } = render(<OneImage />);

  expect(getByClass('imageGrid')).toBeInTheDocument();
  expect(getByClass('imageGrid__image')).toBeInTheDocument();
  expect(getByClass(/esolidar-preview /)).toBeInTheDocument();
  expect(getByClass('esolidar-preview__image')).toBeInTheDocument();
  expect(getByAltText('thumb')).toHaveAttribute('src', 'https://picsum.photos/id/1018/1000/600/');
});

it('renders imageGrid with two images', () => {
  const { getByClass, getAllByClass, queryAllByAltText } = render(<TwoImages />);

  expect(getByClass('imageGrid')).toBeInTheDocument();
  expect(getAllByClass('imageGrid__image')).toHaveLength(2);
  expect(getAllByClass(/esolidar-preview /)).toHaveLength(2);
  expect(getAllByClass('esolidar-preview__image')).toHaveLength(2);
  expect(queryAllByAltText('thumb')[0]).toHaveAttribute(
    'src',
    'https://picsum.photos/id/1018/1000/600/'
  );
  expect(queryAllByAltText('thumb')[1]).toHaveAttribute(
    'src',
    'https://picsum.photos/id/1015/1000/600/'
  );
});

it('renders imageGrid with three images', () => {
  const { getByClass, getAllByClass, queryAllByAltText } = render(<ThreeImages />);

  expect(getByClass('imageGrid')).toBeInTheDocument();
  expect(getAllByClass('imageGrid__image')).toHaveLength(3);
  expect(getAllByClass(/esolidar-preview /)).toHaveLength(3);
  expect(getAllByClass('esolidar-preview__image')).toHaveLength(3);
  expect(queryAllByAltText('thumb')[0]).toHaveAttribute(
    'src',
    'https://picsum.photos/id/1018/1000/600/'
  );
  expect(queryAllByAltText('thumb')[1]).toHaveAttribute(
    'src',
    'https://picsum.photos/id/1015/1000/600/'
  );
  expect(queryAllByAltText('thumb')[2]).toHaveAttribute(
    'src',
    'https://picsum.photos/id/1019/1000/600/'
  );
});

it('renders imageGrid with multiples images', () => {
  const { getByClass, getAllByClass, queryAllByAltText } = render(<Multiple />);

  expect(getByClass('imageGrid')).toBeInTheDocument();
  expect(getAllByClass('imageGrid__image')).toHaveLength(4);
  expect(getAllByClass(/esolidar-preview /)).toHaveLength(4);
  expect(getAllByClass('esolidar-preview__image')).toHaveLength(4);
  expect(getAllByClass('esolidar-preview__delete')).toHaveLength(4);
  expect(queryAllByAltText('thumb')).toHaveLength(4);
  expect(getByClass('load-more')).toBeInTheDocument();
});

it('renders imageGrid with Inline images', async () => {
  const { getByClass, getAllByClass, queryAllByAltText } = render(<Inline />);

  expect(getByClass('imageGrid displayInline')).toBeInTheDocument();
  expect(getAllByClass('imageGrid__image')).toHaveLength(4);
  expect(getAllByClass(/esolidar-preview /)).toHaveLength(4);
  expect(getAllByClass('esolidar-preview__image')).toHaveLength(4);
  expect(getAllByClass('esolidar-preview__delete')).toHaveLength(4);
  expect(queryAllByAltText('thumb')).toHaveLength(4);
  expect(getByClass('load-more')).toBeInTheDocument();

  fireEvent.click(queryAllByAltText('thumb')[3]);
  await waitFor(() => {
    expect(getByClass('ReactModalPortal')).toBeInTheDocument();
  });
});
