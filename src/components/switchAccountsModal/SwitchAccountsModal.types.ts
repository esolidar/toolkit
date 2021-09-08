import User from '../../interfaces/user.types';
import Company from '../../interfaces/company.types';

interface Props {
  title: string;
  subtitle?: string;
  numberOfAccounts?: number;
  isOpen: boolean;
  user?: User;
  companies: Company[];
  handleClickSelectUser(): any;
  handleClickSelectCompany(): any;
}

export default Props;
