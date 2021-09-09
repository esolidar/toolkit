import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  WithoutHeader as WithoutHeaderStory,
  WithoutBody as WithoutBodyStory,
  WithoutOrganized as WithoutOrganizedStory,
} from '../DetailInfoBox.stories';

const Default = composeStory(DefaultStory, Meta);
const WithoutHeader = composeStory(WithoutHeaderStory, Meta);
const WithoutBody = composeStory(WithoutBodyStory, Meta);
const WithoutOrganized = composeStory(WithoutOrganizedStory, Meta);

it('renders DetailInfoBox default', () => {
  const { getByTestId, getByText } = render(<Default />);
  expect(getByTestId('detail-info-box')).toBeInTheDocument();

  expect(getByTestId('detail-info-box-header')).toBeInTheDocument();
  expect(getByText('This header is customizable!')).toBeInTheDocument();

  expect(getByTestId('detail-info-box-body')).toBeInTheDocument();
  expect(getByText('This body is customizable!')).toBeInTheDocument();

  expect(getByTestId('detail-info-box-organized')).toBeInTheDocument();
  expect(getByText('Organized by')).toBeInTheDocument();

  expect(getByTestId('detail-info-box-footer')).toBeInTheDocument();
});

it('renders DetailInfoBox without header', () => {
  const { getByTestId, getByText, queryByTestId, queryByText } = render(<WithoutHeader />);
  expect(getByTestId('detail-info-box')).toBeInTheDocument();

  expect(queryByTestId('detail-info-box-header')).not.toBeInTheDocument();
  expect(queryByText('This header is customizable!')).not.toBeInTheDocument();

  expect(getByTestId('detail-info-box-body')).toBeInTheDocument();
  expect(getByText('This body is customizable!')).toBeInTheDocument();

  expect(getByTestId('detail-info-box-organized')).toBeInTheDocument();
  expect(getByText('Organized by')).toBeInTheDocument();

  expect(getByTestId('detail-info-box-footer')).toBeInTheDocument();
});

it('renders DetailInfoBox without body', () => {
  const { getByTestId, getByText, queryByTestId, queryByText } = render(<WithoutBody />);
  expect(getByTestId('detail-info-box')).toBeInTheDocument();

  expect(getByTestId('detail-info-box-header')).toBeInTheDocument();
  expect(getByText('This header is customizable!')).toBeInTheDocument();

  expect(queryByTestId('detail-info-box-body')).not.toBeInTheDocument();
  expect(queryByText('This body is customizable!')).not.toBeInTheDocument();

  expect(getByTestId('detail-info-box-organized')).toBeInTheDocument();
  expect(getByText('Organized by')).toBeInTheDocument();

  expect(getByTestId('detail-info-box-footer')).toBeInTheDocument();
});

it('renders DetailInfoBox without organized by', () => {
  const { getByTestId, getByText, queryByTestId, queryByText } = render(<WithoutOrganized />);
  expect(getByTestId('detail-info-box')).toBeInTheDocument();

  expect(getByTestId('detail-info-box-header')).toBeInTheDocument();
  expect(getByText('This header is customizable!')).toBeInTheDocument();

  expect(getByTestId('detail-info-box-body')).toBeInTheDocument();
  expect(getByText('This body is customizable!')).toBeInTheDocument();

  expect(queryByTestId('detail-info-box-organized')).not.toBeInTheDocument();
  expect(queryByText('Organized by')).not.toBeInTheDocument();

  expect(getByTestId('detail-info-box-footer')).toBeInTheDocument();
});
