import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory, Minimal as MinimalStory } from '../ListElement.stories';
import Company from '../../../../__mocks__/company';

const Default = composeStory(DefaultStory, Meta);
const Minimal = composeStory(MinimalStory, Meta);

describe('ListElement', () => {
  it('Renders List Element component', () => {
    const { queryAllByTestId, getByAltText, getByText } = render(<Default />);

    expect(queryAllByTestId('list-element')).toHaveLength(1);
    expect(getByAltText('img-thumb')).toHaveAttribute('src', Company.thumbs.thumb);
    expect(getByText(Company.name)).toBeInTheDocument();
    expect(getByText(Company.email)).toBeInTheDocument();
  });

  it('Renders List Element minimal', () => {
    const { queryAllByTestId, getByAltText, getByText, queryByText } = render(<Minimal />);

    expect(queryAllByTestId('list-element')).toHaveLength(1);
    expect(getByAltText('img-thumb')).toHaveAttribute('src', Company.thumbs.thumb);
    expect(getByText(Company.name)).toBeInTheDocument();
    expect(queryByText(Company.email)).not.toBeInTheDocument();
  });
});
