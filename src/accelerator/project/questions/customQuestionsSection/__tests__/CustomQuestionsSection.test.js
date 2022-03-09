import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../CustomQuestionsSection.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders Custom Questions Section default component open', () => {
  const { getByClass, getByText } = render(<Default />);

  expect(getByClass('esolidar-viewport size-xl centred')).toBeTruthy();
  expect(getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')).toBeInTheDocument();
  expect(
    getByText(
      /Nulla nec sapien pharetra, lobortis diam eget, tincidunt neque. Cras vestibulum congue tellus a faucibus. Curabitur vitae convallis nulla. Ut elit est, volutpat mollis vestibulum id, efficitur vel arcu./
    )
  ).toBeInTheDocument();
  expect(
    getByText(
      /Suspendisse interdum purus commodo, eleifend enim sit amet, pharetra lorem. Aenean viverra id magna at posuere. Praesent a laoreet purus. Donec vitae felis malesuada, efficitur nibh vel, convallis metus./
    )
  ).toBeInTheDocument();
});
