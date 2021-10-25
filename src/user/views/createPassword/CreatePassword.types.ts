/* eslint-disable camelcase */

interface SetPassword {
  user_id: number;
  password: string;
  password_confirmation: string;
}

interface RecoverData {
  user_id: number;
  code: number;
  password: string;
  password_confirmation: string;
}

interface Actions {
  postNewPassword?(data: SetPassword): void;
  postRecoverPassword?(data: RecoverData): void;
}

interface Reducers {
  setNewPasswordResponse: any;
}

interface Props {
  company: string;
  actions: Actions;
  reducers: Reducers;
  type?: 'set' | 'recover';
  userId: number;
  code: number;
}

export default Props;
