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

export const API_STATUS: Status = {
  draft: 'draft',
  active: 'active',
  pending: 'pending',
  reviewed: 'reviewed',
  inReview: 'inReview',
  approved: 'approved',
  completed: 'completed',
  rejected: 'rejected',
  suspended: 'suspended',
  soon: 'soon',
  running: 'running',
  closed: 'closed',
  ended: 'ended',
};

export const ACCELERATION_PROGRAM: Status = {
  [API_STATUS.soon]: 'soon',
  [API_STATUS.running]: 'running',
  [API_STATUS.closed]: 'closed',
  [API_STATUS.ended]: 'ended',
};

export const PROJECT: Status = {
  [API_STATUS.draft]: 'DRAFT',
  [API_STATUS.pending]: 'PENDING',
  [API_STATUS.reviewed]: 'REVIEWED',
  [API_STATUS.inReview]: 'IN_REVIEW',
  [API_STATUS.approved]: 'APPROVED',
  [API_STATUS.completed]: 'COMPLETED',
  [API_STATUS.rejected]: 'REJECTED',
};

export const AUCTION: Status = {
  // ENUM('A', 'S', 'B', 'P', 'F', 'D', 'DRAFT')
  [API_STATUS.draft]: 'DRAFT',
};

export const CROWDFUNDING: Status = {
  // ENUM('pending', 'approved', 'rejected', 'completed')
  [API_STATUS.pending]: 'pending',
};
