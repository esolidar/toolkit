import ProjectCommon from './projectCommon';

interface ProjectCrowdfunding extends ProjectCommon {
  whitelabel_id: number;
  category_id: number;
  user_id: number;
  cover?: string;
  description: string;
  form: string;
  status: string;
  uuid: string;
  status_reason: string;
  updated_at: string;
  created_at: string;
}

export default ProjectCrowdfunding;
