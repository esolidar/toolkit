import { render, queries, RenderOptions } from '@testing-library/react';
import * as queryById from './queryById';
import * as queryByClass from './queryByClass';
import { ReactElement } from 'react';

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { queries: { ...queries, ...queryByClass, ...queryById }, ...options });

export * from '@testing-library/react';
export { customRender as render };
