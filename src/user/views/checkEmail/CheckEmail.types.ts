interface Actions {
  handleChangeEmail(): void;
  handleResendEmail(): void;
  showAlert(): void;
}

interface RecoverPass {
  data: boolean;
  code: number;
}

interface Reducers {
  recoverPass: RecoverPass;
}

interface Props {
  email: string;
  actions: Actions;
  reducers: Reducers;
  resendEmailStatus: boolean;
  closeModal(): void;
}

export default Props;
