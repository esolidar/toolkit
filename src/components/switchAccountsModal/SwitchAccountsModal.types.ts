import User from '../../interfaces/user.types';
import Companies from '../../interfaces/companies.type';

interface Props {
  title: string;
  subtitle?: string;
  numberOfAccounts?: number;
  isOpen: boolean;
  user?: User;
  companies: Companies;
  handleClickSelectUser(): any;
  handleClickSelectCompany(): any;
}

export default Props;
