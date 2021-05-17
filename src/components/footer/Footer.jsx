/* global hbspt */

import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import SocialNetworks from '../socialNetworks';
import ChangeLanguage from '../changeLanguage';
import ChangeCurrency from '../changeCurrency';
import ErrorBoundary from '../errorBoundary/index';
import { hubSpot } from '../../constants/env';

// TODO: alterar props social
// TODO: remover prop address

const createNewsletterForm = currentLang => {
  const hbsObject = {
    target: '#footerHSForm',
    portalId: hubSpot.portalId,
    region: 'na1',
  };

  switch (currentLang) {
    case 'pt':
      hbsObject.formId = hubSpot.formIdPt;
      break;

    case 'br':
      hbsObject.formId = hubSpot.formIdBr;
      break;

    case 'en':
      hbsObject.formId = hubSpot.formIdEn;
      break;

    default:
      hbsObject.formId = hubSpot.formIdEn;
  }

  if (typeof hbspt === 'object') {
    if (typeof hbspt.forms === 'object') {
      if (typeof hbspt.forms.create === 'function') {
        hbspt.forms.create(hbsObject);
      }
    }
  }
};

const Footer = ({
  copyright,
  social,
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
  newsletterTitle,
}) => {
  const copyrightText = `©${new Date().getFullYear()} ${copyright}`;

  useEffect(() => {
    createNewsletterForm(currentLang);
  }, []);

  const renderMenu = menu => (
    <>
      {menu.title && <h5 className="title">{menu.title}</h5>}
      <ul>
        {menu.links.map((link, index) => {
          if (!link.lang.includes(currentLang)) return;

          return (
            <li key={index}>
              {link.url ? (
                <a href={link.url} title={link.text} target={link.target}>
                  {link.text}
                </a>
              ) : (
                <span title={link.text}>{link.text}</span>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );

  return (
    <footer className="landing-footer">
      <Container>
        <div className="top-footer">
          <div>{mainMenuFooter && renderMenu(mainMenuFooter)}</div>
          <div>{secondMenuFooter && renderMenu(secondMenuFooter)}</div>
          <div>
            <h5 className="title">{newsletterTitle}</h5>
            <div id="footerHSForm" />
          </div>
          {social && (
            <ErrorBoundary>
              <SocialNetworks icons={social.icons} headingText={social.title} />
            </ErrorBoundary>
          )}
        </div>
        <div className="bottom-footer">
          <div className="copyright">{copyrightText}</div>
          <>{bottomMenuFooter && renderMenu(bottomMenuFooter)}</>
          <div className="right">
            <ErrorBoundary>
              <ChangeLanguage
                languages={languages}
                onChangeLang={onChangeLang}
                currentLang={currentLang}
              />
            </ErrorBoundary>
            {showCurrency && (
              <ErrorBoundary>
                <ChangeCurrency
                  currentCurrency={currentCurrency}
                  currencies={currencies}
                  onChange={currencyChanged}
                />
              </ErrorBoundary>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      translate: PropTypes.string,
    })
  ).isRequired,
  onChangeLang: PropTypes.func.isRequired,
  currentLang: PropTypes.string.isRequired,
  showCurrency: PropTypes.bool.isRequired,
  social: PropTypes.shape({
    title: PropTypes.string,
    icons: PropTypes.arrayOf(
      PropTypes.shape({
        class: PropTypes.string,
        url: PropTypes.string,
      })
    ),
  }),
  currentCurrency: PropTypes.object,
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      small: PropTypes.string,
      symbol: PropTypes.string,
    })
  ),
  currencyChanged: PropTypes.func,
  mainMenuFooter: PropTypes.shape({
    title: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        url: PropTypes.string,
        target: PropTypes.string,
        lang: PropTypes.array,
      })
    ),
  }),
  secondMenuFooter: PropTypes.shape({
    title: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        url: PropTypes.string,
        target: PropTypes.string,
      })
    ),
  }),
  bottomMenuFooter: PropTypes.shape({
    links: PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
      target: PropTypes.string,
    }),
  }),
  newsletterTitle: PropTypes.string,
};

export default Footer;
