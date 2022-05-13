import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../CardNonProfit.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders CardNonProfit default', () => {
  const { getByClass, getByTestId, getByText } = render(<Default />);

  expect(getByClass('card-component cardNonProfit')).toBeInTheDocument();
  expect(getByClass('card-component__image')).toBeInTheDocument();
  expect(getByClass('card-component__logo')).toBeInTheDocument();
  expect(getByClass('card-component__body')).toBeInTheDocument();
  expect(getByClass('card-component__countdown')).toBeInTheDocument();
  expect(getByClass('card-component__cardNonProfit-body-location-label')).toBeInTheDocument();
  expect(getByClass('card-component__cardNonProfit-body-location')).toBeInTheDocument();
  expect(getByClass('card-component__cardNonProfit-body-summary')).toBeInTheDocument();
  expect(getByTestId('npo-donate')).toBeInTheDocument();
  expect(getByText('Location')).toBeInTheDocument();
  expect(getByText('Donate')).toBeInTheDocument();
  expect(getByClass('card-component__logo')).toHaveStyle(
    'background-image: url(https://cdn.testesolidar.com/institutions/5db984ee-51b4-43c3-b363-23eaac1f17c3.png)'
  );
});
