import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import SocialNetworks from '../socialNetworks/SocialNetworks';
import translateMessage from '../../utils/translateMessage/translateMessage';
import ChangeLanguage from '../changeLanguage/ChangeLanguage';
import ChangeCurrency from '../changeCurrency/ChangeCurrency';
import './Footer.scss';

const Footer = ({
  socialIcons, languages, onChangeLang, currentLang, showCurrency, currentCurrency, currencies, currencyChanged, mainMenuFooter, secondMenuFooter, bottomMenuFooter,
}) => {
  const copyright = `©${new Date().getFullYear()} ${
    translateMessage({
      id: 'footer.copyright',
      defaultMessage: 'eSolidar. All rights reserved.',
      currentLang,
    })
  }`;

  const submenu = (items) => (
    items.map((item, index) => (
      <li key={index}>
        <a
          href={item.url}
          title={
            translateMessage({
              id: item.link.id,
              defaultMessage: item.link.default,
              currentLang,
            })
          }
          target={item.target}
        >
          {translateMessage({
            id: item.link.id,
            defaultMessage: item.link.default,
            currentLang,
          })}

        </a>
      </li>
    ))
  );

  const menu = (items) => (
    items.map((item, index) => (
      <li key={index}>
        <a
          href={item.url}
          title={
            translateMessage({
              id: item.link.id,
              defaultMessage: item.link.default,
              currentLang,
            })
          }
          target={item.target}
        >
          {translateMessage({
            id: item.link.id,
            defaultMessage: item.link.default,
            currentLang,
          })}
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
          <Col sm={2}>
            <ul>
              {mainMenuFooter && menu(mainMenuFooter)}
            </ul>
          </Col>
          <Col sm={3}>
            <ul>
              {secondMenuFooter && menu(secondMenuFooter)}
            </ul>
          </Col>
          <Col sm={3}>
            NEWSLETTER
          </Col>
          {
            socialIcons && (
              <Col sm={4}>
                <SocialNetworks
                  icons={socialIcons}
                  headingText={{
                    idTranslate: 'footer.menu.join.us',
                    default: 'Follow us',
                    currentLang,
                  }}
                />
              </Col>
            )
          }

        </Row>
        <Row className="bottom-footer">
          <Col sm={4}>
            <span>
              {copyright}
            </span>
          </Col>
          <Col sm={5}>
            <ul>
              {bottomMenuFooter && menu(bottomMenuFooter)}
            </ul>
          </Col>
          <Col sm={3} className="text-right">
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
  languages: PropTypes.array.isRequired,
  onChangeLang: PropTypes.func.isRequired,
  currentLang: PropTypes.string.isRequired,
  showCurrency: PropTypes.bool.isRequired,
  socialIcons: PropTypes.array,
  currentCurrency: PropTypes.object,
  currencies: PropTypes.array,
  currencyChanged: PropTypes.func,
  mainMenuFooter: PropTypes.array,
  secondMenuFooter: PropTypes.array,
  bottomMenuFooter: PropTypes.array,
};


export default Footer;
