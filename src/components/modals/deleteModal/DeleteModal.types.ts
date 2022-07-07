interface Props {
  isDeleteDisabled?: boolean;
  isOpen: boolean;
  onClickDelete(): void;
  onClickCancel(): void;
  title: string;
  bodyText: string;
}

export default Props;
