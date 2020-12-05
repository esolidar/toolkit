import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import TextField from '../../elements/textField/TextField';
import ConvertToMyTimezone from '../convertToMyTimezone/ConvertToMyTimezone';
import Button from '../button/Button';
import Countdown from '../countdown/Countdown';
import AuctionDetailRigth from './AuctionDetailRigth';
import SliderImagesLightbox from '../sliderImagesLightbox/SliderImagesLightbox';
import ShareNetwork from '../shareNetwork/ShareNetwork';
import CrowdfundingDescription from '../crowdfundingDescription/CrowdfundingDescription';

const AuctionDetail = ({
  auction,
  isPrivate,
  env,
}) => {
  const auctionTitle = () => {
    let title;
    if (localStorage.lang === 'pt' || localStorage.lang === 'br') {
      title = auction.title;
    } else if (!auction.title_en) {
      title = auction.title;
    } else {
      title = auction.title_en;
    }
    return title;
  };

  const supported = auction.recipient ? auction.recipient : auction.user;

  return (
    <Container className="auction-detail">
      {isPrivate && (
        <Row>
          <Col className="mdPrivateCode">
            <Row>
              <h3 className="pb-4">
                <FormattedMessage
                  id="auctions.supportes"
                  defaultMessage="Insert the access code to display and bid on the auction:"
                />
              </h3>
            </Row>
            <Row>
              <TextField
                className="private-code pb-5"
                label=""
                type="text"
                onChange={() => { }}
                error=""
                placeholder="Insert the code"
                defaultValue=""
                field="forCompanies"
              />
            </Row>
            <div className="text-right">
              <Button
                className="auction-private-cancel mr-3"
                extraClass="dark"
                text="Cancel"
              />
              <Button
                className="auction-private-cancel"
                extraClass="success-full"
                text="Confirm"
              />
            </div>
          </Col>
        </Row>
      )}
      {!isPrivate && (
        <>
          <Row>
            <Col md={12} className="content-wrapper">
              {supported.institution && (
                <Row className="content-header hidden-xs">
                  <Col sm={12} className="text-center">
                    <div className="auction-supported">
                      <FormattedMessage
                        id="auctions.supportes"
                        defaultMessage="This auctions supports:"
                      />
                    </div>
                    <h1 className="text-center">
                      <img src={supported.institution.thumbs.thumb} alt="" />
                      {supported.institution.name}
                    </h1>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={10} className="offset-md-1 mobile-nopadding">
              <Row className="box mobile-nopadding">
                <Col sm={12} className="countdown text-center hidden-xs">
                  {(auction.status === 'A' || auction.status === 'F') && (
                    <Countdown
                      endDate={auction.dateStart}
                      startDate={auction.dateLimit}
                    />
                  )}
                  {auction.status === 'P' && (
                    <div className={`status-${auction.status}`}>
                      <FormattedMessage
                        id="auction.detail.status.pending"
                        defaultMessage="This crowdfunding campaign is pending."
                      />
                      &nbsp;
                      <a style={{ color: '#716247' }} href={`/npo/auction/edit/${auction.id}`}>
                        <FormattedMessage
                          id="editAuction"
                          defaultMessage="Edit auction"
                        />
                      </a>
                    </div>
                  )}
                </Col>
                <Col sm={12} className="text-center hidden-xs">
                  <div className="end-date">
                    <FormattedMessage
                      id="auction.detail.ends"
                      defaultMessage="This auction ends in:"
                    />
                    &nbsp;
                    <ConvertToMyTimezone date={auction.dateLimit} format="LLLL" />
                    &nbsp;
                    <FormattedMessage
                      id="auction.detail.infoBid"
                      defaultMessage="Any bid made in the last 2 minutes of the auction will automatically reset the auction timer to 2 minutes remaining."
                    />
                  </div>
                </Col>
                <Col sm={12}>
                  <Row>
                    <Col md={7} className="mobile-nopadding">
                      {auction.images && auction.images.length > 0 && (
                        <SliderImagesLightbox
                          video={auction.video}
                          images={auction.images}
                          env={env}
                        />
                      )}
                      {auction.images && auction.images.length === 0 && (
                        <div
                          className="slider-image"
                          style={{ backgroundImage: `url(${env.img_cdn}/frontend/assets/no-image.jpg)` }}
                        />
                      )}
                    </Col>
                    <AuctionDetailRigth
                      auctionTitle={auctionTitle()}
                      auction={auction}
                      isShowBid={true}
                    />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <ShareNetwork
            title={auctionTitle()}
            image={auction.images}
            description=""
          />
          <Row>
            <CrowdfundingDescription
              campaign={[]}
              auction={auction}
            />
          </Row>
        </>
      )}
    </Container>
  );
};

AuctionDetail.propTypes = {
  auction: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    private: PropTypes.bool,
    bid_start: PropTypes.number,
    currency: PropTypes.object,
    dateLimit: PropTypes.string,
    dateStart: PropTypes.string,
    images: PropTypes.array,
    last_bid_value: PropTypes.shape({
      value: PropTypes.number,
    }),
    recipient: PropTypes.shape({
      institution: PropTypes.shape({
        name: PropTypes.string,
        thumbs: PropTypes.shape({
          thumb: PropTypes.string,
        }),
      }),
    }),
    user: PropTypes.shape({
      institution: PropTypes.shape({
        name: PropTypes.string,
        thumbs: PropTypes.shape({
          thumb: PropTypes.string,
        }),
      }),
    }),
    video: PropTypes.string,
    title: PropTypes.string,
    title_en: PropTypes.string,
  }),
  isPrivate: PropTypes.bool,
  env: PropTypes.shape({
    img_cdn: PropTypes.string,
  }),
};

AuctionDetail.defaultProps = {
  isPrivate: false,
};

export default AuctionDetail;
