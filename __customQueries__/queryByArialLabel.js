import { queryHelpers, buildQueries } from '@testing-library/react';

const queryAllByArialLabel = (...args) => queryHelpers.queryAllByAttribute('aria-label', ...args);

const getMultipleError = (c, arialLabelValue) =>
  `Found multiple elements with the aria-label attribute of: ${arialLabelValue}`;
const getMissingError = (c, arialLabelValue) =>
  `Unable to find an element with the aria-label attribute of: ${arialLabelValue}`;

const [
  queryByArialLabel,
  getAllByArialLabel,
  getByArialLabel,
  findAllByArialLabel,
  findByArialLabel,
] = buildQueries(queryAllByArialLabel, getMultipleError, getMissingError);

export {
  queryByArialLabel,
  queryAllByArialLabel,
  getByArialLabel,
  getAllByArialLabel,
  findAllByArialLabel,
  findByArialLabel,
};
