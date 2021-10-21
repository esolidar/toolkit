import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../Toggle.stories';

const Default = composeStory(DefaultStory, Meta);

test('renders Toogle default', async () => {
  render(<Default />);
});
