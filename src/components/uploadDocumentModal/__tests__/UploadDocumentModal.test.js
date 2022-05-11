import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../UploadDocumentModal.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders UploadDocumentModal default', () => {
  const { debug } = render(<Default />);

  console.log('debug: ', debug);
});
