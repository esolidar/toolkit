import React, { useEffect, useState, useRef, FC } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import Props from './ViewComment.types';
import ProfileAvatar from '../../../components/profileAvatar';
import ReadMoreText from '../../../components/readMoreText';
import Dropdown from '../../../elements/dropdown';
import Button from '../../../elements/button';
import Icon from '../../../elements/icon';
import dateDistance from '../../../utils/dateDistance';
import ImageGrid from '../../../components/imageGrid';
import FileCard from '../../../components/fileCard';
import Preview from '../../../components/preview';
import ShareModal from '../../../components/shareModal';
// import CreateComment from '../create';

const ViewComment: FC<Props> = ({
  thumb,
  name,
  date,
  text,
  images,
  preview,
  files,
  liked = false,
  share,
  likes = 0,
  comments = 0,
}: Props) => {
  const intl: IntlShape = useIntl();
  const inputEl = useRef(null);

  const [isLiked, setIsLiked] = useState(liked);
  // const [isReply, setIsReply] = useState(false);
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    setIsLiked(liked);
  }, [liked]);

  // const handleReply = () => {
  //   setIsReply(!isReply);
  // };

  const handleLiked = () => {
    setIsLiked(!isLiked);
  };

  const handleFocus = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <div className="view-comment view-comment--border">
        <div className="view-comment__header">
          <ProfileAvatar
            thumb={thumb}
            name={name}
            date={dateDistance({ date, formatMessage: intl.formatMessage })}
            thumbSize="lg"
          />
          <Dropdown items={[]} toggleIcon="MoreVertical" />
        </div>

        <div className="view-comment__content">
          <ReadMoreText text={text} charLimit={512} />
        </div>

        {images && images.length > 0 && (
          <ImageGrid items={images} type="grid" editMode={false} onDeleteImage={() => {}} />
        )}

        {files &&
          files.length > 0 &&
          files.map(({ title, size }, key) => (
            <FileCard key={key} size={size} title={title} showDownloadButton />
          ))}

        {preview &&
          (preview.type === 'image' ? (
            <FileCard url={preview.url} title={preview.title} />
          ) : (
            <Preview
              hover
              type="video"
              videoDetails={preview.videoDetails}
              videoUrl={preview.videoUrl}
              handleClickPreview={() => window.open(preview.videoUrl)}
            />
          ))}

        <div className="view-comment__social view-comment--inline">
          <div>{intl.formatMessage({ id: 'toolkit.comments.like' }, { value: likes })}</div>
          <div>{intl.formatMessage({ id: 'toolkit.comments.comment' }, { value: comments })}</div>
        </div>
        <div className="view-comment__line" />
        <div className="view-comment--inline">
          <Button
            onClick={handleLiked}
            extraClass={isLiked ? 'secondary view-comment--liked' : 'secondary'}
            ghost
            theme="dark"
            text={intl.formatMessage({ id: 'like' })}
            iconLeft={<Icon name={isLiked ? 'ThumbsUpBold' : 'ThumbsUp'} />}
          />
          <Button
            onClick={handleFocus}
            extraClass="secondary"
            ghost
            theme="dark"
            text={intl.formatMessage({ id: 'comment' })}
            iconLeft={<Icon name="Comment" />}
          />
          <Button
            onClick={() => setShowShare(true)}
            extraClass="secondary"
            ghost
            theme="dark"
            text={intl.formatMessage({ id: 'share' })}
            iconLeft={<Icon name="Share3" />}
          />
        </div>

        {/* <CreateComment
              {...createCommentProps}
              // reference={inputEl}
              // isAdmin={false}
              // user={user}
              // type="reply"
              // galleryType="inline"
              // placeholderText={intl.formatMessage({ id: 'commentHere' })}
              // postDeleteFile={() => {}}
              // postDeleteImage={() => {}}
              // onDropError={() => {}}
              // files={[]}
              // scrapper={null}
              // handlePostComment={() => {}}
              // postUploadFiles={() => {}}
              // getScraper={() => {}}
              // postUploadImages={() => {}}
              // images={[]}
            /> */}
      </div>

      <ShareModal
        openModal={showShare}
        title={share?.title}
        windowLocationHref={share?.url}
        showFacebook
        showTwitter
        showLinkedin
        showEmail
        showWhatsapp
        showCopyToClipboard
        stickToBottomMobile
        onCloseModal={() => setShowShare(false)}
        onClickCopyToClipboard={() => {}}
      />
    </>
  );
};

export default ViewComment;
