import User from '../../interfaces/user.types';

/**
 * Checks if a given user is admin of a given company
 * @param {number} companyId id of the company
 * @param {User} user the user we want to check
 * @returns {string} wether or not the user is admin
 */

const isCompanyAdmin = (companyId: number, user: User): boolean => {
  const isAdmin = user.work_email?.findIndex(
    o => o.company_id === companyId && (o.role === 'admin' || o.role === 'owner')
  );

  return isAdmin >= 0;
};

export default isCompanyAdmin;
