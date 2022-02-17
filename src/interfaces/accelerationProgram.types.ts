import Interest from './interest.types';
import Image from './image.types';
import Skill from './skill.types';

interface ProgramImage extends Image {
  project_config_id: number;
}

interface AccelerationProgram {
  id: number;
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

export default AccelerationProgram;
