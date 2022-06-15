import React, { FC, useState } from 'react';
import { useIntl, IntlShape } from 'react-intl';
import Skeleton from 'react-loading-skeleton';
import Rating from 'react-rating';
import Props, {
  IStatusOption,
  IOdsPopoverLink,
  IBadgeInfo,
  IInitialValues,
  IChangeStatusModal,
} from './CardProjectDetail.types';
import ProfileAvatar from '../profileAvatar';
import CustomModal from '../../elements/customModal';
import Icon from '../../elements/icon';
import Badge from '../../elements/badge';
import Select from '../../elements/select';
import Button from '../../elements/button';
import Popover from '../../elements/popover';
import TextareaField from '../../elements/textareaField';
import { PROJECT } from '../../constants/status';
import getOdsList from '../../utils/getOdsList';
import isDefined from '../../utils/isDefined';
import { ProjectStatus } from '../../interfaces/project/project';
import Follow from '../follow';

/** TODO: i18n copy
 *  Not rated yet PT | BR - toolkit.card-project-detail.review.placeholder
 * */

const badgeInfo: IBadgeInfo = {
  [PROJECT.draft]: { text: 'toolkit.status.draft', extraClass: 'white' },
  [PROJECT.pending]: { text: 'toolkit.status.new', extraClass: 'dark-blue' },
  [PROJECT.inReview]: { text: 'toolkit.status.on-hold', extraClass: 'black' },
  [PROJECT.reviewed]: { text: 'toolkit.status.reviewed', extraClass: 'dark-gray' },
  [PROJECT.rejected]: { text: 'toolkit.status.rejected', extraClass: 'red' },
  [PROJECT.completed]: { text: 'toolkit.status.completed', extraClass: 'green' },
};

const odsPopoverLink: IOdsPopoverLink = {
  pt: 'https://www.ods.pt/',
  en: 'https://brasil.un.org/pt-br/',
  br: 'https://sdgs.un.org/goals',
};

const getStatusOptions = (intl: IntlShape): IStatusOption[] => [
  // ('DRAFT', 'PENDING', 'IN_REVIEW', 'APPROVED', 'COMPLETED', 'REJECTED')
  {
    value: PROJECT.pending,
    label: intl.formatMessage({ id: 'toolkit.status.new' }),
    description: intl.formatMessage({ id: 'toolkit.status.new.description' }),
  },
  {
    value: PROJECT.inReview,
    label: intl.formatMessage({ id: 'toolkit.status.on-hold' }),
    description: intl.formatMessage({ id: 'toolkit.status.on-hold.description' }),
  },
  {
    value: PROJECT.reviewed,
    label: intl.formatMessage({ id: 'toolkit.status.reviewed' }),
    description: intl.formatMessage({ id: 'toolkit.status.reviewed.description' }),
  },
  {
    value: PROJECT.rejected,
    label: intl.formatMessage({ id: 'toolkit.status.rejected' }),
    description: intl.formatMessage({ id: 'toolkit.status.rejected.description' }),
  },
  {
    value: PROJECT.approved,
    label: intl.formatMessage({ id: 'toolkit.status.approved' }),
    description: intl.formatMessage({ id: 'toolkit.status.approved.description' }),
  },
];

const initialValues: IInitialValues = {
  showCommentInput: false,
  comment: '',
  changeStatusModal: {
    isOpen: false,
    oldStatus: PROJECT.approved,
    newStatus: null,
  },
};

