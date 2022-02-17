import { PageStatus } from './paginator/WizardPaginator.types';

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
  pages: any;
  children: JSX.Element;
  handleDarkButton(): void;
  handlePrimaryButton(): void;
  disabledDarkButton: boolean;
  disabledPrimaryButton: boolean;
  handleClickBack(): void;
  handleClickNext(): void;
  totalPages: number;
  currentPage: string;
  disableClickNext: boolean;
  handleChangeTab(): void;
  editMode: boolean;
  handleChangeTitle(): void;
  handleBlurTitle(): void;
  buttonNextText: string;
  isLoading: boolean;
  isDraft?: boolean;
  isLive?: boolean;
  pageStatus: PageStatus;
}

export default Props;
