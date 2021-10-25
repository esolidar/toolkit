import '@testing-library/jest-dom';
import getEmployeeName from '.';

test('should return getEmployeeName', () => {
  const userEmployee = {
    id: 1,
    firstName: 'António',
    lastName: 'Santos',
    work_email: [
      {
        company_id: 1,
        name: 'António Santos',
        role: 'admin',
        department: null,
        user: null,
      },
      {
        company_id: 2,
        name: 'João Paulo',
        role: null,
        department: null,
        user: null,
      },
      {
        company_id: 3,
        name: 'Manuel Silva',
        role: null,
        department: null,
        user: null,
      },
    ],
  };
  const user = {
    id: 1,
    firstName: 'António',
    lastName: 'Santos',
    work_email: [],
  };
  expect(getEmployeeName(1, userEmployee)).toEqual('António Santos');
  expect(getEmployeeName(2, userEmployee)).toEqual('João Paulo');
  expect(getEmployeeName(3, userEmployee)).toEqual('Manuel Silva');
  expect(getEmployeeName(4, user)).toEqual('António Santos');
});
