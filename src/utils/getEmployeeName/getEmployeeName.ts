/* eslint-disable camelcase */
import User from '../../interfaces/user.types';

/**
 * Gets the name of an employee in a given company
 * @param {number} companyId id of the company
 * @param {User} user the user we want the name of
 * @returns {string} employee name
 */

const getEmployeeName = (companyId: number, user: User): string => {
  if (!user?.work_email) return '--';

  const { work_email } = user;

  if (companyId && work_email.length > 0) {
    const workEmail = work_email.find(employee => employee.company_id === companyId);
    if (workEmail?.name) return workEmail.name;
  }

  return `${user.firstName} ${user.lastName}`;
};

export default getEmployeeName;
