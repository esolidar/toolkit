interface Pages {
  title: string;
  status: 'done' | 'not-done';
  active: boolean;
}

interface Props {
  showWizard?: boolean;
  closeWizard(): void;
  title: string;
  subtitle?: string;
  status: string;
  buttonDarkText: string;
  buttonPrimaryText: string;
  cdnStaticUrl: string;
  saved?: boolean;
  pages: Pages[];
  body: JSX.Element;
  handleDarkButton(): void;
  handlePrimaryButton(): void;
  disabledDarkButton: boolean;
  disabledPrimaryButton: boolean;
  handleClickBack(): void;
  handleClickNext(): void;
  totalPages: number;
  currentPage: number;
  disableClickNext: boolean;
}

export default Props;
