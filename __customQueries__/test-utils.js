import { render, queries } from '@testing-library/react';
import * as queryByArialLabel from './queryByArialLabel';
import * as queryByClass from './queryByClass';

const customRender = (ui, options) =>
  render(ui, { queries: { ...queries, ...queryByClass, ...queryByArialLabel }, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
