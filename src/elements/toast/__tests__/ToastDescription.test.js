import '@testing-library/jest-dom';
import { render, fireEvent } from '../../../../__customQueries__/test-utils';
import Toast from '..';

const props = {
  title: 'Header',
  subtitle: 'Description',
  status: 'info',
  variant: 'description',
};

it('render Toast description without buttons and close', () => {
  const { getByTestId, getByText, queryByTestId } = render(<Toast {...props} />);

  expect(getByTestId('icon-Info')).toBeInTheDocument();
  expect(getByTestId('toast-component')).toBeInTheDocument();
  expect(getByText('Header')).toBeInTheDocument();
  expect(getByText('Description')).toBeInTheDocument();
  expect(queryByTestId('primaryButton')).not.toBeInTheDocument();
  expect(queryByTestId('secondaryButton')).not.toBeInTheDocument();
  expect(queryByTestId('closeButton')).not.toBeInTheDocument();
});

it('render Toast description with buttons and close', done => {
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
      secondaryButton={{
        label: 'secondaryButton',
        onClick: handleClick,
      }}
      onClose={handleClick}
    />
  );

  expect(getByTestId('toast-component')).toBeInTheDocument();
  expect(getByClass(/toast-component__description/)).toBeInTheDocument();
  expect(getByTestId('icon-Info')).toBeInTheDocument();
  expect(getByText('Header')).toBeInTheDocument();
  expect(getByText('Description')).toBeInTheDocument();

  const primaryButton = getByTestId('primaryButton');
  expect(primaryButton).toBeInTheDocument();
  fireEvent.click(primaryButton);
  expect(getByText('Description')).toBeInTheDocument();

  const secondaryButton = getByTestId('secondaryButton');
  expect(secondaryButton).toBeInTheDocument();
  fireEvent.click(secondaryButton);

  const closeButton = getByTestId('closeButton');
  expect(closeButton).toBeInTheDocument();
  fireEvent.click(closeButton);
});

it('render Toast description Info', () => {
  const { getByClass } = render(<Toast {...props} status="info" />);
  expect(getByClass(/toast-component__info/)).toBeInTheDocument();
});

it('render Toast description Success', () => {
  const { getByClass } = render(<Toast {...props} status="success" />);
  expect(getByClass(/toast-component__success/)).toBeInTheDocument();
});

it('render Toast description Warning', () => {
  const { getByClass } = render(<Toast {...props} status="warning" />);
  expect(getByClass(/toast-component__warning/)).toBeInTheDocument();
});

it('render Toast description Danger', () => {
  const { getByClass } = render(<Toast {...props} status="danger" />);
  expect(getByClass(/toast-component__danger/)).toBeInTheDocument();
});
