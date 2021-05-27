import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
import { composeStory } from '@storybook/testing-react';

import Meta, { Default as DefaultStory } from '../SupportsBox.stories';

const Default = composeStory(DefaultStory, Meta);

test('renders the text', async () => {
  // render(<Default />);
  // const text = screen.getByText('Hello world!');
  // expect(text).toBeInTheDocument();
});
