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
}

export const STATUS: Status = {
  draft: 'draft',
  active: 'active',
  pending: 'pending',
  reviewed: 'reviewed',
  inReview: 'inReview',
  approved: 'approved',
  completed: 'completed',
  rejected: 'rejected',
  suspended: 'suspended',
};

export const PROJECT: any = {
  [STATUS.draft]: 'DRAFT',
  [STATUS.pending]: 'PENDING',
  [STATUS.reviewed]: 'REVIEWED',
  [STATUS.inReview]: 'IN_REVIEW',
  [STATUS.approved]: 'APPROVED',
  [STATUS.completed]: 'COMPLETED',
  [STATUS.rejected]: 'REJECTED',
};

export const AUCTION: any = {
  // ENUM('A', 'S', 'B', 'P', 'F', 'D', 'DRAFT')
  A: [STATUS.active],
};
export const CROWDFUNDING: any = {
  // ENUM('pending', 'approved', 'rejected', 'completed')
};
