import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import sortBy from '../../utils/sortBy';
import Icon from '../icon/Icon';

const FeaturesMenu = ({ location, translations, features, project, extraMenuLinks, locale }) => {
  const [user, setUser] = useState({});
  const [companyId, setCompanyId] = useState(null);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user') || '{}'));
    setCompanyId(JSON.parse(localStorage.getItem('config') || '{}').company_id);
  }, []);

  let userWorkEmail = 0;

  if (companyId) {
    userWorkEmail = user.work_email?.find(item => item.company_id === companyId) ? 1 : 0;
  }

  const renderExtraMenu = links => (
    <>
      {links.map((link, index) => {
        return (
          <li key={index} className={link.liClasses}>
            {link.url ? (
              <a
                href={locale ? `/${locale}${link.url}` : link.url}
                title={link.text}
                target={link.target}
              >
                {(
                  typeof window !== 'undefined' && link.iconItem
                    ? localStorage.getItem('fixedBar')
                    : false
                ) ? (
                  <OverlayTrigger
                    key={index}
                    placement="right"
                    overlay={<Tooltip id={index}>{link.text}</Tooltip>}
                  >
                    {link.iconItem && <i className={link.iconItem} />}
                  </OverlayTrigger>
                ) : (
                  <>{link.iconItem && <i className={link.iconItem} />}</>
                )}
                {link.text}
              </a>
            ) : (
              <>
                {link.iconItem && <Icon iconClass={link.iconItem} />}
                <span title={link.text}>{link.text}</span>
              </>
            )}
          </li>
        );
      })}
    </>
  );

  const menuItem = () => {
    const items = [];

    features.map(feature => {
      switch (feature.name) {
        case 'feed':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 1,
                pageRoute: '/',
                showItem: true,
                iconItem: 'icon feed',
                itemText: translations.feed,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 1,
                pageRoute: '/social-feed',
                showItem: true,
                iconItem: 'icon feed',
                itemText: translations.feed,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 1,
                pageRoute: '/feed',
                showItem: true,
                iconItem: 'icon feed',
                itemText: translations.feed,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 1,
                pageRoute: '/',
                showItem: true,
                iconItem: 'icon feed',
                itemText: translations.feed,
                hide: 0,
              });
          }
          break;

        case 'auctions':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 2,
                pageRoute: '/auctions',
                showItem: true,
                iconItem: 'icon auction',
                itemText: translations.auctions,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 2,
                pageRoute: `/search/auctions/?company=${
                  typeof window !== 'undefined' ? JSON.parse(localStorage.company).id : ''
                }`,
                showItem: true,
                iconItem: 'icon auction',
                itemText: translations.auctions,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 2,
                pageRoute: '/auction/list',
                showItem: true,
                iconItem: 'icon auction',
                itemText: translations.auctions,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 2,
                pageRoute: '/',
                showItem: false,
                iconItem: '',
                itemText: translations.auctions,
                hide: 0,
              });
          }
          break;

        case 'manage-employees':
        case 'manage-members':
          switch (project) {
            case 'business-frontend':
              if (items.find(o => o.pageRoute === '/community')) break;
              items.push({
                position: 3,
                pageRoute: '/community',
                showItem: true,
                iconItem: 'icon employees',
                itemText: translations.manageEmployees,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 3,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon employees',
                itemText: translations.manageEmployees,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 3,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon employees',
                itemText: translations.manageEmployees,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 3,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon employees',
                itemText: translations.manageEmployees,
                hide: 0,
              });
          }
          break;

        case 'volunteering':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 4,
                pageRoute: '/charityneeds',
                showItem: true,
                iconItem: 'icon volunteering',
                itemText: translations.charityneeds,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 4,
                pageRoute: '/user/requests',
                showItem: true,
                iconItem: 'icon volunteering',
                itemText: translations.charityneeds,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 4,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon volunteering',
                itemText: translations.charityneeds,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 4,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon volunteering',
                itemText: translations.charityneeds,
                hide: 0,
              });
          }
          break;

        case 'projects':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 5,
                pageRoute: '/projects',
                showItem: true,
                iconItem: 'icon projects',
                itemText: translations.projects,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 5,
                pageRoute: '/',
                showItem: false,
                iconItem: '',
                itemText: '',
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 5,
                pageRoute: '/user/projects',
                showItem: true,
                iconItem: 'icon projects',
                itemText: translations.projects,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 5,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon projects',
                itemText: translations.charityneeds,
                hide: 0,
              });
          }
          break;

        case 'giftcards':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 6,
                pageRoute: '/giftcards',
                showItem: true,
                iconItem: 'icon giftcards',
                itemText: translations.giftCards,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 6,
                pageRoute: '/user/giftcards',
                showItem: true,
                iconItem: 'icon giftcards',
                itemText: translations.giftCards,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 6,
                pageRoute: '/user/giftcards',
                showItem: true,
                iconItem: 'icon giftcards',
                itemText: translations.giftCards,
                hide: userWorkEmail > 0 ? 0 : 1,
              });
              break;

            default:
              items.push({
                position: 6,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon giftcards',
                itemText: translations.giftCards,
                hide: 0,
              });
          }
          break;

        case 'matchdonation':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 7,
                pageRoute: '/match-donations',
                showItem: true,
                iconItem: 'icon match',
                itemText: translations.matchDonations,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 7,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon match',
                itemText: translations.matchDonations,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 7,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon match',
                itemText: translations.matchDonations,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 7,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon match',
                itemText: translations.matchDonations,
                hide: 0,
              });
          }
          break;

        case 'crowdfunding':
        case 'crowdfunding-public':
          switch (project) {
            case 'business-frontend':
              if (items.find(o => o.pageRoute === '/crowdfunding')) break;
              items.push({
                position: 8,
                pageRoute: '/crowdfunding',
                showItem: true,
                iconItem: 'icon crowdfunding-public',
                itemText: translations.crowdfunding,
                hide: 0,
              });
              break;

            case 'esolidar':
              if (items.find(o => o.pageRoute === '/user/campaigns')) break;
              items.push({
                position: 8,
                pageRoute: '/user/campaigns',
                showItem: true,
                iconItem: 'icon crowdfunding',
                itemText: translations.crowdfunding,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              if (items.find(o => o.pageRoute === '/crowdfunding')) break;
              items.push({
                position: 8,
                pageRoute: '/crowdfunding',
                showItem: true,
                iconItem: 'icon crowdfunding-public',
                itemText: translations.crowdfunding,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 8,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon crowdfunding',
                itemText: translations.crowdfunding,
                hide: 0,
              });
          }
          break;

        case 'payments':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 10,
                pageRoute: '/payments',
                showItem: true,
                iconItem: 'icon payments',
                itemText: translations.payments,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 10,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon payments',
                itemText: translations.payments,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 10,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon payments',
                itemText: translations.payments,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 10,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon payments',
                itemText: translations.payments,
                hide: 0,
              });
          }
          break;

        case 'impact-analytics':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 11,
                pageRoute: '/impact-analytics',
                showItem: true,
                iconItem: 'icon ic-statistics',
                itemText: translations.impactAnalytics,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 11,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon ic-statistics',
                itemText: translations.impactAnalytics,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 11,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon ic-statistics',
                itemText: translations.impactAnalytics,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 11,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon ic-statistics',
                itemText: translations.impactAnalytics,
                hide: 0,
              });
          }
          break;

        case 'documents':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 13,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon documents',
                itemText: translations.documents,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 13,
                pageRoute: '/user/documents',
                showItem: true,
                iconItem: 'icon documents',
                itemText: translations.documents,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 13,
                pageRoute: '/user/documents',
                showItem: true,
                iconItem: 'icon documents',
                itemText: translations.documents,
                hide: userWorkEmail > 0 ? 0 : 1,
              });
              break;

            default:
              items.push({
                position: 13,
                pageRoute: '/user/documents',
                showItem: true,
                iconItem: 'icon documents',
                itemText: translations.documents,
                hide: 0,
              });
          }
          break;

        case 'survey':
          switch (project) {
            case 'business-frontend':
              if (items.find(o => o.pageRoute === '/impact-analytics')) {
                items.push({
                  position: 12,
                  pageRoute: '/impact-analytics',
                  showItem: false,
                  iconItem: 'icon survey-icon',
                  itemText: translations.survey,
                  hide: 0,
                });
              } else {
                items.push({
                  position: 11,
                  pageRoute: '/impact-analytics',
                  showItem: true,
                  iconItem: 'icon ic-statistics',
                  itemText: translations.survey,
                  hide: 0,
                });
              }
              break;

            case 'esolidar':
              items.push({
                position: 12,
                pageRoute: '/user/survey',
                showItem: true,
                iconItem: 'icon survey-icon',
                itemText: translations.survey,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 12,
                pageRoute: '/user/survey',
                showItem: true,
                iconItem: 'icon survey-icon',
                itemText: translations.survey,
                hide: userWorkEmail > 0 ? 0 : 1,
              });
              break;

            default:
              items.push({
                position: 12,
                pageRoute: '/user/survey',
                showItem: true,
                iconItem: 'icon survey-icon',
                itemText: translations.survey,
                hide: 0,
              });
          }
          break;

        default:
      }
    });

    return sortBy(items, 'position').map(item => {
      if (item.showItem) {
        if (item.hide !== 1) {
          return (
            <li
              key={item.position}
              className={
                location === item.pageRoute ||
                (item.pageRoute !== '/' && location.includes(item.pageRoute))
                  ? 'active'
                  : ''
              }
            >
              <a href={locale ? `/${locale}${item.pageRoute}` : `${item.pageRoute}`}>
                {item.itemText}
              </a>
            </li>
          );
        }
      }
    });
  };

  return (
    <section className="sidebar">
      <ul className="sidebar-menu">
        {menuItem()}
        {extraMenuLinks && renderExtraMenu(extraMenuLinks)}
      </ul>
    </section>
  );
};

export default FeaturesMenu;

FeaturesMenu.propTypes = {
  translations: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
  project: PropTypes.string.isRequired,
  extraMenuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
      target: PropTypes.string,
      iconItem: PropTypes.string,
      liClasses: PropTypes.string,
    })
  ),
  locale: PropTypes.string,
};
