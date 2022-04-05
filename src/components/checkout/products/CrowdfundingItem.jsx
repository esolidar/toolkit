/* eslint-disable prefer-destructuring */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedNumber, useIntl } from 'react-intl';
import { Row, Col } from 'react-bootstrap';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import CheckboxField from '../../../elements/checkboxField';
import TextareaField from '../../../elements/textareaField';

const CrowdfundingItem = ({
  env,
  item,
  onAddToCheckout,
  indx,
  removeCartItem,
  onChangCheckBox,
  onChangeMessage,
  totalItems,
}) => {
  const intl = useIntl();

  const campaignTitle = () => {
    let title;
    if (localStorage.lang === 'pt' || localStorage.lang === 'br') {
      title = item.campaign.title;
    } else if (!item.campaign.title_en) {
      title = item.campaign.title;
    } else {
      title = item.campaign.title_en;
    }
    return title;
  };

  const campaignImage =
    item.campaign.images.length > 0
      ? item.campaign.images[0].image
      : `${env.cdn_static_url}/frontend/assets/no-image.jpg`;

  return (
    <div className="cart-item box">
      <Row className="cart-item-row">
        <Col sm={8} xs={12} className="cart-item-column">
          <div className="checkbox-inline">
            <div className="form-group">
              <label htmlFor="addCart" className={totalItems === 1 ? 'p-0' : ''}>
                <BrowserView device={isBrowser}>
                  <>
                    {item.campaign.images.length > 0 && (
                      <img
                        className="js-image-thumb-browser"
                        src={
                          campaignImage.startsWith('https')
                            ? campaignImage
                            : `${env.serverlessResizeImage}/${campaignImage}?width=95&height=95`
                        }
                        style={{ height: 95 }}
                        alt={campaignTitle()}
                      />
                    )}
                  </>
                </BrowserView>
                <MobileView device={isMobile}>
                  <>
                    {item.campaign.images.length > 0 && (
                      <img
                        src={
                          campaignImage.startsWith('https')
                            ? campaignImage
                            : `${env.serverlessResizeImage}/${campaignImage}?width=400`
                        }
                        alt={campaignTitle()}
                        style={{ width: 95 }}
                      />
                    )}
                  </>
                </MobileView>
                {item.campaign.images.length === 0 && (
                  <img src={campaignImage} style={{ width: 95 }} alt={campaignTitle()} />
                )}
                <div className="cart-item-column__details">
                  <h3>{campaignTitle()}</h3>
                  <BrowserView device={isBrowser}>
                    <p className="paragraph" title={item.campaign.description}>
                      {item.campaign.description}
                    </p>
                  </BrowserView>
                  {item.campaign.institution && (
                    <div className="checkout-supports">
                      {intl.formatMessage({ id: 'checkout.suports' })}
                      &nbsp;
                      <strong>{item.campaign.institution.name}</strong>
                    </div>
                  )}
                </div>
                <input
                  type="checkbox"
                  name="checked"
                  id="addCart"
                  value={item.checked}
                  onChange={e => onAddToCheckout(e, indx)}
                  checked={item.extra.checked === 1}
                  disabled={totalItems === 1}
                />
                {totalItems > 1 && <div className="checkbox" />}
              </label>
            </div>
          </div>
        </Col>
        <Col sm={2} xs={8} className="price">
          <FormattedNumber style="currency" currency={item.currency.small} value={item.amount} />
        </Col>
        <Col sm={2} xs={4} className="text-center">
          <button type="button" className="btn-remove-item" onClick={() => removeCartItem(item.id)}>
            <FormattedMessage id="checkout.remove.item" />
          </button>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <CheckboxField
            label={intl.formatMessage({ id: 'crowdfunding.donation.checkout.anonymous' })}
            name="hidden"
            value={item.hidden}
            onChange={e => onChangCheckBox(e, indx)}
            checked={+item.extra.hidden === 1}
          />
        </Col>
        <Col xs={12}>
          <TextareaField
            label={intl.formatMessage({ id: 'crowdfunding.message' })}
            onChange={e => onChangeMessage(e, indx)}
            value={item.extra.message}
            field="message"
          />
        </Col>
      </Row>
    </div>
  );
};

CrowdfundingItem.propTypes = {
  env: PropTypes.object.isRequired,
  indx: PropTypes.number,
  item: PropTypes.shape({
    amount: PropTypes.number,
    campaign: PropTypes.shape({
      description: PropTypes.string,
      images: PropTypes.array,
      institution: PropTypes.shape({
        name: PropTypes.string,
      }),
      title: PropTypes.string,
      title_en: PropTypes.string,
    }),
    checked: PropTypes.bool,
    currency: PropTypes.shape({
      small: PropTypes.string,
    }),
    extra: PropTypes.shape({
      checked: PropTypes.number,
      hidden: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      message: PropTypes.string,
    }),
    hidden: PropTypes.string,
    id: PropTypes.number,
  }),
  onAddToCheckout: PropTypes.func,
  onChangCheckBox: PropTypes.func,
  onChangeMessage: PropTypes.func,
  removeCartItem: PropTypes.func,
  totalItems: PropTypes.number,
};

export default CrowdfundingItem;
