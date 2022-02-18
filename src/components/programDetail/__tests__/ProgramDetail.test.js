import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, within } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  PreviewMode as PreviewModeStory,
} from '../ProgramDetail.stories';

const Default = composeStory(DefaultStory, Meta);
const PreviewMode = composeStory(PreviewModeStory, Meta);

it('renders ProgramDetail default', () => {
  const { getByClass, queryAllByClass } = render(<Default />);

  expect(getByClass('accelerator-view__image')).toBeInTheDocument();
  expect(within(getByClass('accelerator-view__title')).getByText('First program'));
  expect(within(getByClass('accelerator-view__intro')).getByText('Loram ipsum intro'));
  expect(getByClass('accelerator-view__submit')).toBeInTheDocument();
  expect(within(getByClass('accelerator-view__format')).getByText('Lorem ipsum'));
  expect(within(getByClass('accelerator-view__apply')).getByText('Everyone'));

  expect(queryAllByClass(/badge /)).toHaveLength(2);
  expect(within(getByClass('checkbox-card__info--title')).getByText('Pollution'));
  expect(getByClass('accelerator-view__bottom-submit')).toBeInTheDocument();
});

it('renders ProgramDetail preview mode', () => {
  const { getByClass, queryByClass, queryAllByClass } = render(<PreviewMode />);

  expect(getByClass('accelerator-view__image')).toBeInTheDocument();
  expect(
    within(getByClass(/accelerator-view__title/)).getByText(
      'Your program title will be displayed here'
    )
  );
  expect(
    within(getByClass(/accelerator-view__intro/)).getByText(
      'Your program intro will replace this section. The program intro will present a brief description of your acceleration program to your viewers and followers.'
    )
  );
  expect(queryByClass('accelerator-view__submit')).not.toBeInTheDocument();
  expect(
    within(getByClass('accelerator-view__format')).getByText(
      'Your program format information will be displayed here'
    )
  );
  expect(
    within(getByClass('accelerator-view__apply')).getByText(
      'Your program applicants information will be displayed here'
    )
  );

  expect(queryAllByClass(/badge /)).toHaveLength(9);
  expect(queryByClass('accelerator-view__bottom-submit')).not.toBeInTheDocument();
});
