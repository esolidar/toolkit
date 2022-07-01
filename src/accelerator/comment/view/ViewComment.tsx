import React, { useState, useRef, FC } from 'react';
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
import CreateComment from '../create';
import user from '../../../../__mocks__/user';

const ViewComment: FC<Props> = ({
  thumb,
  name,
  date,
  dropdown,
  text,
  social,
  reply,
  images,
  preview,
  files,
  liked = false,
}: Props) => {
  const intl: IntlShape = useIntl();
  const inputEl = useRef(null);

  const [isLiked, setIsLiked] = useState(liked);
  const [showShare, setShowShare] = useState(false);

  const handleLiked = () => {
    setIsLiked(!isLiked);
  };

  const handleFocus = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <div className="view-comment">
        <div className="view-comment__header">
          <ProfileAvatar
            thumb={thumb}
            name={name}
            date={dateDistance({ date, formatMessage: intl.formatMessage })}
            thumbSize="lg"
          />
          {dropdown.length > 0 && <Dropdown items={dropdown} toggleIcon="MoreVertical" />}
        </div>

        <div className="view-comment__content">
          <ReadMoreText text={text} charLimit="512" />
        </div>
        {images.length > 0 && (
          <ImageGrid items={images} type="grid" editMode={false} onDeleteImage={() => {}} />
        )}
        {files.length > 0 &&
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
              videoDetails={{
                providerName: 'youtube',
                thumbnailUrl: 'url(https://img.youtube.com/vi/f7x5IeWi0v8/maxresdefault.jpg)',
                title: 'Como fazer um Programa de Aceleração com a esolidar?',
                videoUrl: '',
              }}
              videoUrl="https://youtu.be/f7x5IeWi0v8"
            />
          ))}
        {social && (
          <>
            <div className="view-comment__social view-comment--inline">
              <div>0 likes</div>
              <div>0 comments</div>
            </div>
            <div className="view-comment__line" />
            <div className="view-comment--inline">
              <Button
                onClick={handleLiked}
                extraClass={isLiked ? 'secondary view-comment--liked' : 'secondary'}
                ghost
                theme="dark"
                text="Like"
                iconLeft={<Icon name={isLiked ? 'ThumbsUpBold' : 'ThumbsUp'} />}
              />
              <Button
                onClick={handleFocus}
                extraClass="secondary"
                ghost
                theme="dark"
                text="Comment"
                iconLeft={<Icon name="Comment" />}
              />
              <Button
                onClick={() => setShowShare(true)}
                extraClass="secondary"
                ghost
                theme="dark"
                text="Share"
                iconLeft={<Icon name="Share3" />}
              />
            </div>

            <CreateComment
              reference={inputEl}
              isAdmin={false}
              user={user}
              type="reply"
              placeholderText="Leave a comment..."
              postDeleteFile={() => {}}
              postDeleteImage={() => {}}
              onDropError={() => {}}
              galleryType="inline"
              files={[]}
              scrapper={null}
              handlePostComment={() => {}}
              postUploadFiles={() => {}}
              getScraper={() => {}}
              postUploadImages={() => {}}
              images={[]}
            />
          </>
        )}
        {reply && <Button extraClass="secondary" text="Reply" />}
      </div>

      <ShareModal
        openModal={showShare}
        title="Esolidar be the change"
        windowLocationHref="https://www.bethechange.esolidar.com/pt/needs/crowdfunding/detail/174-apoie-as-pessoas-diretamente-afetadas-pela-guerra-na-ucrania"
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
