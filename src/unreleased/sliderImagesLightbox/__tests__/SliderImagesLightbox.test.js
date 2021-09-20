import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, screen } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  SliderOneImage as SliderOneImageStory,
  SliderNoImageNoVideo as SliderNoImageNoVideoStory,
  SliderVimeo as SliderVimeoStory,
} from '../SliderImagesLightbox.stories';

const Default = composeStory(DefaultStory, Meta);
const SliderOneImage = composeStory(SliderOneImageStory, Meta);
const SliderNoImageNoVideo = composeStory(SliderNoImageNoVideoStory, Meta);
const SliderVimeo = composeStory(SliderVimeoStory, Meta);

describe('SliderImagesLightbox page', () => {
  it('renders SliderImagesLightbox with video', () => {
    render(<Default />);
    const iframe = screen.queryAllByTestId('iframe-youtube');
    expect(iframe).toHaveLength(2);
  });

  it('renders SliderImagesLightbox with no video and one image', () => {
    render(<SliderOneImage />);
    const image = screen.queryAllByTestId('image');
    const iframeYoutube = screen.queryAllByTestId('iframe-youtube');
    expect(image).toHaveLength(1);
    expect(iframeYoutube).toHaveLength(0);
  });

  it('renders SliderImagesLightbox with one image', () => {
    render(<SliderOneImage />);
    const image = screen.queryAllByTestId('image');
    expect(image).toHaveLength(1);
  });

  it('renders SliderImagesLightbox with no images and no video', () => {
    render(<SliderNoImageNoVideo />);
    const image = screen.queryAllByTestId('no-image');
    const iframeYoutube = screen.queryAllByTestId('iframe-youtube');
    const iframeVimeo = screen.queryAllByTestId('iframe-vimeo');
    expect(image).toHaveLength(1);
    expect(iframeYoutube).toHaveLength(0);
    expect(iframeVimeo).toHaveLength(0);
  });

  it('renders SliderImagesLightbox with video vimeo', () => {
    render(<SliderVimeo />);
    const iframeVimeo = screen.queryAllByTestId('iframe-vimeo');
    expect(iframeVimeo).toHaveLength(1);
  });
});
