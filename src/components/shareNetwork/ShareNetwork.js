import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';

const ShareNetwork = ({
  title,
  image,
  description,
}) => (
  <>
    <Row>
      <Col sm={12} className="share-label text-center mb-3 mt-3">
        <FormattedMessage
          id="share"
          defaultMessage="SHARE"
        />
      </Col>
    </Row>
    <Row>
      <Col sm={12} className="content-wrapper text-center" data-testid="btn-share">
        <FacebookShareButton
          url={window.location.href}
          quote={title}
          className="share-icon"
        >
          <FacebookIcon
            size={32}
            round
          />
        </FacebookShareButton>
        <TwitterShareButton
          url={window.location.href}
          title={title}
          className="share-icon "
        >
          <TwitterIcon
            size={32}
            round
          />
        </TwitterShareButton>
        <WhatsappShareButton
          url={window.location.href}
          title={title}
          separator=": "
          className="share-icon"
        >
          <WhatsappIcon
            size={32}
            round
          />
        </WhatsappShareButton>
        <TelegramShareButton
          url={window.location.href}
          title={title}
          className="share-icon"
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <LinkedinShareButton
          url={window.location.href}
          title={title}
          windowWidth={750}
          windowHeight={600}
          className="share-icon"
        >
          <LinkedinIcon
            size={32}
            round
          />
        </LinkedinShareButton>
        <PinterestShareButton
          url={String(window.location)}
          media={image || 'https://www.esolidar.com/images/fb_esolidar.png'}
          windowWidth={1000}
          windowHeight={730}
          className="share-icon"
        >
          <PinterestIcon
            size={32}
            round
          />
        </PinterestShareButton>
        <RedditShareButton
          url={window.location.href}
          title={title}
          windowWidth={660}
          windowHeight={460}
          className="share-icon"
        >
          <RedditIcon
            size={32}
            round
          />
        </RedditShareButton>
        <EmailShareButton
          url={window.location.href}
          subject={title}
          body={`${description}\n\n${window.location.href}`}
          className="share-icon"
        >
          <EmailIcon
            size={32}
            round
          />
        </EmailShareButton>
      </Col>
    </Row>
  </>
);

ShareNetwork.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default ShareNetwork;
