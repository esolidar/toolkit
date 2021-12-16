import { PROJECT, CROWDFUNDING } from '../../constants/status';

export const getStatus = (st: string, formatMessage) => {
  switch (st) {
    case PROJECT.draft:
      return formatMessage({ id: 'toolkit.status.draft' });

    case PROJECT.pending || CROWDFUNDING.pending:
      return formatMessage({ id: 'toolkit.status.new' });

    case PROJECT.reviewed:
      return formatMessage({ id: 'toolkit.status.reviewed' });

    case PROJECT.inReview:
      return formatMessage({ id: 'toolkit.status.on-hold' });

    case PROJECT.approved:
      return formatMessage({ id: 'toolkit.status.approved' });

    case PROJECT.completed:
      return formatMessage({ id: 'toolkit.status.archived' });

    case PROJECT.rejected:
      return formatMessage({ id: 'toolkit.status.rejected' });

    default:
      return formatMessage({ id: st });
  }
};

export default getStatus;
