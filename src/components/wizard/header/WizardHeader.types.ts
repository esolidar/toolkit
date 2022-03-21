interface Props {
  editMode?: boolean;
  closeWizard(): void;
  title?: string;
  subtitle?: string;
  buttonDarkText: string;
  buttonPrimaryText: string;
  cdnStaticUrl: string;
  saved?: boolean;
  handleDarkButton(): void;
  handlePrimaryButton(): void;
  handleChangeTitle?(): void;
  handleBlurTitle?(): void;
  disabledDarkButton: boolean;
  disabledPrimaryButton: boolean;
  isLoading: boolean;
  isDraft?: boolean;
  isLive?: boolean;
  closeWizardText?: string;
  showStartHereTooltip?: boolean;
}

export default Props;
