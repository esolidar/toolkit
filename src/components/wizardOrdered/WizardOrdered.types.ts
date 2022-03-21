interface Props {
  activePage: number;
  onChangePage(page: number): void;
  showWizard: boolean;
  handleClickPrev(): void;
  disableClickPrev: boolean;
  handleClickNext(): void;
  handlePublish(): void;
  handleCloseWizard(): void;
  disableClickNext: boolean;
  isPublishDisabled: boolean;
  header: JSX.Element;
  pages: any[];
  isPageValid: boolean;
  isSuccess?: boolean;
  companyName: string;
  isLoading: boolean;
}

export default Props;
