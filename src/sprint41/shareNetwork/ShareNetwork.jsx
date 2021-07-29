import React from 'react';
import PropTypes from 'prop-types';
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

const ShareNetwork = ({ title }) => (
  <div className="text-right" data-testid="btn-share">
    <FacebookShareButton url={window.location.href} quote={title} className="share-icon">
      <FacebookIcon size={32} round />
    </FacebookShareButton>
    <TwitterShareButton url={window.location.href} title={title} className="share-icon">
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
    <CopyToClipboard text={window.location.href}>
      <button aria-label="share-link" className="share-link share-icon">
        <Icon iconClass="icon-link" />
      </button>
    </CopyToClipboard>
  </div>
);

ShareNetwork.propTypes = {
  title: PropTypes.string,
};

export default ShareNetwork;
