/* eslint-disable camelcase */

interface ProjectConfig {
  start_at: string;
  timezone: string;
  closed_at: string;
}

interface Props {
  projectConfig: ProjectConfig;
  locale: string;
  submitProjectButton(): void;
}

export default Props;
