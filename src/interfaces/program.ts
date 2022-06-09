interface InterestPivot {
  project_config_id: number;
  interest_id: number;
}

interface InterestImage extends Image {
  id: number;
  interest_id: number;
  action: string;
}

interface Interest {
  id: number;
  checked_image: InterestImage;
  created_at: string;
  default_image: InterestImage;
  deleted_at?: string | null;
  description_br: string | null;
  description_en: string | null;
  description_pt: string | null;
  disabled_image: InterestImage;
  image: InterestImage;
  name_br: string;
  name_en: string;
  name_pt: string;
  pivot: InterestPivot;
  updated_at: string;
}

interface Image {
  id: number;
  created_at: string;
  image: string;
  image_size: string | number;
  image_type: string;
  streamImage: string;
  updated_at: string;
}

interface Pivot {
  project_config_id: number;
  skill_id: number;
}

interface Skill {
  project_config_id: number;
  created_at: string;
  deleted_at?: string | null;
  id: number;
  name_br: string;
  name_en: string;
  name_pt: string;
  pivot: Pivot;
  skill_id: number;
  summary_br: string | null;
  summary_en: string | null;
  summary_pt: string | null;
  type: string;
  updated_at: string;
}

interface ProgramImage extends Image {
  project_config_id: number;
}

interface Program {
  id?: number;
  title?: string;
  intro?: string;
  images?: ProgramImage[];
  program_format?: string;
  who_should_apply?: string;
  location?: string;
  closed_at?: string;
  start_at?: string;
  ended_at?: string;
  timezone?: string;
  skills?: Skill[];
  remote?: boolean;
  archived_at?: string | null;
  interests?: Interest[];
  form?: string;
}

export default Program;
