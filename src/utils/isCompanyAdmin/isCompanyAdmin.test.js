import '@testing-library/jest-dom';
import isCompanyAdmin from '.';

test('should return isCompanyAdmin', () => {
  const userWithWorkEmail = {
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
        role: 'owner',
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

  const userWithWorkEmailEmpty = {
    id: 1,
    firstName: 'António',
    lastName: 'Santos',
    work_email: [],
  };

  const withoutWithWorkEmail = {
    id: 1,
    firstName: 'António',
    lastName: 'Santos',
  };

  expect(isCompanyAdmin(1, userWithWorkEmail)).toBe(true);
  expect(isCompanyAdmin(2, userWithWorkEmail)).toBe(true);
  expect(isCompanyAdmin(3, userWithWorkEmail)).toBe(false);
  expect(isCompanyAdmin(4, userWithWorkEmail)).toBe(false);
  expect(isCompanyAdmin(1, userWithWorkEmailEmpty)).toBe(false);
  expect(isCompanyAdmin(1, withoutWithWorkEmail)).toBe(false);
});
