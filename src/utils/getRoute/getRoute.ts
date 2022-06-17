import slugify from '../slugify';

export const getRoute = {
  public: {
    accelerator: {
      program: {
        LIST: (locale: string) => `/${locale}/accelerator`,
        DETAIL: (locale: string, programId: string | number) =>
          `/${locale}/accelerator/${programId}`,
      },
      project: {
        LIST: (locale: string, programId: string | number) =>
          `/${locale}/accelerator/${programId}/projects`,
        DETAIL: (
          locale: string,
          programId: string | number,
          projectId: string | number,
          projectTitle: string,
          params: string = ''
        ) =>
          `/${locale}/accelerator/${programId}/projects/${projectId}-${slugify(
            projectTitle
          )}${params}`,
        INITIATIVES: (locale: string, programId: string | number, projectId: string | number) =>
          `/${locale}/accelerator/${programId}/projects/${projectId}/initiatives`,
      },
    },
    auth: {
      REGISTER: (locale: string, data?: string) => `/${locale}/auth/register${data && data}`,
    },
  },
  private: {
    accelerator: {
      program: {
        LIST: (locale: string) => `/${locale}/user/accelerator`,
        DETAIL: (locale: string, programId: string | number, filters?: string) =>
          `/${locale}/user/accelerator/${programId}${filters && filters}`,
      },
      project: {
        LIST: (locale: string, programId: string | number) =>
          `/${locale}/user/accelerator/${programId}`,
        LIST_ALL: (locale: string, programId: string | number) =>
          `/${locale}/user/accelerator/${programId}?filter=all`,
        LIST_MY: (locale: string, programId: string | number) =>
          `/${locale}/user/accelerator/${programId}?filter=my-projects`,
        DETAIL: (
          locale: string,
          programId: string | number,
          projectId: string | number,
          projectTitle: string,
          isOwner: boolean = false
        ) =>
          `/${locale}/user/accelerator/${programId}/projects/${projectId}-${slugify(projectTitle)}${
            isOwner ? '?owner=true' : ''
          }`,
        CREATE: (locale: string, programId: string | number) =>
          `/${locale}/user/accelerator/${programId}?filter=my-projects&wizard=true`,
        EDIT: (locale: string, programId: string | number, projectId: string | number) =>
          `/${locale}/user/accelerator/${programId}?filter=my-projects&wizard=true&project=${projectId}`,
      },
    },
  },
};

export default getRoute;
