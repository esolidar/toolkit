import '@testing-library/jest-dom';
import { render, fireEvent } from '../../../../__customQueries__/test-utils';
import Banner from '..';

const props = {
  title: 'Header',
  subtitle: 'Description',
  status: 'info',
};

it('render Banner snackbar without button', () => {
  const { getByTestId, getByText, queryByTestId } = render(<Banner {...props} />);

  expect(getByTestId('icon-Info')).toBeInTheDocument();
  expect(getByTestId('banner-component')).toBeInTheDocument();
  expect(getByText('Description')).toBeInTheDocument();
  expect(queryByTestId('primaryButton')).not.toBeInTheDocument();
  expect(queryByTestId('secondaryButton')).not.toBeInTheDocument();
  expect(queryByTestId('closeButton')).not.toBeInTheDocument();
});

it('render Banner snackbar with button', done => {
  const handleClick = () => {
    done();
  };

  const { getByTestId, getByText, getByClass } = render(
    <Banner
      {...props}
      primaryButton={{
        label: 'primaryButton',
        onClick: handleClick,
      }}
    />
  );

  expect(getByTestId('banner-component')).toBeInTheDocument();
  expect(getByClass(/banner-component__snack-bar/)).toBeInTheDocument();
  expect(getByTestId('icon-Info')).toBeInTheDocument();
  expect(getByText('Description')).toBeInTheDocument();

  const primaryButton = getByTestId('primaryButton');
  expect(primaryButton).toBeInTheDocument();
  fireEvent.click(primaryButton);
});

it('render Banner snackbar Info', () => {
  const { getByClass } = render(<Banner {...props} status="info" />);
  expect(getByClass(/banner-component__info/)).toBeInTheDocument();
});

it('render Banner snackbar Success', () => {
  const { getByClass } = render(<Banner {...props} status="success" />);
  expect(getByClass(/banner-component__success/)).toBeInTheDocument();
});

it('render Banner snackbar Warning', () => {
  const { getByClass } = render(<Banner {...props} status="warning" />);
  expect(getByClass(/banner-component__warning/)).toBeInTheDocument();
});

it('render Banner snackbar Danger', () => {
  const { getByClass } = render(<Banner {...props} status="danger" />);
  expect(getByClass(/banner-component__danger/)).toBeInTheDocument();
});
