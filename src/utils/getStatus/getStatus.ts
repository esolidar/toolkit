import { PROJECT, CROWDFUNDING } from '../../constants/status';

export const getStatus = (st: string, formatMessage) => {
  switch (st) {
    case PROJECT.draft:
      return formatMessage({ id: 'draft' });

    case PROJECT.pending || CROWDFUNDING.pending:
      return formatMessage({ id: 'new' });

    case PROJECT.reviewed:
      return formatMessage({ id: 'reviewed' });

    case PROJECT.inReview:
      return formatMessage({ id: 'on-hold' });

    case PROJECT.approved:
      return formatMessage({ id: 'approved' });

    case PROJECT.completed:
      return formatMessage({ id: 'archived' });

    case PROJECT.rejected:
      return formatMessage({ id: 'rejected' });

    default:
      return formatMessage({ id: st });
  }
};

export default getStatus;
