interface Props {
  type: 'set' | 'reset';
  onClickSend(email: string): void;
}

export default Props;
