interface PostRecoverPassword {
  email: string;
  origin: string;
}

interface RecoverPass {
  data: boolean;
  code: number;
}

interface Actions {
  postRecoverPassword(data: PostRecoverPassword): void;
}

interface Reducers {
  recoverPassword: RecoverPass;
}

interface Props {
  type: 'set' | 'reset';
  onSuccess(email: string): void;
  actions: Actions;
  reducers: Reducers;
}

export default Props;
