import React, { FC } from 'react';
import Props from './ShareNetwork.types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import Icon from '../../components/icon';

const ShareNetwork: FC<Props> = ({
  title,
  windowLocationHref = window.location.href,
}: Props): JSX.Element => {
  return (
    <div className="text-right" data-testid="btn-share">
      <FacebookShareButton url={windowLocationHref} quote={title} className="share-icon">
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={windowLocationHref} title={title} className="share-icon">
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton
        url={window.location.href}
        title={title}
        separator=": "
        className="share-icon"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <CopyToClipboard text={windowLocationHref}>
        <button aria-label="share-link" className="share-link share-icon">
          <Icon iconClass="icon-link" />
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default ShareNetwork;
