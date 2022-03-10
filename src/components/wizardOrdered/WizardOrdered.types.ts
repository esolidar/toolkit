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
  header: JSX.Element;
  pages: any[];
  validForm: boolean;
  isSuccess?: boolean;
  companyName: string;
}

export default Props;
