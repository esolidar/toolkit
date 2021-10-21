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
  origin: 'esolidar' | 'whitelabel';
  onSuccess(): void;
  actions: Actions;
  reducers: Reducers;
}

export default Props;
