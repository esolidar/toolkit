interface Props {
  showWizard: boolean;
  handleClickPrev(): void;
  disableClickPrev: boolean;
  handleClickNext(): void;
  handlePublish(): void;
  disableClickNext: boolean;
  header: JSX.Element;
  pages: any[];
  validForm: boolean;
}

export default Props;
