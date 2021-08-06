import Auction from '../auction.types';
import Crowdfunding from '../crowdfunding.types';
import Currency from '../currency.types';
import Language from '../language.types';
import Phone from '../phone.types';
import Thumbs from '../thumbs.types';
import ProjectCommon from './projectCommon';
import ProjectCrowdfunding from './projectCrowdfunding';

interface ProjectCategory {
  id: number;
  whitelabel_id: number;
  name: string;
  name_tag: string;
  summary: string;
  status: number;
  image: string;
  updated_at: string;
  created_at: string;
}

interface WorkEmail {
  company_id: number;
  name: string;
  role: null | string;
  department: null;
  user: null;
}

interface ProjectUser {
  id: number;
  institution_id: null;
  firstName: string;
  lastName: string;
  image: string;
  currency: Currency;
  language: Language;
  thumbs: Thumbs;
  work_email: WorkEmail[];
  name: string;
  s3_key: string;
  institution: null;
  phones: Phone[];
}

interface Project extends ProjectCommon, ProjectCrowdfunding {
  private_form: string;
  user: ProjectUser;
  project_category: ProjectCategory;
  crowdfundings: Crowdfunding[];
  auctions: Auction[];
}

export default Project;
