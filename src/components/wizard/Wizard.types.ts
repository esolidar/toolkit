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
  children: JSX.Element;
  handleDarkButton(): void;
  handlePrimaryButton(): void;
  disabledDarkButton: boolean;
  disabledPrimaryButton: boolean;
  handleClickBack(): void;
  handleClickNext(): void;
  totalPages: number;
  currentPage: number;
  disableClickNext: boolean;
  handleChangeTab(): void;
  editMode: boolean;
  handleChangeTitle(): void;
  handleBlurTitle(): void;
  buttonNextText: string;
  isLoading: boolean;
}

export default Props;
