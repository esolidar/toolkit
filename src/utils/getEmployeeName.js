const getEmployeeName = (companyId, user) => {
  if (user && user.work_email) {
    const workEmails = user.work_email;
    if (companyId && workEmails.length > 0) {
      const workEmail = workEmails.find((employee) => employee.company_id === companyId);
      return workEmail && workEmail.name ? workEmail.name : `${user.firstName} ${user.lastName}`;
    }
    return `${user.firstName} ${user.lastName}`;
  }
  return '--';
};

export default getEmployeeName;
