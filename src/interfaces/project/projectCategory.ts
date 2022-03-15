interface ProjectCategory {
  id: number;
  whitelabel_id: number;
  project_config_id: number;
  name: string;
  summary: string;
  status: number;
  image: string;
  updated_at: string;
  created_at: string;
  projects_exists: boolean;
}

export default ProjectCategory;
