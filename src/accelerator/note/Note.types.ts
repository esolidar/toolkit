/* eslint-disable camelcase */
import NoteSingleProps from './NoteSingle.types';

interface Props {
  noteSingleArgs: NoteSingleProps;
  handleViewAllReplies(id: number): void;
  handleViewChildReplies(id: number): void;
}

export default Props;
