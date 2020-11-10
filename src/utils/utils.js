import find from 'lodash/find';

export const getEmployeeName = (companyId, user) => {
  if (user && user.work_email) {
    const workEmails = user.work_email;
    if (companyId && workEmails.length > 0) {
      return find(workEmails, (employee) => employee.company_id === companyId) ? find(workEmails, (employee) => employee.company_id === companyId).name : `${user.firstName} ${user.lastName}`;
    }

    return `${user.firstName} ${user.lastName}`;
  }
  return '--';
};

export const isDefined = (v) => v !== undefined && v !== null;

export const clone = (v) => JSON.parse(JSON.stringify(v));

export const firstElemOf = (array) => array[0];

export const lastElemOf = (array) => array[array.length - 1];
