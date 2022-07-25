import React, { FC } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import CustomModal from '../../elements/customModal';
import Button from '../../elements/button';
import Icon from '../../elements/icon';
import Props, { ModalBodyProps, CodeboxProps } from './ShareModal.types';

const ShareModal: FC<Props> = ({
  title,
  showFacebook,
  showTwitter,
  showLinkedin,
  showEmail,
  showWhatsapp,
  showCopyToClipboard,
  windowLocationHref,
  onCloseModal,
  openModal,
  onClickCopyToClipboard,
  stickToBottomMobile = true,
  showShareToFeed,
  onclickShareToFeed,
}: Props): JSX.Element => {
  const intl: IntlShape = useIntl();

  return (
    <CustomModal
      show={openModal}
      onHide={onCloseModal}
      size="sm"
      showFooter={false}
      title={intl.formatMessage({ id: 'share' })}
      dialogClassName="shareModal"
      backdrop="static"
      stickToBottomMobile={stickToBottomMobile}
      bodyChildren={
        <ModalBody
          title={title}
          showFacebook={showFacebook}
          showTwitter={showTwitter}
          showLinkedin={showLinkedin}
          showEmail={showEmail}
          showWhatsapp={showWhatsapp}
          showCopyToClipboard={showCopyToClipboard}
          windowLocationHref={windowLocationHref}
          onClickCopyToClipboard={onClickCopyToClipboard}
          showShareToFeed={showShareToFeed}
          onclickShareToFeed={onclickShareToFeed}
        />
      }
    />
  );
};

export default ShareModal;

const ModalBody: FC<ModalBodyProps> = ({
  title = '',
  showFacebook = true,
  showTwitter = true,
  showLinkedin = true,
  showEmail = true,
  showWhatsapp = true,
  showCopyToClipboard = true,
  windowLocationHref,
  onClickCopyToClipboard = () => {},
  showShareToFeed = false,
  onclickShareToFeed,
}: ModalBodyProps): JSX.Element => {
  const intl: IntlShape = useIntl();

  const fbShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?display=popup&u=${windowLocationHref}&quote=${title}`;
    const options =
      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,left=660,top=190,width=600,height=600';
    window.open(url, 'sharer', options);
  };

  const handleClickCopyToClipboard = () => {
    navigator.clipboard.writeText(windowLocationHref);
    onClickCopyToClipboard(true);
  };

  return (
    <div className="ShareModal__Body">
      {showCopyToClipboard && (
        <Codebox
          onClick={handleClickCopyToClipboard}
          textLeft={windowLocationHref.replace(/(^\w+:|^)\/\//, '')}
          textRight={intl.formatMessage({ id: 'copy' })}
        />
      )}

      <ul>
        {showShareToFeed && (
          <li className="separator">
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                onclickShareToFeed();
              }}
              title={intl.formatMessage({ id: 'toolkit.share.feed' })}
              data-testid="share-feed"
            >
              <Button
                className="share-icon share-feed"
                icon={<Icon name="Feed" />}
                type="icon"
                theme="light"
              />
              <span>{intl.formatMessage({ id: 'toolkit.share.feed' })}</span>
            </a>
          </li>
        )}
        {showFacebook && (
          <li>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                fbShare();
              }}
              title="Facebook"
              data-testid="share-facebook"
            >
              <Button
                className="share-icon share-facebook"
                icon={<Icon name="Facebook" />}
                type="icon"
                theme="light"
              />
              <span>Facebook</span>
            </a>
          </li>
        )}
        {showTwitter && (
          <li>
            <a
              href={`https://twitter.com/intent/tweet?text=${title}&url=${windowLocationHref}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="twitter"
              title="Twitter"
              data-testid="share-twitter"
            >
              <Button
                className="share-icon share-twitter"
                icon={<Icon name="Twitter" />}
                type="icon"
                theme="light"
              />
              <span>Twitter</span>
            </a>
          </li>
        )}
        {showLinkedin && (
          <li>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${windowLocationHref}&title=${title}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
              title="Linkedin"
              data-testid="share-linkedin"
            >
              <Button
                className="share-icon share-linkedin"
                icon={<Icon name="Linkedin" />}
                type="icon"
                theme="light"
              />
              <span>Linkedin</span>
            </a>
          </li>
        )}
        {showWhatsapp && (
          <li>
            <a
              href={`https://api.whatsapp.com/send?text=${title} ${windowLocationHref}`}
              target="_blank"
              rel="noopener noreferrer"
              data-action="share/whatsapp/share"
              title="Whatsapp"
              data-testid="share-whatsapp"
            >
              <Button
                className="share-icon share-whatsapp"
                icon={<Icon name="Whatsapp" />}
                type="icon"
                theme="light"
              />
              <span>WhatsApp</span>
            </a>
          </li>
        )}
        {showEmail && (
          <li>
            <a
              href={`mailto:?subject=${title}&body=${windowLocationHref}`}
              title="Email"
              data-testid="share-email"
            >
              <Button
                className="share-icon share-email"
                icon={<Icon name="Email" />}
                type="icon"
                theme="light"
              />
              <span>Email</span>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

const Codebox: FC<CodeboxProps> = ({ onClick, textLeft, textRight }: CodeboxProps): JSX.Element => (
  <Button
    onClick={onClick}
    className="codebox-button"
    fullWidth={true}
    extraClass="secondary"
    theme="light"
    text={
      <div className="codebox">
        <div className="codebox__left">{textLeft}</div>
        <div className="codebox__right">{textRight}</div>
      </div>
    }
  />
);
