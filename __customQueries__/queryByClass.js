import { queryHelpers, buildQueries } from '@testing-library/react';

const queryAllByClass = (...args) => queryHelpers.queryAllByAttribute('class', ...args);

const getMultipleError = (c, classValue) =>
  `Found multiple elements with the class attribute of: ${classValue}`;
const getMissingError = (c, classValue) =>
  `Unable to find an element with the class attribute of: ${classValue}`;

const [queryByClass, getAllByClass, getByClass, findAllByClass, findByClass] = buildQueries(
  queryAllByClass,
  getMultipleError,
  getMissingError
);

export { queryByClass, queryAllByClass, getByClass, getAllByClass, findAllByClass, findByClass };
