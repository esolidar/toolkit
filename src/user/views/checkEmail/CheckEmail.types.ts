interface Actions {
  handleChangeEmail(): void;
  handleResendEmail(): void;
}

interface Props {
  email: string;
  actions: Actions;
}

export default Props;
