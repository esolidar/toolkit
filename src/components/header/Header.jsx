import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FormattedMessage, useIntl } from 'react-intl';
import Button from '../../elements/button';

const Header = ({
  isUserLogged,
  esolidarMainUrl,
  esolidarUrl,
  dashboardUrl,
  institutionUrl,
  lang,
  communityLinks,
  dashboardLinks,
  cdnStaticUrl,
}) => {
  const intl = useIntl();
  const [openIcon, setopenIcon] = useState(false);
  const [openDropOne, setopenDropOne] = useState(false);
  const [openDropTwo, setopenDropTwo] = useState(false);

  const isCommunityActive = communityLinks.map(item => {
    if (window.location.href.includes(String(item))) return 'active';
  });

  const isDashboardActive = dashboardLinks.map(item => {
    if (window.location.href.includes(String(item))) return 'active';
  });

  const linkLogoUrl = () => {
    if (isUserLogged) {
      if (institutionUrl) {
        return institutionUrl;
      }
      if (dashboardUrl) {
        return dashboardUrl;
      }
      return esolidarUrl;
    }
    if (lang === 'en') {
      return esolidarMainUrl;
    }
    return `${esolidarMainUrl}?locale=pt`;
  };

  const onClick = url => {
    window.location.href = url;
    window.location.reload();
  };

  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" label="Menu">
        <div className="open-nav">
          <div
            id="nav-icon3"
            onClick={() => setopenIcon(!openIcon)}
            onKeyDown={() => setopenIcon(!openIcon)}
            className={openIcon ? 'open' : ''}
          >
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </Navbar.Toggle>
      <Navbar.Brand href={linkLogoUrl()} className="logo-box pt-0 pb-0 mr-0">
        <img
          className="d-none d-lg-block"
          alt="eSolidar"
          src={`${cdnStaticUrl}/frontend/logo/esolidar/logo.svg`}
        />
        <img
          className="d-block d-lg-none smallLogo"
          alt="eSolidar"
          src={`${cdnStaticUrl}/frontend/logo/esolidar/logo-xsmall.svg`}
        />
      </Navbar.Brand>
      {isUserLogged ? (
        <Navbar.Collapse id="basic-navbar-nav" className="collapseAnimation ml-auto menu-items">
          <Nav className="ml-auto menu-items">
            {institutionUrl && (
              <Nav.Link
                href={institutionUrl}
                className={window.location.href.includes('npo/detail') ? 'active' : ''}
              >
                <FormattedMessage id="header.menu.home" />
              </Nav.Link>
            )}
            {dashboardUrl && (
              <Nav.Link href={dashboardUrl} className={isDashboardActive}>
                <FormattedMessage id="header.menu.dashboard" />
              </Nav.Link>
            )}
            <Nav.Link
              href={`${esolidarUrl}${lang}`}
              className={
                window.location.href === `${esolidarUrl}${lang}` ? 'active' : isCommunityActive
              }
            >
              <FormattedMessage id="header.menu.community" />
            </Nav.Link>
            <Nav.Link
              href={intl.formatMessage({ id: 'header.menu.help.url' })}
              active={false}
              target="_blank"
            >
              <FormattedMessage id="header.menu.helpCenter" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      ) : (
        <>
          <Nav className="signin d-block d-lg-none">
            <Button
              extraClass="dark"
              href={`${esolidarUrl}user/login`}
              text={intl.formatMessage({ id: 'header.menu.login' })}
            />
          </Nav>
          <Navbar.Collapse id="basic-navbar-nav" className="collapseAnimation ml-auto menu-items">
            <Nav className="ml-auto menu-items d-none d-menu-items-mobile">
              <Nav.Link
                onClick={() => onClick(`${esolidarUrl}${lang}/how-it-works#companies`)}
                href={`${esolidarUrl}${lang}/how-it-works#companies`}
                className={window.location.hash === '#companies' ? 'active' : ''}
              >
                <FormattedMessage id="header.menu.companies" />
              </Nav.Link>
              <Nav.Link
                onClick={() => onClick(`${esolidarUrl}${lang}/how-it-works#nonprofits`)}
                href={`${esolidarUrl}${lang}/how-it-works#nonprofits`}
                className={window.location.hash === '#nonprofits' ? 'active' : ''}
              >
                <FormattedMessage id="header.menu.organizations" />
              </Nav.Link>
              <Nav.Link
                onClick={() => onClick(`${esolidarUrl}${lang}/how-it-works#individuals`)}
                href={`${esolidarUrl}${lang}/how-it-works#individuals`}
                className={window.location.hash === '#individuals' ? 'active' : ''}
              >
                <FormattedMessage id="header.menu.individuals" />
              </Nav.Link>
              <Nav.Link
                href={`${esolidarUrl}${lang}`}
                className={
                  window.location.href === `${esolidarUrl}${lang}` ? 'active' : isCommunityActive
                }
              >
                <FormattedMessage id="header.menu.community" />
              </Nav.Link>
              <Nav.Link
                href={intl.formatMessage({ id: 'header.menu.blog.url' })}
                active={false}
                target="_blank"
              >
                <FormattedMessage id="header.menu.blog" />
              </Nav.Link>
              <Nav.Link
                href={`${intl.formatMessage({ id: 'header.menu.blog.url' })}materiais-ricos/`}
                active={false}
                target="_blank"
              >
                <FormattedMessage id="header.menu.resources" />
              </Nav.Link>
              <Nav.Link
                href={intl.formatMessage({ id: 'header.menu.help.url' })}
                active={false}
                target="_blank"
              >
                <FormattedMessage id="header.menu.helpCenter" />
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto menu-items d-none d-lg-flex">
              <NavDropdown
                onMouseEnter={() => setopenDropOne(!openDropOne)}
                onMouseLeave={() => setopenDropOne(!openDropOne)}
                show={openDropOne}
                title={intl.formatMessage({ id: 'header.menu.whyEsolidar' })}
                className={window.location.href.includes('how-it-works') ? 'active' : ''}
              >
                <NavDropdown.Item
                  onClick={() => onClick(`${esolidarUrl}${lang}/how-it-works#companies`)}
                  href={`${esolidarUrl}${lang}/how-it-works#companies`}
                  className={window.location.hash === '#companies' ? 'active' : ''}
                >
                  <FormattedMessage id="header.menu.companies" />
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => onClick(`${esolidarUrl}${lang}/how-it-works#nonprofits`)}
                  href={`${esolidarUrl}${lang}/how-it-works#nonprofits`}
                  className={window.location.hash === '#nonprofits' ? 'active' : ''}
                >
                  <FormattedMessage id="header.menu.organizations" />
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => onClick(`${esolidarUrl}${lang}/how-it-works#individuals`)}
                  href={`${esolidarUrl}${lang}/how-it-works#individuals`}
                  className={window.location.hash === '#individuals' ? 'active' : ''}
                >
                  <FormattedMessage id="header.menu.individuals" />
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href={`${esolidarUrl}${lang}`}
                className={
                  window.location.href === `${esolidarUrl}${lang}` ? 'active' : isCommunityActive
                }
              >
                <FormattedMessage id="header.menu.community" />
              </Nav.Link>
              <NavDropdown
                onMouseEnter={() => setopenDropTwo(!openDropTwo)}
                onMouseLeave={() => setopenDropTwo(!openDropTwo)}
                show={openDropTwo}
                title={intl.formatMessage({ id: 'header.menu.learn' })}
              >
                <NavDropdown.Item
                  href={intl.formatMessage({ id: 'header.menu.blog.url' })}
                  active={false}
                  target="_blank"
                >
                  <FormattedMessage id="header.menu.blog" />
                </NavDropdown.Item>
                <NavDropdown.Item
                  href={`${intl.formatMessage({ id: 'header.menu.blog.url' })}/materiais-ricos/`}
                  active={false}
                  target="_blank"
                >
                  <FormattedMessage id="header.menu.resources" />
                </NavDropdown.Item>
                <NavDropdown.Item
                  href={intl.formatMessage({ id: 'header.menu.help.url' })}
                  active={false}
                  target="_blank"
                >
                  <FormattedMessage id="header.menu.helpCenter" />
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </>
      )}
    </>
  );
};
export default Header;

Header.propTypes = {
  isUserLogged: PropTypes.bool,
  esolidarMainUrl: PropTypes.string,
  esolidarUrl: PropTypes.string,
  dashboardUrl: PropTypes.string,
  institutionUrl: PropTypes.string,
  lang: PropTypes.string,
  communityLinks: PropTypes.array.isRequired,
  dashboardLinks: PropTypes.array.isRequired,
  cdnStaticUrl: PropTypes.string,
};
