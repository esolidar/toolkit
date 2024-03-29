import Ods from '../../interfaces/ods.types';
import { ProjectStatus } from '../../interfaces/project/project';
import { BadgeExtraClass } from '../../elements/badge/Badge.types';
import ProfileAvatar from '../profileAvatar/ProfileAvatar.types';
import FollowProps from '../follow/Follow.types';

export type IBadgeInfo = {
  [key in string]: { text: string; extraClass: BadgeExtraClass };
};

export type IOdsPopoverLink = {
  [key in string]: string;
};

export interface IStatusOption {
  value: ProjectStatus;
  label: string;
  description: string;
}

export interface IChangeStatusModal {
  isOpen: boolean;
  oldStatus: ProjectStatus;
  newStatus: ProjectStatus | null;
}

export interface IInitialValues {
  showCommentInput: boolean;
  comment: string;
  changeStatusModal: IChangeStatusModal;
}

interface Props {
  odsList?: Ods[];
  status: ProjectStatus;
  organizedBy: ProfileAvatar;
  isLoading?: boolean;
  isAdmin?: boolean;
  rating: number;
  onChangeRating?(newRating: number): void;
  onChangeStatus?(newStatus: string): void;
  onSaveComment?(comment: string): void;
  followProps?: FollowProps;
}

export default Props;
