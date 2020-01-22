import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import SocialNetworks from '../socialNetworks/SocialNetworks';
import ChangeLanguage from '../changeLanguage/ChangeLanguage';
import ChangeCurrency from '../changeCurrency/ChangeCurrency';

const Footer = ({
  socialTitle,
  copyright,
  socialIcons,
  languages,
  onChangeLang,
  currentLang,
  showCurrency,
  currentCurrency,
  currencies,
  currencyChanged,
  mainMenuFooter,
  secondMenuFooter,
  bottomMenuFooter,
  newsletterID,
  newsletterTitle,
}) => {
  const copyrightText = `©${new Date().getFullYear()} ${copyright}`;

  const submenu = (items) => (
    items.map((item, index) => (
      <li key={index}>
        <a
          href={item.url}
          title={item.text}
          target={item.target}
        >
          {item.text}
        </a>
      </li>
    ))
  );

  const menu = (items) => (
    items.map((item, index) => (
      <li key={index}>
        {item.url ? (
          <a
            href={item.url}
            title={item.text}
            target={item.target}
          >
            {item.text}
          </a>
        ) : (
          <span title={item.text}>
            {item.text}
          </span>
        )}
        <a
          href={item.url}
          title={item.text}
          target={item.target}
        >
          {item.text}
        </a>
        {item.submenu && (
          <ul>
            {submenu(item.submenu)}
          </ul>
        )}
      </li>
    ))
  );


  return (
    <footer className="landing-footer">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={6} lg={2}>
            <ul>
              {mainMenuFooter && menu(mainMenuFooter)}
            </ul>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3}>
            <ul>
              {secondMenuFooter && menu(secondMenuFooter)}
            </ul>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}>
            <div id="newsletterID">
              <h5>{newsletterTitle}</h5>
              <div id={newsletterID} />
            </div>
          </Col>
          {
            socialIcons && (
              <Col xs={12} sm={12} md={6} lg={4} className="text-right">
                <SocialNetworks
                  icons={socialIcons}
                  headingText={socialTitle}
                />
              </Col>
            )
          }

        </Row>
        <Row className="bottom-footer">
          <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 4, order: 0 }}>
            <span>
              {copyrightText}
            </span>
          </Col>
          <Col xs={{ span: 12, order: 0 }} sm={{ span: 6, order: 0 }} md={{ span: 5, order: 1 }}>
            <ul>
              {bottomMenuFooter && menu(bottomMenuFooter)}
            </ul>
          </Col>
          <Col xs={{ span: 12, order: 1 }} sm={{ span: 6, order: 1 }} md={{ span: 3, order: 3 }} className="text-right">
            <ChangeLanguage
              languages={languages}
              onChangeLang={onChangeLang}
              currentLang={currentLang}
            />
            {
              showCurrency && (
                <ChangeCurrency
                  currentCurrency={currentCurrency}
                  currencies={currencies}
                  onChange={currencyChanged}
                />
              )
            }

          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  socialTitle: PropTypes.string,
  copyright: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      translate: PropTypes.string,
    }),
  ).isRequired,
  onChangeLang: PropTypes.func.isRequired,
  currentLang: PropTypes.string.isRequired,
  showCurrency: PropTypes.bool.isRequired,
  socialIcons: PropTypes.arrayOf(
    PropTypes.shape({
      class: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  currentCurrency: PropTypes.object,
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      small: PropTypes.string,
      symbol: PropTypes.string,
    }),
  ),
  currencyChanged: PropTypes.func,
  mainMenuFooter: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
      target: PropTypes.string,
    }),
  ),
  secondMenuFooter: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
      target: PropTypes.string,
    }),
  ),
  bottomMenuFooter: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
      target: PropTypes.string,
    }),
  ),
  newsletterID: PropTypes.string,
  newsletterTitle: PropTypes.string,
};


export default Footer;
