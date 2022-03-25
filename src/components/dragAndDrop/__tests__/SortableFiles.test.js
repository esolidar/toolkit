import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';

import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Images as ImagesStory, Files as FilesStory } from '../DragAndDrop.stories';

const Images = composeStory(ImagesStory, Meta);
const Files = composeStory(FilesStory, Meta);

it('renders DragAndDrop image', () => {
  const { getByClass, getAllByClass } = render(<Images />);

  expect(getByClass('drag-and-drop-component')).toBeTruthy();
  expect(getAllByClass('drag-and-drop-thumbs')).toHaveLength(8);
});

it('renders DragAndDrop files', () => {
  const { getByClass, getAllByClass } = render(<Files />);

  expect(getByClass('drag-and-drop-component')).toBeTruthy();
  expect(getAllByClass('drag-and-drop-files')).toHaveLength(4);
});
