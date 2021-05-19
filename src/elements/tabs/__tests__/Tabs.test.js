import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tabs from '../Tabs';

const props = {
  defaultActiveKey: 'personal',
  id: 'tabs',
  tabsList: [
    {
      key: 'corporate',
      title: 'Corporate',
      disabled: false,
      content: <p className="p-3">Corporate content</p>,
    },
    {
      key: 'personal',
      title: 'Personal',
      disabled: false,
      content: <p className="p-3">Personal content</p>,
    },
    {
      key: 'nonprofit',
      title: 'Nonprofit',
      disabled: false,
      content: <p className="p-3">Nonprofit content</p>,
    },
  ],
  onChange: () => {},
};

test('renders every elements of the component', async () => {
  render(<Tabs {...props} />);

  await waitFor(() => {
    const tabsComponent = screen.getByRole('tablist');
    expect(tabsComponent).toBeInTheDocument();

    const tabsList = screen.queryAllByRole('tab');
    expect(tabsList).toHaveLength(props.tabsList.length);

    const tabsContentList = screen.queryAllByRole('tabpanel');
    expect(tabsContentList).toHaveLength(1);
    expect(screen.getByText('Personal content')).toBeInTheDocument();
  });
});

test('renders every tab text in the screen', async () => {
  render(<Tabs {...props} />);

  await waitFor(() => {
    props.tabsList.forEach(tab => {
      expect(screen.getByText(tab.title)).toBeInTheDocument();
    });
  });
});

test('renders active tab on first load', async () => {
  render(<Tabs {...props} />);

  await waitFor(() => {
    const activeTab = screen.getByText('Personal');
    expect(activeTab).toHaveClass('active');
  });
});

test('changes active tab on click', async () => {
  render(<Tabs {...props} />);

  await waitFor(() => {
    const corporateTab = screen.getByText('Corporate');
    userEvent.click(corporateTab);
    expect(corporateTab).toHaveClass('active');
  });
});
