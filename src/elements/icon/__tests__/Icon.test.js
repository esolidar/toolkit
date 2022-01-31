import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  Small as SmallStory,
  XSmall as XSmallStory,
  Large as LArgeStory,
} from '../Icon.stories';

const Default = composeStory(DefaultStory, Meta);
const Small = composeStory(SmallStory, Meta);
const XSmall = composeStory(XSmallStory, Meta);
const Large = composeStory(LArgeStory, Meta);

it('renders Icon default', () => {
  const { getAllByClass } = render(<Default />);

  expect(getAllByClass('icon-component')).toBeTruthy();
});

it('renders Icon Small', () => {
  const { getAllByClass } = render(<Small />);

  expect(getAllByClass('icon-component')).toBeTruthy();
});

it('renders Icon XSmall', () => {
  const { getAllByClass } = render(<XSmall />);

  expect(getAllByClass('icon-component')).toBeTruthy();
});

it('renders Icon Large', () => {
  const { getAllByClass } = render(<Large />);

  expect(getAllByClass('icon-component')).toBeTruthy();
});
