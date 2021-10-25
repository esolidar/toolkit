interface Actions {
  handleChangeEmail(): void;
  handleResendEmail(): void;
  showAlert(): void;
}

interface Reducers {
  recoverPass: any;
}

interface Props {
  email: string;
  actions: Actions;
  reducers: Reducers;
  resendEmailStatus: boolean;
  closeModal(): void;
}

export default Props;
