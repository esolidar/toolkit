import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  WithScroll as WithScrollStory,
} from '../CustomModal.stories';

const Default = composeStory(DefaultStory, Meta);
const WithScroll = composeStory(WithScrollStory, Meta);

describe('CustomModal component', () => {
  it('renders "CustomModal" correctly', () => {
    const { getByTestId } = render(<Default />);
    expect(getByTestId('modal')).toBeInTheDocument();
    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByTestId('title')).toBeInTheDocument();
    expect(getByTestId('body')).toBeInTheDocument();
  });

  it('renders subtitle if prop "subtitle" is defined', () => {
    const { getByTestId } = render(<Default />);
    expect(getByTestId('subtitle')).toBeInTheDocument();
  });

  it('renders footer if prop "actionsChildren" is defined', () => {
    const { getByTestId } = render(<Default />);
    expect(getByTestId('footer')).toBeInTheDocument();
  });

  it('sets size if prop "size" is defined', () => {
    const { getByClass } = render(<Default />);
    expect(getByClass(/modal-md/)).toBeTruthy();
  });

  it('renders closeButton if prop "closeButton" is true', () => {
    const { getByClass } = render(<Default />);
    expect(getByClass('btn-esolidar__icon')).toBeTruthy();
  });

  it('renders modal with scroll', async () => {
    const { getByClass } = render(<WithScroll />);

    expect(getByClass('modal-footer')).toHaveStyle({
      borderTop: '1px solid rgb(222, 226, 230',
    });
    await fireEvent.scroll(window, { target: { scrollY: 101 } });
    expect(getByClass('modal-header')).toHaveStyle({
      borderBottom: '1px solid rgb(222, 226, 230',
    });
  });
});
