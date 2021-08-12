import Ods from '../ods.types';
import WhitelabelConfig from '../whitelabelConfig.types';

interface ProjectImage {
  id: number;
  crowdfunding_id?: number;
  streamImage: string;
  image: string;
  image_type: string;
  image_size: number | string;
  default: number;
  position: number;
  updated_at: string;
  created_at: string;
  project_id?: number;
}

interface ProjectCommon {
  id: number;
  as_company: number;
  title: string;
  review_average?: number;
  whitelabel_config?: WhitelabelConfig;
  ods: Ods[];
  images: ProjectImage[];
}

export default ProjectCommon;
