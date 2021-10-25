import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import blinkElement from '.';

test('should have class blink and then remove class blink', async () => {
  document.body.innerHTML = '<div data-testid="text-id" id="text"></div>';
  blinkElement('text', 'blink');
  const wrapper = screen.getByTestId('text-id');
  expect(wrapper).toHaveClass('blink');

  setTimeout(() => {
    expect(wrapper).not.toHaveClass('blink');
  }, 3000);
});
