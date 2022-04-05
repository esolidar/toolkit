interface Props {
  children: JSX.Element;
  showModal: boolean;
  closeModal?(): void;
  header?: JSX.Element;
  showHeader?: boolean;
  footer?: JSX.Element;
}

export default Props;
