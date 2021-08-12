import { queryHelpers, buildQueries } from '@testing-library/react';

const queryAllById = (...args) => queryHelpers.queryAllByAttribute('id', ...args);

const getMultipleError = (c, idValue) =>
  `Found multiple elements with the id attribute of: ${idValue}`;
const getMissingError = (c, idValue) =>
  `Unable to find an element with the id attribute of: ${idValue}`;

const [queryById, getAllById, getById, findAllById, findById] = buildQueries(
  queryAllById,
  getMultipleError,
  getMissingError
);

export { queryById, queryAllById, getById, getAllById, findAllById, findById };
