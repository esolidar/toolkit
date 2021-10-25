interface PostRecoverPassword {
  email: string;
  origin: string;
}

interface Actions {
  postRecoverPassword(data: PostRecoverPassword): void;
}

interface Reducers {
  recoverPassword: any;
}

interface Props {
  type: 'set' | 'reset';
  onSuccess(email: string): void;
  actions: Actions;
  reducers: Reducers;
}

export default Props;