const CardProjectDetail: FC<Props> = ({
  isAdmin = false,
  isLoading = false,
  odsList = [],
  onChangeRating,
  onChangeStatus,
  onSaveComment,
  organizedBy,
  rating,
  status,
  followProps,
}: Props): JSX.Element => {
  const intl = useIntl();
  const [showCommentInput, setShowCommentInput] = useState<boolean>(initialValues.showCommentInput);
  const [comment, setComment] = useState<string>(initialValues.comment);
  const [changeStatusModal, setChangeStatusModal] = useState<IChangeStatusModal>(
    initialValues.changeStatusModal
  );

  const handleChangeStatus = (value: ProjectStatus) => {
    if (value === status) return;
    if (status === PROJECT.approved && value !== PROJECT.approved)
      setChangeStatusModal({ ...changeStatusModal, isOpen: true, newStatus: value });
    else {
      onChangeStatus(value);
      setShowCommentInput(true);
    }
  };

  const handleCancelChangeStatus = () => {
    setChangeStatusModal(initialValues.changeStatusModal);
  };

  const handleConfirmChangeStatus = () => {
    onChangeStatus(changeStatusModal.newStatus);
    setShowCommentInput(true);
    setChangeStatusModal(initialValues.changeStatusModal);
  };

  const handleChangeComment = ({ target: { value } }) => {
    setComment(value);
  };

  const handleClickDismissComment = () => {
    setShowCommentInput(initialValues.showCommentInput);
    setComment(initialValues.comment);
  };

  const hasRating = isDefined(rating) && rating > 0;

  const formattedRating = hasRating
    ? `${rating} / 5`
    : intl.formatMessage({ id: 'toolkit.card-project-detail.review.placeholder' });
  const formattedSDGs = getOdsList(odsList, intl.locale, intl.formatMessage);

  const showStatusBadge = status !== PROJECT.approved;
  const showODSSection = odsList.length > 0;
  const showReviewSection = isAdmin && status !== PROJECT.draft;
  const showChangeStatusForm = status !== PROJECT.completed;

  if (isLoading) return <CardProjectDetailLoading />;

  return (
    <>
      <div className="card-project-detail" data-testid="cardProjectDetail">
        {showStatusBadge && (
          <Badge
            size="sm"
            extraClass={badgeInfo[status].extraClass}
            text={badgeInfo[status].text}
          />
        )}
        {showODSSection && (
          <div className="card-project-detail__ods-section">
            <h3 className="card-project-detail__ods-section--title">
              {intl.formatMessage({ id: 'toolkit.accelerator.appForm.form.sdgs' })}
              <Popover
                className="projects-list__filters-popover-body"
                overlayTrigger={<Icon name="InfoBold" size="sm" />}
                size="md"
                popoverBodyChildren={
                  <div>
                    <h3>
                      {intl.formatMessage({ id: 'toolkit.card-project-detail.sdg.info.title' })}
                    </h3>
                    <p>
                      {intl.formatMessage({
                        id: 'toolkit.card-project-detail.sdg.info.description',
                      })}
                    </p>
                    <Button
                      className="popover-btn"
                      extraClass="link"
                      href={odsPopoverLink[intl.locale] || odsPopoverLink.en}
                      target="_blank"
                      text={intl.formatMessage({ id: 'toolkit.learn-more' })}
                    />
                  </div>
                }
              />
            </h3>
            <p className="card-project-detail__ods-section--description">
              {intl.formatMessage({ id: 'toolkit.card-project-detail.sdg.description' })}
            </p>
            <div className="card-project-detail__ods-section--list">
              {formattedSDGs.map(sdg => {
                return <img key={sdg.id} src={sdg.image} alt={sdg.name} data-testid="ods-image" />;
              })}
            </div>
          </div>
        )}
        {showReviewSection && (
          <div
            className={`card-project-detail__review-section ${showChangeStatusForm && 'active'}`}
          >
            <div className="card-project-detail__review-section--rating">
              <Rating
                emptySymbol={<Icon name="Star" />}
                fullSymbol={
                  <div className="card-project-detail__review-section--rating-full">
                    <Icon name="StarBold" />
                  </div>
                }
                initialRating={rating}
                onChange={onChangeRating}
                readonly={isAdmin && status === PROJECT.completed}
              />
              <p className={`${hasRating && 'has-rating'}`}>{formattedRating}</p>
            </div>
            {showChangeStatusForm && (
              <>
                <Select
                  value={status}
                  onChange={handleChangeStatus}
                  options={getStatusOptions(intl)}
                  placeholder={intl.formatMessage({
                    id: 'toolkit.card-project-detail.status.placeholder',
                  })}
                  fullWidth
                />
                {showCommentInput && (
                  <>
                    <TextareaField
                      placeholder={intl.formatMessage({
                        id: 'toolkit.card-project-detail.status.comment.placeholder',
                      })}
                      value={comment}
                      onChange={handleChangeComment}
                      maxLength={400}
                    />
                    <div className="card-project-detail__review-section--comment-actions">
                      <Button
                        extraClass="secondary"
                        text={intl.formatMessage({ id: 'toolkit.dismiss' })}
                        onClick={handleClickDismissComment}
                      />
                      <Button
                        extraClass="primary-full"
                        text={intl.formatMessage({ id: 'toolkit.comment' })}
                        onClick={() => {
                          onSaveComment(comment);
                          handleClickDismissComment();
                        }}
                      />
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        )}
        <div className="card-project-detail__organizer-section">
          <p>{intl.formatMessage({ id: 'toolkit.organizedBy' })}</p>
          <ProfileAvatar
            {...organizedBy}
            buttonText={intl.formatMessage({ id: 'toolkit.view.program-details' })}
            isNameBold
          />
        </div>
        {(status === PROJECT.approved || status === PROJECT.completed) && followProps && (
          <>
            <div className="card-project-detail__separator" />
            <Follow {...followProps} />
          </>
        )}
      </div>
      <CustomModal
        show={changeStatusModal.isOpen}
        title={intl.formatMessage({ id: 'toolkit.card-project-detail.status.modal.title' })}
        closeButton={false}
        actionsChildren={
          <>
            <Button
              extraClass="primary-full"
              onClick={handleConfirmChangeStatus}
              text={intl.formatMessage({ id: 'toolkit.update' })}
            />
            <Button
              extraClass="secondary"
              onClick={handleCancelChangeStatus}
              text={intl.formatMessage({ id: 'toolkit.discard.changes' }).slice(0, -1)}
            />
          </>
        }
        bodyChildren={
          <p>{intl.formatMessage({ id: 'toolkit.card-project-detail.status.modal.text' })}</p>
        }
      />
    </>
  );
};

const CardProjectDetailLoading = () => (
  <div className="card-project-detail">
    <Skeleton width="86px" height="24px" borderRadius="24px" />
    <div className="d-flex flex-column" style={{ gap: '4px' }}>
      <Skeleton width="256px" height="24px" borderRadius="24px" />
      <Skeleton width="352px" height="16px" borderRadius="8px" />
      <Skeleton width="280px" height="16px" borderRadius="8px" />
    </div>
    <div className="d-flex align-items-center" style={{ gap: '8px' }}>
      <Skeleton width="40px" height="40px" />
      <Skeleton width="40px" height="40px" />
      <Skeleton width="40px" height="40px" />
      <Skeleton width="40px" height="40px" />
    </div>
    <div className="d-flex align-items-center" style={{ gap: '4px', marginTop: '32px' }}>
      <Skeleton width="20px" height="20px" circle />
      <Skeleton width="20px" height="20px" circle />
      <Skeleton width="20px" height="20px" circle />
      <Skeleton width="20px" height="20px" circle />
      <Skeleton width="20px" height="20px" circle />
      <Skeleton width="95px" height="24px" className="ml-3" borderRadius="100px" />
    </div>
    <Skeleton width="352px" height="112px" borderRadius="8px" style={{ margin: '32px 0' }} />
    <Skeleton width="82px" height="20px" borderRadius="100px" />
    <div className="d-flex align-items-center">
      <Skeleton width="48px" height="48px" circle />
      <div className="ml-3">
        <Skeleton width="48px" height="24px" borderRadius="100px" />
        <Skeleton width="72px" height="14px" borderRadius="100px" />
      </div>
    </div>
  </div>
);

export default CardProjectDetail;
