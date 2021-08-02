import { render, queries } from '@testing-library/react';
import * as queryById from './queryById';
import * as queryByClass from './queryByClass';

const customRender = (ui, options) =>
  render(ui, { queries: { ...queries, ...queryByClass, ...queryById }, ...options });

export * from '@testing-library/react';
export { customRender as render };
