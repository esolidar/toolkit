import find from 'lodash/find';

export default function getEmployeeName(companyId, user) {
  if (user && user.work_email) {
    const workEmails = user.work_email;
    if (companyId && workEmails.length > 0) {
      return find(workEmails, (employee) => employee.company_id === companyId) ? find(workEmails, (employee) => employee.company_id === companyId).name : `${user.firstName} ${user.lastName}`;
    }

    return `${user.firstName} ${user.lastName}`;
  }
  return '--';
}
