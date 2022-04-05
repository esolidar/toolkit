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

export default Skill;
