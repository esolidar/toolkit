import { ProjectStatus } from '../interfaces/project/project';

interface Status {
  draft?: string;
  active?: string;
  pending?: string;
  reviewed?: string;
  inReview?: string;
  approved?: string;
  completed?: string;
  rejected?: string;
  suspended?: string;
  soon?: string;
  running?: string;
  closed?: string;
  ended?: string;
}

export const ACCELERATION_PROGRAM: Status = {
  soon: 'soon',
  running: 'running',
  closed: 'closed',
  ended: 'ended',
};

type IProject = {
  [key: string]: ProjectStatus;
};

export const PROJECT: IProject = {
  draft: 'DRAFT',
  pending: 'PENDING',
  inReview: 'IN_REVIEW',
  reviewed: 'REVIEWED',
  rejected: 'REJECTED',
  approved: 'APPROVED',
  completed: 'COMPLETED',
};

export const AUCTION: Status = {
  // ENUM('A', 'S', 'B', 'P', 'F', 'D', 'DRAFT')
  draft: 'DRAFT',
};

export const CROWDFUNDING: Status = {
  // ENUM('pending', 'approved', 'rejected', 'completed')
  pending: 'pending',
};
