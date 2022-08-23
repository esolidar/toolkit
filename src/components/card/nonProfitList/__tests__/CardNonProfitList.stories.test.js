import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, {
  GridOne as GridOneStory,
  GridTwo as GridTwoStory,
  GridMulti as GridMultiStory,
} from '../CardNonProfitList.stories';

const GridOne = composeStory(GridOneStory, Meta);
const GridTwo = composeStory(GridTwoStory, Meta);
const GridMulti = composeStory(GridMultiStory, Meta);

it('renders GridOne default', () => {
  const { getByClass, getByTestId, getByText } = render(<GridOne />);

  expect(getByClass('card-component cardNonProfit__inline cardNonProfit')).toBeInTheDocument();
  expect(getByClass('card-component__image')).toBeInTheDocument();
  expect(getByClass('card-component__logo')).toBeInTheDocument();
  expect(getByClass('card-component__body')).toBeInTheDocument();
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

it('renders GridTwo default', () => {
  const { getByClass } = render(<GridTwo />);

  expect(getByClass('cardNonProfitList--col2')).toBeInTheDocument();
});

it('renders GridMulti default', () => {
  const { getByClass } = render(<GridMulti />);

  expect(getByClass('cardNonProfitList--col3')).toBeInTheDocument();
});
