import '@testing-library/jest-dom';
import { render, fireEvent } from '../../../../__customQueries__/test-utils';
import Toast from '..';

const props = {
  title: 'Header',
  subtitle: 'Description',
  status: 'info',
};

it('render Toast snackbar without button and close', () => {
  const { getByTestId, getByText, queryByTestId } = render(<Toast {...props} />);

  expect(getByTestId('icon-Info')).toBeInTheDocument();
  expect(getByTestId('toast-component')).toBeInTheDocument();
  expect(getByText('Header')).toBeInTheDocument();
  expect(getByText('Description')).toBeInTheDocument();
  expect(queryByTestId('primaryButton')).not.toBeInTheDocument();
  expect(queryByTestId('secondaryButton')).not.toBeInTheDocument();
  expect(queryByTestId('closeButton')).not.toBeInTheDocument();
});

it('render Toast snackbar with button and close', done => {
  const handleClick = () => {
    done();
  };

  const { getByTestId, getByText, getByClass } = render(
    <Toast
      {...props}
      primaryButton={{
        label: 'primaryButton',
        onClick: handleClick,
      }}
      onClose={handleClick}
    />
  );

  expect(getByTestId('toast-component')).toBeInTheDocument();
  expect(getByClass(/toast-component__snack-bar/)).toBeInTheDocument();
  expect(getByTestId('icon-Info')).toBeInTheDocument();
  expect(getByText('Header')).toBeInTheDocument();
  expect(getByText('Description')).toBeInTheDocument();

  const primaryButton = getByTestId('primaryButton');
  expect(primaryButton).toBeInTheDocument();
  fireEvent.click(primaryButton);

  const closeButton = getByTestId('closeButton');
  expect(closeButton).toBeInTheDocument();
  fireEvent.click(closeButton);
});

it('render Toast snackbar Info', () => {
  const { getByClass } = render(<Toast {...props} status="info" />);
  expect(getByClass(/toast-component__info/)).toBeInTheDocument();
});

it('render Toast snackbar Success', () => {
  const { getByClass } = render(<Toast {...props} status="success" />);
  expect(getByClass(/toast-component__success/)).toBeInTheDocument();
});

it('render Toast snackbar Warning', () => {
  const { getByClass } = render(<Toast {...props} status="warning" />);
  expect(getByClass(/toast-component__warning/)).toBeInTheDocument();
});

it('render Toast snackbar Danger', () => {
  const { getByClass } = render(<Toast {...props} status="danger" />);
  expect(getByClass(/toast-component__danger/)).toBeInTheDocument();
});
