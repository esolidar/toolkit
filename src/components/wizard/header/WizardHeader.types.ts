interface Props {
  editMode?: boolean;
  closeWizard(isSuccess: boolean): void;
  title?: string;
  subtitle?: string;
  buttonDarkText: string;
  buttonPrimaryText: string;
  cdnStaticUrl: string;
  saved?: boolean;
  handleDarkButton(): void;
  handlePrimaryButton(): void;
  handleChangeTitle?(): void;
  handleBlurTitle?(e: any): void;
  disabledDarkButton: boolean;
  disabledPrimaryButton: boolean;
  isLoading: boolean;
  isDraft?: boolean;
  isLive?: boolean;
  closeWizardText?: string;
  showStartHereTooltip?: boolean;
  isSuccess?: boolean;
}

export default Props;
