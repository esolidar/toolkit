import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent, within, waitFor } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  OneImageOnly as OneImageOnlyStory,
  Youtube as YoutubeStory,
  Vimeo as VimeoStory,
} from '../CarouselLightbox.stories';

const Default = composeStory(DefaultStory, Meta);
const OneImageOnly = composeStory(OneImageOnlyStory, Meta);
const Youtube = composeStory(YoutubeStory, Meta);
const Vimeo = composeStory(VimeoStory, Meta);

it('renders CarouselLightbox one image only', () => {
  const { getAllByRole, queryByClass } = render(<OneImageOnly />);

  expect(getAllByRole('presentation')).toHaveLength(1);
  expect(queryByClass('carouselLightbox__thumbnails-container')).not.toBeInTheDocument();
});

it('renders CarouselLightbox youtube video', () => {
  const { getByTitle, getByClass, getAllByRole } = render(<Youtube />);

  expect(getByTitle('a4jSanwdEj0')).toBeInTheDocument();
  expect(getByClass('carouselLightbox__thumbnails-container')).toBeInTheDocument();
  expect(getAllByRole('presentation')).toHaveLength(3);
});

it('renders CarouselLightbox vimeo video', () => {
  const { getByTitle, getByClass, getAllByRole } = render(<Vimeo />);

  expect(getByTitle('76979871')).toBeInTheDocument();
  expect(getByClass('carouselLightbox__thumbnails-container')).toBeInTheDocument();
  expect(getAllByRole('presentation')).toHaveLength(3);
});

it('renders CarouselLightbox multiple images and videos', () => {
  const { getAllByClass, getByClass, getAllByRole, getByTitle } = render(<Default />);

  expect(getByClass('carouselLightbox')).toBeInTheDocument();
  expect(getByClass('carouselLightbox__image-gallery-slides')).toBeInTheDocument();
  expect(getAllByClass(/carouselLightbox__image-gallery-slides-video/)).toHaveLength(2);
  expect(getByTitle('76979871')).toBeInTheDocument();
  expect(getByTitle('a4jSanwdEj0')).toBeInTheDocument();
  expect(getAllByRole('presentation')).toHaveLength(6);
  expect(getByClass(/btn-thumbnail-next-right/)).toBeInTheDocument();
  expect(getByClass(/btn-thumbnail-next-left/)).toBeInTheDocument();
  expect(getByClass(/btn-gallery-left-nav/)).toBeInTheDocument();
  expect(getByClass(/btn-gallery-right-nav/)).toBeInTheDocument();
});

it('renders CarouselLightbox thumbnail hover event', async () => {
  const { getByClass } = render(<Default />);

  const thumbnailContainer = getByClass('carouselLightbox__thumbnails-container');
  const galleryContainer = getByClass('carouselLightbox__image-gallery-slides');

  expect(thumbnailContainer).toBeInTheDocument();
  expect(galleryContainer).toBeInTheDocument();
  fireEvent.mouseOver(within(thumbnailContainer).getByAltText('1018'));
  await waitFor(() => {
    expect(within(galleryContainer).getByAltText('1018')).toBeInTheDocument();
  });
});

it('renders CarouselLightbox open lightbox', async () => {
  const { getByClass } = render(<OneImageOnly />);

  const galleryContainer = getByClass('carouselLightbox__image-gallery-slides');
  const image = within(galleryContainer).getByAltText('1019');

  expect(galleryContainer).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  fireEvent.click(image);
  await waitFor(() => {
    const lightboxImage = getByClass('carouselLightbox__lightbox-container');
    expect(lightboxImage).toBeInTheDocument();
  });
});

it('trenders CarouselLightbox click next image event', async () => {
  const { getByClass } = render(<Youtube />);

  const prevButton = getByClass(/btn-gallery-left-nav/);
  const nextButton = getByClass(/btn-gallery-right-nav/);
  expect(prevButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();

  fireEvent.click(nextButton);
  await waitFor(() => {
    const galleryContainer = getByClass('carouselLightbox__image-gallery-slides');
    expect(within(galleryContainer).getByAltText('1018')).toBeInTheDocument();
  });

  fireEvent.click(nextButton);
  await waitFor(() => {
    const galleryContainer = getByClass('carouselLightbox__image-gallery-slides');
    expect(within(galleryContainer).getByAltText('1015')).toBeInTheDocument();
  });

  fireEvent.click(prevButton);
  await waitFor(() => {
    const galleryContainer = getByClass('carouselLightbox__image-gallery-slides');
    expect(within(galleryContainer).getByAltText('1018')).toBeInTheDocument();
  });
});

it('renders CarouselLightbox XXXX', async () => {
  const { getByClass } = render(<Default />);

  const prevThumbnailButton = getByClass(/btn-thumbnail-next-left/);
  const nextThumbnailButton = getByClass(/btn-thumbnail-next-right/);

  expect(prevThumbnailButton).toBeInTheDocument();
  expect(nextThumbnailButton).toBeInTheDocument();

  fireEvent.click(nextThumbnailButton);
  await waitFor(() => {
    const thumbnailContainer = getByClass('carouselLightbox__thumbnails-container');
    expect(within(thumbnailContainer).getByAltText('1022')).toBeInTheDocument();
  });

  fireEvent.click(prevThumbnailButton);
  await waitFor(() => {
    const thumbnailContainer = getByClass('carouselLightbox__thumbnails-container');
    expect(within(thumbnailContainer).getByAltText('1018')).toBeInTheDocument();
  });
});

it('renders CarouselLightbox thumbnail click event', async () => {
  const { getByClass } = render(<Default />);

  const thumbnailContainer = getByClass('carouselLightbox__thumbnails-container');
  const galleryContainer = getByClass('carouselLightbox__image-gallery-slides');
  const thumbnail = within(thumbnailContainer).getByAltText('1015');

  expect(thumbnailContainer).toBeInTheDocument();
  expect(galleryContainer).toBeInTheDocument();
  expect(thumbnail).toBeInTheDocument();

  fireEvent.click(thumbnail);
  await waitFor(() => {
    expect(within(thumbnailContainer).getByAltText('1015')).toHaveAttribute('class', 'active');
  });
});
