import slugify from '../slugify';

export const getRoute = {
  public: {
    accelerator: {
      program: {
        LIST: (locale: string) => (locale ? `/${locale}/accelerator` : `/accelerator`),
        DETAIL: (locale: string, programId: string | number) =>
          locale ? `/${locale}/accelerator/${programId}` : `/accelerator/${programId}`,
      },
      project: {
        LIST: (locale: string, programId: string | number) =>
          locale
            ? `/${locale}/accelerator/${programId}/projects`
            : `/accelerator/${programId}/projects`,
        DETAIL: (
          locale: string,
          programId: string | number,
          projectId: string | number,
          projectTitle: string,
          params: string = ''
        ) =>
          locale
            ? `/${locale}/accelerator/${programId}/projects/${projectId}-${slugify(
                projectTitle
              )}${params}`
            : `/accelerator/${programId}/projects/${projectId}-${slugify(projectTitle)}${params}`,
        INITIATIVES: (locale: string, programId: string | number, projectId: string | number) =>
          locale
            ? `/${locale}/accelerator/${programId}/projects/${projectId}/initiatives`
            : `/accelerator/${programId}/projects/${projectId}/initiatives`,
      },
    },
    auth: {
      REGISTER: (locale: string, data: string = '') =>
        locale ? `/${locale}/auth/register${data && data}` : `/auth/register${data && data}`,
    },
    needs: {
      CROWDFUNDING: (locale: string) =>
        locale ? `/${locale}/needs/crowdfundings` : '/needs/crowdfundings',
    },
  },
  private: {
    accelerator: {
      program: {
        LIST: (locale: string) => (locale ? `/${locale}/user/accelerator` : `/user/accelerator`),
        DETAIL: (locale: string, programId: string | number, filters: string = '') =>
          locale
            ? `/${locale}/user/accelerator/${programId}${filters && filters}`
            : `/user/accelerator/${programId}${filters && filters}`,
      },
      project: {
        LIST: (locale: string, programId: string | number) =>
          locale ? `/${locale}/user/accelerator/${programId}` : `/user/accelerator/${programId}`,
        LIST_ALL: (locale: string, programId: string | number) =>
          locale
            ? `/${locale}/user/accelerator/${programId}?filter=all`
            : `/user/accelerator/${programId}?filter=all`,
        LIST_MY: (locale: string, programId: string | number) =>
          locale
            ? `/${locale}/user/accelerator/${programId}?filter=my-projects`
            : `/user/accelerator/${programId}?filter=my-projects`,
        DETAIL: (
          locale: string,
          programId: string | number,
          projectId: string | number,
          projectTitle: string,
          isOwner: boolean = false
        ) =>
          locale
            ? `/${locale}/user/accelerator/${programId}/projects/${projectId}-${slugify(
                projectTitle
              )}${isOwner ? '?owner=true' : ''}`
            : `/user/accelerator/${programId}/projects/${projectId}-${slugify(projectTitle)}${
                isOwner ? '?owner=true' : ''
              }`,
        CREATE: (locale: string, programId: string | number) =>
          locale
            ? `/${locale}/user/accelerator/${programId}?filter=my-projects&wizard=true`
            : `/user/accelerator/${programId}?filter=my-projects&wizard=true`,
        EDIT: (locale: string, programId: string | number, projectId: string | number) =>
          locale
            ? `/${locale}/user/accelerator/${programId}?filter=my-projects&wizard=true&project=${projectId}`
            : `/user/accelerator/${programId}?filter=my-projects&wizard=true&project=${projectId}`,
      },
    },
  },
};

export default getRoute;
