const isCompanyAdmin = (companyId, user) => {
  const isAdmin = user.work_email.findIndex((o) => o.company_id === companyId && (o.role === 'admin' || o.role === 'owner'));
  return isAdmin >= 0;
};

export default isCompanyAdmin;
