interface Props {
  closeWizard(): void;
  title: string;
  subtitle?: string;
  status: string;
  buttonDarkText: string;
  buttonPrimaryText: string;
  cdnStaticUrl: string;
  saved?: boolean;
  handleDarkButton(): void;
  handlePrimaryButton(): void;
  disabledDarkButton: boolean;
  disabledPrimaryButton: boolean;
}

export default Props;