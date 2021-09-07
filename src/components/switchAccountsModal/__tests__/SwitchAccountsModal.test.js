import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  SelectCompany as SelectCompanyStory,
} from '../SwitchAccountsModal.stories';
import company from '../../../../__mocks__/company';
import user from '../../../../__mocks__/user';

const Default = composeStory(DefaultStory, Meta);
const SelectCompany = composeStory(SelectCompanyStory, Meta);

describe('SwitchAccountsModal', () => {
  it('Renders the title and subtitle', () => {
    const { getByText } = render(<Default />);

    expect(getByText('Switch accounts')).toBeInTheDocument();
    expect(getByText('You have 2 accounts associated with this email')).toBeInTheDocument();
  });

  it('Renders two account selector components', () => {
    const { queryAllByTestId } = render(<Default />);

    expect(queryAllByTestId('account-selector')).toHaveLength(2);
  });

  it('Renders correct user and company info', () => {
    const { queryAllByAltText, getByText } = render(<Default />);

    expect(queryAllByAltText('account-img')).toHaveLength(2);
    expect(queryAllByAltText('account-img')[0]).toHaveAttribute('src', user.thumbs.thumb);
    expect(getByText(user.name)).toBeInTheDocument();
    expect(getByText(user.email)).toBeInTheDocument();
    expect(queryAllByAltText('account-img')[1]).toHaveAttribute('src', company.thumbs.thumb);
    expect(getByText(company.name)).toBeInTheDocument();
    expect(getByText('Admin')).toBeInTheDocument();
  });

  it('Renders correct Select Company list', () => {
    const { getByText, queryAllByAltText, queryAllByTestId, queryByText, queryAllByText } = render(
      <SelectCompany />
    );

    expect(getByText('Select company')).toBeInTheDocument();
    expect(queryByText(user.name)).not.toBeInTheDocument();
    expect(queryByText(user.email)).not.toBeInTheDocument();
    expect(queryAllByTestId('account-selector')).toHaveLength(3);
    expect(queryAllByAltText('account-img')).toHaveLength(3);
    expect(queryAllByAltText('account-img')[1]).toHaveAttribute('src', company.thumbs.thumb);
    expect(queryAllByText(company.name)).toHaveLength(3);
    expect(queryByText('Admin')).not.toBeInTheDocument();
  });
});
