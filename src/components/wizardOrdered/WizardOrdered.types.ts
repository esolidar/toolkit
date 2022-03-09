interface Props {
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
  success?: boolean;
  companyName: string;
}

export default Props;
