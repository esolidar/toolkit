/* eslint-disable camelcase */

interface ProjectConfig {
  start_at?: string;
  closed_at?: string;
  ended_at?: string;
  archived_at?: string;
  timezone?: string;
}

interface Props {
  projectConfig: ProjectConfig;
  locale: string;
  submitProjectButton(): void;
  showRunningState?: boolean;
}

export default Props;
